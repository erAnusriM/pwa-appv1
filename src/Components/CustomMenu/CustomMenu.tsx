// import * as React from "react";
// import { styled, alpha } from "@material-ui/core/styles";
// import Button from "@material-ui/core/Button";
// import Menu, { MenuProps } from "@material-ui/core/Menu";
// import MenuItem from "@material-ui/core/MenuItem";
// import EditIcon from "@material-ui/icons/Edit";
// import Divider from "@material-ui/core/Divider";
// import ArchiveIcon from "@material-ui/icons/Archive";
// import FileCopyIcon from "@material-ui/icons/FileCopy";
// import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
// import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";

// const StyledMenu = styled((props: MenuProps) => (
//   <Menu
//     elevation={0}
//     anchorOrigin={{
//       vertical: "bottom",
//       horizontal: "left",
//     }}
//     transformOrigin={{
//       vertical: "bottom",
//       horizontal: "left",
//     }}
//     {...props}
//   />
// ))(({ theme }) => ({
//   "& .MuiPopover-root": {
//     left: "0px",
//   },
//   "& .MuiPaper-root": {
//     borderRadius: 6,
//     position: "absolute",
//     left: "0px",
//     // marginTop: theme.spacing(2),
//     marginTop: "15vmin",
//     marginRight: "15vmin",
//     minWidth: "100vw",
//     minHeight: "100vh",
//     color: theme.palette.grey[300],
//     boxShadow:
//       "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
//     "& .MuiMenu-list": {
//       padding: "16px 0px 0px 0px",
//     },
//     "& .MuiMenuItem-root": {
//       "& .MuiSvgIcon-root": {
//         fontSize: 18,
//         color: theme.palette.text.secondary,
//         marginRight: theme.spacing(1.5),
//       },
//       "&:active": {
//         backgroundColor: alpha(
//           theme.palette.primary.main,
//           theme.palette.action.selectedOpacity
//         ),
//       },
//     },
//   },
// }));

// export default function CustomizedMenus() {
//   const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
//   const open = Boolean(anchorEl);
//   const handleClick = (event: React.MouseEvent<HTMLElement>) => {
//     setAnchorEl(event.currentTarget);
//   };
//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   return (
//     <div>
//       <Button
//         id="demo-customized-button"
//         aria-controls={open ? "demo-customized-menu" : undefined}
//         aria-haspopup="true"
//         aria-expanded={open ? "true" : undefined}
//         variant="contained"
//         disableElevation
//         onClick={handleClick}
//         endIcon={<KeyboardArrowDownIcon />}
//       >
//         Options
//       </Button>
//       <StyledMenu
//         id="demo-customized-menu"
//         MenuListProps={{
//           "aria-labelledby": "demo-customized-button",
//         }}
//         anchorEl={anchorEl}
//         open={open}
//         onClose={handleClose}
//       >
//         <MenuItem onClick={handleClose} disableRipple>
//           <EditIcon />
//           Edit
//         </MenuItem>
//         <MenuItem onClick={handleClose} disableRipple>
//           <FileCopyIcon />
//           Duplicate
//         </MenuItem>
//         {/* <Divider sx={{ my: 0.5 }} /> */}
//         <MenuItem onClick={handleClose} disableRipple>
//           <ArchiveIcon />
//           Archive
//         </MenuItem>
//         <MenuItem onClick={handleClose} disableRipple>
//           <MoreHorizIcon />
//           More
//         </MenuItem>
//       </StyledMenu>
//     </div>
//   );
// }

import * as React from "react";
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import BurgerIcon from "./../BurgerIcon/BurgerIcon";
import "./../BurgerIcon/BurgerIcon.css";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import { createTheme as createMuiTheme } from "@material-ui/core";

const theme = (createMuiTheme as any)({
  overrides: {
    MuiPopover: {
      paper: {
        overflowX: "auto",
        maxWidth: "100vw !important",
        maxHeight: "100vh !important",
        left: "0px  !important",
        top: "5rem  !important",
        minWidth: "0px",
        minHeight: "0px",
      },
    },
    MuiPaper: {
      root: {},
    },
  },
});

interface BurgerIconObject {
  active: boolean;
  e: any;
}

export default function BasicPopover() {
  const [showLinks, setShowLinks] = React.useState(false);
  const [burgerIcon, setBurgerIcon] = React.useState<BurgerIconObject>({
    active: false,
    e: null,
  });
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | any>(null);

  // const [open, setOpen] = React.useState(false);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement> | any) => {
    // console.log("anchorEl seting", event?.currentTarget);
    event && setAnchorEl(event?.target);
    // setOpen(open);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // console.log("anchorEl", anchorEl);

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  // React.useEffect(() => {
  //   console.log("burgerIcon.active", burgerIcon.active);
  //   // console.log(burgerIcon.active, burgerIcon.e);
  //   if (burgerIcon.active) {
  //     // burgerIcon.e?.target?.classList?.add("active");
  //     handleClick(burgerIcon?.e);
  //     // setOpen(true);
  //   }
  //   if (!burgerIcon.active) {
  //     // burgerIcon.e?.target?.classList?.remove("active");
  //     handleClick(burgerIcon?.e);
  //     // setOpen(false);
  //   }
  // }, [burgerIcon.active, burgerIcon.e]);

  return (
    <ThemeProvider theme={theme}>
      <div>
        {/* <Button aria-describedby={id} variant="contained" onClick={handleClick}>
          Open Popover
        </Button> */}

        <svg
          className={open ? "ham hamRotate ham1 active" : "ham hamRotate ham1"}
          viewBox="0 0 100 100"
          width="80"
          height="60"
          role="button"
          onClick={(e) => handleClick(e)}
        >
          <path
            className="line top"
            d="m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40"
          />
          <path className="line middle" d="m 30,50 h 40" />
          <path
            className="line bottom"
            d="m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40"
          />
        </svg>

        {/* <BurgerIcon onBurgerMenuOpen={(info) => setShowLinks(info)} /> */}
        {/* <Button aria-describedby={id} variant="contained" onClick={handleClick}>
        <BurgerIcon onClick={handleClick} />
        </Button> */}
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
        >
          <div className="w-screen h-screen overflow-y-hidden">
            <Typography>The content of the Popover.</Typography>
          </div>
        </Popover>
      </div>
    </ThemeProvider>
  );
}
