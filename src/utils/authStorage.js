import AsyncStorage from '@react-native-async-storage/async-storage';

class AuthStorage {
  constructor(namespace = 'auth') {
    this.namespace = namespace;
  }

  // Get the access token for the storage
  // Add the access token to the storage
  // Remove the access token from the storage
  
  async getAccessToken() {
    const token = await AsyncStorage.getItem(`${this.namespace}:auth`)
    return token ? JSON.parse(token): '' ;
  }

  async setAccessToken(accessToken) {
    await AsyncStorage.setItem(`${this.namespace}:auth`, JSON.stringify(accessToken))
  }

  async removeAccessToken() {
    await AsyncStorage.removeItem(`${this.namespace}:auth`)
  }

}


export default AuthStorage;