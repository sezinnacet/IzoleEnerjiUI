import Avatar from "@mui/material/Avatar";
import React from "react";

// Function to generate color from name
const stringToColor = (string) => {
  let hash = 0;
  for (let i = 0; i < string.length; i++) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }
  let color = "#";
  for (let i = 0; i < 3; i++) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.substr(-2);
  }
  return color;
};

// const SmallAvatar = styled(Avatar)(({ theme }) => ({
//   width: theme.spacing(4),
//   height: theme.spacing(4),
//   fontSize: theme.typography.pxToRem(14),
//   [theme.breakpoints.down("sm")]: {
//     width: theme.spacing(3),
//     height: theme.spacing(3),
//     fontSize: theme.typography.pxToRem(12),
//   },
// }));

const getInitials = (name) => {
  if (!name) return "";
  const words = name.trim().split(" ").filter(Boolean);
  if (words.length === 1) return words[0][0].toUpperCase();
  return `${words[0][0].toUpperCase()}${words[1][0].toUpperCase()}`;
};

const CustomUserAvatar = ({ name }) => {
  const initials = getInitials(name);
  const backgroundColor = stringToColor(name);
  return <Avatar style={{ backgroundColor }}>{initials}</Avatar>;
};

export default CustomUserAvatar;
