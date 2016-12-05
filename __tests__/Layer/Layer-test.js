import React from 'react';
import LayerComponent from '../../WrcLayer/lib/Layer.jsx';
import {shallow, mount, render} from 'enzyme';
import sinon from 'sinon';

// 测试虚拟dom，不能测试子组件
describe('<LayerComponent /> shallow', () => {
	test('this is a layer', () => {
		const component = shallow(
			<LayerComponent type="loading"/>
		);
		expect(component.type()).toEqual('div');
	});
});
// 真实dom，能测试子组件，有模拟的dom环境
describe('<LayerComponent /> mount', () => {
	test('this is a layer', () => {
		const component = mount(
			<LayerComponent type="loading"/>
		);
		expect(component.find('.loading')).toHaveLength(1);
	});
});
// 测试生成的静态html
describe('<LayerComponent /> render', () => {
	test('this is a layer', () => {
		const component = render(
			<LayerComponent type="loading"/>
		);
		expect(component.find('.loading')).toHaveLength(1);
	});
});