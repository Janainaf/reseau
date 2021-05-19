import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "../components/User/UserSlice";
export default configureStore({
  reducer: {
    user: userSlice.reducer,
  },
});
