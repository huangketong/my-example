require('./style.css');
var config = require('./config.json');
// var greet = document.createElement('div');
// greet.textContent = config.greetText;

document.write(config.greetText);

document.write('It works...');
var str = require('./module.js');
document.write(str);

import React, { Component } from 'react'
import config from './config.json';

class Greeter extends Component {
    render() {
        return ('<div>${config.greetText}</div>');
    }
}

export default Greeter