import { UserAgentApplication } from 'msal';

var msalConfig = {
    auth: {
        clientId: "860e0df4-3d7e-403d-b7fc-5a3bff9ee259",
        authority: "https://login.microsoftonline.com/common",
        redirectURI: "https://marianreha.github.io/vue-timeit/"
    },
    cache: {
        cacheLocation: "localStorage",
        storeAuthStateInCookie: true
    }
};

var requestObj = {
    scopes: ["user.read"]
};

var myMSALObj = new UserAgentApplication(msalConfig);

var login = async () => {
    var authResult = await myMSALObj.loginPopup(requestObj);
    return authResult.account;
};

var getAccount = async () => {
    var account = await myMSALObj.getAccount();
    return account;
};

var logout = async () => {
    myMSALObj.logout();
};

export default {
    login,
    getAccount,
    logout
};
