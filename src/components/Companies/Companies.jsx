import React from 'react'
import "./Companies.css"

const Companies = () => {
  return (
    <>
      <section className='c-wrapper'>
        <div className='paddings innerWidth flexCenter c-container'>
            <img src={`${import.meta.env.BASE_URL}assets/prologis.png`} alt="img" />
            <img src={`${import.meta.env.BASE_URL}assets/tower.png`} alt="img" />
            <img src={`${import.meta.env.BASE_URL}assets/equinix.png`} alt="img" />
            <img src={`${import.meta.env.BASE_URL}assets/realty.png`} alt="img" />
        </div>
      </section>
    </>
  )
}

export default Companies;
