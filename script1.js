const songs = [
  {
    name: "song1.mp3",
    title: "Song One",
    artist: "Artist A"
  },
  {
    name: "song2.mp3",
    title: "Song Two",
    artist: "Artist B"
  }
];

let songIndex = 0;

const audio = document.getElementById('audio');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const playBtn = document.getElementById('play');
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');
const progress = document.getElementById('progress');
const durationEl = document.getElementById('duration');
const currentTimeEl = document.getElementById('current-time');
const volume = document.getElementById('volume');
const playlist = document.getElementById('playlist');

function loadSong(song) {
  title