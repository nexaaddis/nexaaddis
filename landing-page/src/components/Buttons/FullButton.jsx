import React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

export default function FullButton({ title, action, border }) {
  return (
    <StyledButton
      variant={border ? "outlined" : "contained"}
      onClick={action ? () => action() : null}
      border={border ? 1 : 0}
    >
      {title}
    </StyledButton>
  );
}

const StyledButton = styled(Button)(({ theme, border }) => ({
  width: "100%",
  padding: "15px",
  borderColor: border ? theme.palette.grey[400] : theme.palette.primary.main,
  backgroundColor: border ? "transparent" : theme.palette.primary.main,
  color: border ? theme.palette.grey[400] : "#fff",
  fontSize: "16px",
  transition: "all 0.3s ease-in-out",
  
  "&:hover": {
    backgroundColor: border ? "transparent" : theme.palette.primary.dark,
    borderColor: theme.palette.primary.main,
    color: border ? theme.palette.primary.main : "#fff",
  },

  // Responsive Design
  [theme.breakpoints.down("sm")]: {
    padding: "9px",
    fontSize: "12px",
  },
  [theme.breakpoints.down("xs")]: {
    padding: "8px",
    fontSize: "10px",
  },
}));
