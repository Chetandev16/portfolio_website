import React from 'react'
import "./certificateCard.css"
const CertificateCard = ({item}) => {
  return (
    <div className="work-card">
      <img src={item.logo} alt="" />
    </div>
    )
}

export default CertificateCard