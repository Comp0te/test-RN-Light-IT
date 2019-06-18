import createAction from '../../utils/actionCreators';

export const ActionTypes = {
  REHYDRATE_STORE: 'REHYDRATE_STORE',
};

export const Actions = {
  rehydrateStore: () => createAction(ActionTypes.REHYDRATE_STORE),
};
