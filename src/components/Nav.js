import React from 'react';
import {connect} from 'dva';
import {d} from '../utils/utils';
import {Select} from 'antd';
import 'antd/dist/antd.css';
import './ProductList.css';


class Nav extends React.Component {
    Highest = () => {

    }

    render() {
        const {Option} = Select;
        const {products, select, OnChange} = this.props;

        const children = [<Option key={"default"}>{"默认排序"}</Option>, <Option key={"Highest"}>{"价格由高到低"}</Option>,
            <Option key={"lowest"}>{"价格由低到高"}</Option>];


        return (
            <div style={{paddingLeft: '150px'}}>
                <h1>{(select.productSize.length === 0 ? products.length : select.productSize.length)} 件相关货物</h1>
                <div id="components-dropdown-demo-dropdown-button">


                    <Select
                        defaultValue="默认排序"
                        onChange={(value) => OnChange(value, select.size)}
                        style={{width: 200}}
                    >
                        {children}
                    </Select>

                </div>

            </div>
        );
    }
};

const mapStateToProps = ({products, selected}) => {
    console.log('斯莱克提德',selected);
    return {
        products: d(products.byId, products.result),
        select: selected
    }
}

const mapDispatchToProps = (dispatch) => ({
    OnChange: (change, size) => dispatch({
        type: 'selected/add',
        payload: {
            change,
            size
        }
    }),

})


export default connect(mapStateToProps, mapDispatchToProps)(Nav);