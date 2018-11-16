// the main export of fluid, here for a reference by 
// other internal types and functions
import Animation from './Animation';

export default function fluid(from, to, config) {
	return Animation(from, to, config);
};