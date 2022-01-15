import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import Badge from '@mui/material/Badge';
import Button from "@mui/material/Button";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import ForumIcon from "@mui/icons-material/Forum";
import IconButton from "@mui/material/IconButton";
import ListAltIcon from "@mui/icons-material/ListAlt";
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ReorderIcon from '@mui/icons-material/Reorder';
import SearchIcon from '@mui/icons-material/Search';
import { Summary } from "./Summary";
import { useState } from "react";

export function Dashboard() {
  const [toggle,setToggle]=useState(false);
  //const style3= toggle ? { display: "none" } : { display: "block" };
  const color = { color: "#4e73df"};
  const style={backgroundColor:"#4e73df",padding:"5px",borderTopRightRadius:"5px",borderBottomRightRadius:"5px"};
  const style2={fontSize:"35px",marginLeft:"10px"};
  return (

    
    <div className="dashboard">
    <div className="menu">
    
     <button class="hamburger" onClick={() => setToggle(!toggle)}>
        <ReorderIcon /></button>
    {console.log(toggle)}
     <div className="search"> <input type="search" placeholder="Search for"></input><SearchIcon style={style} /></div>
     <div className="icons"> 
     <Badge badgeContent={3} color="error">
    <NotificationsIcon color="action"/>
    </Badge> 
     <Badge badgeContent={7} color="error">
      <MailIcon color="action" />
    </Badge>
    
    </div>
    <div className="user">
    <p>Douglas McGee</p>
  <AccountCircleIcon  style={style2}/> 
    </div>
    </div>
      <div className="dashboard_header">
        <h1>Dashboard</h1>
        <Button
          variant="contained"
          size="small"
          startIcon={<FileDownloadIcon />}
        >
          Generate Report
        </Button>
      </div>

      <div className="notification_box">
        <div className="notbox earnings_monthly">
          <div className="details">
            <h6 id="monthly">EARNINGS (MONTHLY)</h6>
            <h2>$40,000</h2>
          </div>
          <div className="details_icon">
            <IconButton aria-label="calendar">
              <CalendarTodayIcon fontSize="large" />
            </IconButton>
          </div>
        </div>

        <div className="notbox earnings_annual">
          <div className="details">
            <h6 id="annual">EARNINGS (ANNUAL)</h6>
            <h2>$215,000</h2>
          </div>
          <div className="details_icon">
            <IconButton aria-label="calendar">
              <AttachMoneyIcon fontSize="large" />
            </IconButton>
          </div>
        </div>

        <div className="notbox task_box">
          <div className="details tasks">
            <h6 id="task_heading">TASKS</h6>
            <div className="slider">
              {" "}
              <h2>50%</h2>{" "}
            </div>
          </div>
          <div className="details_icon">
            <IconButton aria-label="calendar">
              <ListAltIcon fontSize="large" />
            </IconButton>
          </div>
        </div>
        <div className="notbox pending">
          <div className="details">
            <h6 id="request">PENDING REQUESTS</h6>
            <h2>18</h2>
          </div>
          <div className="details_icon">
            <IconButton aria-label="calendar">
              <ForumIcon fontSize="large" />
            </IconButton>
          </div>
        </div>
      </div>
      <Summary />
      <div className="copyright">
        <p>Copyright © Your Website 2021</p>
      </div>
    </div>
  );
}
