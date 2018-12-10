import React from 'react';
import ReactDOM from 'react-dom';
import signal from 'signal-js';
import App from './views/App';
import { root } from 'baobab-react/higher-order';
import actions from './actions';
import store from './store';
import fluid from '../src';
import Stats from 'stats-js';
import './debug';

actions(store);

const RootedApp = root(store, App);
ReactDOM.render(<RootedApp />, document.querySelector('#mount'));

const stats = new Stats();
stats.setMode(0); // 0: fps, 1: ms
stats.domElement.style.position = 'absolute';
stats.domElement.style.zIndex = '1000';
stats.domElement.style.left = '0';
stats.domElement.style.top = '0';
document.body.appendChild(stats.domElement);

const update = time => {
	requestAnimationFrame(update);
	stats.begin();
	fluid.tick(time);
	signal.emit('tick');
	stats.end();
};

console.log(store.get());
requestAnimationFrame(update);