import './style.css';
import displayData from './modules/loadData.js';
import addLike from './modules/addLike.js';
import displayLikes from './modules/viewLikes.js';
import popup from './modules/commentPopup.js';
import itemCounter from './modules/itemCounter.js';

const getData = async () => (await fetch('https://api.tvmaze.com/shows/169/seasons')).json();
const title = document.querySelector('.nav-links a:nth-child(1)');
