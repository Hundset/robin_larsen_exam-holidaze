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
import Hotelspecifics from "../components/visitorpages/hotel/Hotelspecifics";
import Login from "../components/visitorpages/Login/Login";
import AdminPage from "../components/adminpages/AdminPage/AdminPage";
import AdminHotel from "../components/adminpages/adminhotels/AdminHotel";

function Layout() {

    return (
        <Router>
            <nav className="nav__primary">
                <NavLink to="/" exact className="logo-link"><img src={require("../media/holidaze-logo.png")} alt="holidaze-logo" className="logo"></img></NavLink>
                <NavLink to="/" exact className="nav-link">home</NavLink>
                <NavLink to="/contact" className="nav-link">contact</NavLink>
                <NavLink to="/enquiry" className="nav-link">enquiry</NavLink>
                <Login></Login>
            </nav>
            <Switch>
                <Route path="/" className="active" exact component={Home} />
                <Route path="/contact" component={Contact} />
                <Route path="/enquiry" component={Enquiry}></Route>
                <Route path="/establishments/:id" component={Hotelspecifics}></Route>
                <Route path="/adminpage" component={AdminPage}></Route>
                <Route path="/adminhotel" component={AdminHotel}></Route>
            </Switch>
        </Router>
    );
}

export default Layout;