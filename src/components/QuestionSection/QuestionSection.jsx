import React, { useState } from "react";
import "./QuestionSection.css";
import { MdKeyboardArrowRight } from "react-icons/md";
import { AiOutlinePlus } from "react-icons/ai";
import { Link } from "react-router-dom";

const QuestionSection = () => {
  const [show, setShow] = useState();

  const toggle = (index) => {
    if (show === index) {
      return setShow(null);
    }

    setShow(index);
  };

  return (
    <div className="Questions__container">
      <div className="QestionSection__wrapper">
        <div className="QuestionSection__heading">
          <h1 className="Questions__title">Frequently Asked Questions</h1>
        </div>
        <div className="Questions__section-wrapper">
          <div className="Questions__section">
            {questions.map((item, index) => (
              <div className="Questions__question">
                <div
                  className={show === index ? "question border" : "question"}
                  onClick={() => toggle(index)}
                >
                  <h3>{item.question}</h3>
                  {show === index ? (
                    <AiOutlinePlus className="Questions__icon open" />
                  ) : (
                    <AiOutlinePlus className="Questions__icon" />
                  )}
                </div>
                <div
                  className={
                    show === index
                      ? "Questions__hidden active"
                      : "Questions__hidden"
                  }
                >
                  {item.answer}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="Questions__email">
          <div className="Questions__text">
            <h3>
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>
          </div>
          <form>
            <div className="SignInHeader__getStarted">
              <div className="SignInHeader__email">
                <input className="SignInHeader__input" />
                <span className="SignInHeader__span">Email Address</span>
              </div>
              <Link className="SignInHeader__button">
                Get Started <MdKeyboardArrowRight className="arrowToRight" />
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

const questions = [
  {
    question: "What can I watch on Netflix?",
    answer:
      "Netflix has an extensive library of feature films, documentaries,TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want. Check out some of our content.",
  },
  {
    question: "What is Netflix?",
    answer:
      "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices. You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!",
  },
  {
    question: "How much does Netflix cost?",
    answer:
      "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from €7,99 to €17,99 a month. No extra costs, no contracts.",
  },
  {
    question: "Where can I watch?",
    answer:
      "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles. You can also download your favorite shows with the iOS, Android,or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.",
  },
  {
    question: "How do I cancel?",
    answer:
      "Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",
  },
  {
    question: "Is Netflix good for kids?",
    answer:
      "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space. Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.",
  },
];

export default QuestionSection;
