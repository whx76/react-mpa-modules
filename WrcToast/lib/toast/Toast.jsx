/**
 * @file
 * @author
 * Created by zhousheng on 2016/9/8
 */
/*
 *  str {string} toast's text  
 */
import Layer from '../../WrcLayer/lib/WrcLayer.jsx';
function toast(str) {
	var toastOptions = {
	    type: 'toast',
	    toastStr: str
	};
	new Layer(toastOptions);
}

export default toast;