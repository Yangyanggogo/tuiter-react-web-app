import { Routes, Route } from "react-router";
import Nav from "../nav";
import NavigationSidebar from "./navigation-sidebar";
import WhoToFollowList from "./who-to-follow-list";

import HomeScreen from "./home";
import ExploreScreen from "./explore";
import BookmarksScreen from "./bookmarks";
import ProfileScreen from "./profile";
function Tuiter() {
    return (
      <div>
           <Nav />
          <div className="row">
            <div className="col-2 col-md-2 col-lg-1 col-xl-2">
              <NavigationSidebar />
            </div>
            <div className="col-7">
              <Routes>
              <Route path="/home" element={<HomeScreen />} />
              <Route path="/explore" element={<ExploreScreen />} />
              <Route path="/bookmarks" element={<BookmarksScreen />} />
              <Route path="/profile" element={<ProfileScreen />} />
              </Routes>
            </div>
            <div className="col-3">
              <WhoToFollowList/> 

            </div>
          </div>
        </div>
      );
      }
export default Tuiter;
