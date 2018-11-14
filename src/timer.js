// holds the time we've ticked starting at zero
// and incrementing by ~16 every tick (60fps)

let theTime = 0;

export default {
	get time() {
		return theTime;
	},
	
	set time(value) {
		theTime = value;
		return theTime;
	},
};