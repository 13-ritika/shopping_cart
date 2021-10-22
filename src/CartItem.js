import React from 'react';

class CartItem extends React.Component {
 
  render () {
    console.log('this.props', this.props);
    const { price, title, qty } = this.props.product;
    const{ 
        product, 
        onIncreaseQuantity, 
        onDecreaseQuantity, 
        onDeleteProduct
        } = this.props;
    return (
      <div className="cart-item">
        {this.props.jsx}
        <div className="left-block">
          <img style={styles.image} />
        </div>
        <div className="right-block">
          <div style={ { fontSize: 25 } }>{title}</div>
          <div style={ { color: '#777' } }>Rs {price} </div>
          <div style={ { color: '#777' } }>Qty: {qty} </div>
          <div className="cart-item-actions">
            {/* Buttons */}
            <img
              alt="increase"
              className="action-icons"
              src="https://image.flaticon.com/icons/svg/992/992651.svg"
              onClick={() => onIncreaseQuantity(product)}
            />
            <img
              alt="decrease"
              className="action-icons"
              src="https://cdn-icons.flaticon.com/png/512/2740/premium/2740679.png?token=exp=1634925883~hmac=bbc51602beddbe3ec86c6d87bc2b957d"
              onClick={()=> this.props.onDecreaseQuantity(product)}
            />
            <img
              alt="delete"
              className="action-icons"
              src="https://cdn-icons.flaticon.com/png/512/484/premium/484662.png?token=exp=1634928019~hmac=40f761380685927f4a4064a6ea1a6855"
              onClick={()=> onDeleteProduct(product.id)}
            />
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  image: {
    height: 110,
    width: 110,
    borderRadius: 4,
    background: '#ccc'
  }
}

export default CartItem;