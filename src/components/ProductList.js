import React from 'react';
import { connect } from 'dva';
import { d } from '../utils/utils';
import {  Button} from 'antd';
import 'antd/dist/antd.css';
import './ProductList.css';




class ProductList extends React.Component {
 
 render() {
    const { products, addToCart, select } = this.props;
    const list = (select.productSize.length === 0 ? products : select.productSize).map((item, key) => (
      <div key={key} className={'item-cloth'}>
        <div className='pname'>
          <img src={`./static/products/${item.sku}_1.jpg`} alt="" />
          <div>{item.title}</div>
          <div>price:${item.price}</div>
          <div>installments:{item.installments}*{Math.round((item.price / item.installments) * 100) / 100}$</div>
        </div>
        <div className={'item-button'}>
          <Button className={'buttons'} type="primary" onClick={() => addToCart(item.id)} disabled={!item.installments} ><p style={{ margin: 'auto', lineHeight: '0px' }}>添加购物车</p></Button>
        </div>
      </div>
    ));
    

    return (
      <div>
        <div className='item'>
          {list}
        </div>
      </div>
    );
  }
};

const mapStateToProps = ({ products, selected }) => ({
  products: d(products.byId, products.result),
  select: selected
})

const mapDispatchToProps = (dispatch) => ({
  addToCart: (id) => dispatch({
    type: 'cart/add',
    payload: {
      id
    }
  }),
  
})


export default connect(mapStateToProps, mapDispatchToProps)(ProductList);