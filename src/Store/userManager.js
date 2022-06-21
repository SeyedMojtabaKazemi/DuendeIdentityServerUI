import { createUserManager } from 'redux-oidc';
import Oidc from 'oidc-client';

const ssoURL = process.env.REACT_APP_SSO_BASE_URL;
const ssoClinetId = process.env.REACT_APP_SSO_CLIENT_ID
const ssoScopes = process.env.REACT_APP_SSO_SCOPES
const ssoSecret = process.env.REACT_APP_SSO_SECRET

const userManagerConfig = {
  client_id: ssoClinetId,
  redirect_uri: window.location.origin + '/SignInCallback',
  silent_redirect_uri: window.location.origin + '/SilentCallback',
  response_type: 'code',
  scope:ssoScopes,
  authority: ssoURL,
  post_logout_redirect_uri: window.location.origin + '/SignOutCallback',
  userStore: new Oidc.WebStorageStateStore({ store: localStorage }),
  automaticSilentRenew: true,
  filterProtocolClaims: true,
  loadUserInfo: true,
  monitorSession: false,
  // silentRequestTimeout: 1,
  client_secret: ssoSecret
};
const userManager = createUserManager(userManagerConfig);

export default userManager;
