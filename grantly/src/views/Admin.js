import React, { useState } from "react";
import GrantList from "../components/grants/GrantList";
import Filters from "../components/Filters";
import TuneIcon from "@material-ui/icons/Tune";

import GrantShowcase from "../components/grants/GrantShowcase";
import SuggestionList from "../components/SuggestionList"
// import MobileTabs from "../components/mobile/MobileTabs";
// import SearchBar from "../components/SearchBar";
import Grid from "@material-ui/core/Grid";
// import Navbar from "../components/Navbar";
// import Media from "react-media";
// import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
// import MobileFilters from "../components/mobile/MobileFilters";
import { adminStyles } from "../styles/adminStyles";


// const useStyles = makeStyles(theme => ({
//   content: {
//     flexGrow: 1,
//     padding: theme.spacing(3)
//   },
//   gridContainer: {
//     flexWrap: "nowrap"
//   },
//   gridItem: {
//     padding: 30
//   },
//   root: {
//     display: "flex"
//   },
//   toolbar: theme.mixins.toolbar
// }));

const Admin = props => {
  // const [isOpen, setIsOpen] = useState(false);
  //Show filters
  const [open, setOpen] = useState();
  // const toggleDrawer = open => event => {
  //   console.log("toggle");
  //   if (
  //     event &&
  //     (event.key === "Tab" || event.key === "Shift")

  //   setIsOpen(!isOpen);
  // };

  const toggleFilters = () => {
    setOpen(!open);
  };
  const classes = adminStyles();

  return (
    <div>
      <Grid
        container
        direction="row"
        justify="space-between"
        className={classes.gridContainer}
      >
        <Grid item xs={6} md={3} className={classes.grantList} >
          <GrantList inAdmin={true} history={props.history} />
        </Grid>

        <Grid item xs={6} className={classes.gridItem}>
          <GrantShowcase inAdmin={true} history={props.history} />
          <SuggestionList />

        </Grid>
        <Grid item xs={2}>
          <TuneIcon
            className={`${classes.filterIcon} ${open &&
              classes.filterIconSelected}`}
            onClick={toggleFilters}
          ></TuneIcon>
          <div
            className={`${classes.filters} ${
              open ? classes.showFilters : classes.hideFilters
            }`}
          >
            <Filters inAdmin={true} location={props.location.pathname} />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Admin;
