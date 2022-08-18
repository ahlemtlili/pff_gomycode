import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom'

import '../src/Components/StyleCss/RegisterLogin.css'
import '../src/Components/StyleCss/ContactUs.css'
import '../src/Components/StyleCss/Cardcss.css'
import '../src/Components/StyleCss/Loader.css'
import '../src/Components/StyleCss/ProfilUser.css'
import '../src/Components/StyleCss/Navigation.css'
import '../src/Components/StyleCss/PasswordPage.css'
import '../src/Components/StyleCss/EditProfil.css'
import '../src/Components/StyleCss/Details.css'
import '../src/Components/StyleCss/SearchBar.css'
import '../src/Components/StyleCss/UserCard.css'
import '../src/Components/StyleCss/MessageCard.css'
import '../src/Components/StyleCss/candidaturecard.css'
import '../src/Components/StyleCss/FoundUser.css'
import '../src/Components/StyleCss/Alert.css'
import { store } from './Redux/store';
import {Provider} from "react-redux";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Provider store={store}> 
    <App />
  </Provider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
