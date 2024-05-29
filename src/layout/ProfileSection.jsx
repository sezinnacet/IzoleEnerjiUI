import { Google, Mail } from "@mui/icons-material";
import { Button, ButtonGroup } from "@mui/material";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { getUserDetailGoogle } from "../api/userApi";
import { useStoreProfile } from "../store/store";
import ProfileAvatar from "./ProfileAvatar";

const ProfileSection = () => {
  const [user, setUser] = useState([]);

  const setProfile = useStoreProfile((state) => state.setProfile);
  const profile = useStoreProfile((state) => state.profile);

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => setUser(codeResponse),
    onError: (error) => console.log("Login Failed:", error),
  });

  const mailLogin = ({ profile, picture }) => {
    let data = new FormData();
    data.append("Email", profile.email);
    data.append("Password", profile.id);
    data.append("Name", profile.given_name);
    data.append("Surname", profile.family_name);
    getUserDetailGoogle({
      data: data,
    }).then((response) => {
      if (response.data.success) {
        localStorage.setItem(
          "user",
          JSON.stringify(response.data.resultObject)
        );
        localStorage.setItem("picture", JSON.stringify(picture));
        setProfile({ profile: response.data.resultObject, picture: picture });
      } else {
        Swal.fire({
          title: "Bir hata oluştu",
          icon: "error",
          text: response.data.message,
        });
      }
    });
  };
  useEffect(() => {
    if (user) {
      axios
        .get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
          {
            headers: {
              Authorization: `Bearer ${user.access_token}`,
              Accept: "application/json",
            },
          }
        )
        .then((res) => {
          mailLogin({ profile: res.data, picture: res.data.picture });
        })
        .catch((err) => console.log(err));
    }
  }, [user]);

  return (
    <>
      {profile ? (
        <ProfileAvatar profile={profile} setProfile={setProfile} />
      ) : (
        <ButtonGroup>
          <Button
            variant="outlined"
            onClick={login}
            size="small"
            startIcon={<Google />}
            sx={{
              backgroundColor: "white",
              borderColor: "white",
              ":hover": { borderColor: "white" },
              color: "black",
              overflow: "hidden",
            }}
          >
            GOOGLE İLE GİRİŞ YAP
          </Button>
          <Button
            variant="outlined"
            size="small"
            LinkComponent={Link}
            to="/login"
            startIcon={<Mail />}
            sx={{
              backgroundColor: "black",
              borderColor: "black",
              ":hover": { borderColor: "black" },
              color: "white",
              overflow: "hidden",
            }}
          >
            MAIL İLE GİRİŞ YAP / KAYDOL
          </Button>
        </ButtonGroup>
      )}
    </>
  );
};
export default ProfileSection;
