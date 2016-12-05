import cal from '../../tool/Calculate/Calculate.jsx';
test('Calculate test', () => {
    expect(cal.accAdd(2.2, 2.1)).toBe(4.3);
    expect(cal.accMul(7, 0.8)).toBe(5.6);
    expect(cal.accSub(2.2, 1.9)).toBe('0.3');
    expect(cal.accDiv(2.1, 0.3)).toBe(7);
});