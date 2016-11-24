/**
 * @file WrcToast
 * @author baidu.inc
 */
/**
 * @module WrcToast
 */
import Layer from '../../WrcLayer/lib/WrcLayer.jsx';
function toast(str, outTime) {
	var toastOptions = {
	    type: 'toast',
	    toastStr: str,
	    outTime: outTime || 3000
	};
	new Layer(toastOptions);
}
/**
 * WrcToast
 * @param {string} str toast's text  
 * @param {number} outTime display time,in milliseconds
 */
export default toast;