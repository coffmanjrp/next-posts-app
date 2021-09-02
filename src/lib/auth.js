import netlifyIdentity from 'netlify-identity-widget';

export const auth = netlifyIdentity;

export const init = (callback) => {
  netlifyIdentity.on('init', (user) => {
    callback(user);
  });
  netlifyIdentity.init({
    APIUrl: process.env.NEXT_PUBLIC_AUTH_ENDPOINT,
  });
};

export const login = (callback) => {
  netlifyIdentity.open();
  netlifyIdentity.on('login', (user) => {
    callback(user);
    netlifyIdentity.close();
  });
};

export const logout = (callback) => {
  netlifyIdentity.logout();
  netlifyIdentity.on('logout', () => {
    callback();
  });
};
