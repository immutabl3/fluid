import signal from 'signal-js';
import bezierDefaults from './bezierDefaults';
import createSettings from './createSettings';
import generateValues from './generateValues';
import clone from '../utils/clone';
import fluid from '../../src';

const DELAY = 100;

export default function actions(store) {
	let timeout;
	let circles;
	let graph;

	const refreshGraph = () => {
		const name = store.get('name');
		const values = generateValues(store.get('settings'));
		const editable = store.get('editable');
		const points = clone(store.get(['settings', 'points', 'value']));
		graph.refresh({
			name,
			values,
			points,
			editable,
		});
	};

	const cycle = () => {
		if (!circles) return;
		circles.start();
	};

	const restart = () => {
		clearTimeout(timeout);
		timeout = setTimeout(cycle, DELAY);
	};

	const setting = ({ name, value }) => {
		store.set(['settings', name, 'value'], value);
		store.set('values', generateValues(store.get(['settings'])));
		restart();
		refreshGraph();
	};

	const sortPoints = (left, right) => left.x < right.x ? -1 : 1;
	const points = array => {
		const points = array ? clone(array.slice().sort(sortPoints)) : undefined;
		store.set(['settings', 'points', 'value'], points);
		const values = generateValues(store.get('settings')); 
		store.set('values', values);
		const name = store.get('name');
		graph.update({
			name,
			values,
		});
	};

	const refresh = name => {
		if (!name || name === store.get('name')) return;

		const curve = fluid[name];
		const isBezier = name === 'bezier';
		const points = isBezier ? bezierDefaults() : undefined;
		const settings = createSettings(curve, points);
		const values = generateValues(settings);
		
		store.merge({
			name,
			values,
			settings,
			editable: isBezier,
		});
		
		restart();
		refreshGraph();
	};

	signal.on('circles', instance => {
		circles = instance;
		cycle();
	});
	signal.on('graph', instance => {
		graph = instance;
		refreshGraph();
	});
	signal.on('stress', () => {
		store.set('stress', !store.get('stress'));
	});
	signal.on('select', e => refresh(e.target.value));
	signal.on('refresh', refresh);
	signal.on('points', points);
	signal.on('setting', setting);
	signal.on('restart', restart);

	store.select('name').on('update', ({ data }) => {
		sessionStorage.setItem('name', data.currentData);
	});
};