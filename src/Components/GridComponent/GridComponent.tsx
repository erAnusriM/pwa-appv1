import React from "react";
import "./GridComponent.css";
import Navbar from "../Navbar";
import Footer from "../Footer/Footer";

interface GridComponentProps {
  children: JSX.Element | JSX.Element[];
}

function GridComponent(props: GridComponentProps) {
  const onClickMenuOpen = (info: any) => {
    console.log("clicked", info);
  };
  return (
    <>
      <div id="navbar-section" className="section">
        <Navbar
          onClickMenuOpen={(showLinks: any) => onClickMenuOpen(showLinks)}
        />
        <div className="content-container">
          {/* <Navbar
            onClickMenuOpen={(showLinks: any) => onClickMenuOpen(showLinks)}
          /> */}
        </div>
      </div>

      <div id="scrollable-container">
        {/* <div id="header-section" className="section">
          <div className="content-container"></div>
        </div> */}

        <div id="data-section" className="section">
          {props.children}
          <div className="content-container"></div>
        </div>

        <div id="footer-section" className="section">
          <Footer />
          {/* <div className="content-container"></div> */}
        </div>
      </div>
    </>
  );
}

export default GridComponent;
