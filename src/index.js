import { render } from './projectViewer.js'
require('file-loader?name=[name].[ext]!./index.html');
require('file-loader?name=[name].[ext]!./style.css');

render();

