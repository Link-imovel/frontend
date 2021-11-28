import { getCookie, setCookies, removeCookies } from 'cookies-next';

const removeToken = () => removeCookies('authToken');

const saveToken = (token: string): void => setCookies('authToken', token);

const getToken = () => getCookie('authToken');

export { removeToken, saveToken, getToken };
