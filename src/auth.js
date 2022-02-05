import { AppConfig, UserSession, showConnect } from '@stacks/connect';
import { Storage } from '@stacks/storage';
import { StacksMainnet, StacksTestnet } from '@stacks/network';

const appConfig = new AppConfig(['store_write', 'publish_data']);

// Set this to true if you want to use Mainnet
const boolNetworkType = false;

export const userSession = new UserSession({ appConfig });
export const storage = new Storage({ userSession });

export function networkType() {
  if (boolNetworkType)
    return new StacksMainnet();
  else
    return new StacksTestnet();
}

// this will return the users stx address if logged in
export function myStxAddress() {
  try {
    if (boolNetworkType)
      return getUserData().profile.stxAddress.mainnet;
    else
      return getUserData().profile.stxAddress.testnet;
  }

  catch (err) {
    console.log(err);
    return;
  }
}

// bind this function on signin button OnClick
export function Signin() {

  try {

    showConnect({
      appDetails: {
        name: 'YourAppName',
        icon: window.location.origin + '/YourAppLogo.svg',
      },
      redirectTo: '/',
      onFinish: () => {
        console.log("Signed in");
        // After Signin code here... e.g reload/redirect

      },
      userSession: userSession,
    });

  }

  catch (err) {
    console.log(err);
    return;
  }
}

function getUserData() {

  try {
    if (userSession.isUserSignedIn()) {
      return userSession.loadUserData();
    }
    else {
      console.log("User is not Signed in");
    }
  }
  catch (err) {
    console.log(err);
    return;
  }
}

// bind this function on signout button OnClick
export function Signout() {

  try {
    if (userSession.isUserSignedIn()) {
      userSession.signUserOut();
      console.log("Signed out");
    }
    else {
      console.log("User is not Signed in");
    }
  }
  catch (err) {
    console.log(err);
    return;
  }
}