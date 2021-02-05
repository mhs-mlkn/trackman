import { Button, makeStyles, Typography } from "@material-ui/core";
import Icon from "@material-ui/core/Icon";
import UserSVG from "assets/svg/user.svg";

const useStyles = makeStyles({
  avatar: {
    position: "absolute",
    width: 40,
    height: 40,
    right: 32,
    top: "calc(50% - 40px/2)"
  }
});

export default function UserButton() {
  const classes = useStyles();

  return (
    <div>
      <Button
        variant="text"
        endIcon={<Icon>expand_more</Icon>}
        style={{ marginRight: 64 }}
      >
        <Typography variant="body1">Golf Lounge 18</Typography>
      </Button>
      <img src={UserSVG} alt="" className={classes.avatar} />
    </div>
  );
}
