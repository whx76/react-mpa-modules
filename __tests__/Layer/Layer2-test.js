import React from 'react';
import ReactDOM from 'react-dom';
import LayerComponent from '../../WrcLayer/lib/Layer2.jsx';
import renderer from 'react-test-renderer';

// 不基于dom环境的测试
beforeAll(function () {
	console.log('begin');
});
test('Layer2 renders normal', () => {
    const tree = renderer.create(
        <LayerComponent />
    ).toJSON();
    expect(tree).toMatchSnapshot();
});
test('Layer2 renders toast', () => {
    const tree = renderer.create(
        <LayerComponent type="toast" />
    ).toJSON();
    expect(tree).toMatchSnapshot();
});
test('Layer2 renders loading', () => {
    const tree = renderer.create(
        <LayerComponent type="loading" />
    ).toJSON();
    expect(tree).toMatchSnapshot();
});
afterAll(() => {
	console.log('end');
});