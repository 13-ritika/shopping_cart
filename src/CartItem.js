import React from 'react';
{/* for a class com to be a react com, give method render which should return some jsx which describes the UI of com.*/}
class CartItem extends React.Component{
    constructor(){
        super();
        this.state = {
            price: 99999,
            title: 'Phone',
            qty:1,
            img: ''
        }
       // this.increaseQuantity =this.increaseQuantity.bind(this);
       // use arrow functions, as they automatically bind the functions.
    }
    increaseQuantity = () =>{
        // this.state.qty += 1;
        console.log('this', this.state);
        // setState form 1 { by giving object}, react does shallow merging.
        // this.setState({
        //     qty: this.state.qty + 1
        // });
        this.setState((prevState) =>{
            return {
                qty: prevState.qty +1
            }
        });
    }
    decreaseQuantity=()=>{
        // this.state.qty += 1;
        console.log('this', this.state);
        // setState form 1 { by giving object}, react does shallow merging.
        // this.setState({
        //     qty: this.state.qty -1 
        // });
        //form2
        this.setState((prevState) =>{
            return {
                qty: prevState.qty -1
            }
        });
        // if prevstate required, use form 2
    }
    render(){
        const{price,title,qty} = this.state;
        return(
            <div className="cart-item">
                <div className="left-block">
                    <img style = {styles.image}/>

                </div>
                <div className="right-block">
                    <div style={ {fontSize:25}}>{title}</div>
                    <div style={ {color:'#777'}}>Rs {price}</div>
                    <div style={ {color:'#777'}}>Qty: {qty}</div>
                    <div className="cart-item-actions">
                        {/* Buttons */}
                        <img 
                         alt="increase" 
                         className="action-icons" 
                         src="https://cdn-icons-png.flaticon.com/512/1828/1828926.png" 
                         onClick={this.increaseQuantity}
                        />
                        <img
                         alt="decrease "
                         className="action-icons" 
                         src="https://cdn-icons.flaticon.com/png/512/2740/premium/2740679.png?token=exp=1634759487~hmac=8b31624e9c6b64d57ccf53e4c0bca498" 
                         onClick={this.decreaseQuantity}
                         />
                        <img alt="delete" className="action-icons" src="https://cdn-icons-png.flaticon.com/512/3096/3096673.png" />

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