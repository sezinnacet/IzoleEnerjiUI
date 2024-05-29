import { DoneOutlineOutlined } from "@mui/icons-material";
import { styled } from "@mui/material";

const DotStepIconRoot = styled("div")(({ theme, ownerState }) => ({
  color: theme.palette.mode === "dark" ? theme.palette.grey[700] : "#eaeaf0",
  display: "flex",
  height: 22,
  alignItems: "center",
  ...(ownerState.active && {
    color: "#fff",
  }),
  "& .QontoStepIcon-completedIcon": {
    color: "#bbb",
    zIndex: 1,
    fontWeight: 600,
    fontSize: 32,
  },
  "& .QontoStepIcon-circle": {
    width: 16,
    height: 16,
    borderRadius: "50%",
    backgroundColor: "currentColor",
  },
}));

export default function DotStep(props) {
  const { active, completed, className } = props;

  return (
    <DotStepIconRoot ownerState={{ active }} className={className}>
      {completed ? (
        <DoneOutlineOutlined className="QontoStepIcon-completedIcon" />
      ) : (
        <div className="QontoStepIcon-circle" />
      )}
    </DotStepIconRoot>
  );
}
