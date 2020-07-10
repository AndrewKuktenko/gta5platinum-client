module.exports = () => {
  browser = global.browser;
  mp.events.add('loginInformationToServer', (username, password) => {
    mp.events.callRemote('OnPlayerLoginAttempt', username, password);
  });

  mp.events.add('LoginResult', (result) => {
    if (result == 1) {
      // Success we destroy the loginBrowser for this player as we don't need it anymore
      browser.execute('trigger(\'onSuccessLogin\')');
      // loginBrowser.destroy(); call /clear event
      mp.gui.cursor.show(false, false);
      // mp.events.call('CharachterCreator', username);
      mp.gui.chat.push('You have successfully logged in.');
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
      browser.execute(`trigger('onSuccessRegistration',${result})`);
      mp.gui.cursor.show(false, false);
      mp.gui.chat.push('You have successfully created account.');
    } else {
      // Failed we just send a message to the player saying he provided incorrect info
      mp.gui.chat.push('Incorrect password or username.');
    }
  });
}