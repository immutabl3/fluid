import keyBy from 'lodash/keyBy';

export default function createSettings(curve, points) {
	return keyBy([
		{
			min: 100,
			max: 5000,
			value: 1000,
			property: 'duration',
		},
		{
			value: points,
			property: 'points',
		},
		...(
			!curve.defaults ? [] :
				Object.keys(curve.defaults)
					.map(key => {
						const value = curve.defaults[key] || 10;
						return {
							value,
							min: value === 0 ? 0 : 1,
							max: 1000,
							property: key,
						};
					})
		),
		{
			property: 'yoyo',
			value: false,
		},
		{
			property: 'repeat',
			min: 0,
			max: 10,
			value: 0,
		},
	], 'property');
};