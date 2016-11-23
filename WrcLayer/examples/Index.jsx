import React from 'react';
import ReactDOM from 'react-dom';
import '../../reset.css';
import Layer from '../lib/WrcLayer.jsx';
class LayerDemo extends React.Component{
	constructor(props) {
		super(props);
	}
	handleClick() {
		let optionsLoading = {
		    type: 'loading'
		};
		let lodingLayer = new Layer(optionsLoading);
		setTimeout(function() {
		    // 关闭loading
		    lodingLayer.closeLayer();
		}, 3000);
	}
	handleClick2() {
		let optionsFloating = {
			type: 'alert',
		    html:   <div>  
		                <div className="head">提示</div>
		                <div className="body">
		                    <p>大家太过热请，收银台正在排队中，请再次重试吧</p>
		                </div>
		                <div className="btn-group">
		                    <a className="layer-btn sure">我知道了</a>
		                    <a className="layer-btn cancel">取消</a>
		                </div>
		            </div>
		                     
		};
		let floatingLayer = new Layer(optionsFloating);
	}
	render() {
		return (
			<div>
			    <span onClick={this.handleClick} className="test-btn">loading layer</span>
			    <span onClick={this.handleClick2} className="test-btn">dialog</span>
			</div>
		)
	}
};
window.onload = function() {
    ReactDOM.render(
        <LayerDemo />,
        document.getElementById('demo')
    );
}
