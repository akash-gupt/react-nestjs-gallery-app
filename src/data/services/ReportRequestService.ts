import { ApiEndpoint } from 'app-constants';
import { PagingType, ReportRequestType, ServerResponseType } from 'data/types';
import HttpClient from 'utils/HttpClient/HttpClient';

const getReportRequests = async (query?: PagingType) => {
  return HttpClient.get<ServerResponseType<ReportRequestType>>(
    ApiEndpoint.GET_REPORT_REQUESTS,
    {
      queryParams: query,
    },
  );
};

const methods = {
  getReportRequests,
};

export default methods;
