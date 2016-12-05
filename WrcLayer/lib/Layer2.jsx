/**
 * @file
 * @author
 * baidu.inc
 */
/**
 * @module Layer
 */
import React from 'react';
import ReactDOM from 'react-dom';
/**
 * Layer
 * @param {Object} props 
 * @param {string} props.type  toast loading
 */
export default class Layer2 extends React.Component {
	constructor() {
		super();
	}
	render() {
		let component;
		if (this.props.type === 'toast') {
			component = <div>
			                <p>toast</p>
			            </div>
		}
		else if (this.props.type === 'loading') {
			component = <div>
			                <p>loading</p>
			            </div>
		}
		else {
			component = <div>
			                <p>default</p>
			            </div>
		}
		return (
			<div>
			    {component}
			</div>
		)
	}
}