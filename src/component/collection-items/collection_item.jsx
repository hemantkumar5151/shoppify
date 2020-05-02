import React from 'react'
import './collection_item_style.scss';

import  {connect} from 'react-redux';
import {addItem }from '../../redux/cart/cart-action';
import CustomButton from '../custom-button/custom_button';
function collection_item({ addItem, item}) {
    return (
        <div className='collection-item'>
        <div
          className='image'
          style={{
            backgroundImage: `url(${item.imageUrl})`
          }}
        />
        <div className='collection-footer'>
          <span className='name'>{item.name}</span>
          <span className='price'>{item.price}</span>
        </div>
        <CustomButton  onClick={() => addItem(item)}  inverted>
          Add to cart
        </CustomButton>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})
export default  connect(null,mapDispatchToProps)(collection_item)