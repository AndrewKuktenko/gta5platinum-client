const rpc = require('rage-rpc');

let authBrowser;
mp.events.add('OnPlayerConnected', () => {
  authBrowser = mp.browsers.new('package://cef/index.html#/auth')
  mp.gui.cursor.show(true, true)
});

mp.events.add('loginInformationToServer', (username, password) => {
  mp.events.callRemote('OnPlayerLoginAttempt', username, password);
});

mp.events.add('LoginResult', (result) => {
  if (result == 1) {
    // Success we destroy the loginBrowser for this player as we don't need it anymored 
    mp.gui.cursor.show(false, false);
    rpc.callBrowser(authBrowser, 'onSuccessLogin');
    mp.gui.chat.push('You have successfully logged in.');
    authBrowser.destroy();
  } else {
    // Failed we just send a message to the player saying he provided incorrect info
    mp.gui.chat.push('Incorrect password or username.');
  }
});

mp.events.add('registerInformationToServer', (email, username, password) => {
  mp.events.callRemote('OnPlayerRegisterAttempt', email, username, password);
});

mp.events.add('RegistrationResult', (result) => {
  if (result == 1) {
    // Success we destroy the loginBrowser for this player as we don't need it anymore
    // browser.execute(`trigger('onSuccessRegistration',${result})`);
    mp.gui.cursor.show(false, false);
    mp.gui.chat.push('You have successfully created account.');
    rpc.callBrowser(authBrowser, 'onSuccessRegistration', result);
    authBrowser.destroy();
  } else {
    // Failed we just send a message to the player saying he provided incorrect info
    mp.gui.chat.push('Incorrect password or username.');
  }
});
