# fluid

A buttery-smooth, object-focused animation library. Heavily influenced by both [dynammicsjs](http://dynamicsjs.com/) 
and [tween.js](https://github.com/tweenjs/tween.js/), `fluid` is fully-featued and has  a small (`13KB` minified, 
`4.29KB` gzipped) footprint.

## Installation

`$ npm i @immutabl3/fluid`

## Usage

Creating an animation:

```js
import fluid from '@immutabl3/fluid';

fluid(
  // starting object
  { x: 0 }
  // ending object
  { x: 100 },
  // config
  { type: 'spring', duration: 500 }
)
  .on('update', ({ x }) => {
    // x changes with every update
  })
  // start the animation
  .start();
```

Setting up the `requestAnimationFrame` loop:

```js
import fluid from '@immutabl3/fluid';
const loop = () => {
  fluid.tick();
  requestAnimationFrame(loop);
};
requestAnimationFrame(loop);
```

## Options

#### *`start`* and *`end`*

Any properties in the start and end objects will have their values tweened. Valid 
values are: numbers, rgba strings, hex strings, delta strings (e.g. '+10'), arrays 
and nested objects.

### *`config`*

#### *`type`* _default: *'spring'*_

The type of animation to perform. Valid values are: spring, linear, bezier, 
bounce, easeIn, easeInOut, easeOut, gravity and forceWithGravity.

#### *`duration`* _default: *1000*_

The duration of the animation in milliseconds.

#### *`delay`* _default: *0*_

The delay in milliseconds before the animation will start.

#### *`repeat`* _default: *0*_

The number of times to repeat the animation. Use `Infinity` to repeat indefinitely.

#### *`yoyo`* _default: *false*_

Whether to animate back to origin after reaching the end of the animation. 
Use in conjunction with `repeat`.

#### *`friction` `frequency` `bounciness` `elasticity` `anticipationSize` `anticipationStrength`*

Configuration for the animation. See each animation for defaults for that animation, e.g.:
```js
import fluid from '@immutabl3/fluid';
console.log(fluid.spring.defaults)
// {
//   frequency: 300,
//   friction: 200,
//   anticipationSize: 0,
//   anticipationStrength: 0,
// }
```

## Methods

#### *`start`*

Starts the animation

#### *`stop`*

Stops the animation

#### *`pause`*

Pauses the animation so that it can be resumed at a later date

#### *`resume`*

Resumes a paused animation

#### *`end`*

Ends an animation. Unlike `stop`, end will fast-forward the animation to 
its end state, forcibly updating the animation once before stopping.

#### *`yoyo`*

Toggles on/off yoyoing. Takes a boolean as a parameter.

#### *`repeat`*

Sets the number of times the animation should repeat. Takes a number as a parameter. Use `Infinity` for an infinite loop.

#### *`state`*

A function that returns the current state of the animation.

#### *`debug`*

Toggles debug mode to slow down animations. Takes a number (optional) to scale 
the animation speed. Default `3`.

## Events

#### *`start`*

Fired when the animation starts

```js
animation.on('start', () => {});
```

#### *`update`*

Fired on each tick of the animation, passing the updated object as the first parameter

```js
animation.on('update', (obj) => {});
```

#### *`complete`*

Fired on completion of the animation, passing the updated object as the first parameter

```js
animation.on('complete', (obj) => {});
```

## Features

`fluid` by default has a fixed tick rate. Drops in frames slow animations to prevent animation "jumps" to completion. This behavior can be overridden by supplying a time to the tick (via `requestAnimationFrame`)

```js
const loop = time => {
  fluid.tick(time);
  requestAnimationFrame(loop);
};
requestAnimationFrame(loop);
```

`setTimeout` and `clearTimeout` methods are exposed to sync animations against the `requestAnimationFrame` loop. This all for consistent animation start times.

```js
fluid.setTimeout(() => console.log('now'), 1000);
```

`fluid` does not have any DOM dependencies. Feel free to use in node!

## License

The MIT License (MIT)

Copyright (c) 2018 Immutable, LLC

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.