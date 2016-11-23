import React from 'react';
import ReactDOM from 'react-dom';
import '../../reset.css';
import './index.css';
import IScroll from '../lib/WrcIScroll5.jsx';
class IScrollDemo extends React.Component{
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		let myScroll = new IScroll('#wrapper', {
			scrollbars: true
		});
    }
	render() {
		return (
			<div id="wrapper" className="wrapper">
			    <ul>
			        <li>item1</li>
			        <li>item2</li>
			        <li>item3</li>
			        <li>item4</li>
			        <li>item5</li>
			        <li>item6</li>
			        <li>item7</li>
			        <li>item8</li>
			        <li>item9</li>
			        <li>item10</li>
			    </ul>
			</div>
		)
	}
};
window.onload = function() {
    ReactDOM.render(
        <IScrollDemo />,
        document.getElementById('demo')
    );
}
