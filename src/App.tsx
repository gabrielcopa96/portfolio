import { ReactElement, useEffect } from 'react';
import { BrowserRouter, useLocation } from "react-router-dom";
import LayoutMain from "./layouts/LayoutMain";
import { Provider } from 'react-redux'
import store from './redux/store/store';

function App(): ReactElement<HTMLElement> {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <LayoutMain/>
      </BrowserRouter>
    </Provider>
  );
}

export default App;