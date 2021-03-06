import React from "react";
import "./certification.css";
import Separator from "../../comman/seperator/Separator";
import { CertificateData } from "./data";
import CertificateCard from "./CertificateCard";
const Certification = () => {
  const data = CertificateData;
  return (
    <div className="work">
      <Separator />
      <div className="section-title">Certification</div>
      <div className="work-list">
        {data.map((item) => {
          return <div>
           <CertificateCard item={item}/>
          </div>;
        })}
      </div>
    </div>
  );
};

export default Certification;
