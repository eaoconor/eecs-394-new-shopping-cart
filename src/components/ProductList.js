import React, {Component} from 'react';
import './ProductList.css';

/* Product is under ProductList in the hierarchy. Holds all of the specific product information.*/
class Product extends Component{
	render() {
		return (
			<div className = 'singleProduct'>
				<img src={this.props.src} className="image"/>
				<p className='name'> {this.props.title} </p>
				<p className='price'> ${this.props.price} </p>
				<p className='sizes'> {this.props.availableSizes} </p>
				<button className='addToCart'> ADD TO CART </button>
			</div>	
		);
	}
}

/* ProductList is under App in the hierarchy. Holds the table with all of the available products. */
export default class ProductList extends Component{
	render() {
		return (
				<div className='productList'>
					{this.props.products.map(product => (
						<Product
							src={require(`../static/data/products/${product.sku}_1.jpg`)}
							title={product.title}
							price={product.price}
							availableSizes={product.availableSizes}
						/>
					))}
				</div>
		)
	}
}