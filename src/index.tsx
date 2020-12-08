import { render } from 'react-dom';
import { AppComponent } from './components/app/app.component';
import { Provider } from 'react-redux';
import store from './store/store';
import { BrowserRouter } from 'react-router-dom';

render(
    <Provider store={store}>
        <BrowserRouter>
            <AppComponent />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'),
);
