import netlifyIdentity from 'netlify-identity-widget';

export const init = (callback) => {
  netlifyIdentity.on('init', (user) => {
    callback(user);
  });
  netlifyIdentity.init();
};

export const login = (callback) => {
  netlifyIdentity.open();
};
