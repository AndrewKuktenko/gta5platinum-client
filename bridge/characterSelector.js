const rpc = require('rage-rpc')

let characterSelectorBrowser;

mp.events.add('OpenCharacterSelector', () => {
    characterSelectorBrowser = mp.browsers.new('package://cef/index.html#/characterSelector')
    mp.gui.cursor.show(true, true)
});

mp.events.add('GetUserCharacters', (charecters) => {
    mp.gui.chat.push(charecters);
    rpc.callBrowser(characterSelectorBrowser, 'getUserCharacters', charecters);
});