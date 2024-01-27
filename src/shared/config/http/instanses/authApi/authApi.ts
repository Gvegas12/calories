import axios from "axios";

const $authApi = axios.create({
	baseURL: __AUTH_API_URL__,
});

export { $authApi };
