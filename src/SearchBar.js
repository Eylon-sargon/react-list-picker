import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles(theme => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 400
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1
  },
  iconButton: {
    padding: 10
  },
  divider: {
    height: 28,
    margin: 4
  }
}));

function SearchBar(props) {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <IconButton className={classes.iconButton} aria-label="menu">
        <MenuIcon />
      </IconButton>
      <InputBase
        className={classes.input}
        placeholder="Search Items"
        inputProps={{ "aria-label": "seach items" }}
        onChange={event => this.props.onSearchChange(event.target.value)}
      />
      <Divider className={classes.divider} orientation="vertical" />

      <IconButton className={classes.iconButton} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}

SearchBar.propTypes = {
  onSearchChange: PropTypes.func.isRequired
};

export default SearchBar;
