// Dependencies
import React from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Moment from "react-moment";
import moment from "moment";

// Objects
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import BookmarkIcon from "@material-ui/icons/Bookmark";

// =========== STYLES ===========
const useStyles = makeStyles(theme => ({
  showcaseCard: {
    textAlign: "left",
    padding: "5px",
    borderTop: "#3DB8B3 5px solid",
    height: "600px",
    marginTop: "8px",
    [theme.breakpoints.down("sm")]: {
      position: "initial",
      width: "100%",
      margin: 0
    }
  },
  topContent: {
    margin: "20px"
  },
  grantInfo: {
    height: "75%",
    padding: "0 20px"
  },
  showcaseSpan: {
    fontWeight: "bold"
  },
  showcaseDetails: {},
  applyButton: {
    color: "#fff"
  }
}));

const GrantShowcase = props => {
  const classes = useStyles();

  console.log("GrantShowcase props", props);
  function formatNumbers(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const deadline = props.grant.most_recent_application_due_date ? (
    <Moment format={"MMMM Do YYYY"}>
      {props.grant.most_recent_application_due_date}
    </Moment>
  ) : (
    <div>See website for details</div>
  );

  const momentDeadline =
    props.grant.most_recent_application_due_date &&
    " or in about " +
      moment(props.grant.most_recent_application_due_date).fromNow();

  console.log("moment test", momentDeadline);
  // console.log("GrantShowcase props", props);

  if (props.isFetching) {
    return <div></div>;
  }

  return (
    <Card className={classes.showcaseCard}>
      {/* ================= Bookmark Icon ================= */}
      <Grid
        container
        direction="row"
        justify="flex-end"
        alignItems="flex-start"
      >
        <Grid item>
          <BookmarkIcon></BookmarkIcon>
        </Grid>
      </Grid>
      {/* ================= Top container ================= */}
      <Grid
        container
        direction="row"
        justify="space-evenly"
        alignItems="center"
        className={classes.topContent}
      >
        <Grid item>
          <h2>{props.grant.competition_name}</h2>
        </Grid>
        <Grid item>
          <Button
            className={classes.applyButton}
            variant="contained"
            color="primary"
          >
            Apply to Grant
          </Button>
        </Grid>
      </Grid>
      {/* ================= Main content ================= */}
      <Grid
        container
        direction="column"
        justify="space-around"
        alignItems="flex-start"
        className={classes.grantInfo}
      >
        <Grid item className={classes.showcaseDetails}>
          <span className={classes.showcaseSpan}>What it is: </span>{" "}
          {props.grant.amount
            ? props.grant.amount_notes
            : "See website for details"}
        </Grid>
        <Grid item className={classes.showcaseDetails}>
          <span className={classes.showcaseSpan}>Deadline: </span>
          {deadline}
          {momentDeadline}
        </Grid>
        <Grid item className={classes.showcaseDetails}>
          <span className={classes.showcaseSpan}>
            This grant is in the areas of:{" "}
          </span>
          {props.grant.domain_areas}
        </Grid>
        <Grid item className={classes.showcaseDetails}>
          <span className={classes.showcaseSpan}>Focus Area: </span>
          {props.grant.area_focus}
        </Grid>
        <Grid item className={classes.showcaseDetails}>
          <span className={classes.showcaseSpan}>Region: </span>
          {props.grant.geographic_region}
        </Grid>
        <Grid item className={classes.showcaseDetails}>
          <span className={classes.showcaseSpan}>Sponsored by: </span>
          {props.grant.sponsoring_entity}
        </Grid>
        <Grid item className={classes.showcaseDetails}>
          <span className={classes.showcaseSpan}>Notes: </span>
          {props.grant.notes}
        </Grid>
      </Grid>
    </Card>
  );
};

const mapStateToProps = state => {
  // console.log("GrantShowcase mapStateToProps state", state);
  return {
    grant: state.grantShowcase
  };
};

export default connect(
  mapStateToProps,
  {}
)(GrantShowcase);
