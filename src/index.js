import { GoogleOAuthProvider } from "@react-oauth/google";
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <GoogleOAuthProvider clientId="545338060806-ljt631iluu7t9g696o6s4ekjmqvtb4lf.apps.googleusercontent.com">
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </GoogleOAuthProvider>
);
