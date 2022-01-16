import "./App.css";

import { Route, Switch } from "react-router-dom";

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Animations } from "./Animations";
import { Blank } from "./Blank";
import { Borders } from "./Borders";
import Button from "@mui/material/Button";
import { Buttonss } from "./Buttonss";
import { Cards } from "./Cards";
import { Charts } from "./Charts";
import { Colors } from "./Colors";
import { Dashboard } from "./Dashboard";
import { Errorpage } from "./Errorpage";
import { ForgotPassword } from "./ForgotPassword";
import IconButton from "@mui/material/IconButton";
import { Login } from "./Login";
import MailIcon from '@mui/icons-material/Mail';
import { Navigation } from "./Navigation";
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Other } from "./Other";
import { Register } from "./Register";
import ReorderIcon from '@mui/icons-material/Reorder';
import SearchIcon from '@mui/icons-material/Search';
import { Tables } from "./Tables";
import { useState } from "react";

function App() {
  const [toggle,setToggle]=useState(false);
const style={backgroundColor:"#4e73df",padding:"5px",borderTopRightRadius:"5px",borderBottomRightRadius:"5px"};
const style2={fontSize:"35px",marginLeft:"10px"};
  return (
    <div className="App">
      <div className="outer_box">
      <Navigation toggle={toggle} />
      <div className="second_box">
    <div className="menu">  
    
    <button className="hamburger" onClick={() => setToggle(!toggle)}>
       <ReorderIcon /></button>
   {console.log(toggle)}
   
    <div className="search"> <input type="search" placeholder="Search for"></input><SearchIcon style={style} /></div>
    <div className="icons"> 
    <IconButton aria-label="notification" size="small">  
   <NotificationsIcon/>
  
</IconButton>
<IconButton aria-label="message">
  <MailIcon />
</IconButton>
   
   </div>
   <div className="user">
   <p>Douglas McGee</p>
 <AccountCircleIcon  style={style2}/> 
   </div>
   </div>
        <Switch>
          <Route exact path="/">
            <Dashboard />
          </Route>
          <Route path="/buttons">
          
            <Buttonss />
          </Route>
          <Route path="/cards">
            <Cards />
          </Route>
          <Route path="/colors">
            <Colors />
          </Route>
          <Route path="/borders">
            <Borders />
          </Route>
          <Route path="/animations">
            <Animations />
          </Route>
          <Route path="/other">
            <Other />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/forgot">
            <ForgotPassword />
          </Route>
          <Route path="/error">
            <Errorpage />
          </Route>
          <Route path="/blank">
            <Blank />
          </Route>
          <Route path="/tables">
            <Tables />
          </Route>
          <Route path="/charts">
            <Charts />
          </Route>
        </Switch>
      </div>
      </div>
      </div>
    
  );
}

export default App;
