import findIndex from 'lodash/findIndex';
import roundFloat from '../utils/roundFloat';

const ratio = global.devicePixelRatio || 1;
const step = 0.001;

const locationFromEvent = e => {
	const {
		layerX,
		layerY,
	} = e.nativeEvent ? e.nativeEvent : e;
	return {
		x: layerX,
		y: layerY,
	};
};

const isSamePoint = (left, right) => {
	return left.x === right.x && left.y === right.y;
};

export default class UIGraph {
	constructor(canvas) {
		// this.points = undefined;
		// this.curve = undefined;
		this.canvas = canvas;
		this.ctx = canvas.getContext('2d');
		this.editable = false;
		
		canvas.style.width = `${canvas.width}px`;
		canvas.style.height = `${canvas.height}px`;
		canvas.width = canvas.width * ratio;
		canvas.height = canvas.height * ratio;
		
		this.canvas.addEventListener('mousedown', this.canvasMouseDown);
		this.canvas.addEventListener('mousemove', this.canvasMouseMove);
		this.canvas.addEventListener('mouseup', this.canvasMouseUp);
		this.canvas.addEventListener('keyup', this.canvasKeyUp);
		this.canvas.addEventListener('keydown', e => e.preventDefault());
	}

	draw() {
		if (!this.curve) return;
		const w = this.canvas.width;
		const h = this.canvas.height;
		
		this.ctx.clearRect(0, 0, w, h);
		this.ctx.strokeStyle = '#D5E6F8';
		this.ctx.lineWidth = 1;
		this.ctx.beginPath();
		this.ctx.moveTo(0, 0.67 * h);
		this.ctx.lineTo(w, 0.67 * h);
		this.ctx.stroke();
		this.ctx.beginPath();
		this.ctx.moveTo(0, 0.34 * h);
		this.ctx.lineTo(w, 0.34 * h);
		this.ctx.stroke();
		this.ctx.beginPath();
		this.ctx.strokeStyle = '#0070FF';
		this.ctx.lineWidth = 2 * ratio;

		let tick = 0;
		while (tick <= 1) {
			const vect = this.curve(tick);
			const y = h - ((0.33 + (vect * 0.33)) * h);
			if (tick === 0) {
				this.ctx.moveTo(tick * w, y);
			} else {
				this.ctx.lineTo(tick * w, y);
			}
			tick += step;
		}
		this.ctx.stroke();
		
		if (!this.points) return;
		
		for (let idx = 0; idx < this.points.length; idx++) {
			const point = this.points[idx];

			for (let subIdx = 0; subIdx < point.cp.length; subIdx++) {
				const controlPoint = point.cp[subIdx];

				this.ctx.beginPath();
				this.ctx.strokeStyle = 'blue';
				this.ctx.lineWidth = 1;
				const coords = this.pointCoordinates(point);
				this.ctx.moveTo(coords.x, coords.y);
				const coordsControlPoint = this.pointCoordinates(controlPoint);
				this.ctx.lineTo(coordsControlPoint.x, coordsControlPoint.y);
				this.ctx.stroke();
			}

			this.ctx.beginPath();
			this.ctx.strokeStyle = this.selectedPoint === point ? 'black' : 'blue';
			this.ctx.fillStyle = 'white';
			this.ctx.lineWidth = 2 * ratio;
			const coords = this.pointCoordinates(point);
			this.ctx.arc(coords.x, coords.y, 5 * ratio, 0, Math.PI * 2, true);
			this.ctx.fill();
			this.ctx.stroke();

			for (let subIdx = 0; subIdx < point.cp.length; subIdx++) {
				const controlPoint = point.cp[subIdx];

				this.ctx.beginPath();
				this.ctx.strokeStyle = this.selectedPoint === controlPoint ? 'black' : 'blue';
				this.ctx.fillStyle = 'white';
				this.ctx.lineWidth = 1 * ratio;
				const coords = this.pointCoordinates(controlPoint);
				this.ctx.arc(coords.x, coords.y, 3 * ratio, 0, Math.PI * 2, true);
				this.ctx.fill();
				this.ctx.stroke();
			}
		}
	}

