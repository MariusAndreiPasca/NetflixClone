import React from "react";
import "./SignIn.css";
import SignInNav from "../../components/SignInNav/SignInNav";
import SignInHeader from "../../components/SignInHeader/SignInHeader";
import TvSection from "../../components/TvSection/TvSection";
import DownloadApp from "../../components/DownloadApp/DownloadApp";
import Stream from "../../components/Stream/Stream";
import Kids from "../../components/Kids/Kids";
import QuestionSection from "../../components/QuestionSection/QuestionSection";
import SignInFooter from "../../components/SignInFooter/SignInFooter";

const SignIn = () => {
  return (
    <div className="SignIn__container">
      <SignInNav />
      <SignInHeader />
      <TvSection />
      <DownloadApp />
      <Stream />
      <Kids />
      <QuestionSection />
      <SignInFooter />
    </div>
  );
};

export default SignIn;
