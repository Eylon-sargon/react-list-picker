import Grid from "@material-ui/core/Grid";
import SearchIcon from "@material-ui/icons/Search";
import { makeStyles, Theme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import PropTypes from "prop-types";
import * as React from "react";

const useStyles = makeStyles((theme: Theme) => ({
  margin: {
    margin: theme.spacing(1),
    paddingLeft: theme.spacing(3),
    minWidth: 350
  }
}));

interface Props {
  onSearchChange(value: string): any;
}

function SearchBar(props: Props) {
  const classes = useStyles({});

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
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              props.onSearchChange(event.currentTarget.value)
            }
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
