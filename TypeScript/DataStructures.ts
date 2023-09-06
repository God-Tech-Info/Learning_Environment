//Data Structures
/*
    1.Array: Arrays are one of the most common data structures in JavasScript(JS) and TypeScript(TS).
    TS supports typing arrays so you can specify the tipe of elements an array contains.    

    F.Ex.:
*/

    let numbers: number[] = [1, 2, 3, 4];
    let fruits : string[] = ["apple", "banana", "cherry"];

/*
    2.Object: Objects in JS/TS are collections of key-value pairs. TS allows you to define types for objects

    F.EX.:
*/

    let person: { name: string; age: number } = { name: "Alice", age: 30 };

/*
    3.Tuple: A tuple is an array type with a fixed number of elements, where each element can have a diferent tipe.

    F.EX.:
*/

    let tuple: [string, number] = ["apple", 5];

/*
    4.Set: A Set is a collection of unique values. You can use sets in TS just like in JS

    F.EX.:
*/

    let uniqueNumbers = new Set<number>();
    uniqueNumbers.add(1);
    uniqueNumbers.add(2);

/* 
    5.Map: A Map is a collection of key-value pairs where keys are unique.  TS allows typing the values in a map

    F.EX.:
*/

    let personMap = new Map<string, number>();
    personMap.set("Alice", 30);
    personMap.set("Bob", 25);

/*
    6.Enums: Enums are data structures that represent a set of named values. They are useful for crating sets of constants with readable names.

    F.EX.:
*/

    enum Color {
        Red,
        Green,
        Blue,
    }
    let colorChoice: Color = Color.Red;

/*
*/
