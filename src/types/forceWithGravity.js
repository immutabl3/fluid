import main from '../main';

const defaults = {
	bounciness: 400,
	elasticity: 200,
};

export default Object.assign(function forceWithGravity(config = {}) {
	return main.gravity({
		...defaults,
		...config,
		returnsToSelf: true,
	});
}, {
	defaults,
	type: 'forceWithGravity',
});