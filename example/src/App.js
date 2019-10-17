import React from "react";
import ListPickerField from "./ChipInput";
import { Form } from "react-final-form";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import arrayMutators from "final-form-arrays";

const myOptions = ["Meat Lover", "Veggie Heaven", "Hawaii-5-0", "Inferno"];

let output = [];

const onSubmit = values => {
  output = values.crazyList;
};

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
          ...arrayMutators // super important to include!!!
        }}
        render={({ handleSubmit, ...rest }) => (
          <form onSubmit={handleSubmit} style={{ padding: "50px" }}>
            <ListPickerField
              name="crazyList"
              data={myOptions}
              isMulty
              title="My crazy list"
              buttonText="React List Picker"
            />
            <hr />
            <button type="submit">Submit</button>
            {output.map(val => (
              <h6>{val}</h6>
            ))}
          </form>
        )}
      />
    </MuiThemeProvider>
  );
}

export default App;
