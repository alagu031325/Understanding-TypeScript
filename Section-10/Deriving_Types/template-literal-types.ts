//Template literals in JS
const userName = "Alagu";

//${} -> used to inject value or expressions within string
const greeting = `Hi Welcome, ${userName}`;

type ReadPermissions = 'no-read' | 'read';
type WritePermissions = 'no-write' | 'write';

//type FilePermissions = 'no-read-write' | 'read-no-write' | 'no-read-no-write' | 'read-write';
//automatically creates multiple string literal types 
type FilePermissions = `${ReadPermissions}-${WritePermissions}`;

type DataFile = {
    data: string;
    permissions: FilePermissions;
}

//Helper type - multiple keys so multiple string literals are created 
type DataFileEventNames = `${keyof DataFile}Changes`;

type DataFileEvents = {
    [Key in DataFileEventNames]: () => void;
}
