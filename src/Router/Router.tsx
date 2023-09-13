import { Route, Routes } from "react-router-dom";
import LoginPage from "../components/pages/LoginPage/LoginPage";
import PrivateRoute from "./PrivateRoute";
import UserTable from "../components/pages/UserPage/UserTable";
import UserPage from "../components/pages/UserPage/UserPage";
import Login from "../components/pages/LoginPage/LoginPage";
import HomePage from "../components/pages/HomePage";
import CreateImage from "../components/pages/CreateImage";
import UpdateImage from "../components/pages/UpdateImage";
import UserPosts from "../components/pages/UserPage/UserPosts";

/**
 * Router component renders a route switch with all available pages
 */

const Router = () => {
  //const { checkRole } = useContext(ActiveUserContext);

  /** navigate to different "home"-locations depending on Role the user have */

  return (
    <Routes>
      <Route path={"/"} element={<HomePage />} />
      <Route path={"/Login"} element={<LoginPage/>} />
      <Route path={"/add"} element={<CreateImage/>} />
      <Route path={"/editimage/:imageId"} element={<UpdateImage/>} />
      <Route path={"/users/:userId/posts"} element={<UserPosts/>} />

      <Route
        path={"/users"}
        element={<PrivateRoute authorities={[]} element={<UserTable />} />}
      />
      
      <Route
        path="/useredit"
        element={
          <PrivateRoute authorities={[]} element={<UserPage />}></PrivateRoute>
        }
      />
      <Route
        path="/useredit/:userId"
        element={
          <PrivateRoute authorities={[]} element={<UserPage />}></PrivateRoute>
        }
      />

      <Route path="*" element={<div>Not Found</div>} />
    </Routes>
  );
};

export default Router;
