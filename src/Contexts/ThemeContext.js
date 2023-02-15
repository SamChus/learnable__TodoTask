import { createContext, useState } from "react";

export const ThemeContext = createContext()

const ThemeContextProvider = (props) => {
    const [themes, setThemes] = useState({
      light: {
        c1: '#FAFAFA',
        c2: '#E4E5F1',
        c3: '#D2D3DB',
        c4: '#9394A5',
        // c5: "#484B6A"
        c5: "#333"
      },
      dark: {
        c1: '#161722',
        c2: '#25273C',
        c3: '#CACDE8',
        c4: '#E4E5F1',
        // c5: "#777A92",
        c5: "#fff",
        c6: '#4D5066',
        c7: '#393A4C'
      },
      primary:{
        c1: '#3A7BFD',
        c2: 'linear-gradient(to left, #135058, #C058F3)'
      },
    
      mobile:"768px"
    })

    const [isLight, setLight] = useState(false)

    const toggleTheme = () => {
      setLight(!isLight)
    }

    return (  
        <ThemeContext.Provider value={{...themes, isLight, toggleTheme}}>
            {props.children}
        </ThemeContext.Provider>
    );
}
 
export default ThemeContextProvider;