import React from "react";
import styled from "styled-components";
import Box from "@mui/material/Box";
// assets
import { designTheamGif } from "../../assets";
import designerPen from "../../assets/svg/Services/designerPen.svg";
import mobile from "../../assets/svg/Services/mobile.svg";
import website from "../../assets/svg/Services/website.svg";

export default function ServiceBox({ icon, title, subtitle }) {
  let getIcon;

  switch (icon) {
    case "roller":
      getIcon = <Icon src={designerPen} alt="Roller Icon" />;
      break;
    case "monitor":
      getIcon = <Icon src={website} alt="Monitor Icon" />;
      break;
    case "browser":
      getIcon = <Icon src={mobile} alt="Browser Icon" />;
      break;
    default:
      getIcon = <Icon src={designTheamGif} alt="Default Icon" />;
      break;
  }

  return (
    <Wrapper>
      <IconWrapper>{getIcon}</IconWrapper>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </Wrapper>
  );
}

const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: #f5f5f5; /* Light background color */
  border-radius: 8px;
  padding: 20px;
  transition: background-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;

  /* Soft box shadow */
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: #e0e0e0; /* Slightly darker on hover */
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15); /* Enhance shadow on hover */
    transform: none; /* No scaling */
  }
`;

const IconWrapper = styled(Box)`
  width: 100px;
  height: 100px;
  margin-bottom: 20px;
`;

const Icon = styled.img`
  width: 100%;
  height: auto;
`;

const Title = styled(Box)`
  margin-bottom: 10px;
  color: #333;
  font-size: 20px;
  font-weight: bold;
`;

const Subtitle = styled(Box)`
  color: #555;
  font-size: 13px;
`;

