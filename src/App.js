import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

//Contexts
import ProductContext from './contexts/productContext';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		setCart([...cart, item]);
	};

	return (
		<div className="App">
			<ProductContext.Provider value={{ products, addItem }}>
				<Navigation cart={cart} />
				{/* Routes */}
				<Route exact path="/" component={Products} 	/>
				<Route
					path="/cart"
					render={() => <ShoppingCart cart={cart} />}
				/>
			</ProductContext.Provider>

		</div>
	);
}

export default App;
