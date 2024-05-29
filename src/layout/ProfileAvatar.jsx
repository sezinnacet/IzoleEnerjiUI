import {
  Avatar,
  Box,
  Button,
  Divider,
  IconButton,
  Popover,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import { googleLogout } from "@react-oauth/google";
import { useState } from "react";
import CustomUserAvatar from "../components/CustomUserAvatar/CustomUserAvatar";
import { useStoreProfile } from "../store/store";

export default function ProfileAvatar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const setProfile = useStoreProfile((state) => state.setProfile);
  const profile = useStoreProfile((state) => state.profile);
  const picture = useStoreProfile((state) => state.picture);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const logOut = () => {
    if (picture) googleLogout();
    setProfile({ profile: null, picture: null });
    localStorage.clear();
  };

  return (
    <div>
      <Box sx={{ flexGrow: 0 }}>
        <Tooltip title="Profili Göster">
          <IconButton onClick={handleClick} sx={{ p: 0 }}>
            {picture ? (
              <Avatar alt="user image" src={picture} />
            ) : (
              <CustomUserAvatar name={profile.name + " " + profile.surname} />
            )}
          </IconButton>
        </Tooltip>
      </Box>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Stack
          direction={"column"}
          sx={{
            textAlign: "center",
            justifyContent: "center",
            display: "flex",
          }}
        >
          <Typography p={1} pb={0} variant="body1">
            {profile.name} {profile.surname}
          </Typography>
          <Divider />
          <Typography p={1} pb={0}>
            {profile.email}
          </Typography>
          <Divider />
          <Button
            sx={{ m: 1, ml: 2, mr: 2 }}
            variant="outlined"
            onClick={logOut}
            color="error"
          >
            Çıkış Yap
          </Button>
        </Stack>
      </Popover>
    </div>
  );
}
