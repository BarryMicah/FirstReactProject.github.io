import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Thank from "./thanku.js"
import Form from './form.js';
import {BrowserRouter, Routes ,Route} from "react-router-dom";
function Main(){
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={   <Form />}>
         <Route path="/thank" element={<Thank />} />
      </Route>
    </Routes>
    </BrowserRouter>
 );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Main />);

