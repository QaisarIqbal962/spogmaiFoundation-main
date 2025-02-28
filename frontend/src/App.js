import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import {
  Home,
  ContactUs,
  Navbar,
  AboutUs,
  OurActivities,
  DisabledPeopleSupport,
  FreeRationDis,
  OrphanFamilySupport,
  PoorFamilySupport,
  Education,
  Gallery,
  PictureGallery,
  VideoGallery,
  FRDAlbum,
  OFSAlbum,
  PFSAlbum,
  DPSAlbum,
  ESAlbum,
  Footer,
  ScrollToTop,
  DonateNow,
  DonateFood,
  DonateMoney,
  SignIn,
  SignUp,
} from "./components";

import Messages from "./components/sideBar/contactMessage/Messages";
import Message from "./components/sideBar/contactMessage/Message";
import FoodMessages from "./components/sideBar/foodMessage/FoodMssgs";
import FoodMessage from "./components/sideBar/foodMessage/FoodMssg";

function App() {
  return (
 
          <Route
            path="/gallery/videogallery"
            exact
            element={<VideoGallery />}
          />
          <Route
            path="/gallery/freerationdistribution"
            exact
            element={<FRDAlbum />}
          />
          <Route
            path="/gallery/orphanfamilysupport"
            exact
            element={<OFSAlbum />}
          />
          <Route
            path="/gallery/poorfamilysupport"
            exact
            element={<PFSAlbum />}
          />
          <Route
            path="/gallery/disablepeopleusupport"
            exact
            element={<DPSAlbum />}
          />
          <Route path="/gallery/educationsupport" exact element={<ESAlbum />} />
          {/* Gallery components Rounting end */}

          {/* Donate Now  */}
          <Route path="/DonateNow" exact element={<DonateNow />} />
          <Route path="/DonateFood" exact element={<DonateFood />} />
          <Route path="/DonateMoney" exact element={<DonateMoney />} />
        </Route>
        {/* Donate Now End */}
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
