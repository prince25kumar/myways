import React from 'react';
import {  Link } from "react-router-dom";
const navbar= () =>{
  return (
  <div>
    <li>
      <Link to="/">Main</Link>
    </li>
    <li>
      <Link to="/sidebar">side </Link>
    </li>
   
  </div>
  );
}
export default navbar;