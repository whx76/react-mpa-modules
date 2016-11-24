webpackJsonp([1],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	__webpack_require__(3);

	var _WrcIosselect = __webpack_require__(10);

	var _WrcIosselect2 = _interopRequireDefault(_WrcIosselect);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var data = [{ 'id': '10001', 'value': '工商银行' }, { 'id': '10002', 'value': '农业银行' }, { 'id': '10003', 'value': '建设银行' }, { 'id': '10004', 'value': '中国银行' }, { 'id': '10005', 'value': '交通银行' }, { 'id': '10006', 'value': '浦发银行' }, { 'id': '10007', 'value': '上海银行' }, { 'id': '10008', 'value': '汇丰银行' }, { 'id': '10009', 'value': '光大银行' }, { 'id': '10010', 'value': '招商银行' }, { 'id': '10011', 'value': '中信银行' }, { 'id': '10012', 'value': '民生银行' }, { 'id': '10013', 'value': '平安银行' }, { 'id': '10014', 'value': '华夏银行' }, { 'id': '10015', 'value': '广发银行' }, { 'id': '10016', 'value': '北京银行' }];

	var IosselectDemo = function (_React$Component) {
	    _inherits(IosselectDemo, _React$Component);

	    function IosselectDemo(props) {
	        _classCallCheck(this, IosselectDemo);

	        return _possibleConstructorReturn(this, (IosselectDemo.__proto__ || Object.getPrototypeOf(IosselectDemo)).call(this, props));
	    }

	    _createClass(IosselectDemo, [{
	        key: 'handleClick',
	        value: function handleClick() {
	            var showBankDom = this.refs.bank;
	            var bankId = showBankDom.dataset['id'];
	            var bankName = showBankDom.dataset['value'];

	            var bankSelect = new _WrcIosselect2.default(1, [data], {
	                oneLevelId: bankId,
	                callback: function callback(selectOneObj) {
	                    showBankDom.innerHTML = selectOneObj.value;
	                    showBankDom.dataset['id'] = selectOneObj.id;
	                    showBankDom.dataset['value'] = selectOneObj.value;
	                }
	            });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(
	                    'span',
	                    { onClick: this.handleClick.bind(this), ref: 'bank', className: 'test-btn' },
	                    '\u9009\u62E9\u94F6\u884C'
	                )
	            );
	        }
	    }]);

	    return IosselectDemo;
	}(_react2.default.Component);

	;
	window.onload = function () {
	    _reactDom2.default.render(_react2.default.createElement(IosselectDemo, null), document.getElementById('demo'));
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
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	/**
	 * @file
	 * @author
	 * baidu.inc
	 */
	/*
	 * github:https://github.com/cubiq/iscroll
	 */
	(function () {
	    var rAF = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {
	        window.setTimeout(callback, 1000 / 60);
	    };

	    var utils = function () {
	        var me = {};

	        var _elementStyle = document.createElement('div').style;
	        var _vendor = function () {
	            var vendors = ['t', 'webkitT', 'MozT', 'msT', 'OT'],
	                transform,
	                i = 0,
	                l = vendors.length;

	            for (; i < l; i++) {
	                transform = vendors[i] + 'ransform';
	                if (transform in _elementStyle) return vendors[i].substr(0, vendors[i].length - 1);
	            }

	            return false;
	        }();

	        function _prefixStyle(style) {
	            if (_vendor === false) return false;
	            if (_vendor === '') return style;
	            return _vendor + style.charAt(0).toUpperCase() + style.substr(1);
	        }

	        me.getTime = Date.now || function getTime() {
	            return new Date().getTime();
	        };

	        me.extend = function (target, obj) {
	            for (var i in obj) {
	                target[i] = obj[i];
	            }
	        };

	        me.addEvent = function (el, type, fn, capture) {
	            el.addEventListener(type, fn, !!capture);
	        };

	        me.removeEvent = function (el, type, fn, capture) {
	            el.removeEventListener(type, fn, !!capture);
	        };

	        me.prefixPointerEvent = function (pointerEvent) {
	            return window.MSPointerEvent ? 'MSPointer' + pointerEvent.charAt(9).toUpperCase() + pointerEvent.substr(10) : pointerEvent;
	        };

	        me.momentum = function (current, start, time, lowerMargin, wrapperSize, deceleration) {
	            var distance = current - start,
	                speed = Math.abs(distance) / time,
	                destination,
	                duration;

	            deceleration = deceleration === undefined ? 0.0006 : deceleration;

	            destination = current + speed * speed / (2 * deceleration) * (distance < 0 ? -1 : 1);
	            duration = speed / deceleration;

	            if (destination < lowerMargin) {
	                destination = wrapperSize ? lowerMargin - wrapperSize / 2.5 * (speed / 8) : lowerMargin;
	                distance = Math.abs(destination - current);
	                duration = distance / speed;
	            } else if (destination > 0) {
	                destination = wrapperSize ? wrapperSize / 2.5 * (speed / 8) : 0;
	                distance = Math.abs(current) + destination;
	                duration = distance / speed;
	            }

	            return {
	                destination: Math.round(destination),
	                duration: duration
	            };
	        };

	        var _transform = _prefixStyle('transform');

	        me.extend(me, {
	            hasTransform: _transform !== false,
	            hasPerspective: _prefixStyle('perspective') in _elementStyle,
	            hasTouch: 'ontouchstart' in window,
	            hasPointer: window.PointerEvent || window.MSPointerEvent, // IE10 is prefixed
	            hasTransition: _prefixStyle('transition') in _elementStyle
	        });

	        // This should find all Android browsers lower than build 535.19 (both stock browser and webview)
	        me.isBadAndroid = /Android /.test(window.navigator.appVersion) && !/Chrome\/\d/.test(window.navigator.appVersion);

	        me.extend(me.style = {}, {
	            transform: _transform,
	            transitionTimingFunction: _prefixStyle('transitionTimingFunction'),
	            transitionDuration: _prefixStyle('transitionDuration'),
	            transitionDelay: _prefixStyle('transitionDelay'),
	            transformOrigin: _prefixStyle('transformOrigin')
	        });

	        me.hasClass = function (e, c) {
	            var re = new RegExp("(^|\\s)" + c + "(\\s|$)");
	            return re.test(e.className);
	        };

	        me.addClass = function (e, c) {
	            if (me.hasClass(e, c)) {
	                return;
	            }

	            var newclass = e.className.split(' ');
	            newclass.push(c);
	            e.className = newclass.join(' ');
	        };

	        me.removeClass = function (e, c) {
	            if (!me.hasClass(e, c)) {
	                return;
	            }

	            var re = new RegExp("(^|\\s)" + c + "(\\s|$)", 'g');
	            e.className = e.className.replace(re, ' ');
	        };

	        me.offset = function (el) {
	            var left = -el.offsetLeft,
	                top = -el.offsetTop;

	            // jshint -W084
	            while (el = el.offsetParent) {
	                left -= el.offsetLeft;
	                top -= el.offsetTop;
	            }
	            // jshint +W084

	            return {
	                left: left,
	                top: top
	            };
	        };

	        me.preventDefaultException = function (el, exceptions) {
	            for (var i in exceptions) {
	                if (exceptions[i].test(el[i])) {
	                    return true;
	                }
	            }

	            return false;
	        };

	        me.extend(me.eventType = {}, {
	            touchstart: 1,
	            touchmove: 1,
	            touchend: 1,

	            mousedown: 2,
	            mousemove: 2,
	            mouseup: 2,

	            pointerdown: 3,
	            pointermove: 3,
	            pointerup: 3,

	            MSPointerDown: 3,
	            MSPointerMove: 3,
	            MSPointerUp: 3
	        });

	        me.extend(me.ease = {}, {
	            quadratic: {
	                style: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
	                fn: function fn(k) {
	                    return k * (2 - k);
	                }
	            },
	            circular: {
	                style: 'cubic-bezier(0.1, 0.57, 0.1, 1)', // Not properly "circular" but this looks better, it should be (0.075, 0.82, 0.165, 1)
	                fn: function fn(k) {
	                    return Math.sqrt(1 - --k * k);
	                }
	            },
	            back: {
	                style: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
	                fn: function fn(k) {
	                    var b = 4;
	                    return (k = k - 1) * k * ((b + 1) * k + b) + 1;
	                }
	            },
	            bounce: {
	                style: '',
	                fn: function fn(k) {
	                    if ((k /= 1) < 1 / 2.75) {
	                        return 7.5625 * k * k;
	                    } else if (k < 2 / 2.75) {
	                        return 7.5625 * (k -= 1.5 / 2.75) * k + 0.75;
	                    } else if (k < 2.5 / 2.75) {
	                        return 7.5625 * (k -= 2.25 / 2.75) * k + 0.9375;
	                    } else {
	                        return 7.5625 * (k -= 2.625 / 2.75) * k + 0.984375;
	                    }
	                }
	            },
	            elastic: {
	                style: '',
	                fn: function fn(k) {
	                    var f = 0.22,
	                        e = 0.4;

	                    if (k === 0) {
	                        return 0;
	                    }
	                    if (k == 1) {
	                        return 1;
	                    }

	                    return e * Math.pow(2, -10 * k) * Math.sin((k - f / 4) * (2 * Math.PI) / f) + 1;
	                }
	            }
	        });

	        me.tap = function (e, eventName) {
	            var ev = document.createEvent('Event');
	            ev.initEvent(eventName, true, true);
	            ev.pageX = e.pageX;
	            ev.pageY = e.pageY;
	            e.target.dispatchEvent(ev);
	        };

	        me.click = function (e) {
	            var target = e.target,
	                ev;

	            if (!/(SELECT|INPUT|TEXTAREA)/i.test(target.tagName)) {
	                ev = document.createEvent('MouseEvents');
	                ev.initMouseEvent('click', true, true, e.view, 1, target.screenX, target.screenY, target.clientX, target.clientY, e.ctrlKey, e.altKey, e.shiftKey, e.metaKey, 0, null);

	                ev._constructed = true;
	                target.dispatchEvent(ev);
	            }
	        };

	        return me;
	    }();

	    function IScroll(el, options) {
	        this.wrapper = typeof el == 'string' ? document.querySelector(el) : el;
	        this.scroller = this.wrapper.children[0];
	        this.scrollerStyle = this.scroller.style; // cache style for better performance

	        this.options = {

	            resizeScrollbars: true,

	            mouseWheelSpeed: 20,

	            snapThreshold: 0.334,

	            // INSERT POINT: OPTIONS 

	            startX: 0,
	            startY: 0,
	            scrollY: true,
	            directionLockThreshold: 5,
	            momentum: true,

	            bounce: true,
	            bounceTime: 600,
	            bounceEasing: '',

	            preventDefault: true,
	            preventDefaultException: {
	                tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT)$/
	            },

	            HWCompositing: true,
	            useTransition: true,
	            useTransform: true
	        };

	        for (var i in options) {
	            this.options[i] = options[i];
	        }

	        // Normalize options
	        this.translateZ = this.options.HWCompositing && utils.hasPerspective ? ' translateZ(0)' : '';

	        this.options.useTransition = utils.hasTransition && this.options.useTransition;
	        this.options.useTransform = utils.hasTransform && this.options.useTransform;

	        this.options.eventPassthrough = this.options.eventPassthrough === true ? 'vertical' : this.options.eventPassthrough;
	        this.options.preventDefault = !this.options.eventPassthrough && this.options.preventDefault;

	        // If you want eventPassthrough I have to lock one of the axes
	        this.options.scrollY = this.options.eventPassthrough == 'vertical' ? false : this.options.scrollY;
	        this.options.scrollX = this.options.eventPassthrough == 'horizontal' ? false : this.options.scrollX;

	        // With eventPassthrough we also need lockDirection mechanism
	        this.options.freeScroll = this.options.freeScroll && !this.options.eventPassthrough;
	        this.options.directionLockThreshold = this.options.eventPassthrough ? 0 : this.options.directionLockThreshold;

	        this.options.bounceEasing = typeof this.options.bounceEasing == 'string' ? utils.ease[this.options.bounceEasing] || utils.ease.circular : this.options.bounceEasing;

	        this.options.resizePolling = this.options.resizePolling === undefined ? 60 : this.options.resizePolling;

	        if (this.options.tap === true) {
	            this.options.tap = 'tap';
	        }

	        if (this.options.shrinkScrollbars == 'scale') {
	            this.options.useTransition = false;
	        }

	        this.options.invertWheelDirection = this.options.invertWheelDirection ? -1 : 1;

	        if (this.options.probeType == 3) {
	            this.options.useTransition = false;
	        }

	        // INSERT POINT: NORMALIZATION

	        // Some defaults	
	        this.x = 0;
	        this.y = 0;
	        this.directionX = 0;
	        this.directionY = 0;
	        this._events = {};

	        // INSERT POINT: DEFAULTS

	        this._init();
	        this.refresh();

	        this.scrollTo(this.options.startX, this.options.startY);
	        this.enable();
	    }

	    IScroll.prototype = {
	        version: '5.1.3',

	        _init: function _init() {
	            this._initEvents();

	            if (this.options.scrollbars || this.options.indicators) {
	                this._initIndicators();
	            }

	            if (this.options.mouseWheel) {
	                this._initWheel();
	            }

	            if (this.options.snap) {
	                this._initSnap();
	            }

	            if (this.options.keyBindings) {
	                this._initKeys();
	            }

	            // INSERT POINT: _init
	        },

	        destroy: function destroy() {
	            this._initEvents(true);

	            this._execEvent('destroy');
	        },

	        _transitionEnd: function _transitionEnd(e) {
	            if (e.target != this.scroller || !this.isInTransition) {
	                return;
	            }

	            this._transitionTime();
	            if (!this.resetPosition(this.options.bounceTime)) {
	                this.isInTransition = false;
	                this._execEvent('scrollEnd');
	            }
	        },

	        _start: function _start(e) {
	            // React to left mouse button only
	            if (utils.eventType[e.type] != 1) {
	                if (e.button !== 0) {
	                    return;
	                }
	            }

	            if (!this.enabled || this.initiated && utils.eventType[e.type] !== this.initiated) {
	                return;
	            }

	            if (this.options.preventDefault && !utils.isBadAndroid && !utils.preventDefaultException(e.target, this.options.preventDefaultException)) {
	                e.preventDefault();
	            }

	            var point = e.touches ? e.touches[0] : e,
	                pos;

	            this.initiated = utils.eventType[e.type];
	            this.moved = false;
	            this.distX = 0;
	            this.distY = 0;
	            this.directionX = 0;
	            this.directionY = 0;
	            this.directionLocked = 0;

	            this._transitionTime();

	            this.startTime = utils.getTime();

	            if (this.options.useTransition && this.isInTransition) {
	                this.isInTransition = false;
	                pos = this.getComputedPosition();
	                this._translate(Math.round(pos.x), Math.round(pos.y));
	                this._execEvent('scrollEnd');
	            } else if (!this.options.useTransition && this.isAnimating) {
	                this.isAnimating = false;
	                this._execEvent('scrollEnd');
	            }

	            this.startX = this.x;
	            this.startY = this.y;
	            this.absStartX = this.x;
	            this.absStartY = this.y;
	            this.pointX = point.pageX;
	            this.pointY = point.pageY;

	            this._execEvent('beforeScrollStart');
	        },

	        _move: function _move(e) {
	            if (!this.enabled || utils.eventType[e.type] !== this.initiated) {
	                return;
	            }

	            if (this.options.preventDefault) {
	                // increases performance on Android? TODO: check!
	                e.preventDefault();
	            }

	            var point = e.touches ? e.touches[0] : e,
	                deltaX = point.pageX - this.pointX,
	                deltaY = point.pageY - this.pointY,
	                timestamp = utils.getTime(),
	                newX,
	                newY,
	                absDistX,
	                absDistY;

	            this.pointX = point.pageX;
	            this.pointY = point.pageY;

	            if (this.pointY <= 10 || this.pointY >= document.body.clientHeight - 10) {
	                //直接释放mousemove事件
	                this._end(e);return;
	            }

	            this.distX += deltaX;
	            this.distY += deltaY;
	            absDistX = Math.abs(this.distX);
	            absDistY = Math.abs(this.distY);

	            // We need to move at least 10 pixels for the scrolling to initiate
	            if (timestamp - this.endTime > 300 && absDistX < 10 && absDistY < 10) {
	                return;
	            }

	            // If you are scrolling in one direction lock the other
	            if (!this.directionLocked && !this.options.freeScroll) {
	                if (absDistX > absDistY + this.options.directionLockThreshold) {
	                    this.directionLocked = 'h'; // lock horizontally
	                } else if (absDistY >= absDistX + this.options.directionLockThreshold) {
	                    this.directionLocked = 'v'; // lock vertically
	                } else {
	                    this.directionLocked = 'n'; // no lock
	                }
	            }

	            if (this.directionLocked == 'h') {
	                if (this.options.eventPassthrough == 'vertical') {
	                    e.preventDefault();
	                } else if (this.options.eventPassthrough == 'horizontal') {
	                    this.initiated = false;
	                    return;
	                }

	                deltaY = 0;
	            } else if (this.directionLocked == 'v') {
	                if (this.options.eventPassthrough == 'horizontal') {
	                    e.preventDefault();
	                } else if (this.options.eventPassthrough == 'vertical') {
	                    this.initiated = false;
	                    return;
	                }

	                deltaX = 0;
	            }

	            deltaX = this.hasHorizontalScroll ? deltaX : 0;
	            deltaY = this.hasVerticalScroll ? deltaY : 0;

	            newX = this.x + deltaX;
	            newY = this.y + deltaY;

	            // Slow down if outside of the boundaries
	            if (newX > 0 || newX < this.maxScrollX) {
	                newX = this.options.bounce ? this.x + deltaX / 3 : newX > 0 ? 0 : this.maxScrollX;
	            }
	            if (newY > 0 || newY < this.maxScrollY) {
	                newY = this.options.bounce ? this.y + deltaY / 3 : newY > 0 ? 0 : this.maxScrollY;
	            }

	            this.directionX = deltaX > 0 ? -1 : deltaX < 0 ? 1 : 0;
	            this.directionY = deltaY > 0 ? -1 : deltaY < 0 ? 1 : 0;

	            if (!this.moved) {
	                this._execEvent('scrollStart');
	            }

	            this.moved = true;

	            this._translate(newX, newY);

	            /* REPLACE START: _move */
	            if (timestamp - this.startTime > 300) {
	                this.startTime = timestamp;
	                this.startX = this.x;
	                this.startY = this.y;

	                if (this.options.probeType == 1) {
	                    this._execEvent('scroll');
	                }
	            }

	            if (this.options.probeType > 1) {
	                this._execEvent('scroll');
	            }
	            /* REPLACE END: _move */
	        },

	        _end: function _end(e) {
	            if (!this.enabled || utils.eventType[e.type] !== this.initiated) {
	                return;
	            }

	            if (this.options.preventDefault && !utils.preventDefaultException(e.target, this.options.preventDefaultException)) {
	                e.preventDefault();
	            }

	            var point = e.changedTouches ? e.changedTouches[0] : e,
	                momentumX,
	                momentumY,
	                duration = utils.getTime() - this.startTime,
	                newX = Math.round(this.x),
	                newY = Math.round(this.y),
	                distanceX = Math.abs(newX - this.startX),
	                distanceY = Math.abs(newY - this.startY),
	                time = 0,
	                easing = '';

	            this.isInTransition = 0;
	            this.initiated = 0;
	            this.endTime = utils.getTime();

	            // reset if we are outside of the boundaries
	            if (this.resetPosition(this.options.bounceTime)) {
	                return;
	            }

	            this.scrollTo(newX, newY); // ensures that the last position is rounded

	            // we scrolled less than 10 pixels
	            if (!this.moved) {
	                if (this.options.tap) {
	                    utils.tap(e, this.options.tap);
	                }

	                if (this.options.click) {
	                    utils.click(e);
	                }

	                this._execEvent('scrollCancel');
	                return;
	            }

	            if (this._events.flick && duration < 200 && distanceX < 100 && distanceY < 100) {
	                this._execEvent('flick');
	                return;
	            }

	            // start momentum animation if needed
	            if (this.options.momentum && duration < 300) {
	                momentumX = this.hasHorizontalScroll ? utils.momentum(this.x, this.startX, duration, this.maxScrollX, this.options.bounce ? this.wrapperWidth : 0, this.options.deceleration) : {
	                    destination: newX,
	                    duration: 0
	                };
	                momentumY = this.hasVerticalScroll ? utils.momentum(this.y, this.startY, duration, this.maxScrollY, this.options.bounce ? this.wrapperHeight : 0, this.options.deceleration) : {
	                    destination: newY,
	                    duration: 0
	                };
	                newX = momentumX.destination;
	                newY = momentumY.destination;
	                time = Math.max(momentumX.duration, momentumY.duration);
	                this.isInTransition = 1;
	            }

	            if (this.options.snap) {
	                var snap = this._nearestSnap(newX, newY);
	                this.currentPage = snap;
	                time = this.options.snapSpeed || Math.max(Math.max(Math.min(Math.abs(newX - snap.x), 1000), Math.min(Math.abs(newY - snap.y), 1000)), 300);
	                newX = snap.x;
	                newY = snap.y;

	                this.directionX = 0;
	                this.directionY = 0;
	                easing = this.options.bounceEasing;
	            }

	            // INSERT POINT: _end

	            if (newX != this.x || newY != this.y) {
	                // change easing function when scroller goes out of the boundaries
	                if (newX > 0 || newX < this.maxScrollX || newY > 0 || newY < this.maxScrollY) {
	                    easing = utils.ease.quadratic;
	                }

	                this.scrollTo(newX, newY, time, easing);
	                return;
	            }

	            this._execEvent('scrollEnd');
	        },

	        _resize: function _resize() {
	            var that = this;

	            clearTimeout(this.resizeTimeout);

	            this.resizeTimeout = setTimeout(function () {
	                that.refresh();
	            }, this.options.resizePolling);
	        },

	        resetPosition: function resetPosition(time) {
	            var x = this.x,
	                y = this.y;

	            time = time || 0;

	            if (!this.hasHorizontalScroll || this.x > 0) {
	                x = 0;
	            } else if (this.x < this.maxScrollX) {
	                x = this.maxScrollX;
	            }

	            if (!this.hasVerticalScroll || this.y > 0) {
	                y = 0;
	            } else if (this.y < this.maxScrollY) {
	                y = this.maxScrollY;
	            }

	            if (x == this.x && y == this.y) {
	                return false;
	            }

	            this.scrollTo(x, y, time, this.options.bounceEasing);

	            return true;
	        },

	        disable: function disable() {
	            this.enabled = false;
	        },

	        enable: function enable() {
	            this.enabled = true;
	        },

	        refresh: function refresh() {
	            var rf = this.wrapper.offsetHeight; // Force reflow

	            this.wrapperWidth = this.wrapper.clientWidth;
	            this.wrapperHeight = this.wrapper.clientHeight;

	            /* REPLACE START: refresh */

	            this.scrollerWidth = this.scroller.offsetWidth;
	            this.scrollerHeight = this.scroller.offsetHeight;

	            this.maxScrollX = this.wrapperWidth - this.scrollerWidth;
	            this.maxScrollY = this.wrapperHeight - this.scrollerHeight;

	            /* REPLACE END: refresh */

	            this.hasHorizontalScroll = this.options.scrollX && this.maxScrollX < 0;
	            this.hasVerticalScroll = this.options.scrollY && this.maxScrollY < 0;

	            if (!this.hasHorizontalScroll) {
	                this.maxScrollX = 0;
	                this.scrollerWidth = this.wrapperWidth;
	            }

	            if (!this.hasVerticalScroll) {
	                this.maxScrollY = 0;
	                this.scrollerHeight = this.wrapperHeight;
	            }

	            this.endTime = 0;
	            this.directionX = 0;
	            this.directionY = 0;

	            this.wrapperOffset = utils.offset(this.wrapper);

	            this._execEvent('refresh');

	            this.resetPosition();

	            // INSERT POINT: _refresh
	        },

	        on: function on(type, fn) {
	            if (!this._events[type]) {
	                this._events[type] = [];
	            }

	            this._events[type].push(fn);
	        },

	        off: function off(type, fn) {
	            if (!this._events[type]) {
	                return;
	            }

	            var index = this._events[type].indexOf(fn);

	            if (index > -1) {
	                this._events[type].splice(index, 1);
	            }
	        },

	        _execEvent: function _execEvent(type) {
	            if (!this._events[type]) {
	                return;
	            }

	            var i = 0,
	                l = this._events[type].length;

	            if (!l) {
	                return;
	            }

	            for (; i < l; i++) {
	                this._events[type][i].apply(this, [].slice.call(arguments, 1));
	            }
	        },

	        scrollBy: function scrollBy(x, y, time, easing) {
	            x = this.x + x;
	            y = this.y + y;
	            time = time || 0;

	            this.scrollTo(x, y, time, easing);
	        },

	        scrollTo: function scrollTo(x, y, time, easing) {
	            easing = easing || utils.ease.circular;

	            this.isInTransition = this.options.useTransition && time > 0;

	            if (!time || this.options.useTransition && easing.style) {
	                this._transitionTimingFunction(easing.style);
	                this._transitionTime(time);
	                this._translate(x, y);
	            } else {
	                this._animate(x, y, time, easing.fn);
	            }
	        },

	        scrollToElement: function scrollToElement(el, time, offsetX, offsetY, easing) {
	            el = el.nodeType ? el : this.scroller.querySelector(el);

	            if (!el) {
	                return;
	            }

	            var pos = utils.offset(el);

	            pos.left -= this.wrapperOffset.left;
	            pos.top -= this.wrapperOffset.top;

	            // if offsetX/Y are true we center the element to the screen
	            if (offsetX === true) {
	                offsetX = Math.round(el.offsetWidth / 2 - this.wrapper.offsetWidth / 2);
	            }
	            if (offsetY === true) {
	                offsetY = Math.round(el.offsetHeight / 2 - this.wrapper.offsetHeight / 2);
	            }

	            pos.left -= offsetX || 0;
	            pos.top -= offsetY || 0;

	            pos.left = pos.left > 0 ? 0 : pos.left < this.maxScrollX ? this.maxScrollX : pos.left;
	            pos.top = pos.top > 0 ? 0 : pos.top < this.maxScrollY ? this.maxScrollY : pos.top;

	            time = time === undefined || time === null || time === 'auto' ? Math.max(Math.abs(this.x - pos.left), Math.abs(this.y - pos.top)) : time;

	            this.scrollTo(pos.left, pos.top, time, easing);
	        },

	        _transitionTime: function _transitionTime(time) {
	            time = time || 0;

	            this.scrollerStyle[utils.style.transitionDuration] = time + 'ms';

	            if (!time && utils.isBadAndroid) {
	                this.scrollerStyle[utils.style.transitionDuration] = '0.001s';
	            }

	            if (this.indicators) {
	                for (var i = this.indicators.length; i--;) {
	                    this.indicators[i].transitionTime(time);
	                }
	            }

	            // INSERT POINT: _transitionTime
	        },

	        _transitionTimingFunction: function _transitionTimingFunction(easing) {
	            this.scrollerStyle[utils.style.transitionTimingFunction] = easing;

	            if (this.indicators) {
	                for (var i = this.indicators.length; i--;) {
	                    this.indicators[i].transitionTimingFunction(easing);
	                }
	            }

	            // INSERT POINT: _transitionTimingFunction
	        },

	        _translate: function _translate(x, y) {
	            if (this.options.useTransform) {

	                /* REPLACE START: _translate */

	                this.scrollerStyle[utils.style.transform] = 'translate(' + x + 'px,' + y + 'px)' + this.translateZ;

	                /* REPLACE END: _translate */
	            } else {
	                x = Math.round(x);
	                y = Math.round(y);
	                this.scrollerStyle.left = x + 'px';
	                this.scrollerStyle.top = y + 'px';
	            }

	            this.x = x;
	            this.y = y;

	            if (this.indicators) {
	                for (var i = this.indicators.length; i--;) {
	                    this.indicators[i].updatePosition();
	                }
	            }

	            // INSERT POINT: _translate
	        },

	        _initEvents: function _initEvents(remove) {
	            var eventType = remove ? utils.removeEvent : utils.addEvent,
	                target = this.options.bindToWrapper ? this.wrapper : window;

	            eventType(window, 'orientationchange', this);
	            eventType(window, 'resize', this);

	            if (this.options.click) {
	                eventType(this.wrapper, 'click', this, true);
	            }

	            if (!this.options.disableMouse) {
	                eventType(this.wrapper, 'mousedown', this);
	                eventType(target, 'mousemove', this);
	                eventType(target, 'mousecancel', this);
	                eventType(target, 'mouseup', this);
	            }

	            if (utils.hasPointer && !this.options.disablePointer) {
	                eventType(this.wrapper, utils.prefixPointerEvent('pointerdown'), this);
	                eventType(target, utils.prefixPointerEvent('pointermove'), this);
	                eventType(target, utils.prefixPointerEvent('pointercancel'), this);
	                eventType(target, utils.prefixPointerEvent('pointerup'), this);
	            }

	            if (utils.hasTouch && !this.options.disableTouch) {
	                eventType(this.wrapper, 'touchstart', this);
	                eventType(target, 'touchmove', this);
	                eventType(target, 'touchcancel', this);
	                eventType(target, 'touchend', this);
	            }

	            eventType(this.scroller, 'transitionend', this);
	            eventType(this.scroller, 'webkitTransitionEnd', this);
	            eventType(this.scroller, 'oTransitionEnd', this);
	            eventType(this.scroller, 'MSTransitionEnd', this);
	        },

	        getComputedPosition: function getComputedPosition() {
	            var matrix = window.getComputedStyle(this.scroller, null),
	                x,
	                y;

	            if (this.options.useTransform) {
	                matrix = matrix[utils.style.transform].split(')')[0].split(', ');
	                x = +(matrix[12] || matrix[4]);
	                y = +(matrix[13] || matrix[5]);
	            } else {
	                x = +matrix.left.replace(/[^-\d.]/g, '');
	                y = +matrix.top.replace(/[^-\d.]/g, '');
	            }

	            return {
	                x: x,
	                y: y
	            };
	        },

	        _initIndicators: function _initIndicators() {
	            var interactive = this.options.interactiveScrollbars,
	                customStyle = typeof this.options.scrollbars != 'string',
	                indicators = [],
	                indicator;

	            var that = this;

	            this.indicators = [];

	            if (this.options.scrollbars) {
	                // Vertical scrollbar
	                if (this.options.scrollY) {
	                    indicator = {
	                        el: createDefaultScrollbar('v', interactive, this.options.scrollbars),
	                        interactive: interactive,
	                        defaultScrollbars: true,
	                        customStyle: customStyle,
	                        resize: this.options.resizeScrollbars,
	                        shrink: this.options.shrinkScrollbars,
	                        fade: this.options.fadeScrollbars,
	                        listenX: false
	                    };

	                    this.wrapper.appendChild(indicator.el);
	                    indicators.push(indicator);
	                }

	                // Horizontal scrollbar
	                if (this.options.scrollX) {
	                    indicator = {
	                        el: createDefaultScrollbar('h', interactive, this.options.scrollbars),
	                        interactive: interactive,
	                        defaultScrollbars: true,
	                        customStyle: customStyle,
	                        resize: this.options.resizeScrollbars,
	                        shrink: this.options.shrinkScrollbars,
	                        fade: this.options.fadeScrollbars,
	                        listenY: false
	                    };

	                    this.wrapper.appendChild(indicator.el);
	                    indicators.push(indicator);
	                }
	            }

	            if (this.options.indicators) {
	                // TODO: check concat compatibility
	                indicators = indicators.concat(this.options.indicators);
	            }

	            for (var i = indicators.length; i--;) {
	                this.indicators.push(new Indicator(this, indicators[i]));
	            }

	            // TODO: check if we can use array.map (wide compatibility and performance issues)
	            function _indicatorsMap(fn) {
	                for (var i = that.indicators.length; i--;) {
	                    fn.call(that.indicators[i]);
	                }
	            }

	            if (this.options.fadeScrollbars) {
	                this.on('scrollEnd', function () {
	                    _indicatorsMap(function () {
	                        this.fade();
	                    });
	                });

	                this.on('scrollCancel', function () {
	                    _indicatorsMap(function () {
	                        this.fade();
	                    });
	                });

	                this.on('scrollStart', function () {
	                    _indicatorsMap(function () {
	                        this.fade(1);
	                    });
	                });

	                this.on('beforeScrollStart', function () {
	                    _indicatorsMap(function () {
	                        this.fade(1, true);
	                    });
	                });
	            }

	            this.on('refresh', function () {
	                _indicatorsMap(function () {
	                    this.refresh();
	                });
	            });

	            this.on('destroy', function () {
	                _indicatorsMap(function () {
	                    this.destroy();
	                });

	                delete this.indicators;
	            });
	        },

	        _initWheel: function _initWheel() {
	            utils.addEvent(this.wrapper, 'wheel', this);
	            utils.addEvent(this.wrapper, 'mousewheel', this);
	            utils.addEvent(this.wrapper, 'DOMMouseScroll', this);

	            this.on('destroy', function () {
	                utils.removeEvent(this.wrapper, 'wheel', this);
	                utils.removeEvent(this.wrapper, 'mousewheel', this);
	                utils.removeEvent(this.wrapper, 'DOMMouseScroll', this);
	            });
	        },

	        _wheel: function _wheel(e) {
	            if (!this.enabled) {
	                return;
	            }

	            e.preventDefault();
	            e.stopPropagation();

	            var wheelDeltaX,
	                wheelDeltaY,
	                newX,
	                newY,
	                that = this;

	            if (this.wheelTimeout === undefined) {
	                that._execEvent('scrollStart');
	            }

	            // Execute the scrollEnd event after 400ms the wheel stopped scrolling
	            clearTimeout(this.wheelTimeout);
	            this.wheelTimeout = setTimeout(function () {
	                that._execEvent('scrollEnd');
	                that.wheelTimeout = undefined;
	            }, 400);

	            if ('deltaX' in e) {
	                if (e.deltaMode === 1) {
	                    wheelDeltaX = -e.deltaX * this.options.mouseWheelSpeed;
	                    wheelDeltaY = -e.deltaY * this.options.mouseWheelSpeed;
	                } else {
	                    wheelDeltaX = -e.deltaX;
	                    wheelDeltaY = -e.deltaY;
	                }
	            } else if ('wheelDeltaX' in e) {
	                wheelDeltaX = e.wheelDeltaX / 120 * this.options.mouseWheelSpeed;
	                wheelDeltaY = e.wheelDeltaY / 120 * this.options.mouseWheelSpeed;
	            } else if ('wheelDelta' in e) {
	                wheelDeltaX = wheelDeltaY = e.wheelDelta / 120 * this.options.mouseWheelSpeed;
	            } else if ('detail' in e) {
	                wheelDeltaX = wheelDeltaY = -e.detail / 3 * this.options.mouseWheelSpeed;
	            } else {
	                return;
	            }

	            wheelDeltaX *= this.options.invertWheelDirection;
	            wheelDeltaY *= this.options.invertWheelDirection;

	            if (!this.hasVerticalScroll) {
	                wheelDeltaX = wheelDeltaY;
	                wheelDeltaY = 0;
	            }

	            if (this.options.snap) {
	                newX = this.currentPage.pageX;
	                newY = this.currentPage.pageY;

	                if (wheelDeltaX > 0) {
	                    newX--;
	                } else if (wheelDeltaX < 0) {
	                    newX++;
	                }

	                if (wheelDeltaY > 0) {
	                    newY--;
	                } else if (wheelDeltaY < 0) {
	                    newY++;
	                }

	                this.goToPage(newX, newY);

	                return;
	            }

	            newX = this.x + Math.round(this.hasHorizontalScroll ? wheelDeltaX : 0);
	            newY = this.y + Math.round(this.hasVerticalScroll ? wheelDeltaY : 0);

	            if (newX > 0) {
	                newX = 0;
	            } else if (newX < this.maxScrollX) {
	                newX = this.maxScrollX;
	            }

	            if (newY > 0) {
	                newY = 0;
	            } else if (newY < this.maxScrollY) {
	                newY = this.maxScrollY;
	            }

	            this.scrollTo(newX, newY, 0);

	            if (this.options.probeType > 1) {
	                this._execEvent('scroll');
	            }

	            // INSERT POINT: _wheel
	        },

	        _initSnap: function _initSnap() {
	            this.currentPage = {};

	            if (typeof this.options.snap == 'string') {
	                this.options.snap = this.scroller.querySelectorAll(this.options.snap);
	            }

	            this.on('refresh', function () {
	                var i = 0,
	                    l,
	                    m = 0,
	                    n,
	                    cx,
	                    cy,
	                    x = 0,
	                    y,
	                    stepX = this.options.snapStepX || this.wrapperWidth,
	                    stepY = this.options.snapStepY || this.wrapperHeight,
	                    el;

	                this.pages = [];

	                if (!this.wrapperWidth || !this.wrapperHeight || !this.scrollerWidth || !this.scrollerHeight) {
	                    return;
	                }

	                if (this.options.snap === true) {
	                    cx = Math.round(stepX / 2);
	                    cy = Math.round(stepY / 2);

	                    while (x > -this.scrollerWidth) {
	                        this.pages[i] = [];
	                        l = 0;
	                        y = 0;

	                        while (y > -this.scrollerHeight) {
	                            this.pages[i][l] = {
	                                x: Math.max(x, this.maxScrollX),
	                                y: Math.max(y, this.maxScrollY),
	                                width: stepX,
	                                height: stepY,
	                                cx: x - cx,
	                                cy: y - cy
	                            };

	                            y -= stepY;
	                            l++;
	                        }

	                        x -= stepX;
	                        i++;
	                    }
	                } else {
	                    el = this.options.snap;
	                    l = el.length;
	                    n = -1;

	                    for (; i < l; i++) {
	                        if (i === 0 || el[i].offsetLeft <= el[i - 1].offsetLeft) {
	                            m = 0;
	                            n++;
	                        }

	                        if (!this.pages[m]) {
	                            this.pages[m] = [];
	                        }

	                        x = Math.max(-el[i].offsetLeft, this.maxScrollX);
	                        y = Math.max(-el[i].offsetTop, this.maxScrollY);
	                        cx = x - Math.round(el[i].offsetWidth / 2);
	                        cy = y - Math.round(el[i].offsetHeight / 2);

	                        this.pages[m][n] = {
	                            x: x,
	                            y: y,
	                            width: el[i].offsetWidth,
	                            height: el[i].offsetHeight,
	                            cx: cx,
	                            cy: cy
	                        };

	                        if (x > this.maxScrollX) {
	                            m++;
	                        }
	                    }
	                }

	                this.goToPage(this.currentPage.pageX || 0, this.currentPage.pageY || 0, 0);

	                // Update snap threshold if needed
	                if (this.options.snapThreshold % 1 === 0) {
	                    this.snapThresholdX = this.options.snapThreshold;
	                    this.snapThresholdY = this.options.snapThreshold;
	                } else {
	                    this.snapThresholdX = Math.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].width * this.options.snapThreshold);
	                    this.snapThresholdY = Math.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].height * this.options.snapThreshold);
	                }
	            });

	            this.on('flick', function () {
	                var time = this.options.snapSpeed || Math.max(Math.max(Math.min(Math.abs(this.x - this.startX), 1000), Math.min(Math.abs(this.y - this.startY), 1000)), 300);

	                this.goToPage(this.currentPage.pageX + this.directionX, this.currentPage.pageY + this.directionY, time);
	            });
	        },

	        _nearestSnap: function _nearestSnap(x, y) {
	            if (!this.pages.length) {
	                return {
	                    x: 0,
	                    y: 0,
	                    pageX: 0,
	                    pageY: 0
	                };
	            }

	            var i = 0,
	                l = this.pages.length,
	                m = 0;

	            // Check if we exceeded the snap threshold
	            if (Math.abs(x - this.absStartX) < this.snapThresholdX && Math.abs(y - this.absStartY) < this.snapThresholdY) {
	                return this.currentPage;
	            }

	            if (x > 0) {
	                x = 0;
	            } else if (x < this.maxScrollX) {
	                x = this.maxScrollX;
	            }

	            if (y > 0) {
	                y = 0;
	            } else if (y < this.maxScrollY) {
	                y = this.maxScrollY;
	            }

	            for (; i < l; i++) {
	                if (x >= this.pages[i][0].cx) {
	                    x = this.pages[i][0].x;
	                    break;
	                }
	            }

	            l = this.pages[i].length;

	            for (; m < l; m++) {
	                if (y >= this.pages[0][m].cy) {
	                    y = this.pages[0][m].y;
	                    break;
	                }
	            }

	            if (i == this.currentPage.pageX) {
	                i += this.directionX;

	                if (i < 0) {
	                    i = 0;
	                } else if (i >= this.pages.length) {
	                    i = this.pages.length - 1;
	                }

	                x = this.pages[i][0].x;
	            }

	            if (m == this.currentPage.pageY) {
	                m += this.directionY;

	                if (m < 0) {
	                    m = 0;
	                } else if (m >= this.pages[0].length) {
	                    m = this.pages[0].length - 1;
	                }

	                y = this.pages[0][m].y;
	            }

	            return {
	                x: x,
	                y: y,
	                pageX: i,
	                pageY: m
	            };
	        },

	        goToPage: function goToPage(x, y, time, easing) {
	            easing = easing || this.options.bounceEasing;

	            if (x >= this.pages.length) {
	                x = this.pages.length - 1;
	            } else if (x < 0) {
	                x = 0;
	            }

	            if (y >= this.pages[x].length) {
	                y = this.pages[x].length - 1;
	            } else if (y < 0) {
	                y = 0;
	            }

	            var posX = this.pages[x][y].x,
	                posY = this.pages[x][y].y;

	            time = time === undefined ? this.options.snapSpeed || Math.max(Math.max(Math.min(Math.abs(posX - this.x), 1000), Math.min(Math.abs(posY - this.y), 1000)), 300) : time;

	            this.currentPage = {
	                x: posX,
	                y: posY,
	                pageX: x,
	                pageY: y
	            };

	            this.scrollTo(posX, posY, time, easing);
	        },

	        next: function next(time, easing) {
	            var x = this.currentPage.pageX,
	                y = this.currentPage.pageY;

	            x++;

	            if (x >= this.pages.length && this.hasVerticalScroll) {
	                x = 0;
	                y++;
	            }

	            this.goToPage(x, y, time, easing);
	        },

	        prev: function prev(time, easing) {
	            var x = this.currentPage.pageX,
	                y = this.currentPage.pageY;

	            x--;

	            if (x < 0 && this.hasVerticalScroll) {
	                x = 0;
	                y--;
	            }

	            this.goToPage(x, y, time, easing);
	        },

	        _initKeys: function _initKeys(e) {
	            // default key bindings
	            var keys = {
	                pageUp: 33,
	                pageDown: 34,
	                end: 35,
	                home: 36,
	                left: 37,
	                up: 38,
	                right: 39,
	                down: 40
	            };
	            var i;

	            // if you give me characters I give you keycode
	            if (_typeof(this.options.keyBindings) == 'object') {
	                for (i in this.options.keyBindings) {
	                    if (typeof this.options.keyBindings[i] == 'string') {
	                        this.options.keyBindings[i] = this.options.keyBindings[i].toUpperCase().charCodeAt(0);
	                    }
	                }
	            } else {
	                this.options.keyBindings = {};
	            }

	            for (i in keys) {
	                this.options.keyBindings[i] = this.options.keyBindings[i] || keys[i];
	            }

	            utils.addEvent(window, 'keydown', this);

	            this.on('destroy', function () {
	                utils.removeEvent(window, 'keydown', this);
	            });
	        },

	        _key: function _key(e) {
	            if (!this.enabled) {
	                return;
	            }

	            var snap = this.options.snap,
	                // we are using this alot, better to cache it
	            newX = snap ? this.currentPage.pageX : this.x,
	                newY = snap ? this.currentPage.pageY : this.y,
	                now = utils.getTime(),
	                prevTime = this.keyTime || 0,
	                acceleration = 0.250,
	                pos;

	            if (this.options.useTransition && this.isInTransition) {
	                pos = this.getComputedPosition();

	                this._translate(Math.round(pos.x), Math.round(pos.y));
	                this.isInTransition = false;
	            }

	            this.keyAcceleration = now - prevTime < 200 ? Math.min(this.keyAcceleration + acceleration, 50) : 0;

	            switch (e.keyCode) {
	                case this.options.keyBindings.pageUp:
	                    if (this.hasHorizontalScroll && !this.hasVerticalScroll) {
	                        newX += snap ? 1 : this.wrapperWidth;
	                    } else {
	                        newY += snap ? 1 : this.wrapperHeight;
	                    }
	                    break;
	                case this.options.keyBindings.pageDown:
	                    if (this.hasHorizontalScroll && !this.hasVerticalScroll) {
	                        newX -= snap ? 1 : this.wrapperWidth;
	                    } else {
	                        newY -= snap ? 1 : this.wrapperHeight;
	                    }
	                    break;
	                case this.options.keyBindings.end:
	                    newX = snap ? this.pages.length - 1 : this.maxScrollX;
	                    newY = snap ? this.pages[0].length - 1 : this.maxScrollY;
	                    break;
	                case this.options.keyBindings.home:
	                    newX = 0;
	                    newY = 0;
	                    break;
	                case this.options.keyBindings.left:
	                    newX += snap ? -1 : 5 + this.keyAcceleration >> 0;
	                    break;
	                case this.options.keyBindings.up:
	                    newY += snap ? 1 : 5 + this.keyAcceleration >> 0;
	                    break;
	                case this.options.keyBindings.right:
	                    newX -= snap ? -1 : 5 + this.keyAcceleration >> 0;
	                    break;
	                case this.options.keyBindings.down:
	                    newY -= snap ? 1 : 5 + this.keyAcceleration >> 0;
	                    break;
	                default:
	                    return;
	            }

	            if (snap) {
	                this.goToPage(newX, newY);
	                return;
	            }

	            if (newX > 0) {
	                newX = 0;
	                this.keyAcceleration = 0;
	            } else if (newX < this.maxScrollX) {
	                newX = this.maxScrollX;
	                this.keyAcceleration = 0;
	            }

	            if (newY > 0) {
	                newY = 0;
	                this.keyAcceleration = 0;
	            } else if (newY < this.maxScrollY) {
	                newY = this.maxScrollY;
	                this.keyAcceleration = 0;
	            }

	            this.scrollTo(newX, newY, 0);

	            this.keyTime = now;
	        },

	        _animate: function _animate(destX, destY, duration, easingFn) {
	            var that = this,
	                startX = this.x,
	                startY = this.y,
	                startTime = utils.getTime(),
	                destTime = startTime + duration;

	            function step() {
	                var now = utils.getTime(),
	                    newX,
	                    newY,
	                    easing;

	                if (now >= destTime) {
	                    that.isAnimating = false;
	                    that._translate(destX, destY);

	                    if (!that.resetPosition(that.options.bounceTime)) {
	                        that._execEvent('scrollEnd');
	                    }

	                    return;
	                }

	                now = (now - startTime) / duration;
	                easing = easingFn(now);
	                newX = (destX - startX) * easing + startX;
	                newY = (destY - startY) * easing + startY;
	                that._translate(newX, newY);

	                if (that.isAnimating) {
	                    rAF(step);
	                }

	                if (that.options.probeType == 3) {
	                    that._execEvent('scroll');
	                }
	            }

	            this.isAnimating = true;
	            step();
	        },

	        handleEvent: function handleEvent(e) {
	            switch (e.type) {
	                case 'touchstart':
	                case 'pointerdown':
	                case 'MSPointerDown':
	                case 'mousedown':
	                    this._start(e);
	                    break;
	                case 'touchmove':
	                case 'pointermove':
	                case 'MSPointerMove':
	                case 'mousemove':
	                    this._move(e);
	                    break;
	                case 'touchend':
	                case 'pointerup':
	                case 'MSPointerUp':
	                case 'mouseup':
	                case 'touchcancel':
	                case 'pointercancel':
	                case 'MSPointerCancel':
	                case 'mousecancel':
	                    this._end(e);
	                    break;
	                case 'orientationchange':
	                case 'resize':
	                    this._resize();
	                    break;
	                case 'transitionend':
	                case 'webkitTransitionEnd':
	                case 'oTransitionEnd':
	                case 'MSTransitionEnd':
	                    this._transitionEnd(e);
	                    break;
	                case 'wheel':
	                case 'DOMMouseScroll':
	                case 'mousewheel':
	                    this._wheel(e);
	                    break;
	                case 'keydown':
	                    this._key(e);
	                    break;
	                case 'click':
	                    if (!e._constructed) {
	                        e.preventDefault();
	                        e.stopPropagation();
	                    }
	                    break;
	            }
	        }
	    };

	    function createDefaultScrollbar(direction, interactive, type) {
	        var scrollbar = document.createElement('div'),
	            indicator = document.createElement('div');

	        if (type === true) {
	            scrollbar.style.cssText = 'position:absolute;z-index:9999';
	            indicator.style.cssText = '-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);border-radius:3px';
	        }

	        indicator.className = 'iScrollIndicator';

	        if (direction == 'h') {
	            if (type === true) {
	                scrollbar.style.cssText += ';height:7px;left:2px;right:2px;bottom:0';
	                indicator.style.height = '100%';
	            }
	            scrollbar.className = 'iScrollHorizontalScrollbar';
	        } else {
	            if (type === true) {
	                scrollbar.style.cssText += ';width:7px;bottom:2px;top:2px;right:1px';
	                indicator.style.width = '100%';
	            }
	            scrollbar.className = 'iScrollVerticalScrollbar';
	        }

	        scrollbar.style.cssText += ';overflow:hidden';

	        if (!interactive) {
	            scrollbar.style.pointerEvents = 'none';
	        }

	        scrollbar.appendChild(indicator);

	        return scrollbar;
	    }

	    function Indicator(scroller, options) {
	        this.wrapper = typeof options.el == 'string' ? document.querySelector(options.el) : options.el;
	        this.wrapperStyle = this.wrapper.style;
	        this.indicator = this.wrapper.children[0];
	        this.indicatorStyle = this.indicator.style;
	        this.scroller = scroller;

	        this.options = {
	            listenX: true,
	            listenY: true,
	            interactive: false,
	            resize: true,
	            defaultScrollbars: false,
	            shrink: false,
	            fade: false,
	            speedRatioX: 0,
	            speedRatioY: 0
	        };

	        for (var i in options) {
	            this.options[i] = options[i];
	        }

	        this.sizeRatioX = 1;
	        this.sizeRatioY = 1;
	        this.maxPosX = 0;
	        this.maxPosY = 0;

	        if (this.options.interactive) {
	            if (!this.options.disableTouch) {
	                utils.addEvent(this.indicator, 'touchstart', this);
	                utils.addEvent(window, 'touchend', this);
	            }
	            if (!this.options.disablePointer) {
	                utils.addEvent(this.indicator, utils.prefixPointerEvent('pointerdown'), this);
	                utils.addEvent(window, utils.prefixPointerEvent('pointerup'), this);
	            }
	            if (!this.options.disableMouse) {
	                utils.addEvent(this.indicator, 'mousedown', this);
	                utils.addEvent(window, 'mouseup', this);
	            }
	        }

	        if (this.options.fade) {
	            this.wrapperStyle[utils.style.transform] = this.scroller.translateZ;
	            this.wrapperStyle[utils.style.transitionDuration] = utils.isBadAndroid ? '0.001s' : '0ms';
	            this.wrapperStyle.opacity = '0';
	        }
	    }

	    Indicator.prototype = {
	        handleEvent: function handleEvent(e) {
	            switch (e.type) {
	                case 'touchstart':
	                case 'pointerdown':
	                case 'MSPointerDown':
	                case 'mousedown':
	                    this._start(e);
	                    break;
	                case 'touchmove':
	                case 'pointermove':
	                case 'MSPointerMove':
	                case 'mousemove':
	                    this._move(e);
	                    break;
	                case 'touchend':
	                case 'pointerup':
	                case 'MSPointerUp':
	                case 'mouseup':
	                case 'touchcancel':
	                case 'pointercancel':
	                case 'MSPointerCancel':
	                case 'mousecancel':
	                    this._end(e);
	                    break;
	            }
	        },

	        destroy: function destroy() {
	            if (this.options.interactive) {
	                utils.removeEvent(this.indicator, 'touchstart', this);
	                utils.removeEvent(this.indicator, utils.prefixPointerEvent('pointerdown'), this);
	                utils.removeEvent(this.indicator, 'mousedown', this);

	                utils.removeEvent(window, 'touchmove', this);
	                utils.removeEvent(window, utils.prefixPointerEvent('pointermove'), this);
	                utils.removeEvent(window, 'mousemove', this);

	                utils.removeEvent(window, 'touchend', this);
	                utils.removeEvent(window, utils.prefixPointerEvent('pointerup'), this);
	                utils.removeEvent(window, 'mouseup', this);
	            }

	            if (this.options.defaultScrollbars) {
	                this.wrapper.parentNode.removeChild(this.wrapper);
	            }
	        },

	        _start: function _start(e) {
	            var point = e.touches ? e.touches[0] : e;

	            e.preventDefault();
	            e.stopPropagation();

	            this.transitionTime();

	            this.initiated = true;
	            this.moved = false;
	            this.lastPointX = point.pageX;
	            this.lastPointY = point.pageY;

	            this.startTime = utils.getTime();

	            if (!this.options.disableTouch) {
	                utils.addEvent(window, 'touchmove', this);
	            }
	            if (!this.options.disablePointer) {
	                utils.addEvent(window, utils.prefixPointerEvent('pointermove'), this);
	            }
	            if (!this.options.disableMouse) {
	                utils.addEvent(window, 'mousemove', this);
	            }

	            this.scroller._execEvent('beforeScrollStart');
	        },

	        _move: function _move(e) {
	            var point = e.touches ? e.touches[0] : e,
	                deltaX,
	                deltaY,
	                newX,
	                newY,
	                timestamp = utils.getTime();

	            if (!this.moved) {
	                this.scroller._execEvent('scrollStart');
	            }

	            this.moved = true;

	            deltaX = point.pageX - this.lastPointX;
	            this.lastPointX = point.pageX;

	            deltaY = point.pageY - this.lastPointY;
	            this.lastPointY = point.pageY;

	            newX = this.x + deltaX;
	            newY = this.y + deltaY;

	            this._pos(newX, newY);

	            if (this.scroller.options.probeType == 1 && timestamp - this.startTime > 300) {
	                this.startTime = timestamp;
	                this.scroller._execEvent('scroll');
	            } else if (this.scroller.options.probeType > 1) {
	                this.scroller._execEvent('scroll');
	            }

	            // INSERT POINT: indicator._move

	            e.preventDefault();
	            e.stopPropagation();
	        },

	        _end: function _end(e) {
	            if (!this.initiated) {
	                return;
	            }

	            this.initiated = false;

	            e.preventDefault();
	            e.stopPropagation();

	            utils.removeEvent(window, 'touchmove', this);
	            utils.removeEvent(window, utils.prefixPointerEvent('pointermove'), this);
	            utils.removeEvent(window, 'mousemove', this);

	            if (this.scroller.options.snap) {
	                var snap = this.scroller._nearestSnap(this.scroller.x, this.scroller.y);

	                var time = this.options.snapSpeed || Math.max(Math.max(Math.min(Math.abs(this.scroller.x - snap.x), 1000), Math.min(Math.abs(this.scroller.y - snap.y), 1000)), 300);

	                if (this.scroller.x != snap.x || this.scroller.y != snap.y) {
	                    this.scroller.directionX = 0;
	                    this.scroller.directionY = 0;
	                    this.scroller.currentPage = snap;
	                    this.scroller.scrollTo(snap.x, snap.y, time, this.scroller.options.bounceEasing);
	                }
	            }

	            if (this.moved) {
	                this.scroller._execEvent('scrollEnd');
	            }
	        },

	        transitionTime: function transitionTime(time) {
	            time = time || 0;
	            this.indicatorStyle[utils.style.transitionDuration] = time + 'ms';

	            if (!time && utils.isBadAndroid) {
	                this.indicatorStyle[utils.style.transitionDuration] = '0.001s';
	            }
	        },

	        transitionTimingFunction: function transitionTimingFunction(easing) {
	            this.indicatorStyle[utils.style.transitionTimingFunction] = easing;
	        },

	        refresh: function refresh() {
	            this.transitionTime();

	            if (this.options.listenX && !this.options.listenY) {
	                this.indicatorStyle.display = this.scroller.hasHorizontalScroll ? 'block' : 'none';
	            } else if (this.options.listenY && !this.options.listenX) {
	                this.indicatorStyle.display = this.scroller.hasVerticalScroll ? 'block' : 'none';
	            } else {
	                this.indicatorStyle.display = this.scroller.hasHorizontalScroll || this.scroller.hasVerticalScroll ? 'block' : 'none';
	            }

	            if (this.scroller.hasHorizontalScroll && this.scroller.hasVerticalScroll) {
	                utils.addClass(this.wrapper, 'iScrollBothScrollbars');
	                utils.removeClass(this.wrapper, 'iScrollLoneScrollbar');

	                if (this.options.defaultScrollbars && this.options.customStyle) {
	                    if (this.options.listenX) {
	                        this.wrapper.style.right = '8px';
	                    } else {
	                        this.wrapper.style.bottom = '8px';
	                    }
	                }
	            } else {
	                utils.removeClass(this.wrapper, 'iScrollBothScrollbars');
	                utils.addClass(this.wrapper, 'iScrollLoneScrollbar');

	                if (this.options.defaultScrollbars && this.options.customStyle) {
	                    if (this.options.listenX) {
	                        this.wrapper.style.right = '2px';
	                    } else {
	                        this.wrapper.style.bottom = '2px';
	                    }
	                }
	            }

	            var r = this.wrapper.offsetHeight; // force refresh

	            if (this.options.listenX) {
	                this.wrapperWidth = this.wrapper.clientWidth;
	                if (this.options.resize) {
	                    this.indicatorWidth = Math.max(Math.round(this.wrapperWidth * this.wrapperWidth / (this.scroller.scrollerWidth || this.wrapperWidth || 1)), 8);
	                    this.indicatorStyle.width = this.indicatorWidth + 'px';
	                } else {
	                    this.indicatorWidth = this.indicator.clientWidth;
	                }

	                this.maxPosX = this.wrapperWidth - this.indicatorWidth;

	                if (this.options.shrink == 'clip') {
	                    this.minBoundaryX = -this.indicatorWidth + 8;
	                    this.maxBoundaryX = this.wrapperWidth - 8;
	                } else {
	                    this.minBoundaryX = 0;
	                    this.maxBoundaryX = this.maxPosX;
	                }

	                this.sizeRatioX = this.options.speedRatioX || this.scroller.maxScrollX && this.maxPosX / this.scroller.maxScrollX;
	            }

	            if (this.options.listenY) {
	                this.wrapperHeight = this.wrapper.clientHeight;
	                if (this.options.resize) {
	                    this.indicatorHeight = Math.max(Math.round(this.wrapperHeight * this.wrapperHeight / (this.scroller.scrollerHeight || this.wrapperHeight || 1)), 8);
	                    this.indicatorStyle.height = this.indicatorHeight + 'px';
	                } else {
	                    this.indicatorHeight = this.indicator.clientHeight;
	                }

	                this.maxPosY = this.wrapperHeight - this.indicatorHeight;

	                if (this.options.shrink == 'clip') {
	                    this.minBoundaryY = -this.indicatorHeight + 8;
	                    this.maxBoundaryY = this.wrapperHeight - 8;
	                } else {
	                    this.minBoundaryY = 0;
	                    this.maxBoundaryY = this.maxPosY;
	                }

	                this.maxPosY = this.wrapperHeight - this.indicatorHeight;
	                this.sizeRatioY = this.options.speedRatioY || this.scroller.maxScrollY && this.maxPosY / this.scroller.maxScrollY;
	            }

	            this.updatePosition();
	        },

	        updatePosition: function updatePosition() {
	            var x = this.options.listenX && Math.round(this.sizeRatioX * this.scroller.x) || 0,
	                y = this.options.listenY && Math.round(this.sizeRatioY * this.scroller.y) || 0;

	            if (!this.options.ignoreBoundaries) {
	                if (x < this.minBoundaryX) {
	                    if (this.options.shrink == 'scale') {
	                        this.width = Math.max(this.indicatorWidth + x, 8);
	                        this.indicatorStyle.width = this.width + 'px';
	                    }
	                    x = this.minBoundaryX;
	                } else if (x > this.maxBoundaryX) {
	                    if (this.options.shrink == 'scale') {
	                        this.width = Math.max(this.indicatorWidth - (x - this.maxPosX), 8);
	                        this.indicatorStyle.width = this.width + 'px';
	                        x = this.maxPosX + this.indicatorWidth - this.width;
	                    } else {
	                        x = this.maxBoundaryX;
	                    }
	                } else if (this.options.shrink == 'scale' && this.width != this.indicatorWidth) {
	                    this.width = this.indicatorWidth;
	                    this.indicatorStyle.width = this.width + 'px';
	                }

	                if (y < this.minBoundaryY) {
	                    if (this.options.shrink == 'scale') {
	                        this.height = Math.max(this.indicatorHeight + y * 3, 8);
	                        this.indicatorStyle.height = this.height + 'px';
	                    }
	                    y = this.minBoundaryY;
	                } else if (y > this.maxBoundaryY) {
	                    if (this.options.shrink == 'scale') {
	                        this.height = Math.max(this.indicatorHeight - (y - this.maxPosY) * 3, 8);
	                        this.indicatorStyle.height = this.height + 'px';
	                        y = this.maxPosY + this.indicatorHeight - this.height;
	                    } else {
	                        y = this.maxBoundaryY;
	                    }
	                } else if (this.options.shrink == 'scale' && this.height != this.indicatorHeight) {
	                    this.height = this.indicatorHeight;
	                    this.indicatorStyle.height = this.height + 'px';
	                }
	            }

	            this.x = x;
	            this.y = y;

	            if (this.scroller.options.useTransform) {
	                this.indicatorStyle[utils.style.transform] = 'translate(' + x + 'px,' + y + 'px)' + this.scroller.translateZ;
	            } else {
	                this.indicatorStyle.left = x + 'px';
	                this.indicatorStyle.top = y + 'px';
	            }
	        },

	        _pos: function _pos(x, y) {
	            if (x < 0) {
	                x = 0;
	            } else if (x > this.maxPosX) {
	                x = this.maxPosX;
	            }

	            if (y < 0) {
	                y = 0;
	            } else if (y > this.maxPosY) {
	                y = this.maxPosY;
	            }

	            x = this.options.listenX ? Math.round(x / this.sizeRatioX) : this.scroller.x;
	            y = this.options.listenY ? Math.round(y / this.sizeRatioY) : this.scroller.y;

	            this.scroller.scrollTo(x, y);
	        },

	        fade: function fade(val, hold) {
	            if (hold && !this.visible) {
	                return;
	            }

	            clearTimeout(this.fadeTimeout);
	            this.fadeTimeout = null;

	            var time = val ? 250 : 500,
	                delay = val ? 0 : 300;

	            val = val ? '1' : '0';

	            this.wrapperStyle[utils.style.transitionDuration] = time + 'ms';

	            this.fadeTimeout = setTimeout(function (val) {
	                this.wrapperStyle.opacity = val;
	                this.visible = +val;
	            }.bind(this, val), delay);
	        }
	    };

	    if (typeof module != 'undefined' && module.exports) {
	        module.exports = IScroll;
	    } else if (true) {
	        !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
	            return IScroll;
	        }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else {
	        window.IScroll = IScroll;
	    }
	})();

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _WrcIScroll = __webpack_require__(9);

	var _WrcIScroll2 = _interopRequireDefault(_WrcIScroll);

	__webpack_require__(11);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * @file
	 * @author
	 * baidu.inc
	 */
	/**
	 * @module WrcIosselect
	 */
	var iosSelectUtil = {
		isArray: function isArray(arg1) {
			return Object.prototype.toString.call(arg1) === '[object Array]';
		},
		isFunction: function isFunction(arg1) {
			return typeof arg1 === 'function';
		},
		attrToData: function attrToData(dom, index) {
			var obj = {};
			for (var p in dom.dataset) {
				obj[p] = dom.dataset[p];
			}
			obj['dom'] = dom;
			obj['atindex'] = index;
			return obj;
		},
		attrToHtml: function attrToHtml(obj) {
			var html = '';
			for (var p in obj) {
				html += 'data-' + p + '="' + obj[p] + '"';
			}
			return html;
		}
	};
	// Layer
	function Layer(html, opts) {
		if (!(this instanceof Layer)) {
			return new Layer(html, opts);
		}
		this.html = html;
		this.opts = opts;
		var el = document.createElement('div');
		el.className = 'olay';
		// var layer_el = $('<div class="layer"></div>');
		var layer_el = document.createElement('div');
		layer_el.className = 'layer';
		this.el = el;
		this.layer_el = layer_el;
		this.init();
	}
	Layer.prototype = {
		init: function init() {
			this.layer_el.innerHTML = this.html;
			if (this.opts.container && document.querySelector(this.opts.container)) {
				document.querySelector(this.opts.container).appendChild(this.el);
			} else {
				document.body.appendChild(this.el);
			}
			this.el.appendChild(this.layer_el);
			this.el.style.height = Math.max(document.documentElement.getBoundingClientRect().height, window.innerHeight);
			if (this.opts.className) {
				this.el.className += ' ' + this.opts.className;
			}
			this.bindEvent();
		},
		bindEvent: function bindEvent() {
			var sureDom = this.el.querySelectorAll('.sure');
			var closeDom = this.el.querySelectorAll('.close');
			var self = this;
			for (var i = 0, len = sureDom.length; i < len; i++) {
				sureDom[i].addEventListener('click', function (e) {
					self.close();
				});
			}
			for (var i = 0, len = closeDom.length; i < len; i++) {
				closeDom[i].addEventListener('click', function (e) {
					self.close();
				});
			}
		},
		close: function close() {
			if (this.el) {
				this.el.parentNode.removeChild(this.el);
				this.el = null;
			}
		}
	};
	function IosSelect(level, data, options) {
		if (!iosSelectUtil.isArray(data) || data.length === 0) {
			return;
		}
		this.data = data;
		this.level = level || 1;
		this.options = options;
		this.typeBox = 'one-level-box';
		if (this.level === 1) {
			this.typeBox = 'one-level-box';
		} else if (this.level === 2) {
			this.typeBox = 'two-level-box';
		} else if (this.level === 3) {
			this.typeBox = 'three-level-box';
		} else if (this.level === 4) {
			this.typeBox = 'four-level-box';
		} else if (this.level === 5) {
			this.typeBox = 'five-level-box';
		}
		this.callback = options.callback;
		this.title = options.title || '';
		this.options.itemHeight = options.itemHeight || 35;
		this.options.headerHeight = options.headerHeight || 44;
		this, options.relation = iosSelectUtil.isArray(this.options.relation) ? this.options.relation : [];
		this.options.oneTwoRelation = this.options.relation[0];
		this.options.twoThreeRelation = this.options.relation[1];
		this.options.threeFourRelation = this.options.relation[2];
		this.options.fourFiveRelation = this.options.relation[3];
		if (this.options.cssUnit !== 'px' && this.options.cssUnit !== 'rem') {
			this.options.cssUnit = 'px';
		}
		this.setBase();
		this.init();
	};

	IosSelect.prototype = {
		init: function init() {
			this.initLayer();
			// 选中元素的信息
			this.selectOneObj = {};
			this.selectTwoObj = {};
			this.selectThreeObj = {};
			this.selectFourObj = {};
			this.selectFiveObj = {};
			this.setOneLevel(this.options.oneLevelId, this.options.twoLevelId, this.options.threeLevelId, this.options.fourLevelId, this.options.fiveLevelId);
		},
		initLayer: function initLayer() {
			var self = this;
			var all_html = ['<header style="height: ' + this.options.headerHeight + this.options.cssUnit + '; line-height: ' + this.options.headerHeight + this.options.cssUnit + '" class="iosselect-header">', '<h2 id="iosSelectTitle"></h2>', '<a style="height: ' + this.options.headerHeight + this.options.cssUnit + '; line-height: ' + this.options.headerHeight + this.options.cssUnit + '" href="javascript:void(0)" class="close">取消</a>', '<a style="height: ' + this.options.headerHeight + this.options.cssUnit + '; line-height: ' + this.options.headerHeight + this.options.cssUnit + '" href="javascript:void(0)" class="sure">确定</a>', '</header>', '<section class="iosselect-box">', '<div class="one-level-contain" id="oneLevelContain">', '<ul class="select-one-level">', '</ul>', '</div>', '<div class="two-level-contain" id="twoLevelContain">', '<ul class="select-two-level">', '</ul>', '</div>', '<div class="three-level-contain" id="threeLevelContain">', '<ul class="select-three-level">', '</ul>', '</div>', '<div class="four-level-contain" id="fourLevelContain">', '<ul class="select-four-level">', '</ul>', '</div>', '<div class="five-level-contain" id="fiveLevelContain">', '<ul class="select-five-level">', '</ul>', '</div>', '</section>', '<hr class="cover-area1"/>', '<hr class="cover-area2"/>', '<div class="ios-select-loading-box" id="iosSelectLoadingBox">', '<div class="ios-select-loading"></div>', '</div>'].join('\r\n');
			this.iosSelectLayer = new Layer(all_html, {
				className: 'ios-select-widget-box ' + this.typeBox + (this.options.addClassName ? ' ' + this.options.addClassName : ''),
				container: this.options.container || ''
			});

			this.iosSelectTitleDom = document.querySelector('#iosSelectTitle');
			this.iosSelectLoadingBoxDom = document.getElementById('iosSelectLoadingBox');
			if (this.options.title) {
				this.iosSelectTitleDom.innerHTML = this.options.title;
			}

			if (this.options.headerHeight && this.options.itemHeight) {
				this.coverArea1Dom = document.querySelector('.cover-area1');
				this.coverArea1Dom.style.top = this.options.headerHeight + this.options.itemHeight * 3 + this.options.cssUnit;

				this.coverArea2Dom = document.querySelector('.cover-area2');
				this.coverArea2Dom.style.top = this.options.headerHeight + this.options.itemHeight * 4 + this.options.cssUnit;
			}

			this.oneLevelContainDom = document.querySelector('#oneLevelContain');
			this.twoLevelContainDom = document.querySelector('#twoLevelContain');
			this.threeLevelContainDom = document.querySelector('#threeLevelContain');
			this.fourLevelContainDom = document.querySelector('#fourLevelContain');
			this.fiveLevelContainDom = document.querySelector('#fiveLevelContain');

			this.oneLevelUlContainDom = document.querySelector('.select-one-level');
			this.twoLevelUlContainDom = document.querySelector('.select-two-level');
			this.threeLevelUlContainDom = document.querySelector('.select-three-level');
			this.fourLevelUlContainDom = document.querySelector('.select-four-level');
			this.fiveLevelUlContainDom = document.querySelector('.select-five-level');

			this.iosSelectLayer.el.querySelector('.layer').style.height = this.options.itemHeight * 7 + this.options.headerHeight + this.options.cssUnit;

			this.oneLevelContainDom.style.height = this.options.itemHeight * 7 + this.options.cssUnit;

			this.offsetTop = document.body.scrollTop;
			document.body.classList.add('ios-select-body-class');
			window.scrollTo(0, 0);

			this.scrollOne = new _WrcIScroll2.default('#oneLevelContain', {
				probeType: 3,
				bounce: false
			});
			this.scrollOne.on('scrollStart', function () {
				Array.prototype.slice.call(self.oneLevelContainDom.querySelectorAll('li')).forEach(function (v, i, o) {
					if (v.classList.contains('at')) {
						v.classList.remove('at');
					} else if (v.classList.contains('side1')) {
						v.classList.remove('side1');
					} else if (v.classList.contains('side2')) {
						v.classList.remove('side2');
					}
				});
			});
			this.scrollOne.on('scroll', function () {
				var pa = Math.abs(this.y / self.baseSize) / self.options.itemHeight;
				var plast = 1;

				plast = Math.round(pa) + 1;
				Array.prototype.slice.call(self.oneLevelContainDom.querySelectorAll('li')).forEach(function (v, i, o) {
					if (v.classList.contains('at')) {
						v.classList.remove('at');
					} else if (v.classList.contains('side1')) {
						v.classList.remove('side1');
					} else if (v.classList.contains('side2')) {
						v.classList.remove('side2');
					}
				});

				var pdom = self.oneLevelContainDom.querySelector('li:nth-child(' + (plast + 3) + ')');
				pdom.classList.add('at');

				self.oneLevelContainDom.querySelector('li:nth-child(' + (plast + 2) + ')').classList.add('side1');
				self.oneLevelContainDom.querySelector('li:nth-child(' + (plast + 1) + ')').classList.add('side2');
				self.oneLevelContainDom.querySelector('li:nth-child(' + (plast + 4) + ')').classList.add('side1');
				self.oneLevelContainDom.querySelector('li:nth-child(' + (plast + 5) + ')').classList.add('side2');
			});
			this.scrollOne.on('scrollEnd', function () {
				var pa = Math.abs(this.y / self.baseSize) / self.options.itemHeight;
				var plast = 1;
				var to = 0;
				if (Math.ceil(pa) === Math.round(pa)) {
					to = Math.ceil(pa) * self.options.itemHeight * self.baseSize;
					plast = Math.ceil(pa) + 1;
				} else {
					to = Math.floor(pa) * self.options.itemHeight * self.baseSize;
					plast = Math.floor(pa) + 1;
				}
				self.scrollOne.scrollTo(0, -to, 0);

				var pdom = self.oneLevelContainDom.querySelector('li:nth-child(' + (plast + 3) + ')');

				Array.prototype.slice.call(self.oneLevelContainDom.querySelectorAll('li')).forEach(function (v, i, o) {
					if (v.classList.contains('at')) {
						v.classList.remove('at');
					} else if (v.classList.contains('side1')) {
						v.classList.remove('side1');
					} else if (v.classList.contains('side2')) {
						v.classList.remove('side2');
					}
				});

				pdom.classList.add('at');

				self.oneLevelContainDom.querySelector('li:nth-child(' + (plast + 2) + ')').classList.add('side1');
				self.oneLevelContainDom.querySelector('li:nth-child(' + (plast + 1) + ')').classList.add('side2');
				self.oneLevelContainDom.querySelector('li:nth-child(' + (plast + 4) + ')').classList.add('side1');
				self.oneLevelContainDom.querySelector('li:nth-child(' + (plast + 5) + ')').classList.add('side2');

				self.selectOneObj = iosSelectUtil.attrToData(pdom, plast);

				if (self.level > 1 && self.options.oneTwoRelation === 1) {
					self.setTwoLevel(self.selectOneObj.id, self.selectTwoObj.id, self.selectThreeObj.id, self.selectFourObj.id, self.selectFiveObj.id);
				}
			});
			if (this.level >= 2) {
				this.twoLevelContainDom.style.height = this.options.itemHeight * 7 + this.options.cssUnit;
				this.scrollTwo = new _WrcIScroll2.default('#twoLevelContain', {
					probeType: 3,
					bounce: false
				});
				this.scrollTwo.on('scrollStart', function () {
					Array.prototype.slice.call(self.twoLevelContainDom.querySelectorAll('li')).forEach(function (v, i, o) {
						if (v.classList.contains('at')) {
							v.classList.remove('at');
						} else if (v.classList.contains('side1')) {
							v.classList.remove('side1');
						} else if (v.classList.contains('side2')) {
							v.classList.remove('side2');
						}
					});
				});
				this.scrollTwo.on('scroll', function () {
					var pa = Math.abs(this.y / self.baseSize) / self.options.itemHeight;
					var plast = 0;
					plast = Math.round(pa) + 1;

					var cdom = self.twoLevelContainDom.querySelector('li:nth-child(' + (plast + 3) + ')');

					Array.prototype.slice.call(self.twoLevelContainDom.querySelectorAll('li')).forEach(function (v, i, o) {
						if (v.classList.contains('at')) {
							v.classList.remove('at');
						} else if (v.classList.contains('side1')) {
							v.classList.remove('side1');
						} else if (v.classList.contains('side2')) {
							v.classList.remove('side2');
						}
					});

					cdom.classList.add('at');

					self.twoLevelContainDom.querySelector('li:nth-child(' + (plast + 2) + ')').classList.add('side1');
					self.twoLevelContainDom.querySelector('li:nth-child(' + (plast + 1) + ')').classList.add('side2');
					self.twoLevelContainDom.querySelector('li:nth-child(' + (plast + 4) + ')').classList.add('side1');
					self.twoLevelContainDom.querySelector('li:nth-child(' + (plast + 5) + ')').classList.add('side2');
				});
				this.scrollTwo.on('scrollEnd', function () {
					var pa = Math.abs(this.y / self.baseSize) / self.options.itemHeight;
					var plast = 1;
					var to = 0;
					if (Math.ceil(pa) === Math.round(pa)) {
						to = Math.ceil(pa) * self.options.itemHeight * self.baseSize;
						plast = Math.ceil(pa) + 1;
					} else {
						to = Math.floor(pa) * self.options.itemHeight * self.baseSize;
						plast = Math.floor(pa) + 1;
					}
					self.scrollTwo.scrollTo(0, -to, 0);

					var cdom = self.twoLevelContainDom.querySelector('li:nth-child(' + (plast + 3) + ')');

					Array.prototype.slice.call(self.twoLevelContainDom.querySelectorAll('li')).forEach(function (v, i, o) {
						if (v.classList.contains('at')) {
							v.classList.remove('at');
						} else if (v.classList.contains('side1')) {
							v.classList.remove('side1');
						} else if (v.classList.contains('side2')) {
							v.classList.remove('side2');
						}
					});

					cdom.classList.add('at');

					self.twoLevelContainDom.querySelector('li:nth-child(' + (plast + 2) + ')').classList.add('side1');
					self.twoLevelContainDom.querySelector('li:nth-child(' + (plast + 1) + ')').classList.add('side2');
					self.twoLevelContainDom.querySelector('li:nth-child(' + (plast + 4) + ')').classList.add('side1');
					self.twoLevelContainDom.querySelector('li:nth-child(' + (plast + 5) + ')').classList.add('side2');

					self.selectTwoObj = iosSelectUtil.attrToData(cdom, plast);

					if (self.level > 2 && self.options.twoThreeRelation === 1) {
						self.setThreeLevel(self.selectOneObj.id, self.selectTwoObj.id, self.selectThreeObj.id, self.selectFourObj.id, self.selectFiveObj.id);
					}
				});
			}
			if (this.level >= 3) {
				this.threeLevelContainDom.style.height = this.options.itemHeight * 7 + this.options.cssUnit;
				this.scrollThree = new _WrcIScroll2.default('#threeLevelContain', {
					probeType: 3,
					bounce: false
				});
				this.scrollThree.on('scrollStart', function () {
					Array.prototype.slice.call(self.threeLevelContainDom.querySelectorAll('li')).forEach(function (v, i, o) {
						if (v.classList.contains('at')) {
							v.classList.remove('at');
						} else if (v.classList.contains('side1')) {
							v.classList.remove('side1');
						} else if (v.classList.contains('side2')) {
							v.classList.remove('side2');
						}
					});
				});
				this.scrollThree.on('scroll', function () {
					var pa = Math.abs(this.y / self.baseSize) / self.options.itemHeight;
					var plast = 0;
					plast = Math.round(pa) + 1;

					var ddom = self.threeLevelContainDom.querySelector('li:nth-child(' + (plast + 3) + ')');

					Array.prototype.slice.call(self.threeLevelContainDom.querySelectorAll('li')).forEach(function (v, i, o) {
						if (v.classList.contains('at')) {
							v.classList.remove('at');
						} else if (v.classList.contains('side1')) {
							v.classList.remove('side1');
						} else if (v.classList.contains('side2')) {
							v.classList.remove('side2');
						}
					});

					ddom.classList.add('at');

					self.threeLevelContainDom.querySelector('li:nth-child(' + (plast + 2) + ')').classList.add('side1');
					self.threeLevelContainDom.querySelector('li:nth-child(' + (plast + 1) + ')').classList.add('side2');
					self.threeLevelContainDom.querySelector('li:nth-child(' + (plast + 4) + ')').classList.add('side1');
					self.threeLevelContainDom.querySelector('li:nth-child(' + (plast + 5) + ')').classList.add('side2');
				});
				this.scrollThree.on('scrollEnd', function () {
					var pa = Math.abs(this.y / self.baseSize) / self.options.itemHeight;
					var plast = 1;
					var to = 0;
					if (Math.ceil(pa) === Math.round(pa)) {
						to = Math.ceil(pa) * self.options.itemHeight * self.baseSize;
						plast = Math.ceil(pa) + 1;
					} else {
						to = Math.floor(pa) * self.options.itemHeight * self.baseSize;
						plast = Math.floor(pa) + 1;
					}
					self.scrollThree.scrollTo(0, -to, 0);

					var ddom = self.threeLevelContainDom.querySelector('li:nth-child(' + (plast + 3) + ')');

					Array.prototype.slice.call(self.threeLevelContainDom.querySelectorAll('li')).forEach(function (v, i, o) {
						if (v.classList.contains('at')) {
							v.classList.remove('at');
						} else if (v.classList.contains('side1')) {
							v.classList.remove('side1');
						} else if (v.classList.contains('side2')) {
							v.classList.remove('side2');
						}
					});

					ddom.classList.add('at');

					self.threeLevelContainDom.querySelector('li:nth-child(' + (plast + 2) + ')').classList.add('side1');
					self.threeLevelContainDom.querySelector('li:nth-child(' + (plast + 1) + ')').classList.add('side2');
					self.threeLevelContainDom.querySelector('li:nth-child(' + (plast + 4) + ')').classList.add('side1');
					self.threeLevelContainDom.querySelector('li:nth-child(' + (plast + 5) + ')').classList.add('side2');

					self.selectThreeObj = iosSelectUtil.attrToData(ddom, plast);
					if (self.level >= 4 && self.options.threeFourRelation === 1) {
						self.setFourLevel(self.selectOneObj.id, self.selectTwoObj.id, self.selectThreeObj.id, self.selectFourObj.id, self.selectFiveObj.id);
					}
				});
			}
			if (this.level >= 4) {
				this.fourLevelContainDom.style.height = this.options.itemHeight * 7 + this.options.cssUnit;
				this.scrollFour = new _WrcIScroll2.default('#fourLevelContain', {
					probeType: 3,
					bounce: false
				});
				this.scrollFour.on('scrollStart', function () {
					Array.prototype.slice.call(self.fourLevelContainDom.querySelectorAll('li')).forEach(function (v, i, o) {
						if (v.classList.contains('at')) {
							v.classList.remove('at');
						} else if (v.classList.contains('side1')) {
							v.classList.remove('side1');
						} else if (v.classList.contains('side2')) {
							v.classList.remove('side2');
						}
					});
				});
				this.scrollFour.on('scroll', function () {
					var pa = Math.abs(this.y / self.baseSize) / self.options.itemHeight;
					var plast = 0;
					plast = Math.round(pa) + 1;

					var ddom = self.fourLevelContainDom.querySelector('li:nth-child(' + (plast + 3) + ')');

					Array.prototype.slice.call(self.fourLevelContainDom.querySelectorAll('li')).forEach(function (v, i, o) {
						if (v.classList.contains('at')) {
							v.classList.remove('at');
						} else if (v.classList.contains('side1')) {
							v.classList.remove('side1');
						} else if (v.classList.contains('side2')) {
							v.classList.remove('side2');
						}
					});

					ddom.classList.add('at');

					self.fourLevelContainDom.querySelector('li:nth-child(' + (plast + 2) + ')').classList.add('side1');
					self.fourLevelContainDom.querySelector('li:nth-child(' + (plast + 1) + ')').classList.add('side2');
					self.fourLevelContainDom.querySelector('li:nth-child(' + (plast + 4) + ')').classList.add('side1');
					self.fourLevelContainDom.querySelector('li:nth-child(' + (plast + 5) + ')').classList.add('side2');
				});
				this.scrollFour.on('scrollEnd', function () {
					var pa = Math.abs(this.y / self.baseSize) / self.options.itemHeight;
					var plast = 1;
					var to = 0;
					if (Math.ceil(pa) === Math.round(pa)) {
						to = Math.ceil(pa) * self.options.itemHeight * self.baseSize;
						plast = Math.ceil(pa) + 1;
					} else {
						to = Math.floor(pa) * self.options.itemHeight * self.baseSize;
						plast = Math.floor(pa) + 1;
					}
					self.scrollFour.scrollTo(0, -to, 0);

					var ddom = self.fourLevelContainDom.querySelector('li:nth-child(' + (plast + 3) + ')');

					Array.prototype.slice.call(self.fourLevelContainDom.querySelectorAll('li')).forEach(function (v, i, o) {
						if (v.classList.contains('at')) {
							v.classList.remove('at');
						} else if (v.classList.contains('side1')) {
							v.classList.remove('side1');
						} else if (v.classList.contains('side2')) {
							v.classList.remove('side2');
						}
					});

					ddom.classList.add('at');

					self.fourLevelContainDom.querySelector('li:nth-child(' + (plast + 2) + ')').classList.add('side1');
					self.fourLevelContainDom.querySelector('li:nth-child(' + (plast + 1) + ')').classList.add('side2');
					self.fourLevelContainDom.querySelector('li:nth-child(' + (plast + 4) + ')').classList.add('side1');
					self.fourLevelContainDom.querySelector('li:nth-child(' + (plast + 5) + ')').classList.add('side2');

					self.selectFourObj = iosSelectUtil.attrToData(ddom, plast);

					if (self.level >= 5 && self.options.fourFiveRelation === 1) {
						self.setFiveLevel(self.selectOneObj.id, self.selectTwoObj.id, self.selectThreeObj.id, self.selectFourObj.id, self.selectFiveObj.id);
					}
				});
			}
			if (this.level >= 5) {
				this.fiveLevelContainDom.style.height = this.options.itemHeight * 7 + this.options.cssUnit;
				this.scrollFive = new _WrcIScroll2.default('#fiveLevelContain', {
					probeType: 3,
					bounce: false
				});
				this.scrollFive.on('scrollStart', function () {
					Array.prototype.slice.call(self.fiveLevelContainDom.querySelectorAll('li')).forEach(function (v, i, o) {
						if (v.classList.contains('at')) {
							v.classList.remove('at');
						} else if (v.classList.contains('side1')) {
							v.classList.remove('side1');
						} else if (v.classList.contains('side2')) {
							v.classList.remove('side2');
						}
					});
				});
				this.scrollFive.on('scroll', function () {
					var pa = Math.abs(this.y / self.baseSize) / self.options.itemHeight;
					var plast = 0;
					plast = Math.round(pa) + 1;

					var ddom = self.fiveLevelContainDom.querySelector('li:nth-child(' + (plast + 3) + ')');

					Array.prototype.slice.call(self.fiveLevelContainDom.querySelectorAll('li')).forEach(function (v, i, o) {
						if (v.classList.contains('at')) {
							v.classList.remove('at');
						} else if (v.classList.contains('side1')) {
							v.classList.remove('side1');
						} else if (v.classList.contains('side2')) {
							v.classList.remove('side2');
						}
					});

					ddom.classList.add('at');

					self.fiveLevelContainDom.querySelector('li:nth-child(' + (plast + 2) + ')').classList.add('side1');
					self.fiveLevelContainDom.querySelector('li:nth-child(' + (plast + 1) + ')').classList.add('side2');
					self.fiveLevelContainDom.querySelector('li:nth-child(' + (plast + 4) + ')').classList.add('side1');
					self.fiveLevelContainDom.querySelector('li:nth-child(' + (plast + 5) + ')').classList.add('side2');
				});
				this.scrollFive.on('scrollEnd', function () {
					var pa = Math.abs(this.y / self.baseSize) / self.options.itemHeight;
					var plast = 1;
					var to = 0;
					if (Math.ceil(pa) === Math.round(pa)) {
						to = Math.ceil(pa) * self.options.itemHeight * self.baseSize;
						plast = Math.ceil(pa) + 1;
					} else {
						to = Math.floor(pa) * self.options.itemHeight * self.baseSize;
						plast = Math.floor(pa) + 1;
					}
					self.scrollFive.scrollTo(0, -to, 0);

					var ddom = self.fiveLevelContainDom.querySelector('li:nth-child(' + (plast + 3) + ')');

					Array.prototype.slice.call(self.fiveLevelContainDom.querySelectorAll('li')).forEach(function (v, i, o) {
						if (v.classList.contains('at')) {
							v.classList.remove('at');
						} else if (v.classList.contains('side1')) {
							v.classList.remove('side1');
						} else if (v.classList.contains('side2')) {
							v.classList.remove('side2');
						}
					});

					ddom.classList.add('at');

					self.fiveLevelContainDom.querySelector('li:nth-child(' + (plast + 2) + ')').classList.add('side1');
					self.fiveLevelContainDom.querySelector('li:nth-child(' + (plast + 1) + ')').classList.add('side2');
					self.fiveLevelContainDom.querySelector('li:nth-child(' + (plast + 4) + ')').classList.add('side1');
					self.fiveLevelContainDom.querySelector('li:nth-child(' + (plast + 5) + ')').classList.add('side2');

					self.selectFiveObj = iosSelectUtil.attrToData(ddom, plast);
				});
			}

			// 取消 确认 事件
			this.closeBtnDom = this.iosSelectLayer.el.querySelector('.close');
			this.closeBtnDom.addEventListener('click', function (e) {
				if (document.body.classList.contains('ios-select-body-class')) {
					document.body.classList.remove('ios-select-body-class');
				}
				window.scrollTo(0, self.offsetTop);
			});

			this.selectBtnDom = this.iosSelectLayer.el.querySelector('.sure');
			this.selectBtnDom.addEventListener('click', function (e) {
				if (document.body.classList.contains('ios-select-body-class')) {
					document.body.classList.remove('ios-select-body-class');
				}
				window.scrollTo(0, self.offsetTop);
				self.callback && self.callback(self.selectOneObj, self.selectTwoObj, self.selectThreeObj, self.selectFourObj, self.selectFiveObj);
			});
		},
		loadingShow: function loadingShow() {
			this.options.showLoading && (this.iosSelectLoadingBoxDom.style.display = 'block');
		},
		loadingHide: function loadingHide() {
			this.iosSelectLoadingBoxDom.style.display = 'none';
		},
		getOneLevel: function getOneLevel() {
			return this.data[0];
		},
		setOneLevel: function setOneLevel(oneLevelId, twoLevelId, threeLevelId, fourLevelId, fiveLevelId) {
			if (iosSelectUtil.isArray(this.data[0])) {
				var oneLevelData = this.getOneLevel();
				this.renderOneLevel(oneLevelId, twoLevelId, threeLevelId, fourLevelId, fiveLevelId, oneLevelData);
			} else if (iosSelectUtil.isFunction(this.data[0])) {
				this.loadingShow();
				this.data[0](function (oneLevelData) {
					this.loadingHide();
					this.renderOneLevel(oneLevelId, twoLevelId, threeLevelId, fourLevelId, fiveLevelId, oneLevelData);
				}.bind(this));
			} else {
				throw new Error('data format error');
			}
		},
		renderOneLevel: function renderOneLevel(oneLevelId, twoLevelId, threeLevelId, fourLevelId, fiveLevelId, oneLevelData) {
			var hasAtId = oneLevelData.some(function (v, i, o) {
				return v.id == oneLevelId;
			});
			if (!hasAtId) {
				oneLevelId = oneLevelData[0]['id'];
			}
			var oneHtml = '';
			var self = this;
			var atIndex = 0;
			oneHtml += '<li style="height: ' + this.options.itemHeight + this.options.cssUnit + '; line-height: ' + this.options.itemHeight + this.options.cssUnit + ';"></li>';
			oneHtml += '<li style="height: ' + this.options.itemHeight + this.options.cssUnit + '; line-height: ' + this.options.itemHeight + this.options.cssUnit + ';"></li>';
			oneHtml += '<li style="height: ' + this.options.itemHeight + this.options.cssUnit + '; line-height: ' + this.options.itemHeight + this.options.cssUnit + ';"></li>';
			oneLevelData.forEach(function (v, i, o) {
				if (v.id == oneLevelId) {
					oneHtml += '<li style="height: ' + this.options.itemHeight + this.options.cssUnit + '; line-height: ' + this.options.itemHeight + this.options.cssUnit + ';" ' + iosSelectUtil.attrToHtml(v) + ' class="at">' + v.value + '</li>';
					atIndex = i + 1 + 3;
				} else {
					oneHtml += '<li style="height: ' + this.options.itemHeight + this.options.cssUnit + '; line-height: ' + this.options.itemHeight + this.options.cssUnit + ';"' + iosSelectUtil.attrToHtml(v) + '>' + v.value + '</li>';
				}
			}.bind(this));
			oneHtml += '<li style="height: ' + this.options.itemHeight + this.options.cssUnit + '; line-height: ' + this.options.itemHeight + this.options.cssUnit + ';"></li>';
			oneHtml += '<li style="height: ' + this.options.itemHeight + this.options.cssUnit + '; line-height: ' + this.options.itemHeight + this.options.cssUnit + ';"></li>';
			oneHtml += '<li style="height: ' + this.options.itemHeight + this.options.cssUnit + '; line-height: ' + this.options.itemHeight + this.options.cssUnit + ';"></li>';
			this.oneLevelUlContainDom.innerHTML = oneHtml;

			this.scrollOne.refresh();
			this.scrollOne.scrollToElement('li:nth-child(' + (atIndex - 3) + ')', 0);
			if (this.level >= 2) {
				this.setTwoLevel(oneLevelId, twoLevelId, threeLevelId, fourLevelId, fiveLevelId);
			}

			var pdom = this.oneLevelContainDom.querySelector('.at');
			this.oneLevelContainDom.querySelector('li:nth-child(' + (atIndex - 1) + ')').classList.add('side1');
			this.oneLevelContainDom.querySelector('li:nth-child(' + (atIndex - 2) + ')').classList.add('side2');
			this.oneLevelContainDom.querySelector('li:nth-child(' + (atIndex + 1) + ')').classList.add('side1');
			this.oneLevelContainDom.querySelector('li:nth-child(' + (atIndex + 2) + ')').classList.add('side2');

			this.selectOneObj = iosSelectUtil.attrToData(pdom, atIndex);
		},
		getTwoLevel: function getTwoLevel(oneLevelId) {
			var twoLevelData = [];
			if (this.options.oneTwoRelation === 1) {
				this.data[1].forEach(function (v, i, o) {
					if (v['parentId'] === oneLevelId) {
						twoLevelData.push(v);
					}
				});
			} else {
				twoLevelData = this.data[1];
			}
			return twoLevelData;
		},
		setTwoLevel: function setTwoLevel(oneLevelId, twoLevelId, threeLevelId, fourLevelId, fiveLevelId) {
			if (iosSelectUtil.isArray(this.data[1])) {
				var twoLevelData = this.getTwoLevel(oneLevelId);
				this.renderTwoLevel(oneLevelId, twoLevelId, threeLevelId, fourLevelId, fiveLevelId, twoLevelData);
			} else if (iosSelectUtil.isFunction(this.data[1])) {
				this.loadingShow();
				this.data[1](oneLevelId, function (twoLevelData) {
					this.loadingHide();
					this.renderTwoLevel(oneLevelId, twoLevelId, threeLevelId, fourLevelId, fiveLevelId, twoLevelData);
				}.bind(this));
			} else {
				throw new Error('data format error');
			}
		},
		renderTwoLevel: function renderTwoLevel(oneLevelId, twoLevelId, threeLevelId, fourLevelId, fiveLevelId, twoLevelData) {
			var atIndex = 0;
			var hasAtId = twoLevelData.some(function (v, i, o) {
				return v.id == twoLevelId;
			});
			if (!hasAtId) {
				twoLevelId = twoLevelData[0]['id'];
			}
			var twoHtml = '';
			var self = this;
			twoHtml += '<li style="height: ' + this.options.itemHeight + this.options.cssUnit + '; line-height: ' + this.options.itemHeight + this.options.cssUnit + ';"></li>';
			twoHtml += '<li style="height: ' + this.options.itemHeight + this.options.cssUnit + '; line-height: ' + this.options.itemHeight + this.options.cssUnit + ';"></li>';
			twoHtml += '<li style="height: ' + this.options.itemHeight + this.options.cssUnit + '; line-height: ' + this.options.itemHeight + this.options.cssUnit + ';"></li>';
			twoLevelData.forEach(function (v, i, o) {
				if (v.id == twoLevelId) {
					twoHtml += '<li style="height: ' + this.options.itemHeight + this.options.cssUnit + '; line-height: ' + this.options.itemHeight + this.options.cssUnit + ';"' + iosSelectUtil.attrToHtml(v) + ' class="at">' + v.value + '</li>';
					atIndex = i + 1 + 3;
				} else {
					twoHtml += '<li style="height: ' + this.options.itemHeight + this.options.cssUnit + '; line-height: ' + this.options.itemHeight + this.options.cssUnit + ';"' + iosSelectUtil.attrToHtml(v) + '>' + v.value + '</li>';
				}
			}.bind(this));
			twoHtml += '<li style="height: ' + this.options.itemHeight + this.options.cssUnit + '; line-height: ' + this.options.itemHeight + this.options.cssUnit + ';"></li>';
			twoHtml += '<li style="height: ' + this.options.itemHeight + this.options.cssUnit + '; line-height: ' + this.options.itemHeight + this.options.cssUnit + ';"></li>';
			twoHtml += '<li style="height: ' + this.options.itemHeight + this.options.cssUnit + '; line-height: ' + this.options.itemHeight + this.options.cssUnit + ';"></li>';
			this.twoLevelUlContainDom.innerHTML = twoHtml;
			this.scrollTwo.refresh();
			this.scrollTwo.scrollToElement(':nth-child(' + (atIndex - 3) + ')', 0);
			if (this.level >= 3) {
				this.setThreeLevel(oneLevelId, twoLevelId, threeLevelId, fourLevelId, fiveLevelId);
			}

			var cdom = self.twoLevelContainDom.querySelector('li:nth-child(' + atIndex + ')');
			cdom.classList.add('at');
			self.twoLevelContainDom.querySelector('li:nth-child(' + (atIndex - 1) + ')').classList.add('side1');
			self.twoLevelContainDom.querySelector('li:nth-child(' + (atIndex - 2) + ')').classList.add('side2');
			self.twoLevelContainDom.querySelector('li:nth-child(' + (atIndex + 1) + ')').classList.add('side1');
			self.twoLevelContainDom.querySelector('li:nth-child(' + (atIndex + 2) + ')').classList.add('side2');

			self.selectTwoObj = iosSelectUtil.attrToData(cdom, atIndex);
		},
		getThreeLevel: function getThreeLevel(oneLevelId, twoLevelId) {
			var threeLevelData = [];
			if (this.options.twoThreeRelation === 1) {
				this.data[2].forEach(function (v, i, o) {
					if (v['parentId'] === twoLevelId) {
						threeLevelData.push(v);
					}
				});
			} else {
				threeLevelData = this.data[2];
			}
			return threeLevelData;
		},
		setThreeLevel: function setThreeLevel(oneLevelId, twoLevelId, threeLevelId, fourLevelId, fiveLevelId) {
			if (iosSelectUtil.isArray(this.data[2])) {
				var threeLevelData = this.getThreeLevel(oneLevelId, twoLevelId);
				this.renderThreeLevel(oneLevelId, twoLevelId, threeLevelId, fourLevelId, fiveLevelId, threeLevelData);
			} else if (iosSelectUtil.isFunction(this.data[2])) {
				this.loadingShow();
				this.data[2](oneLevelId, twoLevelId, function (threeLevelData) {
					this.loadingHide();
					this.renderThreeLevel(oneLevelId, twoLevelId, threeLevelId, fourLevelId, fiveLevelId, threeLevelData);
				}.bind(this));
			} else {
				throw new Error('data format error');
			}
		},
		renderThreeLevel: function renderThreeLevel(oneLevelId, twoLevelId, threeLevelId, fourLevelId, fiveLevelId, threeLevelData) {
			var atIndex = 0;
			var hasAtId = threeLevelData.some(function (v, i, o) {
				return v.id == threeLevelId;
			});
			if (!hasAtId) {
				threeLevelId = threeLevelData[0]['id'];
			}
			var threeHtml = '';
			var self = this;
			threeHtml += '<li style="height: ' + this.options.itemHeight + this.options.cssUnit + '; line-height: ' + this.options.itemHeight + this.options.cssUnit + '"></li>';
			threeHtml += '<li style="height: ' + this.options.itemHeight + this.options.cssUnit + '; line-height: ' + this.options.itemHeight + this.options.cssUnit + '"></li>';
			threeHtml += '<li style="height: ' + this.options.itemHeight + this.options.cssUnit + '; line-height: ' + this.options.itemHeight + this.options.cssUnit + '"></li>';
			threeLevelData.forEach(function (v, i, o) {
				if (v.id == threeLevelId) {
					threeHtml += '<li style="height: ' + this.options.itemHeight + this.options.cssUnit + '; line-height: ' + this.options.itemHeight + this.options.cssUnit + ';"' + iosSelectUtil.attrToHtml(v) + ' class="at">' + v.value + '</li>';
					atIndex = i + 1 + 3;
				} else {
					threeHtml += '<li style="height: ' + this.options.itemHeight + this.options.cssUnit + '; line-height: ' + this.options.itemHeight + this.options.cssUnit + ';"' + iosSelectUtil.attrToHtml(v) + '>' + v.value + '</li>';
				}
			}.bind(this));
			threeHtml += '<li style="height: ' + this.options.itemHeight + this.options.cssUnit + '; line-height: ' + this.options.itemHeight + this.options.cssUnit + '"></li>';
			threeHtml += '<li style="height: ' + this.options.itemHeight + this.options.cssUnit + '; line-height: ' + this.options.itemHeight + this.options.cssUnit + '"></li>';
			threeHtml += '<li style="height: ' + this.options.itemHeight + this.options.cssUnit + '; line-height: ' + this.options.itemHeight + this.options.cssUnit + '"></li>';
			this.threeLevelUlContainDom.innerHTML = threeHtml;
			this.scrollThree.refresh();
			this.scrollThree.scrollToElement(':nth-child(' + (atIndex - 3) + ')', 0);

			if (this.level >= 4) {
				this.setFourLevel(oneLevelId, twoLevelId, threeLevelId, fourLevelId, fiveLevelId);
			}

			var ddom = self.threeLevelContainDom.querySelector('li:nth-child(' + atIndex + ')');
			ddom.classList.add('at');
			self.threeLevelContainDom.querySelector('li:nth-child(' + (atIndex - 1) + ')').classList.add('side1');
			self.threeLevelContainDom.querySelector('li:nth-child(' + (atIndex - 2) + ')').classList.add('side2');
			self.threeLevelContainDom.querySelector('li:nth-child(' + (atIndex + 1) + ')').classList.add('side1');
			self.threeLevelContainDom.querySelector('li:nth-child(' + (atIndex + 2) + ')').classList.add('side2');

			self.selectThreeObj = iosSelectUtil.attrToData(ddom, atIndex);
		},
		getFourLevel: function getFourLevel(oneLevelId, twoLevelId, threeLevelId) {
			var fourLevelData = [];
			if (this.options.threeFourRelation === 1) {
				this.data[3].forEach(function (v, i, o) {
					if (v['parentId'] === threeLevelId) {
						fourLevelData.push(v);
					}
				});
			} else {
				fourLevelData = this.data[3];
			}
			return fourLevelData;
		},
		setFourLevel: function setFourLevel(oneLevelId, twoLevelId, threeLevelId, fourLevelId, fiveLevelId) {
			if (iosSelectUtil.isArray(this.data[3])) {
				var fourLevelData = this.getFourLevel(oneLevelId, twoLevelId, threeLevelId);
				this.renderFourLevel(oneLevelId, twoLevelId, threeLevelId, fourLevelId, fiveLevelId, fourLevelData);
			} else if (iosSelectUtil.isFunction(this.data[3])) {
				this.loadingShow();
				this.data[3](oneLevelId, twoLevelId, threeLevelId, function (fourLevelData) {
					this.loadingHide();
					this.renderFourLevel(oneLevelId, twoLevelId, threeLevelId, fourLevelId, fiveLevelId, fourLevelData);
				}.bind(this));
			} else {
				throw new Error('data format error');
			}
		},
		renderFourLevel: function renderFourLevel(oneLevelId, twoLevelId, threeLevelId, fourLevelId, fiveLevelId, fourLevelData) {
			var atIndex = 0;
			var hasAtId = fourLevelData.some(function (v, i, o) {
				return v.id == fourLevelId;
			});
			if (!hasAtId) {
				fourLevelId = fourLevelData[0]['id'];
			}
			var fourHtml = '';
			var self = this;
			fourHtml += '<li style="height: ' + this.options.itemHeight + this.options.cssUnit + '; line-height: ' + this.options.itemHeight + this.options.cssUnit + '"></li>';
			fourHtml += '<li style="height: ' + this.options.itemHeight + this.options.cssUnit + '; line-height: ' + this.options.itemHeight + this.options.cssUnit + '"></li>';
			fourHtml += '<li style="height: ' + this.options.itemHeight + this.options.cssUnit + '; line-height: ' + this.options.itemHeight + this.options.cssUnit + '"></li>';
			fourLevelData.forEach(function (v, i, o) {
				if (v.id == fourLevelId) {
					fourHtml += '<li style="height: ' + this.options.itemHeight + this.options.cssUnit + '; line-height: ' + this.options.itemHeight + this.options.cssUnit + ';"' + iosSelectUtil.attrToHtml(v) + ' class="at">' + v.value + '</li>';
					atIndex = i + 1 + 3;
				} else {
					fourHtml += '<li style="height: ' + this.options.itemHeight + this.options.cssUnit + '; line-height: ' + this.options.itemHeight + this.options.cssUnit + ';"' + iosSelectUtil.attrToHtml(v) + '>' + v.value + '</li>';
				}
			}.bind(this));
			fourHtml += '<li style="height: ' + this.options.itemHeight + this.options.cssUnit + '; line-height: ' + this.options.itemHeight + this.options.cssUnit + '"></li>';
			fourHtml += '<li style="height: ' + this.options.itemHeight + this.options.cssUnit + '; line-height: ' + this.options.itemHeight + this.options.cssUnit + '"></li>';
			fourHtml += '<li style="height: ' + this.options.itemHeight + this.options.cssUnit + '; line-height: ' + this.options.itemHeight + this.options.cssUnit + '"></li>';
			this.fourLevelUlContainDom.innerHTML = fourHtml;
			this.scrollFour.refresh();
			this.scrollFour.scrollToElement(':nth-child(' + (atIndex - 3) + ')', 0);

			if (this.level >= 5) {
				this.setFiveLevel(oneLevelId, twoLevelId, threeLevelId, fourLevelId, fiveLevelId);
			}

			var ddom = self.fourLevelContainDom.querySelector('li:nth-child(' + atIndex + ')');
			ddom.classList.add('at');
			self.fourLevelContainDom.querySelector('li:nth-child(' + (atIndex - 1) + ')').classList.add('side1');
			self.fourLevelContainDom.querySelector('li:nth-child(' + (atIndex - 2) + ')').classList.add('side2');
			self.fourLevelContainDom.querySelector('li:nth-child(' + (atIndex + 1) + ')').classList.add('side1');
			self.fourLevelContainDom.querySelector('li:nth-child(' + (atIndex + 2) + ')').classList.add('side2');

			self.selectFourObj = iosSelectUtil.attrToData(ddom, atIndex);
		},
		getFiveLevel: function getFiveLevel(oneLevelId, twoLevelId, threeLevelId, fourLevelId) {
			var fiveLevelData = [];
			if (this.options.fourFiveRelation === 1) {
				this.data[4].forEach(function (v, i, o) {
					if (v['parentId'] === fourLevelId) {
						fiveLevelData.push(v);
					}
				});
			} else {
				fiveLevelData = this.data[4];
			}
			return fiveLevelData;
		},
		setFiveLevel: function setFiveLevel(oneLevelId, twoLevelId, threeLevelId, fourLevelId, fiveLevelId) {
			if (iosSelectUtil.isArray(this.data[4])) {
				var fiveLevelData = this.getFiveLevel(oneLevelId, twoLevelId, threeLevelId, fourLevelId);
				this.renderFiveLevel(oneLevelId, twoLevelId, threeLevelId, fourLevelId, fiveLevelId, fiveLevelData);
			} else if (iosSelectUtil.isFunction(this.data[4])) {
				this.loadingShow();
				this.data[4](oneLevelId, twoLevelId, threeLevelId, fourLevelId, function (fiveLevelData) {
					this.loadingHide();
					this.renderFiveLevel(oneLevelId, twoLevelId, threeLevelId, fourLevelId, fiveLevelId, fiveLevelData);
				}.bind(this));
			} else {
				throw new Error('data format error');
			}
		},
		renderFiveLevel: function renderFiveLevel(oneLevelId, twoLevelId, threeLevelId, fourLevelId, fiveLevelId, fiveLevelData) {
			var atIndex = 0;
			var hasAtId = fiveLevelData.some(function (v, i, o) {
				return v.id == fiveLevelId;
			});
			if (!hasAtId) {
				fiveLevelId = fiveLevelData[0]['id'];
			}
			var fiveHtml = '';
			var self = this;
			fiveHtml += '<li style="height: ' + this.options.itemHeight + this.options.cssUnit + '; line-height: ' + this.options.itemHeight + this.options.cssUnit + '"></li>';
			fiveHtml += '<li style="height: ' + this.options.itemHeight + this.options.cssUnit + '; line-height: ' + this.options.itemHeight + this.options.cssUnit + '"></li>';
			fiveHtml += '<li style="height: ' + this.options.itemHeight + this.options.cssUnit + '; line-height: ' + this.options.itemHeight + this.options.cssUnit + '"></li>';
			fiveLevelData.forEach(function (v, i, o) {
				if (v.id == fiveLevelId) {
					fiveHtml += '<li style="height: ' + this.options.itemHeight + this.options.cssUnit + '; line-height: ' + this.options.itemHeight + this.options.cssUnit + ';"' + iosSelectUtil.attrToHtml(v) + ' class="at">' + v.value + '</li>';
					atIndex = i + 1 + 3;
				} else {
					fiveHtml += '<li style="height: ' + this.options.itemHeight + this.options.cssUnit + '; line-height: ' + this.options.itemHeight + this.options.cssUnit + ';"' + iosSelectUtil.attrToHtml(v) + '>' + v.value + '</li>';
				}
			}.bind(this));
			fiveHtml += '<li style="height: ' + this.options.itemHeight + this.options.cssUnit + '; line-height: ' + this.options.itemHeight + this.options.cssUnit + '"></li>';
			fiveHtml += '<li style="height: ' + this.options.itemHeight + this.options.cssUnit + '; line-height: ' + this.options.itemHeight + this.options.cssUnit + '"></li>';
			fiveHtml += '<li style="height: ' + this.options.itemHeight + this.options.cssUnit + '; line-height: ' + this.options.itemHeight + this.options.cssUnit + '"></li>';
			this.fiveLevelUlContainDom.innerHTML = fiveHtml;
			this.scrollFive.refresh();
			this.scrollFive.scrollToElement(':nth-child(' + (atIndex - 3) + ')', 0);

			var ddom = self.fiveLevelContainDom.querySelector('li:nth-child(' + atIndex + ')');
			ddom.classList.add('at');
			self.fiveLevelContainDom.querySelector('li:nth-child(' + (atIndex - 1) + ')').classList.add('side1');
			self.fiveLevelContainDom.querySelector('li:nth-child(' + (atIndex - 2) + ')').classList.add('side2');
			self.fiveLevelContainDom.querySelector('li:nth-child(' + (atIndex + 1) + ')').classList.add('side1');
			self.fiveLevelContainDom.querySelector('li:nth-child(' + (atIndex + 2) + ')').classList.add('side2');

			self.selectFiveObj = iosSelectUtil.attrToData(ddom, atIndex);
		},
		setBase: function setBase() {
			if (this.options.cssUnit === 'rem') {
				var dltDom = document.documentElement;
				var dltStyle = window.getComputedStyle(dltDom, null);
				var dltFontSize = dltStyle.fontSize;
				try {
					this.baseSize = /\d+/.exec(dltFontSize)[0];
				} catch (e) {
					this.baseSize = 1;
				}
			} else {
				this.baseSize = 1;
			}
		}
	};
	/**
	 * IosSelect
	 * @param {number} level 选择的层级 1 2 3 最多支持3层
	 * @param {...Array} data [oneLevelArray[, twoLevelArray[, threeLevelArray]]]
	 * @param {Object} options
	 * @param {string=} options.container 组件插入到该元素下 可选
	 * @param {Function} options.callback 选择完毕后的回调函数
	 * @param {string=} options.title 选择框title
	 * @param {number=} options.itemHeight 每一项的高度，默认 35
	 * @param {number=} options.headerHeight 组件标题栏高度 默认 44
	 * @param {css=} options.cssUnit px或者rem 默认是px
	 * @param {string=} options.addClassName 组件额外类名 用于自定义样式
	 * @param {...Array=} options.relation 数组 [oneTwoRelation, twoThreeRelation, threeFourRelation, fourFiveRelation] 默认值：[0, 0, 0, 0]
	 * @param {number=} options.relation.oneTwoRelation 第一列和第二列是否通过parentId关联
	 * @param {number=} options.relation.twoThreeRelation 第二列和第三列是否通过parentId关联
	 * @param {number=} options.relation.threeFourRelation 第三列和第四列是否通过parentId关联
	 * @param {number=} options.relation.fourFiveRelation 第四列和第五列是否通过parentId关联
	 * @param {string=} options.oneLevelId 第一级选中id
	 * @param {string=} options.twoLevelId 第二级选中id
	 * @param {string=} options.threeLevelId 第三级选中id
	 * @param {string=} options.fourLevelId 第四级选中id
	 * @param {string=} options.fiveLevelId 第五级选中id
	 * @param {boolean=} options.showLoading 如果你的数据是异步加载的，可以使用该参数设置为true，下拉菜单会有加载中的效果
	 */
	exports.default = IosSelect;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(12);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(6)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/.0.26.0@css-loader/index.js!./WrcIosselect.css", function() {
				var newContent = require("!!./../../node_modules/.0.26.0@css-loader/index.js!./WrcIosselect.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports


	// module
	exports.push([module.id, "div, ul, li {\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\nul, li {\r\n    list-style: none outside none;\r\n}\r\n\r\n/* layer begin */\r\n.ios-select-widget-box.olay {\r\n    position: absolute;\r\n    z-index: 500;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    opacity: 1;\r\n    background: rgba(0, 0, 0, 0.75);\r\n}\r\n.ios-select-widget-box.olay > div {\r\n    position: fixed;\r\n    z-index: 1000;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: #f2f2f2;\r\n    bottom: 0;\r\n    left: 0;\r\n    visibility: visible;\r\n}\r\n.ios-select-widget-box header.iosselect-header {\r\n    height: 44px;\r\n    line-height: 44px;\r\n    background-color: #eee;\r\n    width: 100%;\r\n    z-index: 9999;\r\n    text-align: center;\r\n}\r\n.ios-select-widget-box header.iosselect-header a {\r\n    font-size: 16px;\r\n    color: #e94643;\r\n    text-decoration: none;\r\n}\r\n.ios-select-widget-box header.iosselect-header a.close {\r\n    float: left;\r\n    padding-left: 15px;\r\n    height: 44px;\r\n    line-height: 44px;\r\n}\r\n.ios-select-widget-box header.iosselect-header a.sure {\r\n    float: right;\r\n    padding-right: 15px;\r\n    height: 44px;\r\n    line-height: 44px;\r\n}\r\n.ios-select-widget-box {\r\n    padding-top: 44px;\r\n}\r\n.ios-select-widget-box .one-level-contain,\r\n.ios-select-widget-box .two-level-contain,\r\n.ios-select-widget-box .three-level-contain,\r\n.ios-select-widget-box .four-level-contain,\r\n.ios-select-widget-box .five-level-contain {\r\n    height: 100%;\r\n    overflow: hidden;\r\n}\r\n.ios-select-widget-box .iosselect-box {\r\n    overflow: hidden;\r\n}\r\n.ios-select-widget-box .iosselect-box > div {\r\n    display: block;\r\n    float: left;\r\n}\r\n.ios-select-widget-box ul {\r\n    background-color: #fff;\r\n}\r\n.ios-select-widget-box ul li {\r\n    font-size: 13px;\r\n    height: 35px;\r\n    line-height: 35px;\r\n    background-color: #fff;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    text-align: center;\r\n    color: #111;\r\n    opacity: .3;\r\n}\r\n.ios-select-widget-box ul li.at {\r\n    font-size: 16px;\r\n    opacity: 1;\r\n}\r\n.ios-select-widget-box ul li.side1 {\r\n    font-size: 15px;\r\n    opacity: .7;\r\n}\r\n.ios-select-widget-box ul li.side2 {\r\n    font-size: 14px;\r\n    opacity: .5;\r\n}\r\n.ios-select-widget-box.one-level-box .one-level-contain {\r\n    width: 100%;\r\n}\r\n.ios-select-widget-box.one-level-box .two-level-contain,\r\n.ios-select-widget-box.one-level-box .three-level-contain,\r\n.ios-select-widget-box.one-level-box .four-level-contain,\r\n.ios-select-widget-box.one-level-box .five-level-contain,\r\n{\r\n    width: 0;\r\n}\r\n.ios-select-widget-box.two-level-box .one-level-contain, \r\n.ios-select-widget-box.two-level-box .two-level-contain {\r\n    width: 50%;\r\n}\r\n.ios-select-widget-box.two-level-box .three-level-contain,\r\n.ios-select-widget-box.two-level-box .four-level-contain,\r\n.ios-select-widget-box.two-level-box .five-level-contain,\r\n{\r\n    width: 0;\r\n}\r\n.ios-select-widget-box.three-level-box .one-level-contain, \r\n.ios-select-widget-box.three-level-box .two-level-contain {\r\n    width: 30%;\r\n}\r\n.ios-select-widget-box.three-level-box .three-level-contain {\r\n    width: 40%;\r\n}\r\n.ios-select-widget-box.three-level-box .four-level-contain\r\n.ios-select-widget-box.three-level-box .five-level-contain {\r\n    width: 0%;\r\n}\r\n\r\n.ios-select-widget-box.four-level-box .one-level-contain, \r\n.ios-select-widget-box.four-level-box .two-level-contain,\r\n.ios-select-widget-box.four-level-box .three-level-contain,\r\n.ios-select-widget-box.four-level-box .four-level-contain {\r\n    width: 25%;\r\n}\r\n.ios-select-widget-box.four-level-box .five-level-contain {\r\n    width: 0%;\r\n}\r\n\r\n.ios-select-widget-box.five-level-box .one-level-contain, \r\n.ios-select-widget-box.five-level-box .two-level-contain,\r\n.ios-select-widget-box.five-level-box .three-level-contain,\r\n.ios-select-widget-box.five-level-box .four-level-contain,\r\n.ios-select-widget-box.five-level-box .five-level-contain {\r\n    width: 20%;\r\n}\r\n.ios-select-widget-box .cover-area1 {\r\n    width: 100%;\r\n    border: none;\r\n    border-top: 1px solid #d9d9d9;\r\n    position: absolute;\r\n    top: 149px;\r\n    margin: 0;\r\n    height: 0;\r\n}\r\n.ios-select-widget-box .cover-area2 {\r\n    width: 100%;\r\n    border: none;\r\n    border-top: 1px solid #d9d9d9;\r\n    position: absolute;\r\n    top: 183px;\r\n    margin: 0;\r\n    height: 0;\r\n}\r\n.ios-select-widget-box #iosSelectTitle {\r\n    margin: 0;\r\n    padding: 0;\r\n    display: inline-block;\r\n    font-size: 16px;\r\n    font-weight: normal;\r\n    color: #333;\r\n}\r\n.ios-select-body-class {\r\n    overflow: hidden;\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n}\r\n.ios-select-widget-box.olay > div > .ios-select-loading-box {\r\n    width: 100%;\r\n    height: 100%;\r\n    position: absolute;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n    background-color: rgba(0,0,0,.5);\r\n    display: none;\r\n}\r\n.ios-select-widget-box.olay > div > .ios-select-loading-box > .ios-select-loading { \r\n    width: 50px;\r\n    height: 50px;\r\n    position: absolute;\r\n    left: 50%;\r\n    top: 50%;\r\n    margin-top: -25px;\r\n    margin-left: -25px;\r\n    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1OEMxMEI3NDI3MEIxMUU2ODVGMzhFNjYyMDIyOUFCMCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo1OEMxMEI3NTI3MEIxMUU2ODVGMzhFNjYyMDIyOUFCMCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjU4QzEwQjcyMjcwQjExRTY4NUYzOEU2NjIwMjI5QUIwIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjU4QzEwQjczMjcwQjExRTY4NUYzOEU2NjIwMjI5QUIwIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+GeWqMwAAA+BJREFUeNrMmVlsTGEUx+9cXZQiLZWKklhbQSSlSMUWSxAiJGJ5aSQehOiDF7yI4EFILW99I3iRSJGUPkiILSKp2OuJVtHWkrRVapn2jv+R/ycnn5l27rQz10l+mWlyl/+c833nO+c0FIlEnATMBbPAIn5OBuPAENAKToC74BtoB59AG/D9spBPgaPBdrAFjJH7Fa66TkRuNe8gP8Bb8Ap8j/eFaXFelwv286WZfKG2WL9SX5cFCuntBvAc/OoPD64HJ8EI5Q3tmW7whl4pAl/AUfAEDKZnQ1HuFXGPQGOiAsW7x8A26wUhirgMLnGtfe3hGcO5NApARpRnSchrY0UhlkAJxxmw0npYBzgOKinSj6WDCfRyphWFJnAPdMUjUH71WbDKElcDykGL0zcbCEroVf389+CW7Uk3ygNk/azghYIHDoCN/SDO4W6+A55aAiUrzImWz7StA2WWuF2gIpEc1ovVgQeWyELm06gCc8ARJU44DM45yTPZII8tkXO5DP4RuI8iPYqr4YmQbJN8+E4JlA1abAuUBbtZeU526O4khDWW3QdhK9TZWmAZd6/x3inw0UmdSZJ/pgSKlilGoMvTwoiTw/20k3p7yTyovRgScTNAvgrvFSbkVJuE+LU6GiXEefJHqfKefF5zgrMGVRnJZ4HEerryXjdzU1DWbB2BI10mRuPBej+1WhKsi8vLeDDXZRllwtvoBG8davNmS4gHUZyTQIWSrM1iQpyZptafo4QGabp9+JNmOijMY9MTtGWpEHe5PDHMGsz/DwQOUwI7XVYUZheP1ZVEAJbOFsGswTYR+EKF2NWVRABWwHPYeLDFZWKOKJFLAhRYpMQJjS7rsWYlcjlTT6pNOr5pahfL5m12KaparUPpZTcEILCEjjGniCy9iMk3F9hImzCXcZqQKhOnLFShjbBX/psQP4Aq5UUpdfZEGXEkKzGvZf4zu/exOdV0T1LJCZTx4gK2msm2Uq494z1pS29Ea5ra2RPrrm4HpwvJsplgtTW/kXq0M1ZffF2F2uMNe+nJUD+HVWaLm8AAtXNrOXTqcfQh2fwQmKdST4TTgAp6ui+WTWFTrUpedu15Fs29Do/kuDsIZlsiW7njryZQ2MrAaD5Yqko88+w6zoPCfsdv5VwjnnXayA67zYmUdGM/e0i+E7nWivnDPUWEz6iyPedngLkY7ARDrQeb72GOz5roVY/eylMHvxflXjkpLoKHfZ2wmhJIkvcylUi9BAnTa9U9DD59CzQm/csaZv0cn0JbOeK4ye/xbfcE/w0hYZvElnU8GEXBGRQjeewzi5B6rtP6RGY9vwUYACMHTam1T1ebAAAAAElFTkSuQmCC) no-repeat 0 0;\r\n    background-size: contain;\r\n    -webkit-animation: loading-keyframe 1s infinite linear;\r\n            animation: loading-keyframe 1s infinite linear;\r\n}\r\n@-webkit-keyframes loading-keyframe {\r\n    from {\r\n        -webkit-transform: rotate(0deg);\r\n    }\r\n    to {\r\n        -webkit-transform: rotate(360deg);\r\n    }\r\n}\r\n@keyframes loading-keyframe {\r\n    from {\r\n        transform: rotate(0deg);\r\n    }\r\n    to {\r\n        transform: rotate(360deg);\r\n    }\r\n}", ""]);

	// exports


/***/ }
]);
//# sourceMappingURL=WrcIosselect.js.map