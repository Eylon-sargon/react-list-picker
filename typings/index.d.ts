import * as React from "react";

export interface ListPickerProps {
  name: string;
  data: string[];
  isMulty?: boolean;
  title?: string;
  buttonText?: string;
  [x: string | number | boolean | undefined]: any;
}

declare const ListPicker: React.ComponentType<ListPickerProps>;
export default Index;
