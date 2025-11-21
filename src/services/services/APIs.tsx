import ConfigurationAPIs from '../api/configurationAPIs';
import type { CreateUserDto, SecUser } from '../../types/user.types';

const APIs = {

  loginValidation: async (data: any): Promise<any> => {
    const path = 'auth/login-validation';
    return ConfigurationAPIs.post<any>(path, data);
  },

  login: async (data: any): Promise<any> => {
    const path = 'auth/login';
    return ConfigurationAPIs.post<any>(path, data);
  },



  forgetPassword: async (data: any): Promise<any> => {
    const path = 'sec-users/send-recovery-code';
    return ConfigurationAPIs.post<any>(path, data);
  },

  verifyRecoveryCode: async (data: any): Promise<any> => {
    const path = 'sec-users/verify-recovery-code';
    return ConfigurationAPIs.post<any>(path, data);
  },

  resetPassword: async (data: any): Promise<any> => {
    const path = 'sec-users/reset-password';
    return ConfigurationAPIs.post<any>(path, data);
  },

  /// Sec Users APIs

  createUser: async (data: any): Promise<any> => {
    const path = 'sec-users/pre-registration';
    return ConfigurationAPIs.post<any>(path, data);
  },


  getSecUser: async (): Promise<any> => {
    const path = 'sec-users/me';
    return ConfigurationAPIs.get<any>(path);
  },

  getSecUserById: async (id: string): Promise<any> => {
    const path = `sec-users/${id}`;
    return ConfigurationAPIs.get<any>(path);
  },

  updateSecUser: async (id: string, data: any): Promise<any> => {
    const path = `sec-users/${id}`;
    return ConfigurationAPIs.put<any>(path, data);
  },
}

export default APIs;