import React from 'react'
import "./certificateCard.css"
const CertificateCard = ({item}) => {
  return (
    <div className="work-card">
      <img src={item.logo} alt="logo" className='work-logo' />
      <div className="work-info">
        <label className='company-name'>{item.company}</label>
        <div>
          <label>{item.date}</label>
        </div>
        <div>
          <label>{item.field}</label>
          <p>{item.desc}</p>
        </div>
      </div>
    </div>
    )
}

export default CertificateCard