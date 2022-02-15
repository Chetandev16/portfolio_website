import React from "react";
import "./certification.css";
import Separator from "../../comman/separator/Separator";
import { CertificateData } from "./data";
const Certification = () => {
  const data = CertificateData;
  return (
    <div className="work">
      <Separator />
      <div className="section-title">Certification</div>
      <div>
        {data.map((item) => {
          return <div>
            <img src={item.logo} alt="" />
          </div>;
        })}
      </div>
    </div>
  );
};

export default Certification;
