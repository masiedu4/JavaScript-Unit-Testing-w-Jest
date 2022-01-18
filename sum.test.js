/**
    * @description      : 
    * @author           : Michael
    * @group            : 
    * @created          : 16/01/2022 - 21:19:01
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 16/01/2022
    * - Author          : Michael
    * - Modification    : 
**/
const sum = require("./sum");

test ("normally add numbers", () => {
	expect(sum(1,2)).toBe(3);
})