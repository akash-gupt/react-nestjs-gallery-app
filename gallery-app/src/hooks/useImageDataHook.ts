import { IMAGE_BASE_URL } from 'app-constants';
import ImagesService from 'data/services/ImagesService';
import { random } from 'lodash';
import { useState } from 'react';

export type ImageType = {
  src: string;
  width: number;
  height: number;
};

export const useImageDataHook = () => {
  const [images, setImages] = useState<ImageType[]>([]);

  const loadImages = async () => {
    try {
      const response = await ImagesService.getImages();
      setImages(prev => {
        return response.map(p => {
          return {
            height: random(1, 2),
            width: random(1, 2),
            src: IMAGE_BASE_URL + p,
          };
        });
      });
    } catch (error) {
      console.error(error);
    }
  };

  return { loadImages, images };
};
