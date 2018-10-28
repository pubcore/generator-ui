[![Build Status](https://travis-ci.org/pubcore/generator-ui.svg?branch=master)](https://travis-ci.org/pubcore/generator-ui)

## Commandline tool to scaffold a new user interface component

### Prerequisites
* latest version of nodejs
* latest version of npm
* @pubcore/node-composition installed and context_path is added in config.json

### It will create/setup minimum package structure to support
* eslint
* transpiler for ECS6 with spread operator
* webpack for bundeling js and css
* bootstrap4
* fontawesome
* react
* redux

### Install it global

	npm install -g @pubcore/generator-ui

### How to use
1) create a directory (convention lower case and dash-separated)

		mkdir new-project

2) and change into it

		cd new-project

3) execute

		yo ui
