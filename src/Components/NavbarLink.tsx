import React from "react";
import { useNavigate } from "react-router-dom";
import cls from "classnames";

interface NavbarLinkProps {
  name: string;
  url: string;
  style?: Object;
  className?: string;
  id?: string;
  handleOnClickLink?: (url: string) => void;
}

function NavbarLink(props: NavbarLinkProps) {
  const navigate = useNavigate();
  return (
    <div className="flex items-center ml-4">
      {/* <Link to={`/${props.url}`}> */}
      <div
        role="button"
        onClick={() =>
          props.handleOnClickLink
            ? props.handleOnClickLink(props.url)
            : navigate(props.url)
        }
      >
        <div
          id={props.id}
          className={cls(
            "font-sans text-xs md:text-md lg:text-lg",
            `${props.className}`
          )}
          style={props.style}
        >
          {props.name}
        </div>
      </div>
      {/* </Link> */}
    </div>
  );
}

export default NavbarLink;
