import React, { useState,useContext } from 'react'
import '../SearchEmployee/SearchEmployee.css'
import { BsSearch } from 'react-icons/bs'
import { MainContext } from '../../ContextStore/MainContext';

export default function SearchEmployee() {
  const [searchActive, setSearchActive] = useState(false);
  const { setEmployeeName } = useContext(MainContext)

  const toggleSearch = () => {
    setSearchActive(!searchActive);
  };

  return (
    <div>
      <div className="header">
        <div className='Logo-and-company'>
          <img src='https://static.wixstatic.com/media/c4ea42_e074f4e4fc8e4deea4dc184b87c5bca7~mv2_d_3000_3000_s_4_2.png/v1/fill/w_69,h_69,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Logo_Round.png'
            alt='logo' className='Logo'></img>
          <div className='Company'>
            <p className='Company-name'>Greendzine Tech</p>
            <p className='Company-desc'>An Electric Vehicle Company</p>
          </div>

        </div>
        <div className='search-part'>
          <div className="search-icon" onClick={toggleSearch}>
            <BsSearch />
          </div>
          <input
            type="text"
            className={`search-input ${searchActive ? 'active' : ''}`}
            placeholder="Search by first name"
            onChange={(e)=>setEmployeeName(e.target.value)}
          />
        </div>
      </div>
    </div>
  )
}
