import React from "react";
import '../assests/css/header.css';
import Logo from "../assests/images/logo192.png";
export default function Header(){

   return(
    <div>
         <div id="header">
             <img id="header-logo" src={Logo} />
             <h3 id="header-title">shopHub</h3>

             <div id="header-content">
                 <a id="header-link" >Home</a>
                 <a id="header-link">Shop</a>
                 <a id="header-link">About</a>

             </div> 
             <button> Login </button>
         </div>
         
    </div>
   ) 


}