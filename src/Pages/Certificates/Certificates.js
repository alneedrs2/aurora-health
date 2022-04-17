import React from 'react';
import useCertificates from '../../hooks/useCertificates';
import Certificate from '../Certificate/Certificate';
import './Certificates.css'

const Certificates = () => {
    const [certificates, setCertificates] = useCertificates()
    return (
        <div id="certificates" className="container">
      <h2 className="certificate-title text-center mt-5">Certificates</h2>
      <div className="row mt-3">
        {certificates.map((certificate) => (
          <Certificate key ={certificate.id} certificate={certificate}></Certificate>
        ))}
      </div>
    </div>
    );
};

export default Certificates;