import axios from "axios";

const BACKEND_URL = `https://5.react.pages.academy/six-cities`;
const REQUEST_TIMEOUT = 5000;

const HttpCode = {
  UNAUTHORIZED: 401
};

export const createAPI = (onUnauthorized) => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
    // Для передачи куков со всеми запросами на сервер
    // так как доступ к ним из js не имеем
    withCredentials: true,
  });

  const onSuccess = (response) => response;

  const onFail = (err) => {
    const {response} = err;

    if (response.status === HttpCode.UNAUTHORIZED) {
      onUnauthorized();
      throw err;
    }

    throw err;
  };

  // Чтобы не прописывать действия везде, где будем использовать api воспользуемся методом response
  api.interceptors.response.use(onSuccess, onFail);

  return api;
};
