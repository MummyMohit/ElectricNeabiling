import React, { useState, useEffect } from 'react';
import QRCode from 'qrcode.react';
import { CCard, CCardBody } from '@coreui/react';
import { useNavigate } from 'react-router-dom';

const QR = () => {
  const [inputValue, setInputValue] = useState('mohit bisen');
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/signup');
    }, 2000); // 10 seconds

    return () => clearTimeout(timer); // Cleanup the timer if the component is unmounted
  }, [navigate]);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <CCard style={{ width: "754px", height: "350px", marginLeft: "317px" }}>
        <CCardBody style={{ background: "yellow" }}>
          <h1>SCAN ME</h1>
          <div>
            <QRCode value={inputValue} size={256} level="H" includeMargin={true} 
            />
          </div>
        </CCardBody>
      </CCard>
    </div>
  );
};

export default QR;
