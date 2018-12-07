let theSlow = 1;
let scale = 3;

export default {
	get active() {
		return theSlow === scale;
	},

	get scale() {
		return scale;
	},

	set scale(num) {
		scale = num;
		return this;
	},

	toggle() {
		theSlow = theSlow === 1 ? scale : 1;
		return this;
	},

	get slow() {
		return theSlow;
	},
	
	set slow(value) {
		theSlow = value;
		return theSlow;
	},
};