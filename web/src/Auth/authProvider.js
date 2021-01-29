import { MsalAuthProvider, LoginType } from "react-aad-msal";
import config from "../settings";

const configuration = {
  auth: {
    authority: "https://login.microsoftonline.com/" + config.tenantId,
    clientId: config.clientId
  },
  cache: {
    cacheLocation: "localStorage",
    storeAuthStateInCookie: true
  }
};

const authenticationParameters = {
  scopes: config.MsalScopes
};

const options = {
  loginType: LoginType.Redirect,
  tokenRefreshUri: window.location.origin + "/auth.html"
};

export const authProvider = new MsalAuthProvider(
  configuration,
  authenticationParameters,
  options
);