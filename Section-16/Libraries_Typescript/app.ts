// lodash is a javascript only library and typescript couldnt find the declaration file
import _ from 'lodash';
// Typescript first library
import { z } from 'zod';
// node file system module
import fs from 'node:fs';

// class validator is used to validate class properties - typescript library

// Lodash
const numbers = [21, 22, 23, 24, 25]

// split into multiple arrays
const chunkedArray = _.chunk(numbers, 2);

// Zod - exposes a constant z which exposes methods
// zod helps in validating the actual data which we receive whether it matches defined structure
// With zod we can define the shape of the data and perform runtime validation for the same 
const dataSchema = z.object({
    title: z.string(),
    id: z.number(),
    values: z.array(z.union([z.string(), z.number()])),
});

// infer is a generic type
type Data = z.infer<typeof dataSchema>;

// Function that receives parsed data
function output(data: Data) {
    console.log(data);
}

// First converting Buffer to a string and then to JS object
const content = JSON.parse(fs.readFileSync('data.json').toString());

// parses with zod and check whether it is inline with the defined data schema
const parsedData = dataSchema.parse(content);
output(parsedData);


