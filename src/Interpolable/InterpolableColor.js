import Color from '../Color';
import roundFloat from '../utils/roundFloat';

export default class InterpolableColor {
	constructor(color1) {
		this.color = color1;
		this.format = this.format.bind(this);
		this.interpolate = this.interpolate.bind(this);
	}

	static create = function(value) {
		if (!typeof value === 'string') return;
		
		const color = Color.fromHex(value) || Color.fromRgb(value);
		if (color) return new InterpolableColor(color);
	}

	interpolate(endInterpolable, tick) {
		const start = this.color;
		const end = endInterpolable.color;
		const alpha = roundFloat((end.rgb.a - start.rgb.a) * tick + start.rgb.a, 5);
		const rgb = ['r', 'g', 'b'].reduce((rgb, key) => {
			const value = Math.round((end.rgb[key] - start.rgb[key]) * tick + start.rgb[key]);
			rgb[key] = Math.min(255, Math.max(0, value));
			return rgb;
		}, {
			a: Math.min(1, Math.max(0, alpha)),
		});

		return new InterpolableColor(new Color(rgb, end.format));
	};

	format() {
		if (this.color.format === 'hex') return this.color.toHex();
		if (this.color.format === 'rgb') return this.color.toRgb();
		if (this.color.format === 'rgba') return this.color.toRgba();
	}
};