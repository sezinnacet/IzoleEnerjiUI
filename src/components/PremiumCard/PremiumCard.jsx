import { Circle } from "@mui/icons-material";
import { Button, Chip, Divider, Grid, Paper, Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { updgradeToPremium } from "../../api/premiumApi";
import { useStoreProfile } from "../../store/store";

export default function PremiumCard({
  price,
  header,
  model,
  features = [],
  highLight = false,
}) {
  const navigate = useNavigate();

  const profile = useStoreProfile((state) => state.profile);
  const setProfile = useStoreProfile((state) => state.setProfile);
  const handlePremium = ({ premiumType }) => {
    if (!profile) {
      return navigate("/login");
    } else {
      const data = {
        email: profile.email,
        premiumModeId: 1,
        premium: +premiumType,
      };
      updgradeToPremium({ data }).then((response) => {
        if (response.data.success) {
          Swal.fire({
            title: "Başarılı",
            icon: "success",
            text: "Premium özellikler şimdi aktif edildi.",
          }).then((resp) => {
            setProfile({ profile: response.data.resultObject });
            localStorage.setItem(
              "user",
              JSON.stringify(response.data.resultObject)
            );
            navigate("/");
          });
        } else {
          Swal.fire({
            title: "Başarısız",
            icon: "error",
            text: response.data.message,
          });
        }
      });
    }
  };
  return (
    <Stack
      component={Paper}
      elevation={0}
      direction={"column"}
      spacing={4}
      sx={{
        width: "100%",
        pb: 4,
        ":hover": {
          xs: { transform: "none" },
          md: { transform: "scale(1.1)" },
        },
        transition: "transform .4s",
        pt: 4,
        maxWidth: 400,
        textAlign: "center",
        borderRadius: "25px",
        // border: "5px solid black",
        justifyContent: "center",
        background: highLight ? "linear-gradient(#fff, #9198e5)" : "ddd",
      }}
    >
      <Typography
        fontFamily={"sans-serif"}
        fontSize={"2.25rem"}
        lineHeight={"1.22"}
        letterSpacing={"0.2px"}
        fontWeight={700}
      >
        {price}₺
      </Typography>
      <Typography fontWeight={600} gutterBottom variant="h5" component="div">
        {header}
      </Typography>
      <Divider variant="middle">
        <Chip label="Özellikler" size="small" />
      </Divider>
      <Grid
        container
        maxWidth={400}
        alignItems={"center"}
        justifyContent={"space-between"}
        direction={"row"}
        p={2}
      >
        {features.map((feature) => (
          <>
            <Grid item xs={3}>
              <Circle sx={{ width: "13px", color: "#333" }} />
            </Grid>
            <Grid item xs={9}>
              <Typography
                fontWeight={500}
                gutterBottom
                variant="body1"
                color={"#333"}
                component="div"
                textAlign={"start"}
                overflow={"hidden"}
              >
                {feature}
              </Typography>
            </Grid>
          </>
        ))}
      </Grid>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button
          onClick={() => {
            handlePremium({ premiumType: model });
          }}
          variant="outlined"
          color="inherit"
          sx={{ width: 200 }}
        >
          şİmdİ al
        </Button>
      </div>
    </Stack>
  );
}
