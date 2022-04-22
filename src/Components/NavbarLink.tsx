import React from "react";
import { Link } from "react-router-dom";

interface NavbarLinkProps {
  //   modal: Modal;
  //   setModal: (Modal) => void;
  //   modalContent: JSX.Element;
  //   setModalContent: (data: JSX.Element) => void;
  //   modalContentInfo: any;
  //   setModalContentInfo: (data: { [key: string]: any }) => void;
  name: string;
  url: string;
  style?: Object;
}

function NavbarLink(props: NavbarLinkProps) {
  return (
    <div className="flex items-center ml-4">
      <Link to={`/${props.url}`}>
        <div
          className="font-sans text-xs md:text-md lg:text-lg"
          style={props.style}
        >
          {props.name}
        </div>
      </Link>
    </div>
  );
}

export default NavbarLink;
