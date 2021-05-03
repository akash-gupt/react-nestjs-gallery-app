import { ApiEndpoint } from 'app-constants';
import {
  PagingType,
  ProductReturnType,
  ServerResponseType,
  TrackingNumberType,
} from 'data/types';
import HttpClient from 'utils/HttpClient/HttpClient';

const getProductReturns = async (query?: PagingType) => {
  return HttpClient.get<ServerResponseType<ProductReturnType>>(
    ApiEndpoint.GET_PRODUCT_RETURNS,
    {
      queryParams: query,
    },
  );
};

const getTrackingNumbers = async (query?: PagingType) => {
  return HttpClient.get<ServerResponseType<TrackingNumberType>>(
    ApiEndpoint.GET_TRACKING_NUMBERS,
    {
      queryParams: query,
    },
  );
};

const methods = {
  getProductReturns,
  getTrackingNumbers,
};

export default methods;
