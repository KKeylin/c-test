import React from "react";
import { Link } from "react-router-dom";
import { StyledHeader, StyledImg, StyledUl, StyledLi } from "./styles";
import logo from "assets/images/logo.svg";
import * as routes from "constants/Routes";

function Header() {
    return (
        <StyledHeader>
            <StyledImg src={logo} alt="" />
            <StyledUl>
                <StyledLi>
                    <Link to={routes.fullView.path}>Full view</Link>
                </StyledLi>
                <StyledLi>
                    <Link to={routes.minimalView.path}>Minimal view</Link>
                </StyledLi>
            </StyledUl>
        </StyledHeader>
    );
}
export default Header;
