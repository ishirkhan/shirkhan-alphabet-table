import type { ITableItem, ITableAlphaType } from "./table";
import { table, HEMZE, TRANSLATIONAL_MARK } from "./table";

const khanChars = table.map((item: ITableItem) => item.khan);
console.log("khanChars", khanChars);

const khan: ITableAlphaType = "khan";

console.log("khan", khan);
console.log("TRANSLATIONAL_MARK", TRANSLATIONAL_MARK);

console.log("HEMZE", HEMZE);
