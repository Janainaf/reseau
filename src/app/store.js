import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "../components/User/UserSlice";
// import { postReducer } from "../components/postReduce";

export default configureStore({
  reducer: {
    user: userSlice.reducer,
    // post: postform.reducer,
  },
});
