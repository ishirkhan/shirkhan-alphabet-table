const BOUNDARY_SYMBOL = "/";
const HEMZE = "\u0626";
const URGHU = "`";
const FORMATMAEK = "'";
const table = [
  {
    uchar: "\u0626",
    uly: "x",
    khan: "x",
    volwes: false,
    punctuation: false
  },
  {
    uchar: "\u0627",
    uly: "a",
    khan: "a",
    volwes: true,
    punctuation: false
  },
  {
    uchar: "\u06D5",
    uly: "e",
    khan: "e",
    volwes: true,
    punctuation: false
  },
  {
    uchar: "\u06D0",
    uly: "\xEB",
    khan: "eh",
    volwes: true,
    punctuation: false
  },
  {
    uchar: "\u0649",
    uly: "i",
    khan: "i",
    volwes: true,
    punctuation: false
  },
  {
    uchar: "\u0648",
    uly: "o",
    khan: "o",
    volwes: true,
    punctuation: false
  },
  {
    uchar: "\u06C7",
    uly: "u",
    khan: "u",
    volwes: true,
    punctuation: false
  },
  {
    uchar: "\u06C6",
    uly: "\xF6",
    khan: "c",
    volwes: true,
    punctuation: false
  },
  {
    uchar: "\u06C8",
    uly: "\xFC",
    khan: "v",
    volwes: true,
    punctuation: false
  },
  {
    uchar: "\u0628",
    uly: "b",
    khan: "b",
    volwes: false,
    punctuation: false
  },
  {
    uchar: "\u067E",
    uly: "p",
    khan: "p",
    volwes: false,
    punctuation: false
  },
  {
    uchar: "\u062A",
    uly: "t",
    khan: "t",
    volwes: false,
    punctuation: false
  },
  {
    uchar: "\u062C",
    uly: "j",
    khan: "j",
    volwes: false,
    punctuation: false
  },
  {
    uchar: "\u0686",
    uly: "ch",
    khan: "ch",
    volwes: false,
    punctuation: false
  },
  {
    uchar: "\u062E",
    uly: "x",
    khan: "kh",
    volwes: false,
    punctuation: false
  },
  {
    uchar: "\u062F",
    uly: "d",
    khan: "d",
    volwes: false,
    punctuation: false
  },
  {
    uchar: "\u0631",
    uly: "r",
    khan: "r",
    volwes: false,
    punctuation: false
  },
  {
    uchar: "\u0632",
    uly: "z",
    khan: "z",
    volwes: false,
    punctuation: false
  },
  {
    uchar: "\u0698",
    uly: "zh",
    khan: "zh",
    volwes: false,
    punctuation: false
  },
  {
    uchar: "\u0633",
    uly: "s",
    khan: "s",
    volwes: false,
    punctuation: false
  },
  {
    uchar: "\u0634",
    uly: "sh",
    khan: "sh",
    volwes: false,
    punctuation: false
  },
  {
    uchar: "\u063A",
    uly: "gh",
    khan: "gh",
    volwes: false,
    punctuation: false
  },
  {
    uchar: "\u0642",
    uly: "q",
    khan: "q",
    volwes: false,
    punctuation: false
  },
  {
    uchar: "\u0641",
    uly: "f",
    khan: "f",
    volwes: false,
    punctuation: false
  },
  {
    uchar: "\u0643",
    uly: "k",
    khan: "k",
    volwes: false,
    punctuation: false
  },
  {
    uchar: "\u06AF",
    uly: "g",
    khan: "g",
    volwes: false,
    punctuation: false
  },
  {
    uchar: "\u06AD",
    uly: "ng",
    khan: "ng",
    volwes: false,
    punctuation: false
  },
  {
    uchar: "\u0644",
    uly: "l",
    khan: "l",
    volwes: false,
    punctuation: false
  },
  {
    uchar: "\u0645",
    uly: "m",
    khan: "m",
    volwes: false,
    punctuation: false
  },
  {
    uchar: "\u0646",
    uly: "n",
    khan: "n",
    volwes: false,
    punctuation: false
  },
  {
    uchar: "\u06BE",
    uly: "h",
    khan: "wh",
    volwes: false,
    punctuation: false
  },
  {
    uchar: "\u06CB",
    uly: "w",
    khan: "w",
    volwes: false,
    punctuation: false
  },
  {
    uchar: "\u064A",
    uly: "y",
    khan: "y",
    volwes: false,
    punctuation: false
  },
  {
    uchar: "\u061F",
    uly: "?",
    khan: "?",
    volwes: false,
    punctuation: true
  },
  {
    uchar: "(",
    uly: ")",
    khan: ")",
    volwes: false,
    punctuation: true
  },
  {
    uchar: "{",
    uly: "}",
    khan: "}",
    volwes: false,
    punctuation: true
  },
  {
    uchar: "}",
    uly: "{",
    khan: "{",
    volwes: false,
    punctuation: true
  },
  {
    uchar: "[",
    uly: "]",
    khan: "]",
    volwes: false,
    punctuation: true
  },
  {
    uchar: "]",
    uly: "[",
    khan: "[",
    volwes: false,
    punctuation: true
  },
  {
    uchar: "<",
    uly: ">",
    khan: ">",
    volwes: false,
    punctuation: true
  },
  {
    uchar: ">",
    uly: "<",
    khan: "<",
    volwes: false,
    punctuation: true
  },
  {
    uchar: "!",
    uly: "!",
    khan: "!",
    volwes: false,
    punctuation: true
  },
  {
    uchar: ".",
    uly: ".",
    khan: ".",
    volwes: false,
    punctuation: true
  },
  {
    uchar: ":",
    uly: ":",
    khan: ":",
    volwes: false,
    punctuation: true
  },
  {
    uchar: "-",
    uly: "-",
    khan: "-",
    volwes: false,
    punctuation: true
  },
  {
    uchar: "$",
    uly: "$",
    khan: "$",
    volwes: false,
    punctuation: true
  }
];
export { BOUNDARY_SYMBOL, FORMATMAEK, HEMZE, URGHU, table as default, table };
