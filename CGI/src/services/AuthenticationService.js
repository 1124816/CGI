import Api from '@/services/Api';

export default {
  register(cred) {
    return Api().post('register', cred);
  }
};
