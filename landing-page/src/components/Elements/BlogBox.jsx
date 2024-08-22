import React from "react";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import { styled } from "@mui/material/styles";

export default function BlogBox({ tag, title, text, action, author }) {
  return (
    <StyledCard onClick={action ? () => action() : null}>
      <CardActionArea>
        <CardContent>
          <Typography variant="h5" component="div" fontWeight="bold">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ margin: "20px 0" }}>
            {text}
          </Typography>
          <Typography variant="body2" color="text.primary" fontWeight="bold">
            {author}
          </Typography>
          <Chip label={tag} color="primary" size="small" sx={{ marginTop: "10px" }} />
        </CardContent>
      </CardActionArea>
    </StyledCard>
  );
}

const StyledCard = styled(Card)(({ theme }) => ({
  width: "100%",
  marginTop: "30px",
  padding: "20px",
  textAlign: "left",
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[3],
  transition: "all 0.3s ease-in-out",
  "&:hover": {
    transform: "scale(1.05)",
    boxShadow: theme.shadows[10],
    backgroundColor: theme.palette.action.hover,
  },
  "&:hover .MuiCardContent-root": {
    backgroundColor: theme.palette.background.default,
  },
  "&:hover .MuiTypography-root": {
    color: theme.palette.primary.main,
  },
  "&:hover .MuiChip-root": {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
}));
