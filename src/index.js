import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import ProviderLayer from './ProviderLayer';
import { FirebaseAppProvider } from 'reactfire';

const firebaseConfig = {
  apiKey: "AIzaSyB8t7p1cloXSROQ8ce8s-6fAvWwBqgP07Y",
  authDomain: "fake-shop-react-a1eeb.firebaseapp.com",
  databaseURL: "https://fake-shop-react-a1eeb-default-rtdb.firebaseio.com",
  projectId: "fake-shop-react-a1eeb",
  storageBucket: "fake-shop-react-a1eeb.appspot.com",
  messagingSenderId: "9410212249",
  appId: "1:9410212249:web:f51cdc8b456f68de522308"
};


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <FirebaseAppProvider firebaseConfig={firebaseConfig}>
        <ProviderLayer />
      </FirebaseAppProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
