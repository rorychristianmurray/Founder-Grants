// Dependencies
import React, { useState } from "react";
import { connect } from "react-redux";

// Objects
import { selectGrant } from "../../actions";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import BookmarkIcon from "@material-ui/icons/Bookmark";

// Styles
import "../../App.scss";

const Grant = props => {
  console.log("Grant props", props);

  const selectGrant = () => {
    props.selectGrant(props.grant);
  };
  return (
    <Container className="grant-card">
      <Grid container justify="flex-end">
        <Grid item>
          <BookmarkIcon className="bookmark" />
        </Grid>
      </Grid>
      <h3>{props.grant.competition_name}</h3>
      <Grid container direction="column">
        <div item>Deadline</div>
        <div item>{props.grant.most_recent_application_due_date}</div>
      </Grid>
      <Grid container direction="column">
        <div item>Amount</div>
        <div item>${props.grant.amount}</div>
      </Grid>
      <Container maxWidth="sm">
        <Button variant="contained" color="default" onClick={selectGrant}>
          Select
        </Button>
      </Container>
    </Container>
  );
};

export default connect(
  null,
  { selectGrant }
)(Grant);