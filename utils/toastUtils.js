import {toast} from "react-toastify";

export const toastError = (message, duration = 3000) => {
	toast.error(message, {
		position: "top-right",
		autoClose: duration,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
	});
};
