import get from 'lodash/get';

export default () => (next) => (action) => {
  // const endpoint = get(action, 'payload.endpoint');
  // const method = get(action, 'payload.method');
  // const params = get(action, 'payload.params', {});
  // const onSuccess = get(action, 'onSuccess', null);
  // const onFailed = get(action, 'onFailed', null);
  // const components = get(action, 'components', null);

  if (get(action, 'data')) return next(action);
  if (get(action, 'payload.event')) return next(action);

  return false;
};
