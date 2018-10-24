import { createStore, applyMiddleware, compose } from "redux";
import { createLogger } from 'redux-logger'
import {
  forwardToMain,
  forwardToRenderer,
  replayActionMain,
  replayActionRenderer
} from "electron-redux";
import getRootReducer from "../reducers";
import DevTools from "../../renderer/components/DevTools";

/**
 * @param  {Object} initialState
 * @param  {String} [scope='main|renderer']
 * @return {Object} store
 */
export default function configureStore(initialState, scope = "main") {
  const logger = createLogger({
    level: scope === "main" ? undefined : "info",
    collapsed: true
  });

  let middleware = [];

  if (process.env.NODE_ENV === "development") {
    //middleware.push(logger);
  }

  if (scope === "renderer") {
    middleware = [forwardToMain, ...middleware];
  }

  if (scope === "main") {
    middleware = [...middleware, forwardToRenderer];
  }

  const enhanced = [applyMiddleware(...middleware)];

  if (process.env.NODE_ENV === "development" && scope === "renderer") {
    enhanced.push(DevTools.instrument());
  }
  const rootReducer = getRootReducer(scope);
  const enhancer = compose(...enhanced);
  const store = createStore(rootReducer, initialState, enhancer);

  if (scope === "main") {
    replayActionMain(store);
  } else {
    replayActionRenderer(store);
  }

  return store;
}
