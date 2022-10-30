import QRCode from "react-qr-code";

const QR = () => {
  return (
    <div style={{ margin: "10% auto",textAlign:"center"}}>
      <QRCode value="https://dawn-violet-3113.fly.dev/api/qr/id" />
      <p style={{marginTop:"1rem",color:"blue"}}>Scan the above QR code using DWallet mobile app</p>
    </div>

  );
};

export default QR;
