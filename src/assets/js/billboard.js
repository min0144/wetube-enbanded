const API = "https://api.coinpaprika.com/v1/tickers";

const songName = document.getElementById("jsSongName");
const songTitle = document.getElementById("jsSongTitle");
const songArtist = document.getElementById("jsSongArtist");
const songCover = document.getElementById("jsSongCover");

const paintBillboard = (billboard) => {
  const {
    name,
    symbol,
    quotes: {
      USD: { price },
    },
  } = billboard;
  songName.textContent = `${name}`;
  songArtist.textContent = `${symbol}`;
  songTitle.textContent = `${price}`;
};

const paintBillboards = (billboards) => {
  const billboard = billboards[Math.floor(Math.random() * billboards.length)];
  paintBillboard(billboard);
};

const fetchBillboard = () => {
  fetch(API)
    .then((response) => response.json())
    .then((data) => {
      paintBillboards(data);
    });
};

fetchBillboard();

setInterval(fetchBillboard, 5000);
