import { httpClient } from './http/http.client';
import {
  CreatePublication,
  UpdatePublication,
} from '@store/ducks/publications/publications.interface';

const publicationService = {
  get: (id: string) =>
    httpClient({
      title: 'PublicationService - get',
      endpoint: '/publication/' + id,
      method: 'GET',
    }),
  getAll: (params: Record<string, any>) =>
    httpClient({
      title: 'PublicationService - getAll',
      endpoint: '/publication/',
      params,
      method: 'GET',
    }),
  create: (data: CreatePublication) =>
    httpClient({
      title: 'PublicationService - create',
      endpoint: '/publication/',
      data,
      method: 'POST',
    }),
  update: (id: string, data: UpdatePublication) =>
    httpClient({
      title: 'PublicationService - update',
      endpoint: '/publication/' + id,
      data,
      method: 'PATCH',
    }),
  activate: (id: string) =>
    httpClient({
      title: 'PublicationService - activate',
      endpoint: `/publication/${id}/activate`,
      method: 'POST',
    }),
  deactivate: (id: string) =>
    httpClient({
      title: 'PublicationService - deactivate',
      endpoint: '/publication/' + id,
      method: 'DELETE',
    }),
};

export { publicationService };
