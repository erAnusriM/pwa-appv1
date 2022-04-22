/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from "react";
import NavbarLink from "./NavbarLink";
import { TextField, Button } from "@material-ui/core";
import BurgerIcon from "../Components/BurgerIcon/BurgerIcon";
import CustomMenu from "../Components/CustomMenu/CustomMenu";

interface NavbarProps {
  //   modal: Modal;
  //   setModal: (Modal) => void;
  //   modalContent: JSX.Element;
  //   setModalContent: (data: JSX.Element) => void;
  //   modalContentInfo: any;
  //   setModalContentInfo: (data: { [key: string]: any }) => void;
  onClickMenuOpen: (data: boolean) => void;
}

function Navbar(props: NavbarProps): JSX.Element {
  const [showLinks, setShowLinks] = useState(false);

  useEffect(() => {
    props.onClickMenuOpen(showLinks);
  }, [showLinks]);

  return (
    <div className="flex justify-between w-full h-20 text-lg text-white bg-myNavBar max-h-20">
      <div className="hidden lg:flex">
        <NavbarLink name="Home" url="home" />
        <NavbarLink name="Feedback" url="feedback" />
        <NavbarLink name="About Us" url="aboutUs" />
        <NavbarLink name="Contact" url="contact" />
      </div>

      <div className="flex self-center h-10 lg:hidden">
        {/* <Button
          onClick={() => setShowLinks(!showLinks)}
          style={{
            marginLeft: "4px",
            backgroundColor: "white",
            borderRadius: "4px",
          }}
        > */}
        {/* <BurgerIcon onBurgerMenuOpen={(info) => setShowLinks(info)} /> */}
        <CustomMenu />

        {/* </Button> */}
      </div>
      <div className="flex items-center justify-center mr-4">
        <TextField
          variant="filled"
          placeholder="Search..."
          style={{ backgroundColor: "white", borderRadius: "4px" }}
          inputProps={{
            // autoFocus: true,
            style: {
              paddingLeft: "10px",
              height: "8px",
              //   paddingBottom: "10px",
            },
          }}
          //   InputLabelProps={{
          //     style: {
          //       paddingLeft: "10px",
          //       display: "flex",
          //       alignItems: "center",
          //       justifyContent: "center",
          //     },
          //   }}
        />
        {/* <input
              type="text"
              value="Search"
              placeholder="Search..."
              style={{ borderRadius: "4px", border: "none" }}
            /> */}

        {/* <input type="text" /> */}
        {/* <button>Search</button> */}
        <div className="flex self-center h-10 lg:hidden">
          <Button
            style={{
              marginLeft: "4px",
              backgroundColor: "white",
              borderRadius: "4px",
            }}
          >
            O
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
