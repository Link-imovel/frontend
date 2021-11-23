import HttpClient from '@services/http.client';
import { createModel } from '@rematch/core';

import {
  PublicationStore,
  Publication,
  CreatePublication,
  UpdatePublication,
} from './publications.interface';
import { RootModel } from '@store/models';
import PublicationHelper from './helpers';

const publication = createModel<RootModel>()({
  state: {
    publication: {},
    publications: [{}],
  } as PublicationStore,
  reducers: {
    SET_PUBLICATION: (
      state: PublicationStore,
      publication: Publication<string[]>
    ) => {
      return {
        ...state,
        publication,
      };
    },
    SET_PUBLICATIONS: (
      state: PublicationStore,
      publications: Publication<string[]>[]
    ) => {
      return {
        ...state,
        publications,
      };
    },
    clear: (): PublicationStore => {
      return {
        publication: {},
        publications: [{}],
      } as PublicationStore;
    },
    hydrate: (
      state: PublicationStore,
      data: PublicationStore
    ): PublicationStore => {
      return { ...state, ...data };
    },
  },
  effects: (dispatch) => {
    const { publication } = dispatch;
    let accessToken = '';
    if (typeof window !== 'undefined') {
      accessToken = window.sessionStorage.getItem('access_token') || '';
    }

    return {
      async get(id: string): Promise<void> {
        publication.SET_PUBLICATION(
          PublicationHelper.getImages<Publication<string[]>>(
            await HttpClient.setPath(`/publication/${id}`)
              .setMethod('GET')
              .send()
          )
        );
      },
      async getAll(): Promise<void> {
        publication.SET_PUBLICATIONS(
          PublicationHelper.getImages(
            await HttpClient.setPath('/publication').setMethod('GET').send()
          )
        );
      },
      async getAllByPage(page: number): Promise<void> {
        publication.SET_PUBLICATIONS(
          PublicationHelper.getImages(
            await HttpClient.setPath('/publication')
              .setParams({ page })
              .setMethod('GET')
              .send()
          )
        );
      },
      async getAllBySearchWord(searchText: string): Promise<void> {
        publication.SET_PUBLICATIONS(
          PublicationHelper.getImages(
            await HttpClient.setPath('/publication')
              .setParams({ searchText })
              .setMethod('GET')
              .send()
          )
        );
      },
      async create(payload: CreatePublication): Promise<void> {
        publication.SET_PUBLICATIONS(
          PublicationHelper.getImages(
            await HttpClient.setPath('/publication')
              .setMethod('POST')
              .setBearer(accessToken)
              .setData(payload)
              .send()
          )
        );
      },
      async update(payload: {
        id: string;
        data: UpdatePublication;
      }): Promise<void> {
        publication.SET_PUBLICATIONS(
          PublicationHelper.getImages(
            await HttpClient.setPath(`/publication/${payload.id}`)
              .setMethod('PATCH')
              .setBearer(accessToken)
              .setData(payload.data)
              .send()
          )
        );
      },
      async activate(id: string): Promise<void> {
        publication.SET_PUBLICATIONS(
          PublicationHelper.getImages(
            await HttpClient.setPath(`/publication/${id}/activate`)
              .setMethod('POST')
              .setBearer(accessToken)
              .send()
          )
        );
      },
      async deactivate(id: string): Promise<void> {
        await HttpClient.setPath(`/publication/${id}`)
          .setMethod('DELETE')
          .setBearer(accessToken)
          .send();

        publication.SET_PUBLICATIONS(
          PublicationHelper.getImages(
            await HttpClient.setPath('/publication').setMethod('GET').send()
          )
        );
      },
    };
  },
});

export { publication };
