type a1 = number;
type a3 = undefined;
type a4 = number;

type a2 = a1 extends string ? string : null;
type d = a1 extends null
    ? null
    : a3 extends number
    ? number
    : a4 extends null ? null
    : never;

// --------------------------------------------

type Sheikh = {
    wife: string;
    wife2: string
}

type A = keyof Sheikh; // 'wife1' | 'wife2'

type CheckProperty<T, K> = K extends keyof Sheikh ? true : false;

type CheckWife2 = CheckProperty<Sheikh, 'wife2'>;


// --------------------------------------------


type Bandhubi = 'Juuu' | 'Saima' | 'Ritu';

type RemoveBandhubi<T, K> = T extends K ?
    never : T;

type CurrentBandhubi = RemoveBandhubi<Bandhubi, 'Saima'>