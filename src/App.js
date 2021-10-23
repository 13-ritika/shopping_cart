import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';

class App extends React.Component {

  constructor () {
    super();
    this.state = {
      products: [
        {
          price: 413000.00,
          title: 'DIOR ',
          subTitle: 'Trotter Saddle bag',
          qty: 1,
          img: 'https://i.pinimg.com/236x/19/18/88/19188817a45abc63ee327a089209c20b.jpg',
          id: 1
        },
        {
          price: 1999.00,
          title: 'Chanel',
          subTitle: 'Coco Mademoiselle ',
          qty: 10,
          img: 'https://i.pinimg.com/564x/2a/a4/7f/2aa47fb6a3670ad562021d87311320da.jpg',
          id: 2
        },
        {
          price: 317000.00,
          title: 'Saint Laurent ',
          subTitle: 'Lou Lou quilted shoulder bag',
          qty: 4,
          img: 'https://i.pinimg.com/236x/56/6d/46/566d468d848d02eaa539476975beb3c3.jpg',
          id: 3
        }
      ]
    }
    // this.increaseQuantity = this.increaseQuantity.bind(this);
    // this.testing();
  }
  handleIncreaseQuantity = (product) => {
    console.log('Heyy please inc the qty of ', product);
    const { products } = this.state;
    const index = products.indexOf(product);

    products[index].qty += 1;

    this.setState({
      products
    })
  }
  handleDecreaseQuantity = (product) => {
    console.log('Heyy please inc the qty of ', product);
    const { products } = this.state;
    const index = products.indexOf(product);

    if (products[index].qty === 0) {
      return;
    }

    products[index].qty -= 1;

    this.setState({
      products
    })
  }
  handleDeleteProduct = (id) => {
    const { products } = this.state;

    const items = products.filter((item) => item.id !== id); // [{}]

    this.setState({
      products: items
    })
  }

  getCartCount = () => {
    const { products } = this.state;

    let count = 0;

    products.forEach((product) => {
      count += product.qty;
    })

    return count;
  }

  getCartTotal = () => {
    const { products } = this.state;

    let cartTotal = 0;

    products.map((product) => {
      cartTotal = cartTotal + product.qty * product.price
    })

    return cartTotal;
  }
  render () {
    const { products } = this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()} />
        <Cart
          products={products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteProduct={this.handleDeleteProduct}
        />
        <div style={ {padding: 10, fontSize: 20, fontWeight:600, paddingLeft: 40, fontFamily:"initial"} }>TOTAL: {'Rs '+this.getCartTotal()} </div>
      </div>
    );
  }
}

export default App;
