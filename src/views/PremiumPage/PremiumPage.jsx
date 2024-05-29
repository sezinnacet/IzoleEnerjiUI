import { Grid, Paper } from "@mui/material";
import PremiumCard from "../../components/PremiumCard/PremiumCard";
import { premiumModels } from "../../constants";

export default function PremiumPage() {
  return (
    <Grid
      container
      component={Paper}
      direction={"row"}
      maxWidth={"1400px"}
      height={"100%"}
      elevation={24}
      sx={{
        p: 6,
        backgroundColor: "rgba(208,224,204,255)",
        mb: 12,
        display: "flex",
        alignContent: "center",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        width: { xs: "100%", md: "80%", lg: "75%" },
      }}
    >
      {premiumModels?.map((model) => (
        <Grid
          sx={{
            p: 1,
            display: "flex",
            alignContent: "center",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
          item
          md={12}
          lg={4}
        >
          <PremiumCard {...model} />
        </Grid>
      ))}
    </Grid>
  );
}
