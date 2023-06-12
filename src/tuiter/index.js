import { Routes, Route } from "react-router";
import Nav from "../nav";
import NavigationSidebar from "./navigation-sidebar";
import WhoToFollowList from "./who-to-follow-list";

import HomeScreen from "./home";
import ExploreScreen from "./explore";
import BookmarksScreen from "./bookmarks";
import ProfileScreen from "./profile";

import whoReducer from "./reducers/who-reducer";
import tuitsReducer from "./reducers/tuits-reducer";
import exploreReducer from "./reducers/explore-reducer"
import { configureStore } from '@reduxjs/toolkit';
import {Provider} from "react-redux";
const store = configureStore(
  {reducer: 
    {who: whoReducer,
    tuits:tuitsReducer,
  exploreTuits: exploreReducer}

});

function Tuiter() {
    return (
      <Provider store={store}>
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

      </Provider>
      
      );
      }
export default Tuiter;
