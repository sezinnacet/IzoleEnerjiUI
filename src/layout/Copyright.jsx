import { Typography } from "@mui/material";

export default function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      {new Date().getFullYear()}
      {" | İzole Enerji Tüm Hakları Saklıdır."}
    </Typography>
  );
}