	isLocationAroundCenter(location, center, size) {
		const centerX = center.x / ratio;
		const centerY = center.y / ratio;
		return location.x >= centerX - size / 2 && 
			location.x <= centerX + size / 2 && 
			location.y >= centerY - size / 2 && 
			location.y <= centerY + size / 2;
	}

	pointFromLocation(location) {
		if (!this.points || this.points.length < 2) return;
		
		for (let idx = 0; idx < this.points.length; idx++) {
			const point = this.points[idx];
			if (!isSamePoint(point, this.points[0])) {
				if (this.isLocationAroundCenter(location, this.pointCoordinates(point), 14)) {
					return point;
				}
			}

			for (let idx = 0; idx < point.cp.length; idx++) {
				const controlPoint = point.cp[idx];
				if (this.isLocationAroundCenter(location, this.pointCoordinates(controlPoint), 10)) {
					return controlPoint;
				}
			}
		}
	}

	canvasMouseDown = e => {
		if (!this.editable) return;
		const location = locationFromEvent(e);
		this.selectedPoint = this.pointFromLocation(location);
		if (!this.selectedPoint) {
			const converted = this.convertFromCoordinates(location);
			this.selectedPoint = {
				x: converted.x,
				y: converted.y,
				cp: [
					{
						x: converted.x - 0.1,
						y: converted.y
					}, {
						x: converted.x + 0.1,
						y: converted.y
					}
				]
			};
			this.insertPoint(this.selectedPoint);
		}
		
		this.pointsChanged();
		this.draw();
		this.dragging = true;
	}

	canvasMouseMove = e => {
		if (!this.editable) return;
		if (!this.selectedPoint) return;
		if (!this.dragging) return;

		const location = locationFromEvent(e);
		const point = this.convertFromCoordinates(location);
		if (isSamePoint(this.selectedPoint, this.points[this.points.length - 1])) {
			point.x = 1;
			point.y = Math.min(1, Math.max(0, Math.round(point.y)));
		}
		
		if (this.selectedPoint.cp) {
			this.selectedPoint.cp.forEach(controlPoint => {
				controlPoint.x = roundFloat(controlPoint.x + point.x - this.selectedPoint.x, 3);
				controlPoint.y = roundFloat(controlPoint.y + point.y - this.selectedPoint.y, 3);
			});
		}
		
		this.selectedPoint.x = point.x;
		this.selectedPoint.y = point.y;
		this.pointsChanged();
		this.draw();
	}

	canvasMouseUp = () => {
		if (!this.editable) return;
		this.dragging = false;
		this.pointsChanged();
	}

	canvasKeyUp = e => {
		if (!this.editable) return;
		if (!this.selectedPoint) return;
		if (e.key !== 'Backspace') return;
		if (!this.selectedPoint.cp) return;
		if (isSamePoint(this.selectedPoint, this.points[0]) || isSamePoint(this.selectedPoint, this.points[this.points.length - 1])) return;
		
		e.preventDefault();
		e.stopPropagation();
		this.points.splice(this.points.indexOf(this.selectedPoint), 1);
		this.selectedPoint = null;
		this.pointsChanged();
	}

	pointCoordinates({ x, y }) {
		const w = this.canvas.width;
		const h = this.canvas.height;
		return {
			x: x * w,
			y: (0.67 * h) - (y * 0.33 * h),
		};
	}

	convertFromCoordinates(location) {
		const w = this.canvas.width;
		const h = this.canvas.height;
		return {
			x: roundFloat(location.x / w * ratio, 3),
			y: roundFloat(((0.67 * h) - (location.y * ratio)) / (0.33 * h), 3),
		};
	}

	insertPoint(toInsertPoint) {
		if (!this.points) return;
		const index = findIndex(this.points, ({ x }) => x >= toInsertPoint.x);
		return this.points.splice(index, 0, toInsertPoint);
	}
};