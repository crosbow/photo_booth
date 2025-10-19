import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./Layout";
import {
  Create,
  Edit,
  Home,
  Login,
  PostDetails,
  Profile,
  Register,
} from "./pages";
import PrivetRoute from "./routes/PrivetRoute";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<PrivetRoute />}>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/create" element={<Create />} />
            <Route path="/edit" element={<Edit />} />
            <Route path="/post/:postId" element={<PostDetails />} />
          </Route>
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
