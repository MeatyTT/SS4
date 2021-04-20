import Navbar from "./NavBar.js";
import ComicContainer from "./Comic.js";
import ComicList from "./ComicList.js";

import data from "../data/data.js";

let $comicList = document.getElementById('my-list');
$comicList.setAttribute('comic',JSON.stringify(data));