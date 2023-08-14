"use client";
"use strict";
exports.__esModule = true;
var link_1 = require("next/link");
var react_bootstrap_1 = require("react-bootstrap");
var navigation_1 = require("next/navigation");
function Header(props) {
    var pathName = navigation_1.usePathname();
    var currentLang = pathName.split("/")[1] === "ar" ? 'en' : 'ar';
    // const changeLang = pathName.split("/")[1] === "ar" ? 'en' : 'ar';
    var changeLang = pathName.includes("ar") ? pathName.replace("ar", "en") : pathName.replace("en", "ar");
    var links = props.transaltes.layout.header.links;
    var auth = props.transaltes.auth;
    return React.createElement(React.Fragment, null,
        React.createElement(react_bootstrap_1.Navbar, { expand: "lg", bg: "dark", "data-bs-theme": "dark" },
            React.createElement(react_bootstrap_1.Container, null,
                React.createElement(react_bootstrap_1.Navbar.Brand, { href: "#home" }),
                React.createElement(react_bootstrap_1.Navbar.Toggle, { "aria-controls": "basic-navbar-nav" }),
                React.createElement(react_bootstrap_1.Navbar.Collapse, { id: "basic-navbar-nav" },
                    React.createElement(react_bootstrap_1.Nav, { className: props.lang === "ar" ? 'me-auto' : 'ms-auto' },
                        React.createElement(link_1["default"], { className: "nav-link", href: "/" + props.lang }, links.home),
                        React.createElement(link_1["default"], { className: "nav-link", href: "/" + props.lang + "/products" }, links.products),
                        React.createElement(link_1["default"], { className: "nav-link", href: "/" + props.lang + "/contact" }, links.contact)),
                    React.createElement("div", { className: "d-flex" },
                        React.createElement(link_1["default"], { className: "btn btn-outline-light rounded-pill mx-3", href: changeLang }, currentLang === "ar" ? "العربية" : "English"),
                        React.createElement(link_1["default"], { href: "/auth/auth", className: "rounded-pill btn btn-light" }, auth.login))))));
}
exports["default"] = Header;
