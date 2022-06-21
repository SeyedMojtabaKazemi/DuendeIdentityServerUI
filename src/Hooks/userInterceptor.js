import { API } from "../Services/httpConfig";

const useInterceptor = () => {
  const addTokenInterceptor = (token) => {
    API.interceptors.request.use(request => {
      request.headers.common.Authorization = `Bearer ${token}`;
      return request;
    });
  }
  return [addTokenInterceptor]
}
export default useInterceptor
