import {
  makeStyles,
  Card,
  CardContent,
  Grid,
  Avatar,
  createStyles,
} from "@material-ui/core";
// import { relative } from "path";

// styles
const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      background: "#302e43",
      borderRight: "2px solid transparent",
      cursor: "pointer",
      borderLeft: "5px solid transparent",
      "&:hover": {
        transition: "all 0.5s",
        borderLeft: "5px solid #ba3361",
        background: "#454356",
      },
    },
    bodyWrapper: {
      padding: "15px",
    },
    titleWrapper: {
      color: "#f8f8f8",
      display: "flex",
      width: "100%",
      margin: "0px",
      fontSize: "1rem",
      [theme.breakpoints.down("md")]: {
        fontSize: "0.8rem",
      },
    },
    index: {
      width: "5%",
      float: "right",
    },
    name: {
      width: "95%",
    },
    achievement: {
      margin: "0px",
      color: "#a3a3a3",
      fontSize: "1rem",
      "&::first-line": {
        color: "#d2d2d8",
      },
      [theme.breakpoints.down("md")]: {
        fontSize: "0.7rem",
      },
    },
    large: {
      width: theme.spacing(6),
      height: theme.spacing(6),
      [theme.breakpoints.up("md")]: {
        width: theme.spacing(8),
        height: theme.spacing(8),
      },
    },
    avaterContainer: {
      position: "relative",
    },
    greenDot: {
      width: "10px",
      height: "10px",
      background: "green",
      border: "0px",
      borderRadius: "50%",
      position: "absolute",
      top: "0px",
      right: "25%",
      [theme.breakpoints.up("sm")]: {
        right: "30%",
      },
      [theme.breakpoints.up("md")]: {
        right: "35%",
      },
      [theme.breakpoints.up("lg")]: {
        right: "45%",
      },
      [theme.breakpoints.up("xl")]: {
        right: "70%",
      },
    },
  })
);

const AppPlayerCardComponent = (props) => {
  const Styles = useStyles();
  const { avatar, email, firstName, lastName, index, about } = props;
  return (
    <Card className={Styles.root}>
      <CardContent className={Styles.bodyWrapper}>
        <Grid container>
          <Grid
            className={Styles.avaterContainer}
            item
            xs={3}
            sm={2}
            md={2}
            lg={2}
            xl={2}
          >
            <Avatar className={Styles.large} alt="" src={avatar} />
            <div className={Styles.greenDot}></div>
          </Grid>
          <Grid item xs={9} sm={10} md={10} lg={10} xl={10}>
            <div>
              <h2 className={Styles.titleWrapper}>
                <span
                  className={Styles.name}
                >{`${lastName}  ${firstName}`}</span>
                <span className={Styles.index}>#{index}</span>
              </h2>
              <p className={Styles.achievement}>{about}</p>
            </div>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
export default AppPlayerCardComponent;
