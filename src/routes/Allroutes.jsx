import { Route, Routes } from "react-router-dom";
import Homepage from "../pages/Homepage";
import Inventorypage from "../pages/Inventory";
import Loginpage from "../pages/Loginpage";
import PrivateRoute from "./PrivateRoute";
import Reservepage from "../pages/Reserve";

export default function AllRoutes(){

    return<Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/login" element={<Loginpage />}></Route>
        <Route path="/inv" element={<PrivateRoute><Inventorypage /></PrivateRoute>}></Route>
        <Route path="/resv" element={<PrivateRoute><Reservepage /></PrivateRoute>}></Route>
    </Routes>
}