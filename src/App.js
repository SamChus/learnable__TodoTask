import Home from "./Pages/Home";
import GlobalStyles from "./Components/styles/Global";
import ThemeContextProvider from "./Contexts/ThemeContext";

function App() {
  return (
    <ThemeContextProvider>
      <>
        <GlobalStyles />
        <Home />
      </>
    </ThemeContextProvider>
  );
}

export default App;
