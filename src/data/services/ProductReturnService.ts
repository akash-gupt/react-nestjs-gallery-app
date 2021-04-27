import { ApiEndpoint } from 'app-constants';
import { PagingType, ProductReturnType, ServerResponseType } from 'data/types';
import HttpClient from 'utils/HttpClient/HttpClient';

const getProductReturns = async (query?: PagingType) => {
  return HttpClient.get<ServerResponseType<ProductReturnType>>(
    ApiEndpoint.GET_PRODUCT_RETURNS,
    {
      queryParams: query,
    },
  );
};

const methods = {
  getProductReturns,
};

export default methods;
