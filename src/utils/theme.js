import { extendTheme } from "@chakra-ui/react";

const colors = {
  primary: {
    100: "#EFFBFA",
    200: "#6EEEE3",
    300: "#4DE1D5",
    400: "#30D4C6",
    500: "#1AC2B4",
    600: "#13AFA2",
    700: "#0C9B94",
    800: "#088E85",
    900: "#026A63",
    950: "#c4c4c4"
  }
};

const customTheme = extendTheme({ colors });

export default customTheme;