import componentToHex from './componentToHex';

export default class Color {
	constructor(rgb = {}, format) {
		this.rgb = rgb;
		this.format = format;
	}

	toHex() {
		return `#${componentToHex(this.rgb.r)}${componentToHex(this.rgb.g)}${componentToHex(this.rgb.b)}`;
	}

	toRgb() {
		return `rgb(${this.rgb.r}, ${this.rgb.g}, ${this.rgb.b})`;
	}

	toRgba() {
		return `rgba(${this.rgb.r}, ${this.rgb.g}, ${this.rgb.b}, ${this.rgb.a})`;
	}
};