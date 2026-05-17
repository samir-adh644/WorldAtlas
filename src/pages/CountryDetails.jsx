import React, { useEffect, useState, useTransition } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import Loader from '../components/ui/Loader';
import {getCountryIndData} from "../api/postApi";

function CountryDetails() {
    const params = useParams();

    const [isPending,startTransition] = useTransition();
    const [country,setCountry] = useState({});

    useEffect(() => {
    async function fetchData() {
      const res = await getCountryIndData(params.id);
      if (res.status === 200) {
        setCountry(res.data[0]);
      }
    }
    fetchData();
  }, [params.id]);
      
      
if (!country) {
    return <div className="loading">Loading country data...</div>;
  }
  

    return (
    <section className='card country-details-card container'>
      <div className="container-card bg-white-box">
        <div className="country-image grid grid-two-cols">
          <img 
          src={country.flags.png}
          alt={country.flags.alt}
          className='flag'
          />

          <div className="country-content">
            <p className='card-title'>{country.name.official}</p>
            <div className="infoContainer">
              <p>
                <span className='card-description'>Native Names:</span>
                {Object.keys(country.name.nativeName)
                .map((key)=>country.name.nativeName[key].common)
                .join(",")}
              </p>
              <p>
                <span className='card-description'>Population</span>
                {country.population.toLocaleString()}
              </p>
              <p>
                    <span className='card-description'>Region</span>
                    {country.region}
                </p>
                 <p>
                    <span className='card-description'>Sub Region</span>
                    {country.subregion}
                </p>

                <p>
                    <span className='card-description'>Capital</span>
                    {country.capital}
                </p>
            </div>
          </div>
        </div>
        <div className="country-card-backBtn">
          <NavLink to={`/country`} className="backBtn">
                    <button>Go Back</button>
                </NavLink>
        </div>
        
      </div>
    </section>
    
  )
}

export default CountryDetails