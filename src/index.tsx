import * as ReactDOM from 'react-dom';
import { AppComponent } from './components/app/app.component';
import { Provider } from 'react-redux';
import store from './store/store';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <AppComponent />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'),
);
