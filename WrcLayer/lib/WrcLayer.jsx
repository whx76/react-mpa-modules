/**
 * @file
 * @author
 * baidu.inc
 */
/**
 * @module WrcLayer
 */
import React from 'react';
import ReactDOM from 'react-dom';
import LayerComponent from './Layer.jsx';

function WrcLayer(options) {
	console.log(options)
	var layerRootDom = document.createElement('div');
	layerRootDom.id = 'layerRoot' + Date.now();
	document.body.appendChild(layerRootDom);

	var closeLayer = function() {
		if (layerRootDom) {
			ReactDOM.unmountComponentAtNode(layerRootDom);
		    layerRootDom.parentNode.removeChild(layerRootDom);
		    layerRootDom = null;
		}
	};
	Object.assign(options, {
		layerRootDom: layerRootDom,
		closeLayer: closeLayer
	});
	console.log(options)
	ReactDOM.render (
					    <LayerComponent {...options}/>,
					    layerRootDom
					);
	this.closeLayer = closeLayer;
}

export default WrcLayer;