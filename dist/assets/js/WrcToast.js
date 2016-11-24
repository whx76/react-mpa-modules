webpackJsonp([3],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	__webpack_require__(3);

	var _WrcToast = __webpack_require__(17);

	var _WrcToast2 = _interopRequireDefault(_WrcToast);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ToastDemo = function (_React$Component) {
		_inherits(ToastDemo, _React$Component);

		function ToastDemo(props) {
			_classCallCheck(this, ToastDemo);

			return _possibleConstructorReturn(this, (ToastDemo.__proto__ || Object.getPrototypeOf(ToastDemo)).call(this, props));
		}

		_createClass(ToastDemo, [{
			key: 'handleClick',
			value: function handleClick() {
				(0, _WrcToast2.default)('i am a toast');
			}
		}, {
			key: 'render',
			value: function render() {
				return _react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(
						'span',
						{ onClick: this.handleClick, className: 'test-btn' },
						'toast'
					)
				);
			}
		}]);

		return ToastDemo;
	}(_react2.default.Component);

	;
	window.onload = function () {
		_reactDom2.default.render(_react2.default.createElement(ToastDemo, null), document.getElementById('demo'));
	};

/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /**
	                                                                                                                                                                                                                                                                   * @file
	                                                                                                                                                                                                                                                                   * @author
	                                                                                                                                                                                                                                                                   * baidu.inc
	                                                                                                                                                                                                                                                                   */
	/**
	 * @module WrcLayer
	 */


	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	__webpack_require__(14);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var OlayComponent = _react2.default.createClass({
		displayName: 'OlayComponent',

		componentDidMount: function componentDidMount() {
			window.scrollTo(0, 0);
		},
		handleClick: function handleClick(evt) {
			var target = evt.target;
			if (target.classList.contains('sure')) {
				this.props.closeLayer && this.props.closeLayer();
				this.props.surefun && this.props.surefun();
			} else if (target.classList.contains('cancel')) {
				this.props.closeLayer && this.props.closeLayer();
				this.props.cancelfun && this.props.cancelfun();
			} else if (target.classList.contains('close')) {
				this.props.closeLayer && this.props.closeLayer();
			}
		},
		render: function render() {
			var height = Math.max(document.documentElement.offsetHeight, window.innerHeight);
			var className = 'olay';
			if (this.props.type === 'loading') {
				className = 'olay alert loading';
			} else if (this.props.type === 'alert') {
				className = 'olay alert';
			}
			if (this.props.addClassname) {
				className += ' ' + this.props.addClassname;
			}
			return _react2.default.createElement(
				'div',
				{ className: className, style: { height: height }, onClick: this.handleClick },
				_react2.default.createElement(LayerComponent, _extends({}, this.props, { type: this.props.type }))
			);
		}
	});
	var LayerComponent = _react2.default.createClass({
		displayName: 'LayerComponent',

		componentDidMount: function componentDidMount() {
			if (this.props.type === 'alert') {
				this.refs.layer.style.top = window.innerHeight / 2 + 'px';
				this.refs.layer.style.marginTop = -this.refs.layer.getBoundingClientRect().height / 2 + 'px';
			}
			if (this.props.type === 'loading') {
				this.refs.layer.style.left = '50%';
				this.refs.layer.style.marginLeft = -this.refs.layer.getBoundingClientRect().width / 2 + 'px';
			}
			this.refs.layer.style.visibility = 'visible';
		},
		render: function render() {
			if (this.props.type === 'loading') {
				return _react2.default.createElement(
					'div',
					{ className: 'layer', ref: 'layer' },
					_react2.default.createElement(LoadingIconComponent, null),
					_react2.default.createElement(LoadingTxtComponent, null)
				);
			} else {
				return _react2.default.createElement(
					'div',
					{ className: 'layer', ref: 'layer' },
					_react2.default.Children.map(this.props.children, function (child) {
						return child;
					})
				);
			}
		}
	});
	var LoadingIconComponent = _react2.default.createClass({
		displayName: 'LoadingIconComponent',

		render: function render() {
			return _react2.default.createElement('div', { className: 'loading-animation' });
		}
	});
	var LoadingTxtComponent = _react2.default.createClass({
		displayName: 'LoadingTxtComponent',

		render: function render() {
			return _react2.default.createElement(
				'p',
				null,
				'\u6B63\u5728\u52A0\u8F7D...'
			);
		}
	});
	var ToastComponent = _react2.default.createClass({
		displayName: 'ToastComponent',

		componentDidMount: function componentDidMount() {
			setTimeout(function () {
				this.props.closeLayer && this.props.closeLayer();
			}.bind(this), this.props.outTime);
		},
		componentWillUnmount: function componentWillUnmount() {
			this.props.surefun && this.props.surefun();
		},
		render: function render() {
			return _react2.default.createElement(
				'div',
				{ className: 'toast' },
				_react2.default.createElement(
					'p',
					null,
					this.props.toastStr
				)
			);
		}
	});
	function Layer(options) {
		var layerRootDom = document.createElement('div');
		layerRootDom.id = 'layerRoot' + Date.now();
		document.body.appendChild(layerRootDom);

		var closeLayer = function closeLayer() {
			if (layerRootDom) {
				_reactDom2.default.unmountComponentAtNode(layerRootDom);
				layerRootDom.parentNode.removeChild(layerRootDom);
				layerRootDom = null;
			}
		};
		if (options.type === 'toast') {
			_reactDom2.default.render(_react2.default.createElement(ToastComponent, { outTime: options.outTime || 2000, toastStr: options.toastStr, closeLayer: closeLayer, surefun: options.sureFun }), layerRootDom);
		} else if (options.type === 'loading') {
			_reactDom2.default.render(_react2.default.createElement(OlayComponent, { type: 'loading' }), layerRootDom);
		} else if (options.type === 'alert') {
			_reactDom2.default.render(_react2.default.createElement(
				OlayComponent,
				{ type: 'alert', addClassname: options.addClassname, surefun: options.sureFun, cancelfun: options.cancelFun, rootdom: layerRootDom, closeLayer: closeLayer },
				options.html
			), layerRootDom);
		} else {
			_reactDom2.default.render(_react2.default.createElement(
				OlayComponent,
				null,
				options.html
			), layerRootDom);
		}
		this.closeLayer = closeLayer;
	}
	/**
	 * WrcLayer
	 * @param {Object} options 
	 * @param {string} options.type  loading alert
	 * @param {Function=} options.cancelFun  取消按钮回调方法
	 * @param {Function=} options.sureFun  确认按钮回调方法
	 * @param {string=} options.addClassname  额外的类名
	 * @param {jsx=} options.html  插入的html片段  
	 */
	exports.default = Layer;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(15);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(6)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/.0.26.0@css-loader/index.js!./WrcLayer.css", function() {
				var newContent = require("!!./../../node_modules/.0.26.0@css-loader/index.js!./WrcLayer.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports


	// module
	exports.push([module.id, ".olay {\r\n    position: fixed;\r\n    z-index: 500;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    opacity: 1;\r\n    background: rgba(0, 0, 0, 0.75);\r\n    -webkit-transition: opacity 300ms;\r\n            transition: opacity 300ms;\r\n}\r\n.olay .layer {\r\n    visibility: hidden;\r\n}\r\n.olay.loading {\r\n    background: rgba(0, 0, 0, 0);\r\n}\r\n.olay > div {\r\n    position: absolute;\r\n    z-index: 1000;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: #f2f2f2;\r\n}\r\n.olay.alert > div {\r\n    background-color: #fff;\r\n    left: 0;\r\n    width: auto;\r\n    height: auto;\r\n    top: 50%;\r\n    margin: 0 56px;\r\n    border-radius: 2px;\r\n    padding-top: 21px;\r\n}\r\n.olay .close-icon {\r\n    width: 11px;\r\n    height: 11px;\r\n    position: absolute;\r\n    right: 2px;\r\n    top: 2px;\r\n    /*background: url(guanbi.png);*/\r\n    background-size: contain;\r\n}\r\n.olay.alert .head {\r\n    font-size: 16px;\r\n    color: #333;\r\n    text-align: center;\r\n    line-height: 20px;\r\n}\r\n.olay.alert .body {\r\n    padding: 12px 20px 3px;\r\n}\r\n.olay.alert p {\r\n    line-height: 22px;\r\n    font-size: 18px;\r\n    color: #222;\r\n    text-align: center;\r\n}\r\n.olay.alert .btn-group {\r\n    border-top: 1px solid #d9dfe8;\r\n}\r\n.olay .layer .layer-btn {\r\n    display: none;\r\n    float: right;\r\n    margin-right: 1px;\r\n    font-size: 13px;\r\n    color: #fff;\r\n}\r\n.olay .btn-group > .layer-btn {\r\n    display: table-cell;\r\n    width: 1000px;\r\n    text-align: center;\r\n}\r\n.olay.alert .layer .layer-btn {\r\n    margin: 0;\r\n    float: inherit;\r\n    height: 44px;\r\n    line-height: 44px;\r\n    font-size: 18px;\r\n    color: #6492E3;\r\n}\r\n.olay.alert .btn-group .layer-btn:nth-child(2) {\r\n    border-left: 1px solid #d9dfe8;\r\n}\r\n.olay.alert .layer .layer-btn.sure {\r\n    color: #222;\r\n}\r\n.loading-animation {\r\n    width: 20px;\r\n    height: 20px;\r\n    background: url(" + __webpack_require__(16) + ") no-repeat 0 0;\r\n    background-size: contain;\r\n    -webkit-animation: loading-keyframe 1s infinite linear;\r\n            animation: loading-keyframe 1s infinite linear;\r\n    margin-left: 16px;\r\n    margin-top: 12px;\r\n    float: left;\r\n}\r\n.loading .layer {\r\n    left: 50% !important;\r\n    margin-left: -70px !important;\r\n    background-color: rgba(0, 0, 0, 0.8) !important;\r\n    width: 140px !important;\r\n    height: 44px !important;\r\n    padding: 0 !important;\r\n    border-radius: 3px !important;\r\n    overflow: hidden;\r\n}\r\n.olay.alert.loading p {\r\n    font-size: 16px;\r\n    color: #fff;\r\n    float: left;\r\n    margin-left: 2px;\r\n    line-height: 44px;\r\n    margin-top: 0;\r\n    margin-bottom: 0;\r\n}\r\n.loading .header {\r\n    display: none !important;\r\n}\r\n@-webkit-keyframes loading-keyframe {\r\n    from {\r\n        -webkit-transform: rotate(0deg);\r\n    }\r\n    to {\r\n        -webkit-transform: rotate(360deg);\r\n    }\r\n}\r\n@keyframes loading-keyframe {\r\n    from {\r\n        transform: rotate(0deg);\r\n    }\r\n    to {\r\n        transform: rotate(360deg);\r\n    }\r\n}\r\n.toast {\r\n    position: fixed;\r\n    top: 35%;\r\n    left: 50%;\r\n    margin-left: -135px;\r\n    z-index: 9999;\r\n    width: 270px;\r\n    padding: 1px 15px;\r\n    background: #000;\r\n    opacity: 7;\r\n    border-radius: 1px;\r\n}\r\n.toast p {\r\n    text-align: center;\r\n    font-size: 14px;\r\n    color: #f2f2f2;\r\n    line-height: 24px;\r\n}\r\n\r\n", ""]);

	// exports


/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1OEMxMEI3NDI3MEIxMUU2ODVGMzhFNjYyMDIyOUFCMCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo1OEMxMEI3NTI3MEIxMUU2ODVGMzhFNjYyMDIyOUFCMCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjU4QzEwQjcyMjcwQjExRTY4NUYzOEU2NjIwMjI5QUIwIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjU4QzEwQjczMjcwQjExRTY4NUYzOEU2NjIwMjI5QUIwIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+GeWqMwAAA+BJREFUeNrMmVlsTGEUx+9cXZQiLZWKklhbQSSlSMUWSxAiJGJ5aSQehOiDF7yI4EFILW99I3iRSJGUPkiILSKp2OuJVtHWkrRVapn2jv+R/ycnn5l27rQz10l+mWlyl/+c833nO+c0FIlEnATMBbPAIn5OBuPAENAKToC74BtoB59AG/D9spBPgaPBdrAFjJH7Fa66TkRuNe8gP8Bb8Ap8j/eFaXFelwv286WZfKG2WL9SX5cFCuntBvAc/OoPD64HJ8EI5Q3tmW7whl4pAl/AUfAEDKZnQ1HuFXGPQGOiAsW7x8A26wUhirgMLnGtfe3hGcO5NApARpRnSchrY0UhlkAJxxmw0npYBzgOKinSj6WDCfRyphWFJnAPdMUjUH71WbDKElcDykGL0zcbCEroVf389+CW7Uk3ygNk/azghYIHDoCN/SDO4W6+A55aAiUrzImWz7StA2WWuF2gIpEc1ovVgQeWyELm06gCc8ARJU44DM45yTPZII8tkXO5DP4RuI8iPYqr4YmQbJN8+E4JlA1abAuUBbtZeU526O4khDWW3QdhK9TZWmAZd6/x3inw0UmdSZJ/pgSKlilGoMvTwoiTw/20k3p7yTyovRgScTNAvgrvFSbkVJuE+LU6GiXEefJHqfKefF5zgrMGVRnJZ4HEerryXjdzU1DWbB2BI10mRuPBej+1WhKsi8vLeDDXZRllwtvoBG8davNmS4gHUZyTQIWSrM1iQpyZptafo4QGabp9+JNmOijMY9MTtGWpEHe5PDHMGsz/DwQOUwI7XVYUZheP1ZVEAJbOFsGswTYR+EKF2NWVRABWwHPYeLDFZWKOKJFLAhRYpMQJjS7rsWYlcjlTT6pNOr5pahfL5m12KaparUPpZTcEILCEjjGniCy9iMk3F9hImzCXcZqQKhOnLFShjbBX/psQP4Aq5UUpdfZEGXEkKzGvZf4zu/exOdV0T1LJCZTx4gK2msm2Uq494z1pS29Ea5ra2RPrrm4HpwvJsplgtTW/kXq0M1ZffF2F2uMNe+nJUD+HVWaLm8AAtXNrOXTqcfQh2fwQmKdST4TTgAp6ui+WTWFTrUpedu15Fs29Do/kuDsIZlsiW7njryZQ2MrAaD5Yqko88+w6zoPCfsdv5VwjnnXayA67zYmUdGM/e0i+E7nWivnDPUWEz6iyPedngLkY7ARDrQeb72GOz5roVY/eylMHvxflXjkpLoKHfZ2wmhJIkvcylUi9BAnTa9U9DD59CzQm/csaZv0cn0JbOeK4ye/xbfcE/w0hYZvElnU8GEXBGRQjeewzi5B6rtP6RGY9vwUYACMHTam1T1ebAAAAAElFTkSuQmCC"

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _WrcLayer = __webpack_require__(13);

	var _WrcLayer2 = _interopRequireDefault(_WrcLayer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function toast(str, outTime) {
	  var toastOptions = {
	    type: 'toast',
	    toastStr: str,
	    outTime: outTime || 3000
	  };
	  new _WrcLayer2.default(toastOptions);
	}
	/**
	 * WrcToast
	 * @param {string} str toast's text  
	 * @param {number} outTime display time,in milliseconds
	 */
	/**
	 * @file WrcToast
	 * @author baidu.inc
	 */
	/**
	 * @module WrcToast
	 */
	exports.default = toast;

/***/ }
]);
//# sourceMappingURL=WrcToast.js.map