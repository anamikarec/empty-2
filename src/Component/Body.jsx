// import useContext from "react";

// import {AppContext} from "../Context/ApplicationContextProvider"

// const Body = () => {
// const [isAuth] = useContext(AppContext);
// if(isAuth) {
//   return (
//     <>
//     <div style={{color:"red",background:"yellow"}}>
//     <div>Welcome back to site!</div>
//     <div>We are here to serve you.</div>
//     </div>
//     </>
//   )
// }
// else {
//   return (
//     <div>
//       <h3>Please login to continue with the site</h3>
//     </div>
//   );
// }
// }

// export default Body;

import { useContext } from "react";
import { AppContext } from "../Context/ApplicationContextProvider";

const Body = () => {
  const [isAuth] = useContext(AppContext);

  if (isAuth) {
    return (
      <>
        <div>
          <h1>Welcome back to Site!!</h1>
        </div>
      </>
    );
  } else {
    return (
      <div>
        <h3>Please login to continue with the site</h3>
      </div>
    );
  }
};
export default Body;
