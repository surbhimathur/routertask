import BuildIcon from "@mui/icons-material/Build";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FolderIcon from "@mui/icons-material/Folder";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";
import SettingsIcon from "@mui/icons-material/Settings";
import SpeedIcon from "@mui/icons-material/Speed";
import StackedBarChartIcon from "@mui/icons-material/StackedBarChart";
import TableChartIcon from "@mui/icons-material/TableChart";
import { useState } from "react";

{
  /* This is the navigation div . it contains all options for navigating throughout the page */
}
export function Navigation({toggle,setToggle}) {
  const [show, setShow] = useState(true);
  const [disp, setDisp] = useState(true);
  const styles = show ? { display: "none" } : { display: "block" };
  const styles2 = disp ? { display: "none" } : { display: "block" };
  const color = { color: "white" };
  const [seen, setSeen] = useState(true);
  const styles3 = seen ? { display: "none" } : { display: "block" };
  const [navigation,setNavigation] = useState(false);

  return (
    <div className={navigation ? "navigation active" : "navigation"} id={toggle ? "hidden" : ""}>
    
       {console.log("navigation",toggle)}
      <div className="nav_heading"> {/* navigation heading and logo */}
        <EmojiEmotionsIcon fontSize="large" /> <h3>SB ADMIN2</h3>
      </div>

      {/* dashboard option */}
      <div className="dash">
        <SpeedIcon />
        {/*dashboard link used to navigate on dashboard page. */}
        <Link className="link" to="/" onClick={() => {
                setToggle(!toggle);
              }}>
          <h4 id="board">Dashboard</h4>
        </Link>
      </div>
      {/* interface option has two sub options components and utilities */}
      <div className="interface">
        <h6 id="inter_heading">INTERFACE</h6>
        {/*components option used to open sub components option i.e. buttons and cards. */}
        <div className="components">
          <SettingsIcon fontSize="small" />
          <h4
            className="comp_head"
            onClick={() => {
              setShow(!show);
            }}
          >
            Components
          </h4>
          <div className="arrow_icons">
            <IconButton
              aria-label="arrow"
              style={color}
              onClick={() => {
                setShow(!show);
              }}
            >
              {show ? (
                <ChevronRightIcon fontSize="small" />
              ) : (
                <ExpandMoreIcon fontSize="small" />
              )}
            </IconButton>
          </div>
        </div>
        {/*sub components of component option */}
        <div className="drop_down" style={styles}>
          <p id="custom">CUSTOM COMPONENTS:</p>
          {/*buttons link used to navigate on button page. */}
          <Link className="link" to="/buttons" onClick={() => {
                setToggle(!toggle);
              }}>
            <p className="list">Buttons</p>
          </Link>
          {/*cards link used to navigate on cards page. */}
          <Link className="link" to="/cards" onClick={() => {
                setToggle(!toggle);
              }}>
            <p className="list">Cards</p>
          </Link>
        </div>
        {/* utilities option has many sub options */}
        <div className="utilities">
          <BuildIcon fontSize="small" />
          <h4
            className="comp_head"
            onClick={() => {
              setDisp(!disp);
            }}
          >
            Utilities
          </h4>
          <div className="arrow_icons2">
            <IconButton
              aria-label="arrow"
              style={color}
              onClick={() => {
                setDisp(!disp);
              }}
            >
              {disp ? (
                <ChevronRightIcon fontSize="small" />
              ) : (
                <ExpandMoreIcon fontSize="small" />
              )}
            </IconButton>
          </div>
        </div>
        <div className="drop_down" style={styles2}>
          <p id="custom">CUSTOM UTILITIES:</p>
           {/*colors link used to navigate on colors page. */}
          <Link className="link" to="/colors" onClick={() => {
                setToggle(!toggle);
              }}>
            <p className="list">Colors</p>
          </Link>
           {/*borders link used to navigate on borders page. */}
          <Link className="link" to="/borders" onClick={() => {
                setToggle(!toggle);
              }}>
            <p className="list">Borders</p>
          </Link>
           {/*animations link used to navigate on animations page. */}
          <Link className="link" to="/animations" onClick={() => {
                setToggle(!toggle);
              }}>
            <p className="list">Animations</p>
          </Link>
           {/*other link used to navigate on other page. */}
          <Link className="link" to="/other" onClick={() => {
                setToggle(!toggle);
              }}>
            <p className="list">Other</p>
          </Link>
        </div>
      </div>
 {/* addons option has 3 sub options pages, charts and tables */}
      <div className="interface">
        <h6 id="inter_heading">ADDONS</h6>
        <div className="components">
          <FolderIcon fontSize="small" />
          <h4
            className="comp_head"
            onClick={() => {
              setSeen(!seen);
            }}
          >
            Pages
          </h4>
          <div className="arrow_icons3">
            <IconButton
              aria-label="arrow"
              style={color}
              onClick={() => {
                setSeen(!seen);
              }}
            >
              {seen ? (
                <ChevronRightIcon fontSize="small" />
              ) : (
                <ExpandMoreIcon fontSize="small" />
              )}
            </IconButton>
          </div>
        </div>
        <div className="drop_down" style={styles3}>
          <p id="custom">LOGIN SCREENS:</p>
              {/*links used to navigate on login,register,forgot password,404,blank,charts and tables pages. */}
          <Link className="link" to="/login" onClick={() => {
                setToggle(!toggle);
              }}>
            
            <p className="list">Login</p>
          </Link>
          <Link className="link" to="/register" onClick={() => {
                setToggle(!toggle);
              }}>
            
            <p className="list">Register</p>
          </Link>
          <Link className="link" to="/forgot" onClick={() => {
                setToggle(!toggle);
              }}>
            
            <p className="list">Forgot Password</p>
          </Link>
          <p id="custom">OTHER PAGES:</p>
          <Link className="link" to="/error" onClick={() => {
                setToggle(!toggle);
              }}>
            
            <p className="list">404 Page</p>
          </Link>
          <Link className="link" to="/blank" onClick={() => {
                setToggle(!toggle);
              }}>
            
            <p className="list">Blank Page</p>
          </Link>
        </div>
        <div className="utilities">
          <StackedBarChartIcon fontSize="small" />
          <Link className="link" to="/charts" onClick={() => {
                setToggle(!toggle);
              }} >
            
            <h4 className="comp_head">Charts </h4>
          </Link>
        </div>
        <div className="utilities">
          <TableChartIcon fontSize="small" />
          <Link className="link" to="/tables" onClick={() => {
                setToggle(!toggle);
              }}>
            
            <h4 className="comp_head">Tables </h4>
          </Link>
          </div>
        </div>
      </div>
    
  );
}
