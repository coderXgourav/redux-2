import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Header = () => {
    const userCount = useSelector(store=>store.user.userData);
    console.log(userCount);

    console.log(userCount);
    return (
        <div>
         <div className="navbar" style={{display:"flex", justifyContent:"space-around", background:"black", color:'white',padding:"12px",}}>
            <div><h3>LOGO</h3></div>
            <div>
                <ul style={{display:"flex",gap:"30px", listStyle:"none"}}>
                  <Link to={"/"} style={{textDecoration:"none",color:"white",}}><li>Home</li></Link>
                  <Link to={"/about"} style={{textDecoration:"none",color:"white",}}>  <li>About</li></Link>
                  <Link to={"/contact-us"} style={{textDecoration:"none",color:"white",}}><li>Contact Us</li></Link>
                 <li>User ({userCount.length})</li>
                </ul>
            </div>

         </div>
         </div>
    );
}

export default Header;
