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
export declare const BOUNDARY_SYMBOL = "/";
export declare const HEMZE = "\u0626";
declare const table: ITableItem[];
export { table as default };
