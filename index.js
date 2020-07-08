let browser

mp.events.add('OnPlayerConnected', () => {
    browser = mp.browsers.new('package://cef/index.html')
    mp.gui.cursor.show(true, true)
})

// Handle event from server and send data to react app
mp.events.add('onMessageFromServer', (value) => {
    browser.execute(`trigger('onMessage', '${value}')`)
})

// Handle event from react app
mp.events.add('showUrl', (url) => {
    mp.gui.chat.push(url)
})

// F12 - trigger cursor
mp.keys.bind(0x7B, true, () => {
    let state = !mp.gui.cursor.visible
    mp.gui.cursor.show(state, state)
})

mp.events.add('loginInformationToServer', (username, password) => {
    mp.events.callRemote('OnPlayerLoginAttempt', username, password);
});

mp.events.add('LoginResult', (result) => {
    if (result == 1) {
        //Success we destroy the loginBrowser for this player as we don't need it anymore
        browser.execute(`trigger('onSuccessLogin')`);
        // loginBrowser.destroy(); call /clear event
        mp.gui.cursor.show(false, false);
        // mp.events.call('CharachterCreator', username);
        mp.gui.chat.push("You have successfully logged in.");
    }
    else {
        //Failed we just send a message to the player saying he provided incorrect info
        mp.gui.chat.push('Incorrect password or username.')
    }
});

mp.events.add('registerInformationToServer', (email, username, password) => {
    mp.events.callRemote('OnPlayerRegisterAttempt', email, username, password);
});

mp.events.add('RegistrationResult', (result) => {
    if (result == 1) {
        //Success we destroy the loginBrowser for this player as we don't need it anymore        
        browser.execute(`trigger('onSuccessRegistration',${result})`);
        mp.gui.cursor.show(false, false);
        mp.gui.chat.push("You have successfully created account.");
    }
    else {
        //Failed we just send a message to the player saying he provided incorrect info
        mp.gui.chat.push('Incorrect password or username.');

        //Here you can be creative and handle it visually in your webpage by using the (browser).execute or loginBrowser.execute in our case to execute a js code in your webpage
        //Example:
        loginBrowser.execute('var alertElement = $(\' <div class= "alert alert-danger">Incorrect username or password.</div > \'); \
            $(\'.jumbotron\').append(alertElement);');
    }
});