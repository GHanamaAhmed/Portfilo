import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Auth0Provider } from "@auth0/auth0-react"
import { Provider } from "react-redux"
import store from "./redux/store"
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-lsmw7wsceuyggjvl.us.auth0.com"
      clientId="Q5nu0VAwFRTmdgyNW86eyZfOouQHPR9I"
      authorizationParams={{
        redirect_uri: "http://localhost:5173/Portfilo/"
      }}
    >
      <Provider store={store}>
      <App />
      </Provider>
     
    </Auth0Provider>
  </React.StrictMode>
)
