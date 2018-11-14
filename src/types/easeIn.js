import main from '../main';

const defaults = {
	friction: 500,
};

export default Object.assign(function easeIn({
	friction = defaults.friction
} = {}) {
	return main.bezier({
		points: [
			{
				x: 0,
				y: 0,
				cp: [
					{
						x: 0.92 - (friction / 1000),
						y: 0,
					}
				],
			},
			{
				x: 1,
				y: 1,
				cp: [
					{
						x: 1,
						y: 1,
					}
				],
			}
		]
	});
}, {
	defaults,
	type: 'easeIn',
});