import fluid from '../src';

document.addEventListener('keydown', e => {
	if (e.key !== '*') return;
	fluid.debug();
});