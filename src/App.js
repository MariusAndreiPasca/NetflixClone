import React from "react";
import "./App.css";
import LogIn from "./pages/LogIn/LogIn";
import SignIn from "./pages/SignIn/SignIn";
import { Routes, Route } from "react-router-dom";
import SettingUpOne from "./pages/SettingUp/SettingUpOne/SettingUpOne";
import SettingUpTwo from "./pages/SettingUp/SettingUpTwo/SettingUpTwo";
import SettingUpThree from "./pages/SettingUp/SettingUpThree/SettingUpThree";
import ChoosePlan from "./pages/SettingUp/ChoosePlan/ChoosePlan";
import Payment from "./pages/SettingUp/Payment/Payment";
import Profiles from "./pages/Profiles/Profiles";
import Netflix from "./pages/Netflix/Netflix";
import CreditCard from "./pages/SettingUp/CreditCard/CreditCard";
import PayPal from "./pages/SettingUp/PayPal/PayPal";
import GiftCard from "./pages/SettingUp/GiftCard/GiftCard";

const App = () => {
  return (
    <>
      <SignIn />
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="signin" element={<LogIn />} />
        <Route path="settingUpOne" element={<SettingUpOne />} />
        <Route path="settingUpTwo" element={<SettingUpTwo />} />
        <Route path="settingUpThree" element={<SettingUpThree />} />
        <Route path="choosePlan" element={<ChoosePlan />} />
        <Route path="payment" element={<Payment />} />
        <Route path="profiles" element={<Profiles />} />
        <Route path="netflix" element={<Netflix />} />
        <Route path="creditcard" element={<CreditCard />} />
        <Route path="paypal" element={<PayPal />} />
        <Route path="giftcard" element={<GiftCard />} />
      </Routes>
    </>
  );
};

export default App;
