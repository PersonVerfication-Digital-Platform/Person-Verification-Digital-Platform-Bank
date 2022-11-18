import React from "react";
import QRCode from "react-qr-code";
import { useLocation } from "react-router-dom";

const QR = (navigation) => {
  const location = useLocation();

  // console.log(location.state.service);
  return (
    <div style={{ margin: "10% auto", textAlign: "center" }}>
      <QRCode
        value={
          "https://dawn-violet-3113.fly.dev/api/qr/id" +
          "|" +
          location.state.service +
          "|" +
          "0x2C1960d7FD0CBf6FE91102aA85cFDCdC69d983DC"
        }
      />
      <p style={{ marginTop: "1rem", color: "blue" }}>
        Scan the above QR code using DWallet mobile app
      </p>
    </div>
  );
};

export default QR;
