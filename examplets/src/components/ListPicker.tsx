import * as ListPicker from "./ListPickerComponent";
import * as React from "react";

export interface ListPickerProps {
  name: string;
  data: string[];
  isMulty?: boolean;
  title?: string;
  label?: string;
  pageBreak?: number;
  [x: string]: any;
}

export default function ListPickerWrapper({ ...props }: ListPickerProps) {
  return <ListPicker.default {...props} />;
}
