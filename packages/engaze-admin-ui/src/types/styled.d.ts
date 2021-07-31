/* eslint-disable @typescript-eslint/naming-convention */
import "styled-components";
import { ITheme } from "@engaze/common/src/assets/styles/styled-theme";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme extends ITheme {
    additional?: any;
  }
}
