import React from "react";
import styled from "styled-components";
import Box from "@mui/material/Box";
// Assets
// import RollerGif from "../../assets/gifs/Services/RollerGif.gif";
// import MonitorGif from "../../assets/gifs/Services/MonitorGif.gif";
// import designTheamGif from "../../assets/gif/designTheamGif.gif";
import { designTheamGif } from "../../assets"

export default function ServiceBox({ icon, title, subtitle }) {
  let getIcon;

  switch (icon) {
    case "roller":
      getIcon = <Icon src={designTheamGif} alt="Roller Icon" />;
      break;
    case "monitor":
      getIcon = <Icon src={designTheamGif} alt="Monitor Icon" />;
      break;
    case "browser":
      getIcon = <Icon src={designTheamGif} alt="Browser Icon" />;
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
  background-color: #333; /* Darker background */
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  transition: background-color 0.3s ease, transform 0.3s ease;
  &:hover {
    background-color: #444; /* Slightly lighter on hover */
    transform: scale(1.05);
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
  color: #fff;
  font-size: 20px;
  font-weight: bold;
`;

const Subtitle = styled(Box)`
  color: #aaa;
  font-size: 13px;
`;
