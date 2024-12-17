import * as __SNOWPACK_ENV__ from '../_snowpack/env.js';

import "./index.css.proxy.js";
import React, {useEffect} from "../_snowpack/pkg/react.js";
import RecipeTitle from "./RecipeTitle.js";
function App() {
  useEffect(() => {
    console.log("testting env", __SNOWPACK_ENV__.REACT_APP_BASEAPI_URL);
  }, []);
  return /* @__PURE__ */ React.createElement("article", null, /* @__PURE__ */ React.createElement("h1", null, "Recipe Manager"), /* @__PURE__ */ React.createElement(RecipeTitle, null));
}
export default App;
