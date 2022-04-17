import { render } from 'react-dom';
import { createRoot } from 'react-dom/client';
import { AppComponent } from './components/app/app.component';
import { Provider } from 'react-redux';
import store from './store/store';
import { BrowserRouter } from 'react-router-dom';

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <Provider store={store}>
        <BrowserRouter>
            <AppComponent />
        </BrowserRouter>
    </Provider>,
);
