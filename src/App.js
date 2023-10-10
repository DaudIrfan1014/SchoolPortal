import "./App.css";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import AddStudent from "./pages/addStudent";
import AddTeacher from "./pages/addTeacher";
import Search from "./pages/Search";
import FeePending from "./pages/Feepending";
import Salary from "./pages/Salary";
import PrivateRoutes from "./Routes/PrivateRoutes";
import Message from "./pages/message";
import LoginPage from "./pages/loginAdmin";
import PublicRoutes from "./Routes/PublicRoutes";
import Userlogin from "./pages/UserLogin";
import UserDetails from "./pages/userDetails";
import PrivateRoutesUser from "./Routes/PrivateRoutesUser";
import PublicRoutesUser from "./Routes/PublicRoutesUser";
import TeachDetails from "./pages/TeachDetails";
import Teachlogin from "./pages/TeachLogin";
import PrivateRoutesTeach from "./Routes/PrivateRoutesTeach";
import PublicRoutesTeach from "./Routes/PublicRoutesTeach";
function App() {
  return (
    <>
      <Routes>
       
          <Route path="/" element={<Userlogin />} />
        
        <Route element={<PublicRoutes />}>
          <Route path="/Admin" element={<LoginPage />} />
        </Route>
        <Route element={<PrivateRoutesUser />}>
          <Route path="/userDetails" element={<UserDetails />} />
        </Route>
        <Route element={<PublicRoutesTeach />}>
          <Route path="/TeachLogin" element={<Teachlogin />} />
        </Route>
        <Route element={<PrivateRoutesTeach />}>
          <Route path="/TeachDetails" element={<TeachDetails />} />
        </Route>

        <Route element={<PrivateRoutes />}>
          <Route element={<Dashboard />} path="/dashboard" />
          <Route path="/AddStudent" element={<AddStudent />} />
          <Route path="/AddTeacher" element={<AddTeacher />} />
          <Route path="/Search" element={<Search />} />
          <Route path="/feePending" element={<FeePending />} />
          <Route path="/Salary" element={<Salary />} />
          <Route path="/message" element={<Message />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
