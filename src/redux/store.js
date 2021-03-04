import { configureStore } from "@reduxjs/toolkit";
import Players from "./playerRudcers";

export default configureStore({
  reducer: {
    player: Players,
  },
});
