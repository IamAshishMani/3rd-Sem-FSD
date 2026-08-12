import {writeFile, readFile} from "fs/promises";
// await writeFile("stud.txt", "Hello World");
// console.log("File written successfully");

const addContent = async(fname, content) => {
    await writeFile(fname, content);
    console.log("File written successfully");
};

const readContent = async(fname) => {
    const data = await readFile(fname, "utf-8");
    return data;
}

const appendContent = async(fname, content) => {
    const data = await readFile(fname, "utf-8");
    await writeFile(fname, data + content);
    console.log("Content appended successfully");
}

await addContent("stud.txt", "HEHEHEHEHEHEHEHEHEHEHEHEHEH>");
console.log("Content of the file is: ", await readContent("stud.txt"));
await appendContent("stud.txt", "\nAppended content!");