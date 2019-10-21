import { Slider, withStyles } from "@material-ui/core";

const EnhancedSlider = withStyles({
  root: {
    height: 4
  }
})(Slider);

export default EnhancedSlider;
