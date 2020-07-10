const PlayerEvents = {
  clearCEF: [() => { window.location.href = '/clear'; }],
  openAuth: [() => { window.location.href = '/auth'; }],
  openCharacterSelector: [() => { window.location.href = '/characterSelector'; }],
};

export default PlayerEvents;
