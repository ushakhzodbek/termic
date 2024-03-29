
<h1 align="center">
	<br>
	<br>
	<img width="320" src="media/logo.svg" alt="Termic">
	<br>
	<br>
	<br>
</h1>

[![Downloads](https://badgen.net/npm/dt/termic)](https://www.npmjs.com/package/termic) 
[![NPM Version](https://img.shields.io/npm/v/termic.svg?style=flat)](https://www.npmjs.org/package/termic)
[![NPM Downloads](https://img.shields.io/npm/dm/termic.svg?style=flat)](https://npmcharts.com/compare/termic?minimal=true)
[![Install Size](https://packagephobia.now.sh/badge?p=termic)](https://packagephobia.now.sh/result?p=termic)
[![Npm Dependents](https://badgen.net/npm/dependents/termic)](https://www.npmjs.com/package/termic?activeTab=dependents) 

<br>

## Highlights

- Expressive API
- Highly performant
- No dependencies
- Ability to nest styles
- [256/Truecolor color support](#256-and-truecolor-color-support)
- Auto-detects color support
- Doesn't extend `String.prototype`
- Clean and focused
- Actively maintained

## Install

```sh
npm install termic
```

## Usage

```js
const { cli, colors, styler } = require("termic");

cli.println("Hello World");

cli.println(styler.background(colors.green).color(colors.red).italic.underline("Hello World"));
```

<img src="media/example.1.png">

Termic comes with an easy to use composable API where you just chain and nest the styles you want.

```js
const { cli, colors, styler } = require("termic");

const println = cli.println;

println("Hello World");

println(styler.background(colors.blue).italic.underline("Hello World"));
```

<img src="media/example.2.png">

Easily define your own themes:

```js
const { cli, colors, styler } = require("termic");

const error = styler.color(colors.red);
const warning = styler.color(colors.orange);

cli.println(error("Error!"));
cli.println(warning("Warning!!!"));
```

<img src="media/example.31.png">

## API

### termic.styler.`<style>[.<style>...](string)`

Example: `termic.styler.color(termic.colors.red).underline('Hello');`

Example: `termic.styler.color([255, 255, 255] /* white */).underline('Hello');`

### Modifiers

- `reset` - Reset the current style.
- `bold` - Make the text bold.
- `dim` - Make the text have lower opacity.
- `italic` - Make the text italic. *(Not widely supported)*
- `underline` - Put a horizontal line below the text. *(Not widely supported)*
- `doubleline` - Put a double horizontal line below the text. *(Not widely supported)*
- `inverse`- Invert background and foreground colors.
- `hidden` - Print the text but make it invisible.
- `crossedout` - Puts a horizontal line through the center of the text. *(Not widely supported)*
- `color` - Set text color
- `background` - Set background color

### Colors

- `black`
- `red`
- `green`
- `yellow`
- `blue`
- `magenta`
- `cyan`
- `white`
- `grey`
- `orange`

## Browser support

There is currently no browser version, but we are working on it

## Windows

If you're on Windows, do yourself a favor and use [Windows Terminal](https://github.com/microsoft/terminal) instead of `cmd.exe`.

## Maintainers

- [Shakhzodbek Utkurov](https://github.com/Shahzodbek2001)