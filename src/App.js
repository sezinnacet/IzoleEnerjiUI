import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import DrawerAppBar from "./layout/Drawer";
import { useStoreProfile } from "./store/store";
import About from "./views/About/About";
import IsolationCalculation from "./views/Calculations/IsolationCalculation";
import Contact from "./views/Contact/Contact";
import Home from "./views/Home/Home";
import NotFound from "./views/NotFound";
import PremiumPage from "./views/PremiumPage/PremiumPage";
import SignInSide from "./views/SignIn/SignIn";
import SignUp from "./views/SignIn/SignUp";
export default function App() {
  const profile = useStoreProfile((state) => state.profile);

  return (
    <Router>
      <Routes>
        {!profile && <Route path="/login" element={<SignInSide />} />}
        {!profile && <Route path="/signup" element={<SignUp />} />}
        <Route
          path="*"
          element={
            <DrawerAppBar>
              <Routes>
                <Route
                  path="/smart-calculator"
                  element={<IsolationCalculation />}
                />

                <Route path="/about" element={<About />} />
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                {!profile?.userDetails?.isPremium && (
                  <Route path="/pricing" element={<PremiumPage />} />
                )}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </DrawerAppBar>
          }
        />
      </Routes>
    </Router>
  );
}
