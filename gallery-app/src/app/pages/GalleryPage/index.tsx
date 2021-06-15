/* eslint-disable react-hooks/exhaustive-deps */
import { Helmet } from 'react-helmet-async';
import Measure, { ContentRect } from 'react-measure';
import { useState, useCallback, useEffect } from 'react';
import Gallery from 'react-photo-gallery';
import Carousel, { Modal, ModalGateway } from 'react-images';
import { useImageDataHook } from 'hooks/useImageDataHook';
import Header from 'app/components/Header';

export const photos = [
  {
    src: 'https://source.unsplash.com/2ShvY8Lf6l0/800x599',
    width: 4,
    height: 3,
  },
  {
    src: 'https://source.unsplash.com/Dm-qxdynoEc/800x799',
    width: 1,
    height: 1,
  },
  {
    src: 'https://source.unsplash.com/qDkso9nvCg0/600x799',
    width: 3,
    height: 4,
  },
  {
    src: 'https://source.unsplash.com/iecJiKe_RNg/600x799',
    width: 3,
    height: 4,
  },
  {
    src: 'https://source.unsplash.com/epcsn8Ed8kY/600x799',
    width: 3,
    height: 4,
  },
  {
    src: 'https://source.unsplash.com/NQSWvyVRIJk/800x599',
    width: 4,
    height: 3,
  },
  {
    src: 'https://source.unsplash.com/zh7GEuORbUw/600x799',
    width: 3,
    height: 4,
  },
  {
    src: 'https://source.unsplash.com/PpOHJezOalU/800x599',
    width: 4,
    height: 3,
  },
  {
    src: 'https://source.unsplash.com/I1ASdgphUH4/800x599',
    width: 4,
    height: 3,
  },
];

export function GalleryPage() {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const { images, loadImages } = useImageDataHook();
  const [columns, setColumns] = useState(8);

  useEffect(() => {
    loadImages();
  }, []);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  const onResize = (contentRect: ContentRect) => {
    setColumns(8);
    const containerWidth = contentRect.bounds?.width;
    console.log(contentRect);
    if (containerWidth) {
      if (containerWidth <= 500) {
        setColumns(4);
      } else if (containerWidth <= 900) {
        setColumns(6);
      } else if (containerWidth <= 1500) {
        setColumns(10);
      }
    }
  };

  return (
    <div>
      <Helmet>
        <title>Gallery</title>
        <meta name="description" content="Page not found" />
      </Helmet>

      <Header />
      <Measure bounds onResize={onResize}>
        {({ measureRef }) => (
          <div ref={measureRef}>
            <Gallery
              photos={images}
              onClick={openLightbox}
              direction={'column'}
              columns={columns}
            />
          </div>
        )}
      </Measure>

      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={images.map(x => ({
                ...x,
                source: x.src,
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
  );
}
