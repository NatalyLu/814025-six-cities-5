import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";
// import offers from "./mocks/offers";
import reviews from "./mocks/reviews";
import {createStore} from "redux";
import {Provider} from "react-redux";
import {reducer} from "./reducer";

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
);

ReactDOM.render(
    <Provider store={store}>
      <App
        // offers={state.offers}
        reviews={reviews} />
    </Provider>,
    document.querySelector(`#root`)
);
