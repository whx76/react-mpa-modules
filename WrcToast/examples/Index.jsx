import React from 'react';
import ReactDOM from 'react-dom';
import '../../reset.css';
import Toast from '../lib/WrcToast';
class ToastDemo extends React.Component{
	constructor(props) {
		super(props);
	}
	handleClick() {
		Toast('i am a toast');
	}
	render() {
		return ( < div >
			<span onClick = {this.handleClick} className="test-btn">toast</span>
			</div >
		)
	}
};
window.onload = function() {
	ReactDOM.render( < ToastDemo / > ,
		document.getElementById('demo')
	);
}