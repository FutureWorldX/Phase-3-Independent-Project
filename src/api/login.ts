import http from '@utils/request';

interface LoginParam {
  username: string;
  password: string;
}

export default {
  login: (data: LoginParam) => http.post('/login', data),
};
