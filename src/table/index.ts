export interface ITableItem {
  uchar: string;
  volwes: boolean;
  uly: string;
  khan: string;
}

/**
 * 终止符: 内容中出现英语等内容时为了和uly区分使用终止符来包括内容，使得今后的转换等操作能够识别边界,如： ademler /人民 or people in english/ dep yazimiz
 *
 * 备注：
 * 当使用 | 为分界符时，在编写markdown发现和table冲突，面临在table等特殊场景中提供其他不冲突的符号。
 * 因我们以后的大方向是 markdown为主，所以现在吧分界符从| 转换成了 / 以后遇到冲突，针对特殊场景提供特殊替代方案。
 */
export const BOUNDARY_SYMBOL = "/";

export const HEMZE = "ئ";

const table: ITableItem[] = [
  {
    uchar: "ئ",
    volwes: false,
    uly: "'",
    khan: "'",
  },
  {
    uchar: "ا",
    volwes: true,
    uly: "a",
    khan: "a",
  },
  {
    uchar: "ە",
    volwes: true,
    uly: "e",
    khan: "e",
  },
  {
    uchar: "ې",
    volwes: true,
    uly: "ë",
    khan: "eh",
  },
  {
    uchar: "ى",
    volwes: true,
    uly: "i",
    khan: "i",
  },
  {
    uchar: "و",
    volwes: true,
    uly: "o",
    khan: "o",
  },
  {
    uchar: "ۇ",
    volwes: true,
    uly: "u",
    khan: "u",
  },
  {
    uchar: "ۆ",
    volwes: true,
    uly: "ö",
    khan: "c",
  },
  {
    uchar: "ۈ",
    volwes: true,
    uly: "ü",
    khan: "v",
  },
  {
    uchar: "ب",
    volwes: false,
    uly: "b",
    khan: "b",
  },
  {
    uchar: "پ",
    volwes: false,
    uly: "p",
    khan: "p",
  },
  {
    uchar: "ت",
    volwes: false,
    uly: "t",
    khan: "t",
  },
  {
    uchar: "ج",
    volwes: false,
    uly: "j",
    khan: "j",
  },
  {
    uchar: "چ",
    volwes: false,
    uly: "ch",
    khan: "ch",
  },
  {
    uchar: "خ",
    volwes: false,
    uly: "x",
    khan: "kh",
  },
  {
    uchar: "د",
    volwes: false,
    uly: "d",
    khan: "d",
  },
  {
    uchar: "ر",
    volwes: false,
    uly: "r",
    khan: "r",
  },
  {
    uchar: "ز",
    volwes: false,
    uly: "z",
    khan: "z",
  },
  {
    uchar: "ژ",
    volwes: false,
    uly: "zh",
    khan: "zh",
  },
  {
    uchar: "س",
    volwes: false,
    uly: "s",
    khan: "s",
  },
  {
    uchar: "ش",
    volwes: false,
    uly: "sh",
    khan: "sh",
  },
  {
    uchar: "غ",
    volwes: false,
    uly: "gh",
    khan: "gh",
  },
  {
    uchar: "ق",
    volwes: false,
    uly: "q",
    khan: "q",
  },
  {
    uchar: "ف",
    volwes: false,
    uly: "f",
    khan: "f",
  },
  {
    uchar: "ك",
    volwes: false,
    uly: "k",
    khan: "k",
  },
  {
    uchar: "گ",
    volwes: false,
    uly: "g",
    khan: "g",
  },
  {
    uchar: "ڭ",
    volwes: false,
    uly: "ng",
    khan: "ng",
  },
  {
    uchar: "ل",
    volwes: false,
    uly: "l",
    khan: "l",
  },
  {
    uchar: "م",
    volwes: false,
    uly: "m",
    khan: "m",
  },
  {
    uchar: "ن",
    volwes: false,
    uly: "n",
    khan: "n",
  },
  {
    uchar: "ھ",
    volwes: false,
    uly: "h",
    khan: "wh",
  },
  {
    uchar: "ۋ",
    volwes: false,
    uly: "w",
    khan: "w",
  },
  {
    uchar: "ي",
    volwes: false,
    uly: "y",
    khan: "y",
  },
];

export { table as default };
