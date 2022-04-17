import { useEffect, useState } from "react";

const useCertificates = () => {
  const [Certificates, setCertificates] = useState([]);
  useEffect(() => {
    fetch("certificates.json")
      .then((res) => res.json())
      .then((data) => setCertificates(data));
  }, []);
  return [Certificates, setCertificates];
};

export default useCertificates;
