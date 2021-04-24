import { API_BASE_URL } from 'app-constants';
import Axios from 'axios';

import Interceptors from './Interceptors';

const AxiosClient = Axios.create({
  baseURL: API_BASE_URL,
});

AxiosClient.interceptors.response.use(
  Interceptors.transformResponseData,
  Interceptors.transformResponseError,
);

export default AxiosClient;
