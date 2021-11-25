import { Publication } from '../publications.interface';

class PublicationHelper {
  public static getImages = <T = Publication<string[]>[]>(
    publications: Publication[] | Publication
  ): T => {
    if (Array.isArray(publications)) {
      return (publications.map((publication) => {
        return PublicationHelper.verifyImage(publication);
      }) as unknown) as T;
    }

    return (PublicationHelper.verifyImage(
      publications as Publication
    ) as unknown) as T;
  };

  private static verifyImage = (publication: Publication) => {
    if (publication.home?.images) {
      return {
        ...publication,
        home: {
          ...publication.home,
          images: publication.home.images.map(
            (images) =>
              'data:image/jpeg;base64, ' +
              Buffer.from(images.image).toString('base64')
          ),
        },
      };
    }
    return publication;
  };
}

export default PublicationHelper;
