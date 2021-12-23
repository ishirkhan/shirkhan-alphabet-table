## `shirkhan-alphabet-table`

bv tvr shirkhan ehlipbesining wherip jediwilini asas qilip bashqa ishlitish urunlirida clchem birliki whasillash vchvn teyyarlanhghan bulup, `javascript` tilini asas qilidighan tvrler aldin mushu tvrni ishlitip munasiwetlik uchurlargha ehrishishi tewissiye qilinidu ;

bu tvr asas qilghan ehlipbe jediwili wheqqidiki tehkhimu kcp uchurlargha ehrishmekchi bolsingiz buyerdin kvrvng: [shirkhan alphabet](https://gitee.com/silvaq/shirkhan-alphabet)

## ishlitish usuli

```typescript
import type { ITableItem, ITableAlphaType } from "./table";
import { table, HEMZE, TRANSLATIONAL_MARK } from "./table";

const khanChars = table.map((item: ITableItem) => item.khan);
console.log("khanChars", khanChars);

const khan: ITableAlphaType = "khan";

console.log("khan", khan);
console.log("TRANSLATIONAL_MARK", TRANSLATIONAL_MARK);

console.log("HEMZE", HEMZE);
```
