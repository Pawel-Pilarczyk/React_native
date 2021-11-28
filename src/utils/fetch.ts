// eslint-disable @typescript-eslint/no-unsafe-return
type TInit = {
  method: string;
  body: string | undefined;
  headers: Record<string, string> | undefined;
};

const API = 'https://jsonplaceholder.typicode.com/';

const toUrlParameters = (body: Record<string, string>) =>
  `?${Object.entries(body)
    .map(([key, value]) => `${key}=${value}`)
    .join('&')}`;

const checkResponse = async (res: Response) => {
  if (!res.ok) {
    throw new Error('Something went wrong');
  }

  const data = await res.json();
  return data;
};

const http = async (
  method: string,
  path: string,
  params: Record<string, string> = {},
) => {
  const requestParams: {[key: string]: any} = {method, ...params};
  let url = API + path;

  const init: TInit = {
    method,
    body: undefined,
    headers: undefined,
  };

  if (requestParams.body) {
    if (method === 'get') {
      url += toUrlParameters(requestParams.body);
    } else {
      init.body = JSON.stringify(requestParams.body);
      init.headers = {
        'Content-type': 'application/json; charset=UTF-8',
      };
    }
  }

  return fetch(url, init).then(checkResponse);
};

export default {
  get(path: string, params?: Record<string, string>) {
    return http('get', path, params);
  },
  post(path: string, params: Record<string, string>) {
    return http('post', path, params);
  },
  put(path: string, params?: Record<string, string>) {
    return http('put', path, params);
  },
  patch(path: string, params?: Record<string, string>) {
    return http('patch', path, params);
  },
  delete(path: string, params?: Record<string, string>) {
    return http('delete', path, params);
  },
};
