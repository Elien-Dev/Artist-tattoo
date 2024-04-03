// moduls
import React from 'react'
import ReactDOM from 'react-dom/client'

// components
import { App } from './App';

// styles
import './styles/primary_styles.scss'

// document.addEventListener('click', (e)=> {
//   console.log(e)

//   if(e.target.id === 'btn' || e.target.children){
//     console.log(e.target)
//   }
// })

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
)