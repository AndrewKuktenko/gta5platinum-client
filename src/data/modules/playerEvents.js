import { withRouter } from 'react-router-dom';

export function PlayerEvents({ history }) {
  return {
    clearCEF: [() => history.push('/clear')],
    openAuth: [() => history.push('/auth')],
    openCharacterSelector: [() => history.push('/characterSelector')],
  };
}

export default withRouter(PlayerEvents);
