import { AxiosError, AxiosResponse } from 'axios';
import { get } from 'lodash';

function transformResponseError(error: AxiosError) {
  throw new Error(error.message);
}

function transformResponseData(response: AxiosResponse) {
  const status = get(response.data, 'status');

  if (status === false) {
    return transformResponseError(response.data);
  }

  return response.data;
}

const methods = {
  transformResponseData,
  transformResponseError,
};

export default methods;
