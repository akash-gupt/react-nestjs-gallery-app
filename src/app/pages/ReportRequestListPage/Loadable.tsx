/**
 * Asynchronously loads the component for HomePage
 */
import { LoadingIndicator } from 'app/components/LoadingIndicator';
import * as React from 'react';
import { lazyLoad } from 'utils/loadable';

export const ReportRequestListPage = lazyLoad(
  () => import('./index'),
  module => module.ReportRequestListPage,
  {
    fallback: <LoadingIndicator />,
  },
);
