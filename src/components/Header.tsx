import React from "react";
import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";


const StyledAppBar = styled(AppBar)({
    backgroundColor: "#CC5500",
    color: "#000000",
});

const StyledTypography = styled(Typography) ({
    fontFamily: '"Mitr", sans serif',
    fontSize: "48px",
    fontWeight: 600,
});

const StyledLink = styled(Link)({ 
    color: 'inherit',
    textDecoration: 'none',
});

const Header: React.FC = () => {
    return(
        <StyledAppBar position="sticky">
        <Toolbar style={{display: "flex", flexDirection: "row", justifyContent:"space-between"}}>
            <StyledLink to="/" color="inherit">
            <StyledTypography variant="h1">KINOOO.</StyledTypography>
            </StyledLink>
            <StyledLink to="/favorites"><Button color="inherit">Favorites</Button></StyledLink>
        </Toolbar>
    </StyledAppBar>
    );
};

export default Header;