function addOperation(a: number, b:number) {
    return a + b;
}
// stores the typeof function
type AddFn = typeof addOperation;
// stores only the return value type
// infer used to extract some type information 
type ReturnValueType<T> = T extends (...args: any[]) => infer RV ? RV : never; 
type AddFnReturnValueType = ReturnValueType<AddFn>;

//NOTE : Utility types in Typescript - already has predefined types built into typescript it is better to check them before implementing the custom types like ReturnType (retrieves the return type) or PartialType (that makes all parameter of the object optional) 