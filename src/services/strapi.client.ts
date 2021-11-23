import delve from 'dlv';
import { HttpClient } from '@services/http.client';
import { GetServerSidePropsResult } from 'next';

class StrapiService extends HttpClient {
  getStrapiURL = (path: string): string => `${process.env.STRAPI_URL}${path}`;

  getStrapiMedia = (url: string): string | null => {
    if (!!url) return null;
    if (url.startsWith('http') || url.startsWith('//')) return url;
    return `${process.env.STRAPI_URL}${url}`;
  };

  redirectToHomepage = (): {
    redirect: { destination: string; permanent: boolean };
  } => {
    return {
      redirect: {
        destination: `/`,
        permanent: false,
      },
    };
  };

  getData = async <T extends Record<string, any>>(
    slug: string,
    locale: string,
    additionalData?: Record<string, unknown>
  ): Promise<GetServerSidePropsResult<T>> => {
    const baseURL = this.getStrapiURL(`/pages?slug=${slug}&_locale=${locale}`);

    const data = await this.setConfig({ method: 'GET', baseURL }).send<any>();

    if (!data.length) return this.redirectToHomepage();

    const props = (await this.getDataDependencies(delve(data, '0'))) as T;

    return { props: ({ ...props, ...additionalData } as unknown) as T };
  };

  getDataDependencies = async (
    json: Record<string, unknown>
  ): Promise<Record<string, unknown>> => {
    let buttons = delve(json, 'properties.buttons', []);
    const custom = delve(json, 'properties.custom', {});
    buttons = this.getButtonsData(buttons);
    return {
      ...json,
      ...custom,
      buttons,
    };
  };

  getLocalizedParams(path?: string, locale?: string) {
    if (path?.includes('?')) path = path.split('?')[0];
    if (path?.match('/')) path = path.replace('/', '');
    return { slug: path || '', locale: locale || 'en' };
  }

  private getButtonsData = (
    buttons: Array<{ name: string; label: string }>
  ) => {
    let props = {};
    buttons.map(({ name, label }) => {
      props = { ...props, [name]: { label } };
    });
    return props;
  };
}

export default new StrapiService();
