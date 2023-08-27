import React,{useEffect, useState} from 'react';
import axios from 'axios';
import Cards from './Card';
import './App.css';

function App() {

  const [search, setSearch] = useState('');
  const[data,setData] = useState([]);
  const[top,setTop] = useState();
  const[loading,setLoading] = useState(false);

  useEffect(()=>{
    setLoading(true);
    axios.get(`https://api.coinstats.app/public/v1/coins?skip=0&limit=${top}`).then(
      res => setData(res.data.coins)
    )
    setLoading(false);
    console.log(data);
  });

  return (
    <>
    <div>
    <div className='search'>
      <input type='text' placeholder='Search from upto 2000 crypto currencies...' value={search} onChange={(e)=>setSearch(e.target.value)}/>  <br/>
      <h3>Search from Top</h3><br/><input type='number' value={top} min={3} max={2000} onChange={(e)=>setTop(e.target.value)} />  
    </div>

   {
    data.length>0 &&

    <div className='container'>
        {
          data.filter(crypto => crypto.name.toLowerCase().includes(search.toLowerCase())).map((crypto) => 
            <div className='card'>
            <Cards name={crypto.name}
            Symbol = {crypto.symbol}
            rank = {crypto.rank}
            price = {crypto.price}
            marketcap = {crypto.marketCap} 
            key = {crypto.id}
            image = {crypto.icon}
            price1h = {crypto.priceChange1h}
            price1d = {crypto.priceChange1d}
            price1w = {crypto.priceChange1w}
            websiteurl = {crypto.websiteUrl}
            twitterurl = {crypto.twitterUrl}
            volume = {crypto.volume}
            availablesupply={crypto.availableSupply}
            totalsupply={crypto.totalSupply}/>
            </div>
          )
        }
    </div>
   }
   </div>
    </>
  );
}

export default App;
