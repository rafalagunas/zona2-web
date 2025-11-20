import ConfigurationAPIs from '../api/configurationAPIs';
import type { CreateUserDto, SecUser } from '../../types/user.types';

const APIs = {

  // Create user (pre-registration)
  createUser: async (data: CreateUserDto, customPath?: string): Promise<SecUser> => {
    const path = customPath || 'sec-users/pre-register';
    return ConfigurationAPIs.post<SecUser>(path, data);
  },

}

export default APIs;