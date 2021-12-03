export interface ITableItem {
  uchar: string;
  uly: string;
  khan: string;
  volwes: boolean;
  punctuation: boolean;
}

/**
 * 终止符: 内容中出现英语等内容时为了和uly区分使用终止符来包括内容，使得今后的转换等操作能够识别边界,如： ademler /人民 or people in english/ dep yazimiz
 *
 * 备注：
 * 当使用 | 为分界符时，在编写markdown发现和table冲突，面临在table等特殊场景中提供其他不冲突的符号。
 * 因我们以后的大方向是 markdown为主，所以现在吧分界符从| 转换成了 / 以后遇到冲突，针对特殊场景提供特殊替代方案。
 */
export const BOUNDARY_SYMBOL = "/";

export const HEMZE = "ئ"; // Hemze
export const URGHU = "`"; // Urghut  ana  `anar
export const FORMATMAEK = "'"; // tash'eynek, tel'et

export const table: ITableItem[] = [
  {
    uchar: "ئ",
    uly: "x",
    khan: "x",
    volwes: false,
    punctuation: false,
  },
  {
    uchar: "ا",
    uly: "a",
    khan: "a",
    volwes: true,
    punctuation: false,
  },
  {
    uchar: "ە",
    uly: "e",
    khan: "e",
    volwes: true,
    punctuation: false,
  },
  {
    uchar: "ې",
    uly: "ë",
    khan: "eh",
    volwes: true,
    punctuation: false,
  },
  {
    uchar: "ى",
    uly: "i",
    khan: "i",
    volwes: true,
    punctuation: false,
  },
  {
    uchar: "و",
    uly: "o",
    khan: "o",
    volwes: true,
    punctuation: false,
  },
  {
    uchar: "ۇ",
    uly: "u",
    khan: "u",
    volwes: true,
    punctuation: false,
  },
  {
    uchar: "ۆ",
    uly: "ö",
    khan: "c",
    volwes: true,
    punctuation: false,
  },
  {
    uchar: "ۈ",
    uly: "ü",
    khan: "v",
    volwes: true,
    punctuation: false,
  },
  {
    uchar: "ب",
    uly: "b",
    khan: "b",
    volwes: false,
    punctuation: false,
  },
  {
    uchar: "پ",
    uly: "p",
    khan: "p",
    volwes: false,
    punctuation: false,
  },
  {
    uchar: "ت",
    uly: "t",
    khan: "t",
    volwes: false,
    punctuation: false,
  },
  {
    uchar: "ج",
    uly: "j",
    khan: "j",
    volwes: false,
    punctuation: false,
  },
  {
    uchar: "چ",
    uly: "ch",
    khan: "ch",
    volwes: false,
    punctuation: false,
  },
  {
    uchar: "خ",
    uly: "x",
    khan: "kh",
    volwes: false,
    punctuation: false,
  },
  {
    uchar: "د",
    uly: "d",
    khan: "d",
    volwes: false,
    punctuation: false,
  },
  {
    uchar: "ر",
    uly: "r",
    khan: "r",
    volwes: false,
    punctuation: false,
  },
  {
    uchar: "ز",
    uly: "z",
    khan: "z",
    volwes: false,
    punctuation: false,
  },
  {
    uchar: "ژ",
    uly: "zh",
    khan: "zh",
    volwes: false,
    punctuation: false,
  },
  {
    uchar: "س",
    uly: "s",
    khan: "s",
    volwes: false,
    punctuation: false,
  },
  {
    uchar: "ش",
    uly: "sh",
    khan: "sh",
    volwes: false,
    punctuation: false,
  },
  {
    uchar: "غ",
    uly: "gh",
    khan: "gh",
    volwes: false,
    punctuation: false,
  },
  {
    uchar: "ق",
    uly: "q",
    khan: "q",
    volwes: false,
    punctuation: false,
  },
  {
    uchar: "ف",
    uly: "f",
    khan: "f",
    volwes: false,
    punctuation: false,
  },
  {
    uchar: "ك",
    uly: "k",
    khan: "k",
    volwes: false,
    punctuation: false,
  },
  {
    uchar: "گ",
    uly: "g",
    khan: "g",
    volwes: false,
    punctuation: false,
  },
  {
    uchar: "ڭ",
    uly: "ng",
    khan: "ng",
    volwes: false,
    punctuation: false,
  },
  {
    uchar: "ل",
    uly: "l",
    khan: "l",
    volwes: false,
    punctuation: false,
  },
  {
    uchar: "م",
    uly: "m",
    khan: "m",
    volwes: false,
    punctuation: false,
  },
  {
    uchar: "ن",
    uly: "n",
    khan: "n",
    volwes: false,
    punctuation: false,
  },
  {
    uchar: "ھ",
    uly: "h",
    khan: "wh",
    volwes: false,
    punctuation: false,
  },
  {
    uchar: "ۋ",
    uly: "w",
    khan: "w",
    volwes: false,
    punctuation: false,
  },
  {
    uchar: "ي",
    uly: "y",
    khan: "y",
    volwes: false,
    punctuation: false,
  },
  {
    uchar: "؟",
    uly: "?",
    khan: "?",
    volwes: false,
    punctuation: true,
  },
  {
    uchar: "(",
    uly: ")",
    khan: ")",
    volwes: false,
    punctuation: true,
  },
  {
    uchar: "{",
    uly: "}",
    khan: "}",
    volwes: false,
    punctuation: true,
  },
  {
    uchar: "}",
    uly: "{",
    khan: "{",
    volwes: false,
    punctuation: true,
  },
  {
    uchar: "[",
    uly: "]",
    khan: "]",
    volwes: false,
    punctuation: true,
  },
  {
    uchar: "]",
    uly: "[",
    khan: "[",
    volwes: false,
    punctuation: true,
  },
  {
    uchar: "<",
    uly: ">",
    khan: ">",
    volwes: false,
    punctuation: true,
  },
  {
    uchar: ">",
    uly: "<",
    khan: "<",
    volwes: false,
    punctuation: true,
  },
  {
    uchar: "!",
    uly: "!",
    khan: "!",
    volwes: false,
    punctuation: true,
  },
  {
    uchar: ".",
    uly: ".",
    khan: ".",
    volwes: false,
    punctuation: true,
  },
  {
    uchar: ":",
    uly: ":",
    khan: ":",
    volwes: false,
    punctuation: true,
  },
  {
    uchar: "-",
    uly: "-",
    khan: "-",
    volwes: false,
    punctuation: true,
  },
  {
    uchar: "$",
    uly: "$",
    khan: "$",
    volwes: false,
    punctuation: true,
  },
];
export { table as default };
