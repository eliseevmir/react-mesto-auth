import { useReducer } from "react";
import Routes from "../Routes";
import Header from "./Header";
import Footer from "./Footer";

import { CurrentUserContext, defaultUserState } from "../context/CurrentUserContext";
import reducer from "../context/reducer";

function App() {

    const [state, dispath] = useReducer(reducer, defaultUserState)

  return (

    <CurrentUserContext.Provider value={{state, dispath}}>
      <Header />
      <Routes />
      <Footer />

      
    </CurrentUserContext.Provider>
  );
}

export default App;
