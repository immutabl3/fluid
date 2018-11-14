import createSettings from './actions/createSettings';
import generateValues from './actions/generateValues';
import bezierDefaults from './actions/bezierDefaults';
import Baobab from 'baobab';
import fluid from '../src';

const name = sessionStorage.getItem('name') || 'spring';
const isBezier = name === 'bezier';
const editable = isBezier;
const points = isBezier ? bezierDefaults() : undefined;
const settings = createSettings(fluid[name], points);
const values = generateValues(settings);

export default new Baobab({
	name,
	editable,
	settings,
	values,
	stress: false,
});