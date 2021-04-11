import axios from 'axios';

import config from 'config';

/**
 * Http utils
 */
const http = axios.create({
  baseURL: config.baseURI,
  headers: {
    'content-type': 'application/json; charset=UTF-8'
  }
})

export { http as default }
