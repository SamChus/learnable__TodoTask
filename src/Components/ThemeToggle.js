import { ThemeContext } from "../Contexts/ThemeContext";
import { useContext } from "react";

const ThemeToggle = ({mode}) => {
    const {toggleTheme} = useContext(ThemeContext)
    return (
        <img src={`./img/icon${mode}.svg`} alt="" onClick={toggleTheme}/>
    );
}
 
export default ThemeToggle;