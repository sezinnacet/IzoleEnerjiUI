import { ArrowBack } from "@mui/icons-material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { LoadingButton } from "@mui/lab";
import { IconButton } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { getUserDetail } from "../../api/userApi";
import Copyright from "../../layout/Copyright";
import { useStoreProfile } from "../../store/store";

export default function SignInSide() {
  const banner = require("../../images/logo.png");
  const [loading, setLoading] = useState(false);
  const setProfile = useStoreProfile((state) => state.setProfile);
  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    const data = new FormData(event.currentTarget);

    getUserDetail({
      data: data,
    }).then((response) => {
      setLoading(false);

      if (response.data.success) {
        localStorage.setItem(
          "user",
          JSON.stringify(response.data.resultObject)
        );
        setProfile({ profile: response.data.resultObject });
      } else {
        Swal.fire({
          title: "Başarısız",
          icon: "error",
          text: response.data.message,
        });
      }
    });
  };

  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <CssBaseline />
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          display: { xs: "none", sm: "block" },
          position: "relative",
          backgroundImage: `url(${banner})`,
          backgroundRepeat: "no-repeat",
          backgroundColor: (t) =>
            t.palette.mode === "light"
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundSize: "contain",
          backgroundPosition: "center",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.3)", // Bu, karartma katmanını ekler
          },
        }}
      >
        <IconButton
          component={Link}
          to="/"
          sx={{ width: "100px", height: "100px" }}
        >
          <ArrowBack />
        </IconButton>
      </Grid>
      <Grid
        item
        xs={12}
        sm={8}
        md={5}
        component={Paper}
        elevation={6}
        square
        alignContent={"center"}
      >
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "GrayText" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Giriş Yap
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Şifre"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <LoadingButton
              type="submit"
              fullWidth
              loading={loading}
              variant="contained"
              color="inherit"
              sx={{ mt: 3, mb: 2 }}
            >
              Giriş Yap
            </LoadingButton>
            <Grid container>
              <Grid item xs>
                <Link to={"#"} variant="body2">
                  Şifreni mi unuttun?
                </Link>
              </Grid>
              <Grid item>
                <Link to="/signup" variant="body2">
                  {"Bir hesabın yok mu? Hemen oluştur!"}
                </Link>
              </Grid>
            </Grid>
            <Copyright sx={{ mt: 5 }} />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
