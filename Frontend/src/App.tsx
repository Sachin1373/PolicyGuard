import { AuthLayouts } from "./layouts/AuthLayouts"
import "./index.css";
import { createTheme, ThemeProvider } from "@mui/material";

 const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: 'Inter',
      textTransform: 'none',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

function App() {

  return (
    <ThemeProvider theme={theme}>
      <AuthLayouts/>
    </ThemeProvider>
  )
}

export default App
