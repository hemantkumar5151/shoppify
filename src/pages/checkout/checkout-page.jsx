import React from 'react'
import './checkout-page.scss';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCardTotal } from '../../redux/cart/cart-selector';
import { connect} from 'react-redux';

import StripeCheckOut from '../../component/stripe/stripe-checkout';

import Checkout from '../../component/checkout/checkout';
function checkoutPage({ cardItems, total}) {
    return (
        <div className="checkout-page">
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>
            {
                cardItems.map(cardItem=> <Checkout key={cardItem.id} cardItem={cardItem} />)
            }
            <div className="total">
                <span>Total: ${total}</span>
            </div>
            <StripeCheckOut price={total} />
        </div>
    )
}
const mapStateToProps = createStructuredSelector({
    cardItems: selectCartItems,
    total: selectCardTotal
})

export default connect(mapStateToProps,null)(checkoutPage)