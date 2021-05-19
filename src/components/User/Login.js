import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { loginUser, userSelector, clearState } from "./UserSlice";
import toast from "react-hot-toast";
import { useHistory } from "react-router-dom";

const Login = ({}) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { register, errors, handleSubmit } = useForm();
  const { isFetching, isSuccess, isError, errorMessage } =
    useSelector(userSelector);
  const onSubmit = (data) => {
    dispatch(loginUser(data));
  };

  useEffect(() => {
    return () => {
      dispatch(clearState());
    };
  }, []);

  useEffect(() => {
    if (isError) {
      toast.error(errorMessage);
      dispatch(clearState());
    }

    if (isSuccess) {
      dispatch(clearState());
      history.push("/");
    }
  }, [isError, isSuccess]);

  return (
    <Fragment>
      <div className="post-container">
        <h1 className="post_heading"> Already a member?</h1>
        <div className="form">
          <label for="email">User email:</label>
          <form
            className="form center"
            onSubmit={handleSubmit(onSubmit)}
            method="POST"
          >
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              ref={register({
                pattern: /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/i,
              })}
              required
            />
            <br />
            <br />

            <label for="password">Password</label>
            <br />

            <input
              id="password"
              name="password"
              type="password"
              ref={register({ required: true })}
              autoComplete="current-password"
              required
            />
            <br />
            <br />
            <button type="submit">Sign in</button>
          </form>
          <span class="form">
            Or <Link to="signup"> Signup</Link>
          </span>
        </div>
      </div>
    </Fragment>
  );
};

export default Login;
