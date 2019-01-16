// Adapted from:
// https://github.com/gre/bezier-easing
// to allow for easy translations of 
// css cubic-bezier definitions to fluid

import linear from './linear';

const defaults = {
	ease: [0.25, 0.1, 0.25, 1],
};

// These values are established by empiricism with tests (tradeoff: performance VS precision)
const NEWTON_ITERATIONS = 4;
const NEWTON_MIN_SLOPE = 0.001;
const SUBDIVISION_PRECISION = 0.0000001;
const SUBDIVISION_MAX_ITERATIONS = 10;

const kSplineTableSize = 11;
const kSampleStepSize = 1 / (kSplineTableSize - 1);

// eslint-disable-next-line id-length
const A = (aA1, aA2) => 1 - 3 * aA2 + 3 * aA1;
// eslint-disable-next-line id-length
const B = (aA1, aA2) => 3 * aA2 - 6 * aA1;
// eslint-disable-next-line id-length
const C = aA1 => 3 * aA1;

// Returns x(t) given t, x1, and x2, or y(t) given t, y1, and y2.
const calcBezier = (aT, aA1, aA2) => {
	return ((A(aA1, aA2) * aT + B(aA1, aA2)) * aT + C(aA1)) * aT;
};

// Returns dx/dt given t, x1, and x2, or dy/dt given t, y1, and y2.
const getSlope = (aT, aA1, aA2) => {
	return 3 * A(aA1, aA2) * aT * aT + 2 * B(aA1, aA2) * aT + C(aA1);
};

const binarySubdivide = (aX, aA, aB, mX1, mX2) => {
	let currentX;
	let currentT;
	let idx = 0;
	// eslint-disable-next-line no-restricted-syntax
	do {
		currentT = aA + (aB - aA) / 2;
		currentX = calcBezier(currentT, mX1, mX2) - aX;
		if (currentX > 0) {
			// eslint-disable-next-line no-param-reassign
			aB = currentT;
		} else {
			// eslint-disable-next-line no-param-reassign
			aA = currentT;
		}
	} while (Math.abs(currentX) > SUBDIVISION_PRECISION && ++idx < SUBDIVISION_MAX_ITERATIONS);
	return currentT;
};

const newtonRaphsonIterate = (aX, aGuessT, mX1, mX2) => {
	for (let idx = 0; idx < NEWTON_ITERATIONS; ++idx) {
		const currentSlope = getSlope(aGuessT, mX1, mX2);
		if (currentSlope === 0) return aGuessT;
		const currentX = calcBezier(aGuessT, mX1, mX2) - aX;
		// eslint-disable-next-line no-param-reassign
		aGuessT -= currentX / currentSlope;
	}
	return aGuessT;
};

export default Object.assign(function cubicBezier(options = {}) {
	const { ease = defaults.ease } = options;
	const [mX1, mY1, mX2, mY2] = ease;
	if (!(0 <= mX1 && mX1 <= 1 && 0 <= mX2 && mX2 <= 1)) throw new Error('bezier x values must be in [0, 1] range');
	if (mX1 === mY1 && mX2 === mY2) return linear();

	// Precompute samples table
	const sampleValues = new Float32Array(kSplineTableSize);
	for (let idx = 0; idx < kSplineTableSize; ++idx) {
		sampleValues[idx] = calcBezier(idx * kSampleStepSize, mX1, mX2);
	}

	const getTForX = aX => {
		const lastSample = kSplineTableSize - 1;
		let intervalStart = 0;
		let currentSample = 1;

		for (; currentSample !== lastSample && sampleValues[currentSample] <= aX; ++currentSample) {
			intervalStart += kSampleStepSize;
		}
		--currentSample;

		// Interpolate to provide an initial guess for t
		const dist = (aX - sampleValues[currentSample]) / (sampleValues[currentSample + 1] - sampleValues[currentSample]);
		const guessForT = intervalStart + dist * kSampleStepSize;

		const initialSlope = getSlope(guessForT, mX1, mX2);
		if (initialSlope >= NEWTON_MIN_SLOPE) return newtonRaphsonIterate(aX, guessForT, mX1, mX2);
		if (initialSlope === 0) return guessForT;
		return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize, mX1, mX2);
	};

	return Object.assign(function(x) {
		// Because JavaScript number are imprecise, we should guarantee the extremes are right.
		if (x === 0) return 0;
		if (x === 1) return 1;
		return calcBezier(getTForX(x), mY1, mY2);
	}, {
		returnsToSelf: false,
	});
}, {
	defaults,
	type: 'cubicBezier',
});