import jwt_decode from "jwt-decode";

/**
 *
 * @returns true if the token exists and is valid
 * @returns false if token is missing or is expired
 */
export function isTokenValid() {
  let token = localStorage.getItem("token");

  if (token) {
    let now = new Date().getTime();
    let decoded: any = jwt_decode(token);
    let isAuth = now < decoded.exp * 1000;
    return isAuth;
  } else {
    return false;
  }
}
