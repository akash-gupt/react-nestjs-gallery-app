import { lazyLoad } from 'utils/loadable';
import { LoadingIndicator } from 'app/components/LoadingIndicator';

export const GalleryPage = lazyLoad(
  () => import('./index'),
  module => module.GalleryPage,
  {
    fallback: <LoadingIndicator />,
  },
);
