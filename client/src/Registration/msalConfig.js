export const msalConfig = {
    auth: {
        clientId: 'YOUR_MICROSOFT_CLIENT_ID',  // This is the Application (client) ID from Azure AD
        authority: 'https://login.microsoftonline.com/common',  // Authority URL. 'common' is used for multi-tenant apps
        redirectUri: window.location.origin,  // The URL to redirect users after login. Usually, the app's home page.
    },
    cache: {
        cacheLocation: 'sessionStorage',  // Options: 'localStorage' or 'sessionStorage' to store tokens
        storeAuthStateInCookie: false,  // Set to true if dealing with IE11 or Edge legacy browsers
    },
};
