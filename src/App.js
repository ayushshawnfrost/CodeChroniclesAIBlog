import Landing from "./app/page/Landing";
import CreateBlog from "./app/page/CreateBlog";
import "./App.css";
import { Amplify } from "aws-amplify";
import React from "react";
import ProtectedRoutes from "./components/ProtectedRoutes";
import "@aws-amplify/ui-react/styles.css";
import { Routes, Route } from "react-router-dom";
import awsExports from "./aws-exports";
Amplify.configure(awsExports);

function App() {
  return (
    <div className="font-inter antialiased bg-gray-900 text-gray-200 tracking-tight">
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/create" element={<CreateBlog />} />
        </Route>
      </Routes>
      <header className="App-header"></header>
    </div>
  );
}

export default App;
