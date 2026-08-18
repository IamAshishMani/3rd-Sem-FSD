import { mkdir } from "node:fs/promises";

await mkdir("uploads");
await mkdir("uploads/images");

await mkdir("docs/resumes/data", { recursive: true });

//removes only data folder
await rm("docs/resumes/data", { recursive: true });

//removes main folder and all subfolders
await rm("docs", { recursive: true });