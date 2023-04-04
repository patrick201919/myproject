import jwtDecode from "jwt-decode";

export const decodedId = () => {
  const token = localStorage.getItem("token");
  if (token) {
    const decodedToken = jwtDecode(token);
    const userIdtoken = decodedToken.data;
    return userIdtoken;
  }
};
