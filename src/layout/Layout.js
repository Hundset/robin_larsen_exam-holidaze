import React from "react";
import {
    BrowserRouter as Router,
    Switch, 
    Route,
    NavLink, 
} from "react-router-dom";
import Home from "../components/visitorpages/home/Home";
import Contact from "../components/visitorpages/contact/Contact";
import Enquiry from "../components/visitorpages/enquiry/Enquiry";
import HotelSpecifics from "../components/visitorpages/hotel/Hotelspecifics";
import Login from "../components/visitorpages/Login/Login";
import AdminPage from "../components/adminpages/AdminPage/AdminPage";

function Layout() {
    return (

        <Router>
            <nav>
            <NavLink to="/" exact className="logo-link"><img src={require("../media/holidaze-logo.png")}alt="holidaze-logo" className="logo"></img></NavLink>
                <NavLink to="/" exact className="nav-link">Home</NavLink>
                <NavLink to="/contact" className="nav-link">Contact</NavLink>
                <NavLink to="/enquiry" className="nav-link">Enquiry</NavLink>
                <Login></Login>
            </nav>
            <Switch>
                <Route path="/" className="active" exact component={Home}/>
                <Route path="/contact" component={Contact}/>
                <Route path="/enquiry" component={Enquiry}></Route>
                <Route path="/hotels/:id" component={HotelSpecifics}></Route>
                <Route path="/adminpage" component={AdminPage}></Route>
            </Switch>
        </Router>

    );
}

export default Layout;