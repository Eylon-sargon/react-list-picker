import React, { Component } from "react";
import { withStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import Checkbox from "@material-ui/core/Checkbox";
import ChipInput from "material-ui-chip-input";
import PropTypes from "prop-types";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { FieldArray } from "react-final-form-arrays";

const styles = theme =>
  !theme
    ? {
        divider: {
          margin: "20px 0"
        },
        formControl: {
          margin: "20px"
        },

        submit: {
          margin: "20px 0",
          width: "150px"
        }
      }
    : {
        divider: {
          margin: theme.spacing(2, 0)
        },
        formControl: {
          margin: theme.spacing(2)
        },

        submit: {
          margin: theme.spacing(2, 0),
          width: "150px"
        }
      };

class ListPickerComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: [],
      isOpen: false
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

  handleReset = () => {
    for (let i = 0; i < this.props.fields.length; i++) {
      this.props.fields.remove(i);
    }
    this.setState({
      selected: [],
      isOpen: true
    });
  };

  render() {
    const {
      classes,
      data,
      title = "Select fields",
      buttonText = "Select"
    } = this.props;

    return (
      <React.Fragment>
        {/* Popup Initiator*/}
        <Button
          variant="outlined"
          color="primary"
          onClick={() => this.setPopup(true)}
        >
          {buttonText}
        </Button>
        {/* Content */}

        <Dialog
          open={this.state.isOpen}
          aria-labelledby="form-dialog-title"
          fullWidth="md"
        >
          <DialogTitle id="form-dialog-title">{title}</DialogTitle>
          <DialogContent>
            <FormControl component="fieldset" className={classes.formControl}>
              {/* Checkbox list */}
              <FormGroup>
                {data.map(key => (
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
              </FormGroup>
              <FormHelperText>Selected:</FormHelperText>
              <FormGroup>
                {/* Chips */}
                <ChipInput
                  value={this.state.selected}
                  onDelete={chip => this.handleChipDelete(chip)}
                  fullWidth
                />
              </FormGroup>
            </FormControl>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleReset} color="primary">
              Reset
            </Button>
            <Button onClick={this.handleSubmit} color="primary">
              Save
            </Button>
          </DialogActions>
        </Dialog>
      </React.Fragment>
    );
  }
}

ListPickerComponent.propTypes = {
  data: PropTypes.arrayOf(PropTypes.string).isRequired,
  onSubmit: PropTypes.func,
  isMulty: PropTypes.bool,
  fields: PropTypes.any,
  title: PropTypes.string,
  buttonText: PropTypes.string
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
  buttonText: PropTypes.string
};

export default ListPicker;
