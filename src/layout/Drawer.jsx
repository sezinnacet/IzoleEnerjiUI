import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import Toolbar from "@mui/material/Toolbar";
import * as React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { navItems } from "../constants";
import { useStoreProfile } from "../store/store";
import Footer from "./Footer";
import ProfileSection from "./ProfileSection";

const drawerWidth = 240;
const logo = require("../images/logo.png");
const textlogo = require("../images/textlogo.png");
function DrawerAppBar({ children }) {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const profile = useStoreProfile((state) => state.profile);
  const setProfile = useStoreProfile((state) => state.setProfile);
  let navTabs = [];
  if (profile) {
    navTabs = profile?.userDetails?.isPremium
      ? navItems.filter((x) => x.to !== "/pricing")
      : navItems;
  } else {
    navTabs = navItems.filter((item) => !item.needAuth);
  }

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const picture = localStorage.getItem("picture");
      let pictureSrc = "";
      if (picture) {
        pictureSrc = JSON.parse(picture);
      }
      const foundUser = JSON.parse(loggedInUser);
      setProfile({ profile: foundUser, picture: pictureSrc });
    }
  }, []);
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Box
        sx={{
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img
          src={logo}
          alt="logo"
          style={{
            objectFit: "contain",
            textAlign: "center",
            width: "30%",
            padding: "6px",
          }}
        />
        <img
          src={textlogo}
          alt="logo"
          style={{
            objectFit: "contain",
            textAlign: "center",
            width: "60%",
            padding: "6px",
          }}
        />
      </Box>
      <Divider />
      <List>
        {navTabs.map((item) => (
          <ListItem
            component={Link}
            to={item.to}
            key={item.name}
            disablePadding
          >
            <ListItemButton
              sx={{ color: "#6d9464", fontWeight: 800, fontSize: 24 }}
            >
              {item.name}
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box
      sx={{
        display: "flex",
        backgroundColor: "#76956c",
        flexDirection: "column",
        minHeight: "100vh",
        justifyContent: "center",
      }}
    >
      <CssBaseline />
      <AppBar sx={{ backgroundColor: "rgba(208,224,204,255)" }} component="nav">
        <Toolbar
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignContent: "center",
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ width: { xs: "10%", sm: "10%", md: "7%", lg: "4%" } }}>
            <img
              src={logo}
              alt="logo"
              style={{ width: "100%", padding: "6px" }}
            />
          </Box>
          <Box sx={{ display: { xs: "none", sm: "flex" } }}>
            {navTabs.map((item) => (
              <Button
                key={item.name}
                component={Link}
                to={item.to}
                sx={{
                  color: "#6d9464",
                  fontWeight: 800,
                  fontSize: 18,
                }}
              >
                {item.name}
              </Button>
            ))}
          </Box>
          <ProfileSection />
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              //              backgroundColor: "rgba(208,224,204,255)",
              backgroundColor: "#ebf1ec",
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box
        sx={{
          mt: { xs: "7%", sm: "7%", md: "5%", lg: "3%" },
          justifyContent: "center",
          display: "flex",
        }}
      >
        {children}
      </Box>
      <Footer />
    </Box>
  );
}

export default DrawerAppBar;
