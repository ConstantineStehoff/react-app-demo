import { combineReducers } from 'redux';
import { History } from 'history';
import { RouterState, connectRouter } from 'connected-react-router';
import { appReducer } from './Dashboard/reducers';
import { AppState } from './Dashboard/types';

const createRootReducer = (history: History) =>
  combineReducers({
    router: connectRouter(history),
    app: appReducer
  });

export interface State {
  router: RouterState;
  app: AppState;
}

export default createRootReducer;
