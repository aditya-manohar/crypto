import React, { useState } from "react";
import {FaTwitter , FaLink } from 'react-icons/fa';
import './App.css';

const Card=(props)=>{

    const[hovered,setHovered] = useState(false);

    const handleMouseOut=()=>{
        setHovered(false);
    }

    const handleMouseOver=()=>{
        setHovered(true);
    }

    const Routeweb=()=>{
       window.open(`${props.websiteurl}`)
    }

    const Routetweet=()=>{
        window.open(`${props.twitterurl}`)
     }

   return(
    <>
<div>
    {
        hovered && (
    <div className="hover-details" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
    <table>
        <tbody>
        <tr><th><p style={{color:'black'}}>1h</p></th>
        <td style={{color:'dimgray'}}>{props.price1h}%</td></tr>
        <th><p style={{color:'black'}}>24h</p></th> <td style={{color:'dimgray'}}>{props.price1d}%</td>  
        <tr><th><p style={{color:'black'}}>7d</p></th> <td style={{color:'dimgray'}}>{props.price1w}%</td></tr>
        
        </tbody>
    </table>
    </div>
    )
}
</div>

<div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
   <img src={props.image} alt={props.name} />
    <h3 style={{fontFamily:'verdana'}}>{props.name}</h3>
    <p>{props.Symbol}</p>
<hr/>
    <div className="details">
    <table>
        <tbody>
    <tr><td><p><b>Rank</b></p></td> <td>{props.rank}</td></tr>
    <tr><td><p><b>Price (USD)</b></p></td> <td><b>$</b>{props.price}</td></tr>
    <tr><td><p><b>Market Cap</b></p></td> <td><b>$</b>{props.marketcap}</td></tr>
    <tr><td><p><b>Available Supply</b></p></td> <td><b>$</b>{props.availablesupply}</td></tr>
    <tr><td><p><b>Volume</b></p></td> <td><b>$</b>{props.volume}</td></tr>
        </tbody>
    </table>
    <hr/>
    <div className="website">
    <FaLink style={{color : 'dimgray', transform:'scale(1.8)'}} onClick={Routeweb}/>
    <FaTwitter style={{color : 'dodgerblue', transform:'scale(2)'}} onClick={Routetweet}/>
    </div>
    </div>
</div>
    </>
   )
}
export default Card ;
