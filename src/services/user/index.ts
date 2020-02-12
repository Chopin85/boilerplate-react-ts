import api from 'services/api';

const userService = {
  async getIdentity() {
    return api.get('test/');
  }
};

export default userService;
