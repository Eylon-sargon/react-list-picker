"use strict";
import React, { Component } from "react";
import ListPickerField from "./ChipInput";
import { Form, Field } from "react-final-form";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import arrayMutators from "final-form-arrays";

const myOptions = ["Meat Lover", "Veggie Heaven", "Hawaii-5-0", "Inferno"];

const onSubmit = values => console.log(values);

const theme = createMuiTheme({
  palette: {
    primary: { main: "#333" },
    secondary: { main: "#000" }
  },
  status: {
    danger: "orange"
  }
});

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Form
        onSubmit={onSubmit}
        mutators={{
          ...arrayMutators
        }}
        render={({ handleSubmit, ...rest }) => (
          <form onSubmit={handleSubmit}>
            <ListPickerField
              name="list"
              data={myOptions}
              isMulty
              title="Go crazty"
              buttonText="Click me nagha"
            />

            <button type="submit">Submit</button>
          </form>
        )}
      />
    </MuiThemeProvider>
  );
}

export default App;
