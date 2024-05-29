// src/ContactPage.js
import {
  Box,
  Button,
  Container,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import Swal from "sweetalert2";
const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Mesajınız gönderildi",
      icon: "success",
    });
  };
  return (
    <Container
      className="contact"
      sx={{
        backgroundColor: "rgba(208, 224, 204, 255)",
        mb: 5,
        p: 5,
        borderRadius: "25px",
      }}
    >
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={6}>
          <Typography variant="h4" fontWeight={700} gutterBottom>
            Bize Ulaşın
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="İsminiz"
              margin="normal"
              variant="outlined"
            />
            <TextField
              fullWidth
              label="Email"
              margin="normal"
              variant="outlined"
            />
            <TextField
              fullWidth
              label="Mesajınız"
              margin="normal"
              variant="outlined"
              multiline
              rows={4}
            />
            <Button
              type="submit"
              variant="contained"
              color="inherit"
              style={{ marginTop: "16px" }}
            >
              Gönder
            </Button>
          </form>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box>
            <Typography variant="h5" gutterBottom>
              Email Adresleri
            </Typography>
            <Typography variant="body1">
              <Link
                href="mailto:aaakinci@ogr.eskisehir.edu.tr"
                color="inherit"
                underline="none"
              >
                aaakinci@ogr.eskisehir.edu.tr
              </Link>
            </Typography>
            <Typography variant="body1">
              <Link
                href="mailto:gorkemdurmaz@ogr.eskisehir.edu.tr"
                color="inherit"
                underline="none"
              >
                gorkemdurmaz@ogr.eskisehir.edu.tr
              </Link>
            </Typography>
            <Typography variant="body1">
              <Link
                href="mailto:sezinacet@ogr.eskisehir.edu.tr"
                color="inherit"
                underline="none"
              >
                sezinacet@ogr.eskisehir.edu.tr
              </Link>
            </Typography>
            <Typography variant="body1">
              <Link
                href="mailto:info@eskisehir.edu.tr"
                color="inherit"
                underline="none"
              >
                info@eskisehir.edu.tr
              </Link>
            </Typography>
            <Typography variant="body1">
              <Link
                href="mailto:bilgi@gmzenerji.com"
                color="inherit"
                underline="none"
              >
                bilgi@gmzenerji.com
              </Link>
            </Typography>
            <Typography variant="body1">
              <Link
                href="mailto:izoleenerji@gmail.com"
                color="inherit"
                underline="none"
              >
                izoleenerji@gmail.com
              </Link>
            </Typography>
          </Box>
          <Box style={{ marginTop: "32px" }}>
            <Typography variant="h5" gutterBottom>
              LinkedIn Profilleri
            </Typography>
            <Typography variant="body1">
              <Link
                href="https://www.linkedin.com/in/ahmetarifakinci?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                target="_blank"
                rel="noopener noreferrer"
                color="inherit"
                underline="none"
              >
                Ahmet Arif Akinci
              </Link>
            </Typography>
            <Typography variant="body1">
              <Link
                href="https://www.linkedin.com/in/gorkemdurmaz?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                target="_blank"
                rel="noopener noreferrer"
                color="inherit"
                underline="none"
              >
                Gorkem Durmaz
              </Link>
            </Typography>
            <Typography variant="body1">
              <Link
                href="https://www.linkedin.com/in/sezinacet?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                target="_blank"
                rel="noopener noreferrer"
                color="inherit"
                underline="none"
              >
                Sezin Acet
              </Link>
            </Typography>
            <Typography variant="body1">
              <Link
                href="https://www.linkedin.com/company/gmz-enerji-sistemleri/"
                target="_blank"
                rel="noopener noreferrer"
                color="inherit"
                underline="none"
              >
                GMZ Enerji Sistemleri
              </Link>
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contact;
