import React from "react";
import { createRoot } from 'react-dom/client';
import ReactDOM from "react-dom";
import FormResa from "./Resa";
import 'bootstrap/dist/css/bootstrap.css';
import './css/custom.css';


const container = document.getElementById('app-resa');
const root = createRoot(container);
root.render(<FormResa />);