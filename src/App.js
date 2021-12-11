import "./styles.css";
import Body from "./Component/Body";
import Header from "./Component/Header";
import { Login } from "./Component/Login";
import { ThemeContext } from "./Context/ThemeProvider";
import { useContext } from "react";
export default function App() {
  const [{ theme, themeData }] = useContext(ThemeContext);
  const currentTheme = themeData[theme];

  return (
    <div
      className="App"
      style={{
        color: currentTheme.color,
        backgroundColor: currentTheme.background
      }}
    >
      <h2>React Auth Context</h2>
      <Header />
      <Body />
      <Login />
    </div>
  );
}
