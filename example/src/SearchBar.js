import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1),
    paddingLeft: theme.spacing(3),
    minWidth: 350
  }
}));

function SearchBar(props) {
  const classes = useStyles();

  return (
    <div className={classes.margin}>
      <Grid container spacing={1} alignItems="flex-end">
        <Grid item>
          <SearchIcon />
        </Grid>
        <Grid item>
          <TextField
            id="input-with-icon-grid"
            label="Search Items"
            onChange={event => props.onSearchChange(event.target.value)}
          />
        </Grid>
      </Grid>
    </div>
  );
}

SearchBar.propTypes = {
  onSearchChange: PropTypes.func.isRequired
};

export default SearchBar;
