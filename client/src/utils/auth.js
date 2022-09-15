// This import will decode the token and get user's info 
import decode from 'jwt-decode';

class AuthService {
    // gets user data
    getProfile() {
        return decode(this.getToken())
    }

    // check user if logged in
    loggedIn() {
        const token = this.getToken()
        return token && !this.isTokenExpired(token) ? true : false;
    }

    isTokenExpired(token) {
        try {
          const decoded = decode(token);
          if (decoded.exp < Date.now() / 1000) {
            localStorage.removeItem('id_token');
            return true;
          } else {
            return false;
          }
        } catch (err) {
          return err;
        }
      }

      getToken() {
        // Retrieves the user token from localStorage
        return localStorage.getItem('id_token');
      }

      login(idToken) {
        // Saves user token to localStorage
        localStorage.setItem('id_token', idToken);
        window.location.assign('/');
      }

      logout() {
        // Clear user token and profile data from localStorage
        localStorage.removeItem('id_token');
        // this will reload the page and reset the state of the application
        window.location.assign('/');
      }
}

export default new AuthService();
