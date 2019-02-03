import React, { Component } from 'react';
import ProductList from './components/ProductList';
import productDetails from './static/data/products';
import './App.scss';
import './App.css';

class App extends Component {
	/*constructor(props){
		super(props);
		this.state = {products: []};
	}*/
	render() {
		//let {products} = this.state
		let productList = productDetails.products;
		return (
			<div className="appLayout">
				<p className="header"> THE T-SHIRT STORE </p>
				<ProductList products={productList}/>
			</div>
		);
	}
}

export default App;
