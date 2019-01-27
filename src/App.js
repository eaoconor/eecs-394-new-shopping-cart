import React, { Component } from 'react';
import './App.scss';

/* Product is under ProductList in the hierarchy. Holds all of the spevific product information.*/
class Product extends Component{
	render() {
		const singleProduct = this.props.product;
		return (
			<div className = 'product'>
				<image src={require(`./static/data/products/${singleProduct.sku}_1.jpg`)}/>
				<p className='productTitle'> {singleProduct.title} </p>
				<p className='productPrice'> ${singleProduct.price} </p>
				<button type='button' className='addButton'> Add to Cart </button>
			</div>	
		);
	}
}

/* ProductList is under App in the hierarchy. Holds the table with all of the available products. */
class ProductList extends Component{
	render() {
		const Products = this.props.products;
		const allProducts = [];
		let i = 0;
		while (i < Products.products.length) {
			allProducts.push(<Product product={Products.products[i]} />);
			i++;
		}
		return (
				<div className='productTable'>
					{allProducts}
				</div>
		)
	}
}

/* Cart is under App in the hierarchy. Holds the clickable cart icon and the cart details (products, subtotal, checkout).
class Cart extends Component{
	render() {
		
	}
} */

/*class SortFeature extends Component{
	render() {
	}
}

class ResultsSummary extends Component{
	render() {
		
	}
}*/

class App extends Component {
	constructor(props){
		super(props);
		this.state = {products: []};
	}
	/*componentDidMount() {
		import('./static/data/products.json')
		.then((json) => this.setState({products: json.products}));
	}*/
	render() {
		let {products} = this.state
		return (
				<div className="App">
					<h1>THE T-SHIRT STORE</h1>
				</div>
		);
	}
}

export default App;
