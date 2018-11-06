import React from 'react'
import { render } from 'react-dom'

// data 
// import data from './src/api.json';
//components
//import PlayList from "./src/playlist/components/playList.js";
import Home from '../pages/containers/Home'

const app = document.getElementById("app")

render(<Home />,app)