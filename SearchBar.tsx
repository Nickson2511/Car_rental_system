'use client';

import react , {useState} from 'react';
import SearchManufacturer from './SearchManufacturer';

const searchBar =()=>{
  const [manufacturer, setManufacturer] = useState('');
  const handleSearch =()=>{

  }
  


  return(
    <form className='searchbar' onSubmit={handleSearch}>
      <div className='searchbar__item'>
        <SearchManufacturer />


      </div>

    </form>
  )
}
export default searchBar