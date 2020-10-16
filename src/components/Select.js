
import React from 'react';
import 'antd/dist/antd.css';
import {connect} from 'dva';
import { Checkbox} from 'antd';
import './index.css'
class SelectSizesDemo extends React.Component {
  
 
render() {
  const {  addToSize } = this.props;
  const CheckboxGroup = Checkbox.Group
  const sizes =['XS', 'S', 'M', 'ML', 'L', 'XL', 'XXL'];
   
    return (
      <div className={'size-checkbox'}>
        <span style={{fontSize:'30px'}}>Size:</span>
        <CheckboxGroup
        options={sizes}
        onChange={(value)=>{
          console.log('看看值',value);
          value = value.length == 0?sizes:value
          addToSize(value)}
        }/>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  addToSize:(size) =>dispatch({
    type: 'selected/add',
    payload: {
      size:size
    }
  })
})
export default connect(null,mapDispatchToProps)(SelectSizesDemo);
