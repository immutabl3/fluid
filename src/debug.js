let theSlow = 1;

export default {
	toggle() {
		theSlow = theSlow === 1 ? 3 : 1;
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