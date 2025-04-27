type FileSource = { type: 'file'; path: string };
const fileSource: FileSource = {
    type: 'file',
    path: 'some/path/to/file.csv',
};

type DBSource = { type: 'db'; connectionUrl: string };
const dbSource: DBSource = {
    type: 'db',
    connectionUrl: 'some-connection-url',
};

type Source = FileSource | DBSource;

//Type guard helps to identify which type of value we are currently dealing with
function loadData1(source: Source) {
  // Type guard - need to check existence of a certain property to check which kind of object we receive 
  if ('path' in source) {
    //source.path can be used to open the file 
    return;
  }
  // source.connectionUrl - dealing with value of type DBSource if it passed the if check 
}

//Another way of checking is to rely on a shared property which is available in all types that is combined in a union type 
function loadData2(source: Source) {
    if (source.type === 'file') {
      //source.path can be used to open the file 
      return;
    }
    // source.connectionUrl - dealing with value of type DBSource if it passed the if check 
}

//Outsource the type checking - if we need to reuse the type-guard
//return type is Type predicate - which tells TS whether a value belongs to a specific type 
function isFile(source: Source) {
    return source.type === 'file';
}

//when dealing with objects - we can use 'instanceof' operator to check the type of the instance with which we are working with 