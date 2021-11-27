import * as types from './types';
import {
  CreatePublication,
  Publication,
  UpdatePublication,
} from './publications.interface';

// Get

export const getPublicationRequest = (id: string) => ({
  type: types.PUBLICATION_REQUEST,
  id,
});

export const getPublicationSuccess = (payload: Publication<string[]>) => ({
  type: types.PUBLICATION_SUCCESS,
  payload,
});

export const getPublicationFailure = () => ({
  type: types.PUBLICATION_FAILURE,
});

// Get ALL

export const getPublicationsRequest = (params: Record<string, any>) => ({
  type: types.PUBLICATIONS_REQUEST,
  params,
});

export const getPublicationsSuccess = (payload: Publication<string[]>[]) => ({
  type: types.PUBLICATIONS_SUCCESS,
  payload,
});

export const getPublicationsFailure = () => ({
  type: types.PUBLICATIONS_FAILURE,
});

// Create

export const createPublicationRequest = (payload: CreatePublication) => ({
  type: types.PUBLICATION_CREATE_REQUEST,
  payload,
});

export const createPublicationSuccess = (payload: Publication<string[]>[]) => ({
  type: types.PUBLICATION_CREATE_SUCCESS,
  payload,
});

export const createPublicationFailure = () => ({
  type: types.PUBLICATION_CREATE_FAILURE,
});

// Update

export const updatePublicationRequest = (
  id: string,
  payload: UpdatePublication
) => ({
  type: types.PUBLICATION_UPDATE_REQUEST,
  payload,
  id,
});

export const updatePublicationSuccess = (payload: Publication<string[]>[]) => ({
  type: types.PUBLICATION_UPDATE_SUCCESS,
  payload,
});

export const updatePublicationFailure = () => ({
  type: types.PUBLICATION_UPDATE_FAILURE,
});

// Activate

export const activatePublicationRequest = (id: string) => ({
  type: types.PUBLICATION_ACTIVATE_REQUEST,
  id,
});

export const activatePublicationSuccess = (
  payload: Publication<string[]>[]
) => ({
  type: types.PUBLICATION_ACTIVATE_SUCCESS,
  payload,
});

export const activatePublicationFailure = () => ({
  type: types.PUBLICATION_ACTIVATE_FAILURE,
});

// Deactivate

export const deactivatePublicationRequest = (id: string) => ({
  type: types.PUBLICATION_DEACTIVATE_REQUEST,
  id,
});

export const deactivatePublicationSuccess = (
  payload: Publication<string[]>[]
) => ({
  type: types.PUBLICATION_DEACTIVATE_SUCCESS,
  payload,
});

export const deactivatePublicationFailure = () => ({
  type: types.PUBLICATION_DEACTIVATE_FAILURE,
});
