module.exports = () => {
  browser = global.browser;
  mp.keys.bind(0x7B, true, () => {
    let state = !mp.gui.cursor.visible
    mp.gui.cursor.show(state, state)
  })
}
