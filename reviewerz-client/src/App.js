import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage";
import Login from "./components/Login";
import Signup from "./components/Signup";
import AdminLogin from "./components/AdminLogin";
import Navbar from "./components/Navbar";
import { AuthProvider } from "./context/AuthContext";
import DashboardTemp from "./components/dashboard/DashboardTemp";
import PrivateRoute from "./components/private component/PrivateRoute";
import AdminDashboard from "./components/dashboard/AdminDashboard";
import AddBook from "./components/dashboard/AddBook";
import ShowBook from "./components/ShowBook";
import Editbook from "./components/dashboard/Editbook";
// import PrivateComponent from "./components/private component/PrivateRoute";
// import { AuthProvider } from "../context/AuthContext";
// AuthProvider

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route element={<PrivateRoute />}>
            <Route path="/dashboard" element={<DashboardTemp />} />
          </Route>
          <Route path="/admindashboard" element={<AdminDashboard />} />
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/adminlogin" element={<AdminLogin />} />
          <Route path="/addbook" element={<AddBook />} />
          <Route path="/editbook/:id" element={<Editbook />} />

          <Route path="/showbook/:id" element={<ShowBook />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
