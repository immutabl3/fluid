import React from 'react';
import Editor from './Editor';
import Graph from './Graph';
import Canvas from './Canvas';
import Marker from './Marker';
import Settings from './Settings';
import Demo from './Demo';
import Stress from './Stress';
import { branch } from 'baobab-react/higher-order';

import Header from './gh-pages/Header';
import Main from './gh-pages/Main';

const App = function({ stress }) {
	if (stress) return <Stress />;
	
	return (
		<div className="app">
			<Header />
			<Editor>
				<Graph>
					<Canvas />
					<Marker value={ 0 } />
					<Marker value={ 1 } />
				</Graph>
				<Settings />
			</Editor>
			<Demo />
			<Main />
		</div>
	);
};

export default branch({ stress: 'stress' }, App);