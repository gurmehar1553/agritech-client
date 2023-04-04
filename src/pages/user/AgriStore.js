import React from 'react'
import '../public/AgriStore.css'
import AgriStoreCard from './AgriStoreCard'
import searchIcon from '../icons/search-icon.png'

export default function AgriStore() {
  return (
    <>
        <div className='agri-head'>
          <h1>Welcome to the AgriStore</h1>
        </div>
        <div className='nav'>
          <button className='btn-cat'>Seeds</button>
          <button className='btn-cat'>Fertilisers</button>
          <button className='btn-cat'>Equipments</button>
          <img src={searchIcon} alt='img' className='searchIcon' />
          <input type="text" className='search-box' placeholder='Search here...' />
          <button className='search-btn'>Search</button>
        </div>
        <hr className='style-two' />
        

        <div className='main'>
          
          <div className='filter'>
            Filters
            <hr className="style-two" />
            <div>
              <div className='price-list-filter' >
              Price :
                <div><input type='radio' name="price-filters" value="one" id="one" /> <label htmlFor="one"> Under Rs 1000</label></div>
                <div><input type='radio' name="price-filters" value="two" id="two" /><label htmlFor="two" >Rs 1000 - Rs 5000</label></div>
                <div><input type='radio' name="price-filters" value="three" id="three" /><label htmlFor="three" >Rs 5000 - Rs 10000</label></div>
                <div><input type='radio' name="price-filters" value="four" id="four" /><label htmlFor="four" >Rs 10000 - Rs 20000</label></div>
                <div><input type='radio' name="price-filters" value="five" id="five" /><label htmlFor="five" >Above Rs 20000</label></div>
                <hr className="style-two" />
              </div>
              <hr className="style-two" />
            </div>
          </div>
          <div className='products'>
            <AgriStoreCard />
            <AgriStoreCard />
            <AgriStoreCard />
            <AgriStoreCard />
            <AgriStoreCard />
          </div>
        </div>
    </>
  )
};