/**
    * @description      : 
    * @author           : Michael
    * @group            : 
    * @created          : 16/01/2022 - 21:57:47
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 16/01/2022
    * - Author          : Michael
    * - Modification    : 
**/
const subtract = require("./subtract");

test("Returns accurate subtracted value", ()=> {
	expect(subtract(3,1)).toBe(2);
})