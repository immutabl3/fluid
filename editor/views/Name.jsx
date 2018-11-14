import React, { Component } from 'react';
import signal from 'signal-js';
import { branch } from 'baobab-react/higher-order';
import options from '../config/options.json';

class Name extends Component {
	onChange = e => {
		signal.trigger('select', e);
	}

	renderOption = value => {
		return (
			<option key={ value } value={ value }>
				{ value }
			</option>
		);
	}

	render() {
		return (
			<select
				onChange={ this.onChange }
				value={ this.props.name }
			>
				{ options.map(this.renderOption) }
			</select>
		);
	}
};

export default branch({
	name: ['name'],
}, Name);