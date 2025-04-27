//Object type declarations
type FileData = {
    path: string;
    content: string;
}

type DatabaseData = {
    connectionUrl: string;
    credentials: string;
}

type Status = {
    isOpen: boolean;
    errorMessage?: string;
}

//Intersection type - will be a combination of above two types
type AccessedFileDataSource = FileData & Status;
type AccessedDatabaseDataSource = DatabaseData & Status;

//can also inherit multiple interfaces using extends - FileData, Status have to be an interfaces 
// interface AccessedFileDataSource extends FileData, Status {}
// interface AccessedDatabaseDataSource extends DatabaseData, Status {}