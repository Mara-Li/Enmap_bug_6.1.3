import Enmap from "enmap";

interface MyServerData {
	language: string;
	welcomeMessage: string;
}

const database: Enmap<string, MyServerData> = new Enmap({
	name: "myServerData",
});

database.set("server123", {
	language: "en",
	welcomeMessage: "Welcome to the server!",
})

database.set("server123", "fr", "language");
//TS2345: Argument of type "language" is not assignable to parameter of type
// "length" | "toString" | "concat" | "slice" | "indexOf" | "lastIndexOf" | "includes" | "at" | "charAt" | "charCodeAt" | "localeCompare" | "match" | "replace" | "search" | "split" | ... 36 more ... | undefined

const key = database.get("server123", "language");
//Results with latest typescript & enmap version:
//TS2345: Argument of type "language" is not assignable to parameter of type
// "length" | "toString" | "concat" | "slice" | "indexOf" | "lastIndexOf" | "includes" | "at" | "charAt" | "charCodeAt" | "localeCompare" | "match" | "replace" | "search" | "split" | ... 36 more ... | undefined