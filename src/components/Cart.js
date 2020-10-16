import React from 'react';
import {connect} from 'dva';
import {Drawer, Button, Badge, Icon} from "antd";
import './index.css'

class Cart extends React.Component {
    state = {visible: false, placement: "right"};

    showDrawer = () => {
        this.setState({
            visible: true
        });
    };

    onClose = () => {
        this.setState({
            visible: false
        });
    };


    render() {


        const {products, subtotal, onCheckout, loading, checking, num, deleteProducts, doDecrease, doIncrease} = this.props;
        const nodes = products.map((item, key) => (
            <div key={key} style={{marginBottom:'10px'}}>
                <div style={{display:"flex",alignItems:'center'}}>
                    <div>
                        <img style={{width: '30px', height: "40px"}} src={`./static/products/${item.sku}_1.jpg`}
                             alt=""/>
                    </div>
                    <div style={{flexGrow:1}}>
                        <div>
                            {item.title}&nbsp;&nbsp;{item.size}
                        </div>
                        <div>
                            {item.price} x {item.quantity}
                        </div>
                    </div>
                    <div>
                        <button className={'cart-button'} disabled={item.quantity == 1} onClick={() => doDecrease(item.id)}>-</button>
                        <button className={'cart-button'} onClick={() => doIncrease(item.id)}>+</button>
                    </div>
                    <Button onClick={() => deleteProducts(item.id, item.quantity)}
                            style={{width: '20px', height: '20px', padding: '0', float: 'right'}}>
                        <Icon type="close" style={{fontSize: '20px'}}/>
                    </Button>
                </div>

            </div>
        ));

        return (
            <div style={{display: 'flex', width: "100%", paddingTop: '20px'}}>
                <Button style={{height: '64px', display: 'flex', marginLeft: 'auto', border: "none"}}
                        onClick={this.showDrawer}>
          <span style={{marginRight: 24}}>
            <Badge count={num}>
            <Icon type="shopping-cart" style={{fontSize: '50px'}}/>
            </Badge>
          </span>
                </Button>
                <Drawer
                    title="购物车"
                    placement={this.state.placement}
                    closable={false}
                    onClose={this.onClose}
                    visible={this.state.visible}
                >
                    <div style={{listStyle: "none"}}>{nodes}</div>
                    <div>Total: {subtotal}</div>
                    <div>
                        {checking && <div style={{color: 'red'}}>Checking ...</div>}
                        <Button onClick={onCheckout} disabled={subtotal <= 0.00 || loading}>
                            <p style={{margin: 'auto', lineHeight: '0px'}}>Checkout</p></Button>
                    </div>
                </Drawer>

            </div>
        );
    };

}


const mapStateToProps = ({cart, products, loading}) => {
    console.log('卡特', cart, products)
    return {
        products: cart.added.map(id => ({...products.byId[id], quantity: cart.quantities[id]})),
        subtotal: cart.added.reduce((amount, id) => products.byId[id].price * cart.quantities[id] + amount, 0).toFixed(2),
        loading: loading.models['cart'],
        checking: loading.effects['cart/checkout'],
        num: cart.num
    }
}

const mapDispatchToProps = (dispatch) => ({
    onCheckout: () => dispatch({
        type: 'cart/checkout'
    }),
    deleteProducts: (log, num) => dispatch({
        type: 'cart/delete',
        payload: {log, num}
    }),
    doDecrease: (id) => dispatch({
        type: 'cart/minus',
        payload: {
            id
        }
    }),
    doIncrease: (id) => dispatch({
        type: 'cart/add',
        payload: {
            id
        }
    })
})
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
