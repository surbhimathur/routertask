import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import DownloadIcon from '@mui/icons-material/Download';
import ForumIcon from "@mui/icons-material/Forum";
import IconButton from "@mui/material/IconButton";
import ListAltIcon from "@mui/icons-material/ListAlt";
import {Menu} from "./Menu";
import { Summary } from "./Summary";

export function Dashboard() {

  //const style3= toggle ? { display: "none" } : { display: "block" };
  
  
  return (
    

    <div className="dashboard">
    
      <div className="dashboard_header">
        <h1>Dashboard</h1>
        <button ><DownloadIcon /> Generate Report</button>  
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
