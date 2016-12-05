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
import './WrcLayer.css';
var OlayComponent = React.createClass({
	componentDidMount: function() {
		window.scrollTo(0, 0);
	},
	handleClick: function(evt) {
		var target = evt.target;
		if (target.classList.contains('sure')) {
			this.props.closeLayer && this.props.closeLayer();
			this.props.surefun && this.props.surefun();
		}
		else if (target.classList.contains('cancel')) {
			this.props.closeLayer && this.props.closeLayer();
			this.props.cancelfun && this.props.cancelfun();
		}
		else if (target.classList.contains('close')) {
			this.props.closeLayer && this.props.closeLayer();
		}
	},
    render: function() {
    	var height = Math.max(document.documentElement.offsetHeight, window.innerHeight);
    	if (height.toString() === 'NaN') {
    		height = 0;
    	}
    	var className = 'olay';
    	if (this.props.type === 'loading') {
    		className = 'olay alert loading';
    	}
    	else if (this.props.type === 'alert') {
    		className = 'olay alert';
    	}
    	if (this.props.addClassname) {
    		className += ' ' + this.props.addClassname;
    	}
        return (
            <div className={className} style={{height: height}} onClick={this.handleClick}>
                <LayerComponent {...this.props} type={this.props.type}/>
			</div>
        );
    }
});
var LayerComponent = React.createClass({
	componentDidMount: function() {
        if (this.props.type === 'alert') {
            this.refs.layer.style.top = window.innerHeight / 2 + 'px';
            this.refs.layer.style.marginTop = -this.refs.layer.getBoundingClientRect().height / 2 + 'px';                }
        if (this.props.type === 'loading') {
            this.refs.layer.style.left = '50%';
            this.refs.layer.style.marginLeft = -this.refs.layer.getBoundingClientRect().width / 2 + 'px';
        }
        this.refs.layer.style.visibility = 'visible';
	},
    render: function() {
    	if (this.props.type === 'loading') {
    		return (
	            <div className="layer" ref="layer">
	                <LoadingIconComponent/>
	                <LoadingTxtComponent/>
	            </div>
	        );
    	}
        else {
        	return (
    			<div className="layer" ref="layer">
	    		{
	    			React.Children.map(this.props.children, function (child) {
	                    return child;
	                })
	    		}
	    		</div>
    		);
        }
    }
});
var LoadingIconComponent = React.createClass({
	render: function() {
        return (
            <div className="loading-animation"></div>
        );
    }
});
var LoadingTxtComponent = React.createClass({
	render: function() {
        return (
            <p>正在加载...</p>
        );
    }
});
var ToastComponent = React.createClass({
	componentDidMount: function() {
		setTimeout(function() {
			this.props.closeLayer && this.props.closeLayer();
		}.bind(this), this.props.outTime);
	},
	componentWillUnmount: function() {
		this.props.surefun && this.props.surefun();
	},
	render: function() {
		return (
			<div className="toast">
			    <p>{this.props.toastStr}</p>
			</div>
		)
	}
});
/**
 * Layer
 * @param {Object} props 
 * @param {string} props.type  toast loading alert
 * @param {Function=} props.cancelFun  取消按钮回调方法
 * @param {Function=} props.sureFun  确认按钮回调方法
 * @param {string=} props.addClassname  额外的类名
 * @param {jsx=} props.html  插入的html片段  
 */
export default class Layer extends React.Component {
	constructor() {
		super();
	}
	render() {
		let component;
		if (this.props.type === 'toast') {
			component = <ToastComponent outTime={this.props.outTime || 2000} toastStr={this.props.toastStr} closeLayer={this.props.closeLayer} surefun={this.props.sureFun} />;
		}
		else if (this.props.type === 'loading') {
			component = <OlayComponent type="loading" />;
		}
		else if (this.props.type === 'alert') {
			component = <OlayComponent type="alert" addClassname={this.props.addClassname} surefun={this.props.sureFun} cancelfun={this.props.cancelFun} rootdom={this.props.layerRootDom} closeLayer={this.props.closeLayer}>
				        {this.props.html}
				    </OlayComponent>;
		}
		else {
			component = <OlayComponent>
					        {this.props.html}
					    </OlayComponent>;
		}
		return (
			<div>
			    {component}
			</div>
		)
	}
}