import { Route, Routes } from "react-router-dom";
import Homepage from "../pages/Homepage";
import Inventorypage from "../pages/Inventory";
import Loginpage from "../pages/Loginpage";

export default function AllRoutes(){

    return<Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/login" element={<Loginpage />}></Route>
        <Route path="/inv" element={<Inventorypage />}></Route>
    </Routes>
}