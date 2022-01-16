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

export function Navigation({toggle}) {
  const [show, setShow] = useState(true);
  const [disp, setDisp] = useState(true);
  const styles = show ? { display: "none" } : { display: "block" };
  const styles2 = disp ? { display: "none" } : { display: "block" };
  const color = { color: "white" };
  const [seen, setSeen] = useState(true);
  const styles3 = seen ? { display: "none" } : { display: "block" };
  //const style3= toggle ? { display: "none"} : { display: "block"};
  const [navigation,setNavigation] = useState(false);

  return (
    <div className={navigation ? "navigation active" : "navigation"} id={toggle ? "hidden" : ""}>
    
       {console.log("navigation",toggle)}
      <div className="nav_heading">
        <EmojiEmotionsIcon fontSize="large" /> <h3>SB ADMIN2</h3>
      </div>

      <div className="dash">
        <SpeedIcon />
        <Link className="link" to="/" >
          <h4 id="board">Dashboard</h4>
        </Link>
      </div>

      <div className="interface">
        <h6 id="inter_heading">INTERFACE</h6>
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
        <div className="drop_down" style={styles}>
          <p id="custom">CUSTOM COMPONENTS:</p>
          <Link className="link" to="/buttons">
            <p className="list">Buttons</p>
          </Link>
          <Link className="link" to="/cards">
            <p className="list">Cards</p>
          </Link>
        </div>
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
          <Link className="link" to="/colors">
            <p className="list">Colors</p>
          </Link>
          <Link className="link" to="/borders">
            <p className="list">Borders</p>
          </Link>
          <Link className="link" to="/animations">
            <p className="list">Animations</p>
          </Link>
          <Link className="link" to="/other">
            <p className="list">Other</p>
          </Link>
        </div>
      </div>

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
          <Link className="link" to="/login">
            
            <p className="list">Login</p>
          </Link>
          <Link className="link" to="/register">
            
            <p className="list">Register</p>
          </Link>
          <Link className="link" to="/forgot">
            
            <p className="list">Forgot Password</p>
          </Link>
          <p id="custom">OTHER PAGES:</p>
          <Link className="link" to="/error">
            
            <p className="list">404 Page</p>
          </Link>
          <Link className="link" to="/blank" >
            
            <p className="list">Blank Page</p>
          </Link>
        </div>
        <div className="utilities">
          <StackedBarChartIcon fontSize="small" />
          <Link className="link" to="/charts" >
            
            <h4 className="comp_head">Charts </h4>
          </Link>
        </div>
        <div className="utilities">
          <TableChartIcon fontSize="small" />
          <Link className="link" to="/tables">
            
            <h4 className="comp_head">Tables </h4>
          </Link>
          </div>
        </div>
      </div>
    
  );
}
