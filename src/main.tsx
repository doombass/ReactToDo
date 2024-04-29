import { MyApp } from "./myapp";
import { createRoot } from 'react-dom/client';
import React from "react";

const app = document.getElementById("ToDoApp");
if(!app){
    throw new Error("App root not found")
}
const root = createRoot(app);
root.render(<React.StrictMode><MyApp></MyApp></React.StrictMode>)