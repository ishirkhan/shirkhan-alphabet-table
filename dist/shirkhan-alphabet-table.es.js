const TRANSLATIONAL_MARK = "/";
const SEPARATE_MARK = "h";
const SYLLABIFY_MARK = "`";
const READABILITY_MARK = "'";
const HEMZE = "\u0626";
const table = [
  {
    ug: "\u0626",
    uly: "x",
    khan: "x",
    khanUz: "x",
    volwes: false,
    punctuation: false
  },
  {
    ug: "\u0627",
    uly: "a",
    khan: "a",
    khanUz: "a",
    volwes: true,
    punctuation: false
  },
  {
    ug: "\u06D5",
    uly: "e",
    khan: "e",
    khanUz: "e",
    volwes: true,
    punctuation: false
  },
  {
    ug: "\u06D0",
    uly: "\xEB",
    khan: "eh",
    khanUz: "\xEA",
    volwes: true,
    punctuation: false
  },
  {
    ug: "\u0649",
    uly: "i",
    khan: "i",
    khanUz: "i",
    volwes: true,
    punctuation: false
  },
  {
    ug: "\u0648",
    uly: "o",
    khan: "o",
    khanUz: "o",
    volwes: true,
    punctuation: false
  },
  {
    ug: "\u06C7",
    uly: "u",
    khan: "u",
    khanUz: "u",
    volwes: true,
    punctuation: false
  },
  {
    ug: "\u06C6",
    uly: "\xF6",
    khan: "c",
    khanUz: "\xF4",
    volwes: true,
    punctuation: false
  },
  {
    ug: "\u06C8",
    uly: "\xFC",
    khan: "v",
    khanUz: "v",
    volwes: true,
    punctuation: false
  },
  {
    ug: "\u0628",
    uly: "b",
    khan: "b",
    khanUz: "b",
    volwes: false,
    punctuation: false
  },
  {
    ug: "\u067E",
    uly: "p",
    khan: "p",
    khanUz: "p",
    volwes: false,
    punctuation: false
  },
  {
    ug: "\u062A",
    uly: "t",
    khan: "t",
    khanUz: "t",
    volwes: false,
    punctuation: false
  },
  {
    ug: "\u062C",
    uly: "j",
    khan: "j",
    khanUz: "j",
    volwes: false,
    punctuation: false
  },
  {
    ug: "\u0686",
    uly: "ch",
    khan: "ch",
    khanUz: "ch",
    volwes: false,
    punctuation: false
  },
  {
    ug: "\u062E",
    uly: "x",
    khan: "kh",
    khanUz: "kh",
    volwes: false,
    punctuation: false
  },
  {
    ug: "\u062F",
    uly: "d",
    khan: "d",
    khanUz: "d",
    volwes: false,
    punctuation: false
  },
  {
    ug: "\u0631",
    uly: "r",
    khan: "r",
    khanUz: "r",
    volwes: false,
    punctuation: false
  },
  {
    ug: "\u0632",
    uly: "z",
    khan: "z",
    khanUz: "z",
    volwes: false,
    punctuation: false
  },
  {
    ug: "\u0698",
    uly: "zh",
    khan: "zh",
    khanUz: "zh",
    volwes: false,
    punctuation: false
  },
  {
    ug: "\u0633",
    uly: "s",
    khan: "s",
    khanUz: "s",
    volwes: false,
    punctuation: false
  },
  {
    ug: "\u0634",
    uly: "sh",
    khan: "sh",
    khanUz: "sh",
    volwes: false,
    punctuation: false
  },
  {
    ug: "\u063A",
    uly: "gh",
    khan: "gh",
    khanUz: "gh",
    volwes: false,
    punctuation: false
  },
  {
    ug: "\u0642",
    uly: "q",
    khan: "q",
    khanUz: "q",
    volwes: false,
    punctuation: false
  },
  {
    ug: "\u0641",
    uly: "f",
    khan: "f",
    khanUz: "f",
    volwes: false,
    punctuation: false
  },
  {
    ug: "\u0643",
    uly: "k",
    khan: "k",
    khanUz: "k",
    volwes: false,
    punctuation: false
  },
  {
    ug: "\u06AF",
    uly: "g",
    khan: "g",
    khanUz: "g",
    volwes: false,
    punctuation: false
  },
  {
    ug: "\u06AD",
    uly: "ng",
    khan: "ng",
    khanUz: "ng",
    volwes: false,
    punctuation: false
  },
  {
    ug: "\u0644",
    uly: "l",
    khan: "l",
    khanUz: "l",
    volwes: false,
    punctuation: false
  },
  {
    ug: "\u0645",
    uly: "m",
    khan: "m",
    khanUz: "m",
    volwes: false,
    punctuation: false
  },
  {
    ug: "\u0646",
    uly: "n",
    khan: "n",
    khanUz: "n",
    volwes: false,
    punctuation: false
  },
  {
    ug: "\u0646",
    uly: "n",
    khan: "n" + SEPARATE_MARK,
    khanUz: "n" + READABILITY_MARK,
    volwes: false,
    punctuation: false
  },
  {
    ug: "\u06BE",
    uly: "h",
    khan: "wh",
    khanUz: "\u0125",
    volwes: false,
    punctuation: false
  },
  {
    ug: "\u06CB",
    uly: "w",
    khan: "w",
    khanUz: "w",
    volwes: false,
    punctuation: false
  },
  {
    ug: "\u064A",
    uly: "y",
    khan: "y",
    khanUz: "y",
    volwes: false,
    punctuation: false
  },
  {
    ug: "\u061F",
    uly: "?",
    khan: "?",
    khanUz: "?",
    volwes: false,
    punctuation: true
  },
  {
    ug: "\u060C",
    uly: ",",
    khan: ",",
    khanUz: ",",
    volwes: false,
    punctuation: true
  },
  {
    ug: "\u061B",
    uly: ";",
    khan: ";",
    khanUz: ";",
    volwes: false,
    punctuation: true
  }
];
export { HEMZE, READABILITY_MARK, SEPARATE_MARK, SYLLABIFY_MARK, TRANSLATIONAL_MARK, table as default, table };
