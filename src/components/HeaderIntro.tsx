import React from "react";
import Button from "./Button";
import { headerIntroData } from "../assets/lib/data";
import { useActiveSectionContext } from "../context/active-section-context";
import { PiReadCvLogo } from "react-icons/pi";
import { Link } from "react-router-dom";
import { useTheme } from "../context/theme-context";
import { BsMouse } from "react-icons/bs";

const HeaderIntro: React.FC = () => {

  const { theme } = useTheme();
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      className="hero flex flex-col justify-center gap-10 items-center h-full max-lg:h-full max-lg:gap-6"
      id="home"
    >
      <img
        src={headerIntroData.profilepicture}
        alt={headerIntroData.profilepicture}
        className="w-1/6 drop-shadow-2xl rounded-full shadow-2xl avatar-img max-lg:w-3/4"
      />
      <h1>
        { headerIntroData.title
          }
        <span className="wave text-7xl">&#128075;&#127997;</span>
      </h1>
      <h2>{headerIntroData.subtitle}</h2>
      <p className="w-1/2 text-center max-lg:hidden">
        { headerIntroData.description
        }
      </p>

      <div className="button-container flex items-center justify-center mr-8 gap-10 mb-12 max-lg:gap-5 max-lg:flex-wrap">
        {headerIntroData.buttons.map((button, index) => (
          <Button
            key={index}
            label={ button.label }
            iconSVG={button.icon}
            link={`#${button.name.toLocaleLowerCase()}`}
            buttoncolor={button.color}
            onClick={() => {
              setActiveSection(button.name);
              setTimeOfLastClick(Date.now());
            }}
          />
       
        ))}
                  <a   href="https://drive.google.com/uc?export=download&id=1RIBAGcwYgdlLL_5zgxr4lX4ZNWE241s-"
  download
                  className = {`text-[--orange] hidden drop-shadow-2xl border-solid border-[0.1rem] border-[--orange] py-4 px-8 rounded-lg  transition-all duration-200 max-lg:flex max-lg:flex-row gap-4 justify-center items-center cursor-pointer  max-lg:text-xl max-lg:py-5 max-lg:px-10 max-lg:rounded-xl
    shadow-xl hover:scale-100 hover:-translate-y-2 hover:drop-shadow-xl transition-all duration-200 w-max ${
          theme === "dark" ? "bg-[--darkblue]" : "" 
        }`} >
                  
                      <PiReadCvLogo className={"w-max h-10"} />
                   Download Resume
                  </a>
              
      </div>
      <div className="scroll-down-container animate-bounce flex gap-6">
        <BsMouse className="text-[2.6rem]" />
      </div>
    </section>
  );
};

export default HeaderIntro;
