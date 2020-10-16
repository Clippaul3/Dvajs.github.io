import React from 'react';
import dva from 'dva';
import createLoading from 'dva-loading';
import App from './components/App';
import products from './models/products';
import cart from './models/cart';
import select from './models/select';

const app = dva({
    onStateChange: (state) => {
        console.log('变了', state)
        // let localCart = JSON.stringify(state.cart)
        // window.localStorage.localCart = JSON.stringify(state.cart)
        window.localStorage.localProducts = JSON.stringify(state.products)
    }
});
app.model(products);
app.model(cart);
app.model(select);
app.use(createLoading());
app.router(() => <App/>);
app.start('#root');
