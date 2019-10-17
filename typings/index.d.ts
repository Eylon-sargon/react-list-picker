import * as React from "react";

export interface ListPickerProps {
  name: string;
  data: string[];
  isMulty?: boolean;
  title?: string;
  buttonText?: string;
  pageBreak?: number;
  [x: string | number]: any;
}

declare const ListPicker: React.ComponentType<ListPickerProps>;
export default Index;
