import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import Chip from "@material-ui/core/Chip";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Typography from "@material-ui/core/Typography";
import ChipInput from "material-ui-chip-input";
import { FieldArray } from "react-final-form-arrays";
import AddCircleRoundedIcon from "@material-ui/icons/AddCircleRounded";
import styles from "./styles";
import SearchBar from "./SearchBar";

class ListPickerComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: [],
      isOpen: false,
      currentPage: 0,
      searchValue: ""
    };
  }

  /**
   * Change popup state (open or close)
   * @param isOpen : boolean
   */
  setPopup = isOpen => {
    console.log(this.props.fields.value, " props");
    console.log(this.state.selected, " state");
    if (!this.state.isOpen && isOpen) {
      this.setState({
        selected: this.props.fields.value || []
      });
    }
    this.setState({
      isOpen
    });
  };

  /**
   * Checks if key is already selected
   * @param key : string
   */
  isSelected = key =>
    this.state.selected.filter(data => data === key).length !== 0;

  /**
   * Handles checkbox event and adds / removes key from selected state
   * @param key : string
   */
  handleCheckboxChange = key => event => {
    if (this.props.isMulty) {
      this.setState({
        selected: event.target.checked
          ? [...this.state.selected, key]
          : this.state.selected.filter(data => data !== key)
      });
    } else {
      this.setState({
        selected: this.isSelected(key) ? [] : [key]
      });
    }
  };

  /**
   * Handle chip delete event
   * @param chip : string
   */
  handleChipDelete = chip =>
    this.setState({
      selected: this.state.selected.filter(data => data !== chip)
    });

  /**
   * Add all selected items to the form fields value
   * then sends all the selected values to the Final Form parent container
   */
  handleSubmit = () => {
    if (this.props.fields.value) {
      for (let index = 0; index < this.props.fields.value.length; index++) {
        this.props.fields.remove(0);
      }
    }
    this.state.selected.forEach(key => {
      this.props.fields.push(key);
    });

    this.setState({
      isOpen: false
    });
    //  this.state.selected.foreach(key => console.log(key));
  };

  /**
   * Clear all selected values
   */
  handleReset = () => {
    if (this.props.fields.value) {
      for (let i = 0; i < this.props.fields.value.length; i++) {
        this.props.fields.remove(0);
      }
    }

    this.setState({
      selected: [],
      isOpen: true
    });
  };

  /**
   * Update search state
   * @param searchValue : string | user search input
   */
  onSearchChange = searchValue =>
    this.setState({
      searchValue
    });

  /**
   * Filters values displayed to the user (checkboxes)
   * First filters by search, and the applies pagnation filtering
   * @param data : string | all data
   * @param pageBreak : number | items allowed per page
   */
  filterValues = (data, pageBreak) => {
    return data
      .filter(
        key =>
          key.toLowerCase().includes(this.state.searchValue.toLowerCase()) ||
          this.state.searchValue === ""
      )
      .filter((x, i) => {
        if (!pageBreak) {
          return true;
        }

        if (
          i >= pageBreak * this.state.currentPage &&
          i <= pageBreak * this.state.currentPage + pageBreak - 1
        ) {
          return true;
        }

        return false;
      });
  };

  /**
   * Returns the length of data after search filtering
   * @param data : string | all data
   */
  currentDataLength = data =>
    data.filter(
      key =>
        key.toLowerCase().includes(this.state.searchValue.toLowerCase()) ||
        this.state.searchValue === ""
    ).length;

  render() {
    const {
      classes,
      data,
      title = "Select fields",
      buttonText = "Select"
    } = this.props;

    let { pageBreak = 0 } = this.props;

    if (data.length >= 50) {
      pageBreak = 10;
    }

    const totalPages = pageBreak
      ? Math.ceil(this.currentDataLength(data) / pageBreak)
      : 1;

    return (
      <React.Fragment>
        {/* Popup Initiator */}
        <div>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            endIcon={<AddCircleRoundedIcon />}
            onClick={() => this.setPopup(true)}
            style={{ marginRight: "10px" }}
          >
            {buttonText}
          </Button>

          {this.props.fields.value &&
            this.props.fields.value.map(val => (
              <Chip
                label={val}
                color="secondary"
                clickable
                style={{ margin: "0 5px" }}
              />
            ))}
        </div>

        {/* Content */}
        <Dialog
          open={this.state.isOpen}
          aria-labelledby="form-dialog-title"
          fullWidth="md"
        >
          <DialogTitle id="form-dialog-title">{title}</DialogTitle>
          <SearchBar onSearchChange={this.onSearchChange} />

          <DialogContent>
            {/* Checkbox list */}
            <FormGroup className={classes.itemsWrapper}>
              <FormControl component="fieldset" className={classes.formControl}>
                {this.filterValues(data, pageBreak).map(key => (
                  <FormControlLabel
                    control={
                      <Checkbox
                        color="primary"
                        value={key}
                        onChange={this.handleCheckboxChange(key)}
                        checked={this.isSelected(key)}
                      />
                    }
                    label={key}
                  />
                ))}
              </FormControl>
            </FormGroup>
            <FormGroup>
              {/* Chips */}
              <ChipInput
                value={this.state.selected}
                onDelete={chip => this.handleChipDelete(chip)}
                fullWidth
              />
            </FormGroup>
          </DialogContent>

          <DialogActions>
            <Button
              disabled={!pageBreak || this.state.currentPage === 0}
              onClick={() =>
                this.setState({
                  currentPage: this.state.currentPage - 1
                })
              }
            >
              {"<"}
            </Button>
            <Typography>
              {this.state.currentPage + 1} of {totalPages}
            </Typography>
            <Button
              disabled={!pageBreak || this.state.currentPage >= totalPages - 1}
              onClick={() =>
                this.setState({
                  currentPage: this.state.currentPage + 1
                })
              }
            >
              {">"}
            </Button>
          </DialogActions>

          <DialogActions>
            <Button
              onClick={() => this.setState({ isOpen: false })}
              color="default"
            >
              Close
            </Button>
            <Button onClick={this.handleReset} color="default">
              Clear
            </Button>
            <Button
              onClick={this.handleSubmit}
              variant="contained"
              color="primary"
            >
              Save
            </Button>
          </DialogActions>
        </Dialog>
      </React.Fragment>
    );
  }
}

ListPickerComponent.propTypes = {
  name: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(PropTypes.string).isRequired,
  onSubmit: PropTypes.func,
  isMulty: PropTypes.bool,
  fields: PropTypes.any,
  title: PropTypes.string,
  buttonText: PropTypes.string,
  pageBreak: PropTypes.number
};

function ListPicker({ ...restProps }) {
  return (
    <FieldArray
      component={withStyles(styles)(ListPickerComponent)}
      {...restProps}
    />
  );
}

ListPicker.propTypes = {
  name: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(PropTypes.string).isRequired,
  isMulty: PropTypes.bool,
  title: PropTypes.string,
  buttonText: PropTypes.string,
  pageBreak: PropTypes.number
};

export default ListPicker;
