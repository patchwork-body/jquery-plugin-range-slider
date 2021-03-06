# jQuery plugin Range Slider

**[Example](https://patchwork-body.github.io/jquery-plugin-range-slider)**

## About

Simple range slider with minimalistic design and fully featured api that allow you to:

- update every value you see
- switch between interval and single modes
- set prefix and postfix
- set your own list of data
- support vertical and horizontal layout

## Installation

Installation process as simple as it can be. You can do it with npm

`npm install @patchwork-body/jquery-plugin-range-slider@0.1.0`

or yarn

`yarn add @patchwork-body/jquery-plugin-range-slider@0.1.0`

or just clone this repository

`git clone https://github.com/patchwork-body/jquery-plugin-range-slider.git`

## Usage

After installation you need to import plugin

```javascript
import 'jquery-plugin-range-slider';
```

or if you prefer commonjs syntax

```javascript
require('jquery-plugin-range-slider');
```

now you can select an element that you want to be a container for range-slider

```javascript
$('#container-for-range-slider').rangeSlider({
  min, // @number, start point for range slider - default: `1`
  max, // @number, end point for range slider - default: `10`
  step, // @number, step between two point of range slider track - default: `1`
  from, // @number, when intervalMode enabled it will be value for left thumb have no effect - default: `7`
  to, // @number, default value for right (or main if intervalMode disabled) range slider thumb - default: `3`
  values, // @Array<string|number>, fixed values list - default: `[]`
  prefix, // @string or function(value as number) => string - default: `''`
  postfix, // @string or function(value as number) => string - default: `''`
  vertical, // @boolean switch to vertical layout - default: `false`
  intervalMode, // @boolean enable interval mode, two thumbs will be displayed - default: `true`
  markerVisibility, // @boolean should be thumb markers displayed? - default: `true`
  trackScaleVisibility, // @boolean should be track scale displayed? - default: `true`
  color, // @string hex primary color value - default: `'#1565c0'`
});
```

that call returns api object, for more information about it see [Api documentation](https://patchwork-body.github.io/jquery-plugin-range-slider/docs/api.html).

## Development

### Setup:

first of all needs to install dependencies by running:

(disclaimer, don't work on vscode remote docker development in cloned volume)

```bash
npm install
```

or

```bash
yarn
```

### Create production build:

`(npm|yarn) run build`

compile project into minimized bundle with example index.html page located in dist folder.

### Start development server:

`(npm|yarn) run dev`

start webpack-dev-server with live reloading on localhost:8080.

### Run unit test:

`(npm|yarn) run test`

run jest (Testing framework) in watch mode.

### Get test coverage:

`(npm|yarn) run coverage`

run jest (Testing framework) coverage.

### Lint typescript:

`(npm|yarn) run lint:ts`

run eslint for ts files located in src folder, run command with --fix parameter if you want auto fix some appeared problems.

### Lint scss:

`(npm|yarn) run lint:scss`

run stylelint for scss files locate in src folder, run command with --fix parameter if you want auto fix some appeared problems.

### Run prettier:

`(npm|yarn) run prettify`

run prettier in write mode for all supported file types into ./src folder.

## Architecture

This plugin implements classic [MVC design pattern](https://www.geeksforgeeks.org/mvc-design-pattern/) with some updates. So we have Model which presented as [Redux-like](https://redux.js.org/introduction/getting-started) store, [View](https://patchwork-body.github.io/jquery-plugin-range-slider/docs/view.html) class that contain HTMLElements and manipulate DOM and Controller called as [Provider](https://patchwork-body.github.io/jquery-plugin-range-slider/docs/provider.html) here and can pass data from [Store](https://patchwork-body.github.io/jquery-plugin-range-slider/docs/store.html) (Model) to View and into backward direction from View (that in its turn from DOM events) into Store by dispatching some Actions.

For detailed view see [architecture documentation](https://patchwork-body.github.io/jquery-plugin-range-slider/docs/architecture.html).

## Licence

Licensed under the MIT license.

