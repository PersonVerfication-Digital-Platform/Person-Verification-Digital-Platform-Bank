import React from "react";
import { useNavigate } from "react-router-dom";
import ServiceContainer from "../ServiceContainer";
import Styles from "./CreateAccount.module.css";
import Image from "../../../assets/images/open-bank-account.jpg";

const CreateAccount = () => {
  const text =
    "Bank account creation is a highly confidential process. You can either follow the manual process or use your DID to proceed";
  const navigate = useNavigate();
  function handleClick() {
    // alert("Clicking from createAccount");
    navigate("/qr-scan", { state: { service: "create-bank-account" } });
  }

  return (
    <div className={`${Styles["body"]}`}>
      <ServiceContainer image={Image} text={text} handleClick={handleClick} />
    </div>
  );
};

export default CreateAccount;
