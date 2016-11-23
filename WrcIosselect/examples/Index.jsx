import React from 'react';
import ReactDOM from 'react-dom';
import '../../reset.css';
import IosSelect from '../lib/WrcIosselect.jsx';
let data = [
    {'id': '10001', 'value': '工商银行'},
    {'id': '10002', 'value': '农业银行'},
    {'id': '10003', 'value': '建设银行'},
    {'id': '10004', 'value': '中国银行'},
    {'id': '10005', 'value': '交通银行'},
    {'id': '10006', 'value': '浦发银行'},
    {'id': '10007', 'value': '上海银行'},
    {'id': '10008', 'value': '汇丰银行'},

    {'id': '10009', 'value': '光大银行'},
    {'id': '10010', 'value': '招商银行'},
    {'id': '10011', 'value': '中信银行'},
    {'id': '10012', 'value': '民生银行'},
    {'id': '10013', 'value': '平安银行'},
    {'id': '10014', 'value': '华夏银行'},
    {'id': '10015', 'value': '广发银行'},
    {'id': '10016', 'value': '北京银行'}
];
class IosselectDemo extends React.Component{
    constructor(props) {
        super(props);
    }
	handleClick() {
		let showBankDom = this.refs.bank;
        let bankId = showBankDom.dataset['id'];
        let bankName = showBankDom.dataset['value'];

        let bankSelect = new IosSelect(1, 
            [data],
            {
                oneLevelId: bankId,
                callback: function (selectOneObj) {
                    showBankDom.innerHTML = selectOneObj.value;
                    showBankDom.dataset['id'] = selectOneObj.id;
                    showBankDom.dataset['value'] = selectOneObj.value;
                }
        });
	}
	render() {
		return (
			<div>
			    <span onClick={this.handleClick.bind(this)} ref="bank" className="test-btn">选择银行</span>
			</div>
		)
	}
};
window.onload = function() {
    ReactDOM.render(
        <IosselectDemo />,
        document.getElementById('demo')
    );
}
