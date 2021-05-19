import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { signupUser, userSelector, clearState } from "./UserSlice";
import { useHistory } from "react-router-dom";
import toast from "react-hot-toast";

const Signup = () => {
  const dispatch = useDispatch();
  const { register, errors, handleSubmit } = useForm();
  const history = useHistory();

  const { isFetching, isSuccess, isError, errorMessage } =
    useSelector(userSelector);
  const onSubmit = (data) => {
    dispatch(signupUser(data));
  };

  useEffect(() => {
    return () => {
      dispatch(clearState());
    };
  }, []);

  useEffect(() => {
    if (isSuccess) {
      dispatch(clearState());
      history.push("/");
    }

    if (isError) {
      toast.error(errorMessage);
      dispatch(clearState());
    }
  }, [isSuccess, isError]);

  return (
    <Fragment>
      <div className="post-container">
        <div className="form">
          <h1 className="post_heading"> Register here</h1>
          <form
            className="form center"
            onSubmit={handleSubmit(onSubmit)}
            method="POST"
          >
            <label for="name">Username</label>
            <input
              id="name"
              name="name"
              type="text"
              ref={register({ required: true })}
              autocomplete="name"
              required
            />
            <label for="email">Email address</label>
            <input
              id="email"
              name="email"
              type="email"
              autocomplete="email"
              required
              ref={register({
                pattern: /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/i,
              })}
            />

            <br />
            <label for="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              ref={register({ required: true })}
              autocomplete="current-password"
              required
            />

            <div>
              <button type="submit">
                <Fragment>
                  <p>Sign up</p>
                </Fragment>
              </button>
            </div>
          </form>
          <div class="form center">
            <span class="px-2 bg-white text-gray-500">
              Or <Link to="login"> Login</Link>
            </span>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Signup;
