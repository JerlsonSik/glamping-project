import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './Header';
import Banner from './Banner';
import reportWebVitals from './reportWebVitals';
import HomeBannerTwo from './HomeBannerTwo';
import HomeBannerThree from './HomeBannerThree';
import HomeBannerFour from './HomeBannerFour';
import HomeBannerFive from './HomeBannerFive';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Footer from './Footer';
import Map from './Map';
import HomeBannerSix from './HomeBannerSix';
import HomeBannerSeven from './HomeBannerSeven';
import SiteBanner from './SiteBanner';
import SiteBannerTwo from './SiteBannerTwo';
import SiteBannerThree from './SiteBannerThree';
import RoomBanner from './RoomBanner';
import RoomBannerTwo from './RoomBannerTwo';
import AboutBanner from './AboutBanner';
import { BrowserRouter, Routes, Route} from "react-router-dom"
import App from './App';
import 'bootstrap/dist/js/bootstrap.js';
import "bootstrap/dist/css/bootstrap.min.css"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
