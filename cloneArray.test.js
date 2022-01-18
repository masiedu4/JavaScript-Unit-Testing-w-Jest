/**
    * @description      : 
    * @author           : Michael
    * @group            : 
    * @created          : 16/01/2022 - 21:27:24
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 16/01/2022
    * - Author          : Michael
    * - Modification    : 
**/
const cloneArray = require("./cloneArray");

test("Returns same stuff in the array", ()=> {
	const array = [1 , 2, 3];
	expect(cloneArray(array)).toEqual(array);
	expect(cloneArray(array)).not.toBe(array);
})