import { makeStyles } from "@material-ui/core/styles";

// We have styles in two different main places, could be combined or cleaned up
// Using the makeStyles function to apply CSS in JS styles

export const dialogStyles = makeStyles(theme => ({
  applyButton: {
    color: "#fff"
  },
  formField: {
    width: 500
  },
  header: {
    background: "#3CBBB1"
  },
  headerText: {
    color: "#ffffff"
  },
  btn: {
    marginTop: 20,
    marginBottom: 20,
    marginRight: 20,
    marginLeft: 20,
    // paddingTop: 20,
    // paddingBottom: 20,
    paddingRight: 50,
    paddingLeft: 50
  }
}));

export const editGrantStyles = makeStyles(theme => ({
  editIcon: {},
  editButton: {
    alignSelf: "flex-start",
    minWidth: "24px"
  }
}));
