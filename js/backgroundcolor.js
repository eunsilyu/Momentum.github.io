const rightColors = [
  "#E4C9AB",
  "#CDE5E5",
  "#A1D9D8",
  "#EBA601",
  "#9FB433",
  "#F5F4EC",
  "#56638A",
  "#42BA78",
  "#FAC8CD",
  "#F3B918",
  "#BDE3F2",
  "#E0F2CE",
  "#BDF24B",
  "#D8F2A0",
  "#EDF25E",
  "#D9ABE6",
  "#D2B2F0",
  "#B7ACD9",
  "#B2B4F0",
  "#ABBCE6",
];

const leftColors = [
  "#F2DFEB",
  "#E4CEF2",
  "#856DA6",
  "#B8A0D9",
  "#A191D9",
  "#A5CDDA",
  "#F2C4D5",
  "#F2ACCD",
  "#FFC68F",
  "#F29472",
  "#F4E2EB",
  "#A8909C",
  "#F6F1D0",
  "#9FBDC1",
  "#93A5A8",
  "#FF540E",
  "#FF9002",
  "#FFCB26",
  "#B1D948",
  "#5FD03C",
];

const body = document.querySelector("body");

function colorChange() {
  const chooseRightColor = rightColors[Math.floor(Math.random() * rightColors.length)];
  const chooseLeftColor = leftColors[Math.floor(Math.random() * leftColors.length)];

  body.style.background = ` linear-gradient(to right, ${chooseRightColor}, ${chooseLeftColor})`;
}

colorChange();
setInterval(colorChange, 15000);