import React from 'react';
import {connect} from 'dva';
import {d} from '../utils/utils';
import {Button, Modal,Radio} from 'antd';
import 'antd/dist/antd.css';
import './chooseSize.css';


class ChooseSize extends React.Component {

    state = {
        sizeSelected:''
    }

    handleSizeChange =(e)=>{
        console.log(e);
        this.setState({sizeSelected:e.target.value})
    }

    handleOk =()=>{
        let {sizeSelected} = this.state
        this.props.onOk(sizeSelected)
    }

    render() {
        return (
            <div>
                <Modal title={'请选择尺码'} visible={this.props.visible} onCancel={this.props.onCancel}
                       onOk={this.handleOk}>
                    <Radio.Group options={this.props.sizes} optionType={"button"}
                                 onChange={this.handleSizeChange.bind(this)}/>
                </Modal>
            </div>
        );
    }
};


export default ChooseSize;