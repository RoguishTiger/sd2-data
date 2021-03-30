declare module 'sd2-data';
// Typedefs for raw data
declare type DivisionStruct = {id:number, name:string};
declare type UnitStruct = {descriptor:string, type:string, name:string};

// main exports
declare interface UnitsByIdData {
    unitById:Map<string, UnitStruct>;
}

declare interface UnitsData {
    units:Map<string, UnitStruct>;
}

declare interface MapsData {
    allMapNames:string[];
    mapData:{
        sd2League:string[]
        byPlayerSize:{
            '2':string[],
            '4':string[],
            '6':string[],
            '8':string[]
        }
    };
}

declare interface DivisionsData {
    divisionsAllies:[DivisionStruct];
    divisionsAxis:[DivisionStruct];
    divisionsById:[DivisionStruct];
}

declare interface MiscData {
    incomeLevel:Map<string, string>;
    mode:Map<string, string>;
    victory:Map<string, string>;
    scoreLimit:Map<string, string>;
    incomeTypes:Map<number, string>;
}

export const maps:MapsData
export const misc:MiscData
export const divisions:DivisionsData
export const units:UnitsData
export const unitsById:UnitsByIdData
