import ConfigurationAPIs from '../api/configurationAPIs';

const APIs = {

  // YACHTS
  createUser: async (data: any, customPath?: string) => {
    const path = customPath || 'user/create';
    return ConfigurationAPIs.post(path, data);
  },


}

export default APIs;