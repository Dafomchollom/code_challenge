import {
  makeStyles,
  Card,
  CardContent,
  Grid,
  Avatar,
  createStyles,
} from "@material-ui/core";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      background: "#302e43",
      height: "100vh",
      display: "flex",
      flexWrap: "wrap",
      alignItems: "center",
    },
    card: {
      background: "#f8f8f8",
      // maxHeight: "600px",
    },
    AvatarWrapper: {
      width: "100%",
      display: "flex",
      flecWrape: "wrape",
      justifyContent: "center",
    },
    large: {
      textAlign: "center",
      width: theme.spacing(18),
      height: theme.spacing(18),
      transition: "all .5s",
      [theme.breakpoints.up("md")]: {
        width: theme.spacing(28),
        height: theme.spacing(28),
      },
    },
    text: {
      color: "#282828",
      fontSize: "1.5rem",
      margin: "0px",
      textAlign: "center",
    },
  })
);
const ViewProfile = (props) => {
  const Styles = useStyles();
  // get id from params
  const { id } = useParams();
  // get all players from store
  const { playerList } = useSelector((state) => state.player);
  const [profile, setprofile] = useState({});
  useEffect(() => {
    setprofile(
      playerList.find((element) => parseInt(element.id) === parseInt(id))
    );
  }, [playerList]);
  return (
    <div className={Styles.root}>
      <Card className={Styles.card} elevation={0}>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <div className={Styles.AvatarWrapper}>
                <Avatar className={Styles.large} alt="" src={profile.avatar} />
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <Grid container>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                  <p
                    className={Styles.text}
                  >{`${profile.first_name} ${profile.last_name}`}</p>
                </Grid>

                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                  <p className={Styles.text}>{profile.email}</p>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                  <p className={Styles.text}>{profile.about}</p>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
};
export default ViewProfile;
