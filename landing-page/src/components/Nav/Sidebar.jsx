import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import { Button, Typography } from "@mui/material";
// Assets
import CloseIcon from "../../assets/svg/CloseIcon";
import LogoIcon from "../../assets/svg/Logo";

export default function Sidebar({ sidebarOpen, toggleSidebar }) {
  return (
    <Wrapper className="animate darkBg" sidebarOpen={sidebarOpen}>
      <SidebarHeader className="flexSpaceCenter">
        <div className="flexNullCenter">
          <LogoIcon />
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '.9rem', sm: '1rem', md: '1.1rem' },  // Adjust font size for different screen sizes
              ml: 2,
              display: { lg: 'none' },  // Hide on large screens and above
            }}
            className="whiteColor font20"
          >
            NexaAddis
          </Typography>
        </div>
        <CloseBtn onClick={() => toggleSidebar(!sidebarOpen)} className="animate pointer">
          <CloseIcon />
        </CloseBtn>
      </SidebarHeader>
      <div className="linkWrapper">
        <UlStyle className="flexNullCenter flexColumn">
          <li className="semiBold font15 pointer">
            <Link
              onClick={() => toggleSidebar(!sidebarOpen)}
              activeClass="active"
              className="whiteColor"
              style={{ padding: "10px 15px" }}
              to="home"
              spy={true}
              smooth={true}
              offset={-60}
            >
              Home
            </Link>
          </li>
          <li className="semiBold font15 pointer">
            <Link
              onClick={() => toggleSidebar(!sidebarOpen)}
              activeClass="active"
              className="whiteColor"
              style={{ padding: "10px 15px" }}
              to="services"
              spy={true}
              smooth={true}
              offset={-60}
            >
              Services
            </Link>
          </li>
          <li className="semiBold font15 pointer">
            <Link
              onClick={() => toggleSidebar(!sidebarOpen)}
              activeClass="active"
              className="whiteColor"
              style={{ padding: "10px 15px" }}
              to="projects"
              spy={true}
              smooth={true}
              offset={-60}
            >
              Projects
            </Link>
          </li>
          <li className="semiBold font15 pointer">
            <Link
              onClick={() => toggleSidebar(!sidebarOpen)}
              activeClass="active"
              className="whiteColor"
              style={{ padding: "10px 15px" }}
              to="blog"
              spy={true}
              smooth={true}
              offset={-60}
            >
              Blog
            </Link>
          </li>
          <li className="semiBold font15 pointer">
            <Link
              onClick={() => toggleSidebar(!sidebarOpen)}
              activeClass="active"
              className="whiteColor"
              style={{ padding: "10px 15px" }}
              to="pricing"
              spy={true}
              smooth={true}
              offset={-60}
            >
              Pricing
            </Link>
          </li>
          <li className="semiBold font15 pointer">
            <Link
              onClick={() => toggleSidebar(!sidebarOpen)}
              activeClass="active"
              className="whiteColor"
              style={{ padding: "10px 15px" }}
              to="contact"
              spy={true}
              smooth={true}
              offset={-60}
            >
              Contact
            </Link>
          </li>
        </UlStyle>
        <UlStyle id="sideBarGetStarted">
          <li className="semiBold font15 pointer">
            <a href="/" style={{ padding: "10px 30px 10px 0" }} className="whiteColor">
              Log in
            </a>
          </li>
          <Button
            sx={{
              borderRadius: '12px',
              backgroundColor: 'var(--primary-color)',
              outline: 'none',
              width: { xs: '100', sm: '120px', lg: '150px' },
              padding: '10px',
              fontWeight: '600',
              fontSize: { xs: '.6rem', sm: '.6rem', md: '.8rem', lg: '1rem' },
              color: '#ffffff',
              lineHeight: 1.2,
              "&:hover": {
                backgroundColor: 'transparent',
                color: 'var(--primary-color)',
              }
            }}
          >
            Get Started
          </Button>
        </UlStyle>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  width: 400px;
  height: 100vh;
  position: fixed;
  top: 0;
  padding: 0 30px;
  right: ${(props) => (props.sidebarOpen ? "0px" : "-400px")};
  z-index: 10002;
  overflow-y: auto;
  @media (max-width: 400px) {
    width: 100%;
  }
`;
const SidebarHeader = styled.div`
  padding: 20px 0;
`;
const CloseBtn = styled.button`
  border: 0px;
  outline: none;
  background-color: transparent;
  padding: 10px;
`;
const UlStyle = styled.ul`
  padding: 0 40px;
  li {
    margin: 20px 0;
  }
`;
