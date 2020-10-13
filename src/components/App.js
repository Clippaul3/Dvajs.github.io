import React from 'react';
import {connect} from 'dva';
import ProductList from './ProductList';
import SelectSizesDemo from './Select';
import Cart from './Cart';
import 'antd/dist/antd.css';
import './index.css';
import Nav from "./Nav";

class App extends React.Component {
    componentDidMount() {
        const {dispatch} = this.props;

        dispatch({
            type: 'products/query'
        });
    }

    render() {
        return (
            <div className={'app-index'}>
                <div><SelectSizesDemo/></div>
                <div>
                    <Nav/>
                    <ProductList/>
                </div>
                <div><Cart/></div>
            </div>
        )
    }
}

export default connect()(App);
