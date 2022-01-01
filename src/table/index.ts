export type ITableAlphaType = "khan" | "khanUz" | "ug" | "uly"; // 所支持字母表种类

export interface ITableItem {
  ug: string;
  uly: string;
  khan: string;
  khanUz: string;
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
export const TRANSLATIONAL_MARK = "/"; // 转义符 用来控制转义不转义内容，包裹在中间的年内容不转义
export const SEPARATE_MARK = "h"; // 当组合字符出现冲突时优先使用此符号来分隔，如enge ehlish(注册、备案) 中的 n,g,ng 出现了冲突，将变成 enhge ehlish

export const SYLLABIFY_MARK = "`"; // 分音节符 adem`ler`ning
export const READABILITY_MARK = "'"; //易读标记，用于提高单词的易读性 tash'eynek, tel'et 一个辅音结束的音节后面的音节从原因开始时使用

export const HEMZE = "ئ"; // Hemze

export const table: ITableItem[] = [
  {
    ug: "ئ",
    uly: "x",
    khan: "x",
    khanUz: "x",
    volwes: false,
    punctuation: false,
  },
  {
    ug: "ا",
    uly: "a",
    khan: "a",
    khanUz: "a",
    volwes: true,
    punctuation: false,
  },
  {
    ug: "ە",
    uly: "e",
    khan: "e",
    khanUz: "e",
    volwes: true,
    punctuation: false,
  },
  {
    ug: "ې",
    uly: "ë",
    khan: "eh",
    khanUz: "ê",
    volwes: true,
    punctuation: false,
  },
  {
    ug: "ى",
    uly: "i",
    khan: "i",
    khanUz: "i",
    volwes: true,
    punctuation: false,
  },
  {
    ug: "و",
    uly: "o",
    khan: "o",
    khanUz: "o",
    volwes: true,
    punctuation: false,
  },
  {
    ug: "ۇ",
    uly: "u",
    khan: "u",
    khanUz: "u",
    volwes: true,
    punctuation: false,
  },
  {
    ug: "ۆ",
    uly: "ö",
    khan: "c",
    khanUz: "ô",
    volwes: true,
    punctuation: false,
  },
  {
    ug: "ۈ",
    uly: "ü",
    khan: "v",
    khanUz: "v",
    volwes: true,
    punctuation: false,
  },
  {
    ug: "ب",
    uly: "b",
    khan: "b",
    khanUz: "b",
    volwes: false,
    punctuation: false,
  },
  {
    ug: "پ",
    uly: "p",
    khan: "p",
    khanUz: "p",
    volwes: false,
    punctuation: false,
  },
  {
    ug: "ت",
    uly: "t",
    khan: "t",
    khanUz: "t",
    volwes: false,
    punctuation: false,
  },
  {
    ug: "ج",
    uly: "j",
    khan: "j",
    khanUz: "j",
    volwes: false,
    punctuation: false,
  },
  {
    ug: "چ",
    uly: "ch",
    khan: "ch",
    khanUz: "ch", // ĉ
    volwes: false,
    punctuation: false,
  },
  {
    ug: "خ",
    uly: "x",
    khan: "kh",
    khanUz: "kh",
    volwes: false,
    punctuation: false,
  },
  {
    ug: "د",
    uly: "d",
    khan: "d",
    khanUz: "d",
    volwes: false,
    punctuation: false,
  },
  {
    ug: "ر",
    uly: "r",
    khan: "r",
    khanUz: "r",
    volwes: false,
    punctuation: false,
  },
  {
    ug: "ز",
    uly: "z",
    khan: "z",
    khanUz: "z",
    volwes: false,
    punctuation: false,
  },
  {
    ug: "ژ",
    uly: "zh",
    khan: "zh",
    khanUz: "zh",
    volwes: false,
    punctuation: false,
  },
  {
    ug: "س",
    uly: "s",
    khan: "s",
    khanUz: "s",
    volwes: false,
    punctuation: false,
  },
  {
    ug: "ش",
    uly: "sh",
    khan: "sh",
    khanUz: "sh", //ŝ
    volwes: false,
    punctuation: false,
  },
  {
    ug: "غ",
    uly: "gh",
    khan: "gh",
    khanUz: "gh", //ĝ
    volwes: false,
    punctuation: false,
  },
  {
    ug: "ق",
    uly: "q",
    khan: "q",
    khanUz: "q",
    volwes: false,
    punctuation: false,
  },
  {
    ug: "ف",
    uly: "f",
    khan: "f",
    khanUz: "f",
    volwes: false,
    punctuation: false,
  },
  {
    ug: "ك",
    uly: "k",
    khan: "k",
    khanUz: "k",
    volwes: false,
    punctuation: false,
  },
  {
    ug: "گ",
    uly: "g",
    khan: "g",
    khanUz: "g",
    volwes: false,
    punctuation: false,
  },
  {
    ug: "ڭ",
    uly: "ng",
    khan: "ng",
    khanUz: "ng", //ŋ
    volwes: false,
    punctuation: false,
  },
  {
    ug: "ل",
    uly: "l",
    khan: "l",
    khanUz: "l",
    volwes: false,
    punctuation: false,
  },
  {
    ug: "م",
    uly: "m",
    khan: "m",
    khanUz: "m",
    volwes: false,
    punctuation: false,
  },
  {
    ug: "ن",
    uly: "n",
    khan: "n",
    khanUz: "n",
    volwes: false,
    punctuation: false,
  },
  {
    ug: "ن",
    uly: "n",
    khan: "n" + SEPARATE_MARK, // nh 用于 ng n g 三个字母的冲突 如: vnge ehlish-> vnhge ehlish
    khanUz: "n" + READABILITY_MARK, // nh 用于 ng n g 三个字母的冲突 如: vnge ehlish-> vnhge ehlish
    volwes: false,
    punctuation: false,
  },
  {
    ug: "ھ",
    uly: "h",
    khan: "wh",
    khanUz: "ĥ",
    volwes: false,
    punctuation: false,
  },
  {
    ug: "ۋ",
    uly: "w",
    khan: "w",
    khanUz: "w",
    volwes: false,
    punctuation: false,
  },
  {
    ug: "ي",
    uly: "y",
    khan: "y",
    khanUz: "y",
    volwes: false,
    punctuation: false,
  },
  {
    ug: "؟",
    uly: "?",
    khan: "?",
    khanUz: "?",
    volwes: false,
    punctuation: true,
  },
  {
    ug: "،",
    uly: ",",
    khan: ",",
    khanUz: ",",
    volwes: false,
    punctuation: true,
  },
  {
    ug: "؛",
    uly: ";",
    khan: ";",
    khanUz: ";",
    volwes: false,
    punctuation: true,
  },
];
export { table as default };
