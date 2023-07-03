import { ReactElement } from 'react';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux'
import store from './redux/store/store';
import MainMiddleware from './middleware/MainMiddleware';

function App(): ReactElement<HTMLElement> {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <MainMiddleware/>
      </BrowserRouter>
    </Provider>
  );
}

export default App;