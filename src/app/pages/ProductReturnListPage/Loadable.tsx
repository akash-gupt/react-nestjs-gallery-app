import { LoadingIndicator } from 'app/components/LoadingIndicator';
import * as React from 'react';
import { lazyLoad } from 'utils/loadable';

/**
 * Asynchronously loads the component for HomePage
 */
export const ProductReturnListPage = lazyLoad(
  () => import('./index'),
  module => module.ProductReturnListPage,
  {
    fallback: <LoadingIndicator />,
  },
);
