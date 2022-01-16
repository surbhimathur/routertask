// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import Button from "@mui/material/Button";
// import IconButton from "@mui/material/IconButton";
// import MailIcon from '@mui/icons-material/Mail';
// import {Navigation} from "./Navigation";
// import NotificationsIcon from '@mui/icons-material/Notifications';
// import ReorderIcon from '@mui/icons-material/Reorder';
// import SearchIcon from '@mui/icons-material/Search';
// import { useState } from "react";

// export function Menu()
// {
// const [toggle,setToggle]=useState(false);
// const style={backgroundColor:"#4e73df",padding:"5px",borderTopRightRadius:"5px",borderBottomRightRadius:"5px"};
// const style2={fontSize:"35px",marginLeft:"10px"};

// return(
// <div>
// <Navigation toggle={toggle} />
//     <div className="menu">  
    
//     <button className="hamburger" onClick={() => setToggle(!toggle)}>
//        <ReorderIcon /></button>
//    {console.log(toggle)}
   
//     <div className="search"> <input type="search" placeholder="Search for"></input><SearchIcon style={style} /></div>
//     <div className="icons"> 
//     <IconButton aria-label="notification" size="small">  
//    <NotificationsIcon/>
  
// </IconButton>
// <IconButton aria-label="message">
//   <MailIcon />
// </IconButton>
   
//    </div>
//    <div className="user">
//    <p>Douglas McGee</p>
//  <AccountCircleIcon  style={style2}/> 
//    </div>
//    </div>
//   </div>
// );
// }