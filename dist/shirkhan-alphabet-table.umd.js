(function (u, l) {
  typeof exports == "object" && typeof module != "undefined"
    ? l(exports)
    : typeof define == "function" && define.amd
    ? define(["exports"], l)
    : ((u = typeof globalThis != "undefined" ? globalThis : u || self),
      l((u["shirkhan-alphabet-table"] = {})));
})(this, function (u) {
  "use strict";
  const l = String.fromCharCode(0),
    a = "\u0626\u200D",
    e = [
      { uchar: "\u0626", volwes: !1, uly: l, khan: "?" },
      { uchar: "\u0627", volwes: !0, uly: "a", khan: "a" },
      { uchar: "\u06D5", volwes: !0, uly: "e", khan: "e" },
      { uchar: "\u06D0", volwes: !0, uly: "\xEB", khan: "eh" },
      { uchar: "\u0649", volwes: !0, uly: "i", khan: "i" },
      { uchar: "\u0648", volwes: !0, uly: "o", khan: "o" },
      { uchar: "\u06C7", volwes: !0, uly: "u", khan: "u" },
      { uchar: "\u06C6", volwes: !0, uly: "\xF6", khan: "c" },
      { uchar: "\u06C8", volwes: !0, uly: "\xFC", khan: "v" },
      { uchar: "\u0628", volwes: !1, uly: "b", khan: "b" },
      { uchar: "\u067E", volwes: !1, uly: "p", khan: "p" },
      { uchar: "\u062A", volwes: !1, uly: "t", khan: "t" },
      { uchar: "\u062C", volwes: !1, uly: "j", khan: "j" },
      { uchar: "\u0686", volwes: !1, uly: "ch", khan: "ch" },
      { uchar: "\u062E", volwes: !1, uly: "x", khan: "kh" },
      { uchar: "\u062F", volwes: !1, uly: "d", khan: "d" },
      { uchar: "\u0631", volwes: !1, uly: "r", khan: "r" },
      { uchar: "\u0632", volwes: !1, uly: "z", khan: "z" },
      { uchar: "\u0698", volwes: !1, uly: "zh", khan: "zh" },
      { uchar: "\u0633", volwes: !1, uly: "s", khan: "s" },
      { uchar: "\u0634", volwes: !1, uly: "sh", khan: "sh" },
      { uchar: "\u063A", volwes: !1, uly: "gh", khan: "gh" },
      { uchar: "\u0642", volwes: !1, uly: "q", khan: "q" },
      { uchar: "\u0641", volwes: !1, uly: "f", khan: "f" },
      { uchar: "\u0643", volwes: !1, uly: "k", khan: "k" },
      { uchar: "\u06AF", volwes: !1, uly: "g", khan: "g" },
      { uchar: "\u06AD", volwes: !1, uly: "ng", khan: "ng" },
      { uchar: "\u0644", volwes: !1, uly: "l", khan: "l" },
      { uchar: "\u0645", volwes: !1, uly: "m", khan: "m" },
      { uchar: "\u0646", volwes: !1, uly: "n", khan: "n" },
      { uchar: "\u06BE", volwes: !1, uly: "h", khan: "x" },
      { uchar: "\u06CB", volwes: !1, uly: "w", khan: "w" },
      { uchar: "\u064A", volwes: !1, uly: "y", khan: "y" },
    ];
  (u.BOUND_FLAG = l),
    (u.HEMZE = a),
    (u.default = e),
    Object.defineProperty(u, "__esModule", { value: !0 }),
    (u[Symbol.toStringTag] = "Module");
});
