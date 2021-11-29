import { toast } from 'react-toastify';
import { AxiosResponse } from 'axios';
import { publicationService } from '@services/publication.service';
import { put, call, takeEvery } from 'redux-saga/effects';
import * as publicationActions from './actions';

import { Sagas } from '../ducks.interface';
import { CreatePublication, Publication } from './publications.interface';
import * as types from './types';

import PublicationHelper from './helpers';

export function* getPublication({ id }: Sagas<{ id: string }>) {
  try {
    const response: AxiosResponse<Publication> = yield call(
      publicationService.get,
      id
    );
    if (response.status >= 200 && response.status <= 299) {
      yield put(
        publicationActions.getPublicationSuccess(
          PublicationHelper.getImages(response.data)
        )
      );
    }
  } catch (error) {
    yield put(publicationActions.getPublicationFailure());
  }
}

export function* getPublications({
  params,
}: Sagas<{ params: Record<string, any> }>) {
  try {
    const response: AxiosResponse<Publication> = yield call(
      publicationService.getAll,
      params
    );
    if (response.status >= 200 && response.status <= 299) {
      yield put(
        publicationActions.getPublicationsSuccess(
          PublicationHelper.getImages(response.data)
        )
      );
    }
  } catch (error) {
    yield put(publicationActions.getPublicationsFailure());
  }
}

export function* createPublication({
  payload,
}: Sagas<{ payload: CreatePublication }>) {
  try {
    const response: AxiosResponse<Publication> = yield call(
      publicationService.create,
      payload
    );
    if (response.status >= 200 && response.status <= 299) {
      yield put(
        publicationActions.createPublicationSuccess(
          PublicationHelper.getImages(response.data),
          toast.success('Publicação criada com sucesso!')
        )
      );
    }
  } catch (error) {
    yield put(
      publicationActions.createPublicationFailure(
        toast.error('Ocorreu um erro ao criar a publicação.')
      )
    );
  }
}

export function* updatePublication({
  id,
  payload,
}: Sagas<{ id: string; payload: CreatePublication }>) {
  try {
    const response: AxiosResponse<Publication> = yield call(
      publicationService.update,
      id,
      payload
    );
    if (response.status >= 200 && response.status <= 299) {
      yield put(
        publicationActions.updatePublicationSuccess(
          PublicationHelper.getImages(response.data),
          toast.success('Publicação atualizada com sucesso!')
        )
      );
    }
  } catch (error) {
    yield put(
      publicationActions.updatePublicationFailure(
        toast.error('Ocorreu um erro ao atualizar a publicação.')
      )
    );
  }
}

export function* activatePublication({ id }: Sagas<{ id: string }>) {
  try {
    const response: AxiosResponse<Publication> = yield call(
      publicationService.activate,
      id
    );
    if (response.status >= 200 && response.status <= 299) {
      yield put(
        publicationActions.activatePublicationSuccess(
          PublicationHelper.getImages(response.data),
          toast.success('Publicação ativada com sucesso!')
        )
      );
    }
  } catch (error) {
    yield put(
      publicationActions.activatePublicationFailure(
        toast.error('Ocorreu um erro ao ativar a publicação.')
      )
    );
  }
}

export function* deactivatePublication({ id }: Sagas<{ id: string }>) {
  try {
    let response: AxiosResponse<Publication> = yield call(
      publicationService.deactivate,
      id
    );
    if (response.status >= 200 && response.status <= 299) {
      response = yield call(publicationService.getAll, {});

      yield put(
        publicationActions.deactivatePublicationSuccess(
          PublicationHelper.getImages(response.data),
          toast.success('Publicação desativada com sucesso!')
        )
      );
    }
  } catch (error) {
    yield put(
      publicationActions.deactivatePublicationFailure(
        toast.error('Ocorreu um erro ao desativar a publicação.')
      )
    );
  }
}

export function* watchProject() {
  yield takeEvery(types.PUBLICATION_REQUEST, getPublication);
  yield takeEvery(types.PUBLICATIONS_REQUEST, getPublications);
  yield takeEvery(types.PUBLICATION_CREATE_REQUEST, createPublication);
  yield takeEvery(types.PUBLICATION_UPDATE_REQUEST, updatePublication);
  yield takeEvery(types.PUBLICATION_ACTIVATE_REQUEST, activatePublication);
  yield takeEvery(types.PUBLICATION_DEACTIVATE_REQUEST, deactivatePublication);
}

export const sagas = [watchProject];
