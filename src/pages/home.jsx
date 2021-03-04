import { Container, makeStyles, CssBaseline } from "@material-ui/core";
import { useEffect, useState } from "react";
import AppPlayerCardComponent from "../components/AppPlayerCardComponent";
import SearchAppBar from "../components/AppNavBarComponent";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { populatePlayerStore } from "../redux/playerRudcers";
const useStyles = makeStyles({
  root: {
    background: "#302e43",
    height: "100vh",
  },
});

const Index = (props) => {
  // get all styles
  const Style = useStyles();

  // url to fetch users
  const url = `https://reqres.in/api/users?page=1`;
  // method to fetch users from api
  const fetchPlayers = async (url) => {
    try {
      const response = await fetch(url);
      const { data } = await response.json();
      // mutate data to add about section
      data.forEach((data, index) => {
        data.about = `this is a dummy text for ${data.first_name} ${data.last_name}, just to fill up the screen for design sake, cause that space was empty, just mutating the data`;
      });
      // dispatch the data to the store
      dispatch(populatePlayerStore(data));
    } catch (e) {
      // alert user of error
      alert(String(e));
    }
  };
  // call the player api when the component is mounted
  useEffect(() => {
    fetchPlayers(url);
    // dispatch(populatePlayerStore())
  }, []);

  const dispatch = useDispatch();

  // search method
  const filterData = (query) => {
    if (query) {
      const filteredList = players.filter(
        (item) =>
          item.first_name.toLowerCase().includes(query) ||
          item.last_name.toLowerCase().includes(query)
      );
      setPlayers(filteredList);
    } else {
      setPlayers(playerList);
    }
  };
  // handle search bar data
  const handleSearchChange = (value) => {
    // console.log(value, "::: value ::::");
    filterData(value.toLowerCase());
  };
  // get items from redux
  const { playerList } = useSelector((state) => state.player);
  // players State
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    setPlayers(playerList);
  }, [playerList]);
  return (
    <div className={Style.root}>
      <SearchAppBar onChange={handleSearchChange} />

      {players.map((playerInfo, index) => (
        <Link to={`/profile/${playerInfo.id}`} key={index}>
          <AppPlayerCardComponent
            key={index}
            firstName={playerInfo.first_name}
            lastName={playerInfo.last_name}
            email={playerInfo.email}
            avatar={playerInfo.avatar}
            index={playerInfo.id}
            about={playerInfo.about}
          />
        </Link>
      ))}
    </div>
  );
};
export default Index;
