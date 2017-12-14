export class AuthServiceOld {

  isLoggedIn = false;

  logIn() {
    this.isLoggedIn = true;
  }

  isAuth() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.isLoggedIn);
      }, 1000);
    });
  }

  logOut() {
    this.isLoggedIn = false;
  }

}
