import { NavLink, Outlet } from "react-router-dom";

function HelpLayout() {
    return (
        <div className="help-layout">
            <h2>Website Help</h2>
            <p>Lorem ipsum dolor sit amet</p>

            <NavLink to="faq">View the FAQ</NavLink>
            <NavLink to="contact">Contact Us</NavLink>

            <Outlet />
        </div>
    );
}

export default HelpLayout;