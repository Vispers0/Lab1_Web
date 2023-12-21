import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Head from './Head.tsx'
import Body from './Body.tsx'
import '../styles/index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Head/>
    <Body/>
  </React.StrictMode>,
)
