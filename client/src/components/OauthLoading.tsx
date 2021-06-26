import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useContext } from "react";
import { CurrentUser } from "../context/CurrentUserContext";

export const OauthLoading = () => {
  let code = window.location.href.split("?")[1];
  const history = useHistory();
  const { refetch } = useContext(CurrentUser);

  useEffect(() => {
    (async () => {
      try {
        const result = await axios.post(
          `http://localhost:4000/users/github/oauth/${code}`
        );
        if (result.data.access_token) {
          localStorage.setItem("token", result.data.access_token);
          if (refetch !== null) {
            refetch();
          }
          history.push("/");
        }
      } catch (e) {
        alert(e.message);
      }
    })();
  }, []);
  return (
    <div className="w-screen h-screen grid place-items-center">
      <h2 className="text-4xl">Redirecting Please Wait ...</h2>
    </div>
  );
};
