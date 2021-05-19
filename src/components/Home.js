import React, { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { userSelector, fetchUserBytoken, clearState } from "./User/UserSlice";
import Loader from "react-loader-spinner";
import { useHistory } from "react-router-dom";
import PostForm from "./PostForm";
import AllPost from "./AllPost";

const Home = () => {
  const history = useHistory();

  const dispatch = useDispatch();
  const { isFetching, isError } = useSelector(userSelector);
  useEffect(() => {
    dispatch(fetchUserBytoken({ token: localStorage.getItem("token") }));
  }, []);

  const { username, email } = useSelector(userSelector);

  useEffect(() => {
    if (isError) {
      dispatch(clearState());
      history.push("/login");
    }
  }, [isError]);

  const onLogOut = () => {
    localStorage.removeItem("token");

    history.push("/login");
  };

  return (
    <div>
      <div className="post-container form form-center">
        {isFetching ? (
          <Loader type="Puff" color="#636363" height={100} width={100} />
        ) : (
          <Fragment>
            Welcome back {username}
            <button onClick={onLogOut}>Log Out</button>
          </Fragment>
        )}
      </div>

      <PostForm />
      <AllPost />
    </div>
  );
};

export default Home;
