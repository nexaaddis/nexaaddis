import React from "react";
import styled from "styled-components";
import Box from "@mui/material/Box";
// Assets
import RollerIcon from "../../assets/svg/Services/RollerIcon";
import MonitorIcon from "../../assets/svg/Services/MonitorIcon";
import BrowserIcon from "../../assets/svg/Services/BrowserIcon";

export default function ServiceBox({ icon, title, subtitle }) {
  let getIcon;

  switch (icon) {
    case "roller":
      getIcon = <RollerIcon />;
      break;
    case "monitor":
      getIcon = <MonitorIcon />;
      break;
    case "browser":
      getIcon = <BrowserIcon />;
      break;
    default:
      getIcon = <RollerIcon />;
      break;
  }

  return (
    <Wrapper>
      <IconWrapper>{getIcon}</IconWrapper>
      <Title className="font20 extraBold">{title}</Title>
      <Subtitle className="font13">{subtitle}</Subtitle>
    </Wrapper>
  );
}

const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const IconWrapper = styled(Box)`
  margin-bottom: 20px;
  color: #fff;
`;

const Title = styled(Box)`
  margin-bottom: 10px;
  color: #fff;
`;

const Subtitle = styled(Box)`
  color: #aaa;
`;
