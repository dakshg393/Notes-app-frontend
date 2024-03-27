import { Routes ,Route} from "react-router-dom";
import Homepage from "../pages/Homepage";
import SingnupPage from "../pages/SignupPage";
import Loginpage from "../pages/Loginpage";
import NotesPage from "../pages/NotesPage";
import PrivateRoute from "./PrivateRoute";

export default function AllRoutes(){
    return <Routes>
        
        <Route path="/" element={<Homepage/>}></Route>
        <Route path="/register" element={<SingnupPage/>}></Route>
        <Route path="/Login" element={<Loginpage/>}></Route>
        <Route path="/Notes" element={<PrivateRoute><NotesPage/></PrivateRoute>}></Route>

        
    </Routes>
}