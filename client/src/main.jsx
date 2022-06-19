import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Auth0Provider } from "@auth0/auth0-react";

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain="dev-tqawoqrf.us.auth0.com"
    clientId="KqLcSgr7gBhx9Lr3nBwh7qtkZtJ8OvVL"
    redirectUri={'http://localhost:3000/home'}
  >
    <App />
  </Auth0Provider>
)
