import React from "react";
import Slider from "@material-ui/core/Slider";
import { withStyles } from "@material-ui/core";

const EnhancedSlider = withStyles({
  root: {
    height: 4
  }
})(Slider);

export default EnhancedSlider;
