// import { useContext } from "react";

// import {AppContext} from "../Context/ApplicationContextProvider"

// const Header = () => {
//   const [isAuth,setIsAuth] = useContext(AppContext);

//   return (
//     <>
//     <div>
//     <div>About</div>
//     <div>Home</div>
//     <div>Carrier</div>
//     <div>Mission</div>
//     {
//       isAuth ? (<button onClick={()=>setIsAuth(false)}>SIGN OUT</button>):(<button onClick={()=>setIsAuth(true)}>SIGN IN</button>)
//     }
//     </div>
//     </>
//   )
// }

// export default Header;

import { useContext } from "react";
import { AppContext } from "../Context/ApplicationContextProvider";
import { ThemeContext } from "../Context/ThemeProvider";
const Header = () => {
  const [isAuth, setIsAuth] = useContext(AppContext);
  const [{ theme, themeData }, toggleTheme] = useContext(ThemeContext);
  const currentTheme = themeData[theme];
  return (
    <>
      <div
        style={{
          display: "flex",
          gap: "2rem",
          justifyContent: "center",
          border: "1px solid grey",
          padding: "20px",
          // background: "whitesmoke"
          color: currentTheme.color,
          backgroundColor: currentTheme.background
        }}
      >
        <div
          style={{
            border: "1px solid black",
            padding: "5px",
            borderRadius: "5px",
            background: "black",
            color: "white"
          }}
        >
          About
        </div>
        <div
          style={{
            border: "1px solid black",
            padding: "5px",
            borderRadius: "5px",
            background: "black",
            color: "white"
          }}
        >
          Home
        </div>
        <div
          style={{
            border: "1px solid black",
            padding: "5px",
            borderRadius: "5px",
            background: "black",
            color: "white"
          }}
        >
          Career
        </div>
        <div
          style={{
            border: "1px solid black",
            padding: "5px",
            borderRadius: "5px",
            background: "black",
            color: "white"
          }}
        >
          Our Mission
        </div>
        <div
          style={{
            border: "1px solid black",
            padding: "5px",
            borderRadius: "5px",
            background: "black",
            color: "white"
          }}
        >
          {isAuth ? (
            <button
              style={{ border: "none", background: "black", color: "white" }}
              onClick={() => setIsAuth(false)}
            >
              SIGN OUT
            </button>
          ) : (
            <button
              style={{ border: "none", background: "black", color: "white" }}
              onClick={() => setIsAuth(true)}
            >
              SIGN IN
            </button>
          )}
        </div>
        <div>
          Switch to {theme === "light" ? "dark" : "light"} Mode
          <label className="themeBox">
            <input type="checkbox" onChange={toggleTheme} />
            <span className="themeSlider"></span>
          </label>
        </div>
      </div>
    </>
  );
};

export default Header;
