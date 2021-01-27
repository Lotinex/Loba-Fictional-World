declare namespace TypeUtil {
    type Override<T, I> = Omit<T, keyof I> & I;
    type ArrayElements<T extends string[]> = T extends [...infer E] ? E : never;
    type UnionFromArrayValues<T extends {[key: string]: string[]}, K extends keyof T> = TypeUtil.ArrayElements<T[K]>[number];
    type ArgumentsOf<T> = T extends (...args: infer A) => any ? A : never;
    type ClassType<T> = {new (...args:any[]): T};
}


