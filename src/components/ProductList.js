import React from 'react';
import {connect} from 'dva';
import {d} from '../utils/utils';
import {Button} from 'antd';
import 'antd/dist/antd.css';
import './ProductList.css';
import ChooseSize from "./chooseSize";


class ProductList extends React.Component {

    state = {
        availableSizes:[],
        visible:false,
        currentId:''
    }

    doAddToCart =(id,availableSizes)=>{
        this.setState({availableSizes,visible:true,currentId:id})
    }

    onCancel =()=>{
        this.setState({visible:false})
    }

    onOk =(size)=>{
        console.log(size)
        if(size){
            this.props.addToCart(this.state.currentId,size)
        }
        this.setState({visible:false})
    }

    render() {
        const {products, addToCart, select} = this.props;
        let {availableSizes,visible} = this.state
        const list = (select.productSize.length === 0 ? products : select.productSize).map((item, key) => {
            console.log('艾特木',item);
            return (
                <div key={key} className={'item-cloth'}>
                    <div className='pname'>
                        <img src={`./static/products/${item.sku}_1.jpg`} alt=""/>
                        <div>{item.title}</div>
                        <div>price:${Number(item.price).toFixed(2)}</div>
                        <div>installments:{item.installments}*{Math.round((item.price / item.installments) * 100) / 100}$</div>
                    </div>
                    <div className={'item-button'}>
                        <Button className={'buttons'} type="primary" onClick={this.doAddToCart.bind(this,item.id,item.availableSizes)}
                                disabled={!item.installments}><p style={{margin: 'auto', lineHeight: '0px'}}>添加购物车</p>
                        </Button>
                    </div>
                </div>
            )
        });


        return (
            <div>
                <div className='item'>
                    {list}
                </div>
                <ChooseSize sizes={availableSizes} visible={visible} onCancel={this.onCancel.bind(this)} onOk={this.onOk.bind(this)}/>
            </div>
        );
    }
};

const mapStateToProps = ({products, selected}) => {
    console.log('普罗达克茨', selected);
    return {
        products: d(products.byId, products.result),
        select: selected
    }
}

const mapDispatchToProps = (dispatch) => ({
    addToCart: (id,size) => dispatch({
        type: 'cart/add',
        payload: {
            id,
            size
        }
    }),

})


export default connect(mapStateToProps, mapDispatchToProps)(ProductList);