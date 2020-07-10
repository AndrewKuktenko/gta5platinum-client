mp.events.add('OnPlayerConnected', () => {
    global.browser = mp.browsers.new('package://cef/index.html')
    mp.gui.cursor.show(true, true)
})

require('./bridge/authorization.js')()
require('./bridge/commands.js')

// // Handle event from server and send data to react app
// mp.events.add('onMessageFromServer', (value) => {
//     browser.execute(`trigger('onMessage', '${value}')`)
// })

// // Handle event from react app
// mp.events.add('showUrl', (url) => {
//     mp.gui.chat.push(url)
// })
