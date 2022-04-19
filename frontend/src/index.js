import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import * as serviceWorker from './serviceworker';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'

const routing = (<Router> 
                  <React.StrictMode>
                    <Header />
                    <Routes>
                        <Route exact path='/' element = {<App />} />
                    </Routes>
                    <Footer />

                  </React.StrictMode>
                 </Router>)

ReactDOM.render(routing, document.getElementById('root'));

serviceWorker.unregister();