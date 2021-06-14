import { ApiEndpoint } from 'app-constants';

import HttpClient from 'utils/HttpClient/HttpClient';

const getImages = async () => {
  return HttpClient.get<string[]>(ApiEndpoint.GET_IMAGES);
};

const methods = {
  getImages,
};

export default methods;
