import axios from "axios";

export default axios.create({
	baseURL: import.meta.env.VITE_BASEURL,
	headers: {
		"Content-Type": "application/json",
	},
});
