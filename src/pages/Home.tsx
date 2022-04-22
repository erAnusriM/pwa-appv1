/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useCallback, useEffect } from "react";
import Navbar from "../Components/Navbar";
import NavbarLink from "../Components/NavbarLink";
import { Slide } from "@material-ui/core";
import HomeContent from "./HomeContent";

interface NavbarProps {
  //   modal: Modal;
  //   setModal: (Modal) => void;
  //   modalContent: JSX.Element;
  //   setModalContent: (data: JSX.Element) => void;
  //   modalContentInfo: any;
  //   setModalContentInfo: (data: { [key: string]: any }) => void;
}

function Home(props: NavbarProps) {
  const [links, setLinks] = useState<boolean>();

  const onClickMenuOpen = useCallback((showLinks: boolean) => {
    setLinks(showLinks);
  }, []);

  const showLinkSection = (
    <Slide
      direction="right"
      in={links}
      mountOnEnter
      unmountOnExit
      timeout={600}
      style={{
        backgroundColor: "white",
        width: "100vw",
        height: "100vh",
      }}
    >
      <div className="absolute top-0 left-0 inline-block">
        <NavbarLink
          name="Home"
          url="home"
          style={{ marginTop: "16px", fontSize: "18px" }}
        />
        <NavbarLink
          name="Feedback"
          url="feedback"
          style={{ marginTop: "16px", fontSize: "18px" }}
        />
        <NavbarLink
          name="About Us"
          url="aboutUs"
          style={{ marginTop: "16px", fontSize: "18px" }}
        />
        <NavbarLink
          name="Contact"
          url="contact"
          style={{ marginTop: "16px", fontSize: "18px" }}
        />
      </div>
    </Slide>
  );

  const updateDimensions = () => {
    onClickMenuOpen(false);
  };

  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, [window.innerWidth, window.innerHeight]);

  // const homePageSection = (
  //   <>
  //     <div className="relative flex">Home Page {showLinkSection}</div>
  //   </>
  // );

  return (
    <>
      <Navbar onClickMenuOpen={(showLinks) => onClickMenuOpen(showLinks)} />
      <HomeContent showLinkSection={showLinkSection} />
    </>
  );
}

export default Home;
