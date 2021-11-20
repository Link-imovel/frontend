import { ImageBase64, Publication } from '../publications.interface';

class PublicationHelper {
  static getImages = (
    publication: Publication
  ): Publication<ImageBase64> | Publication => {
    if (publication.home?.images) {
      Object.assign(publication, {
        publication: {
          home: {
            images: publication.home.images.map((images) => ({
              ...images,
              image: Buffer.from(images.image).toString('base64'),
            })),
          },
        },
      });
    }

    return publication;
  };
}

export default PublicationHelper;
