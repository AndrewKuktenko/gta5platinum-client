import get from 'lodash/get';
import { createSelector } from 'reselect';

export const baseEventManagerSelector = (state) => get(state, 'eventManager.events', {});
export const eventManagerSelector = createSelector(
  baseEventManagerSelector,
  (events) => events,
);
