import { toast } from 'react-toastify';

const ToastType = {
	INFO: 'INFO',
	SUCCESS: 'SUCCESS',
	WARNING: 'WARNING',
	ERROR: 'ERROR',
};

function Toast(message, type) {
	const config = {
		position: 'top-right',
		autoClose: 5000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
		theme: 'colored',
	};

	switch (type) {
		case 'INFO': {
			toast.info(message, config);
			break;
		}
		case 'SUCCESS': {
			toast.success(message, config);
			break;
		}
		case 'WARNING': {
			toast.warning(message, config);
			break;
		}
		case 'ERROR': {
			toast.error(message, config);
			break;
		}
		default: {
			toast.info(message, config);
			break;
		}
	}
}

export { Toast, ToastType };
