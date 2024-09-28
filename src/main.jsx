import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import App from './App'
import shopStore from './tools/store/shopStore'
import { addProduct, getProduct } from './tools/actions/shopAction'
import { CartProvider } from 'react-use-cart';
import { Provider } from 'react-redux';
import { WishlistProvider } from 'react-use-wishlist';
import { supabase } from './supabase/supabaseClient';
import { ModeProvider } from './context/ModeContext';
import { LangProvider } from './context/LangContext';




const store = shopStore();

store.subscribe(() => {
  console.log(store.getState());
})


const fetchData = async () => {
  const { data, error } = await supabase.from('products').select();
  if (error) {
    console.log(error);
  } else {
    store.dispatch(getProduct(data));


  }
}

fetchData();


ReactDOM.createRoot(document.getElementById('root')).render(

  <WishlistProvider>
    <LangProvider>
      <ModeProvider>
        <CartProvider>
          <Provider store={store}>
            <App />
          </Provider>
        </CartProvider>
      </ModeProvider>
    </LangProvider>
  </WishlistProvider>

)
