import Enmap from "enmap";

interface MyServerData {
	language: string;
	welcomeMessage: string;
	otherSettings?: {
		moderator: string;
		notificationsEnabled: boolean;
	}
}

const database: Enmap<MyServerData> = new Enmap({
	name: "myServerData",
});

database.set("server123", {
	language: "en",
	welcomeMessage: "Welcome to the server!",
	otherSettings: {
		moderator: "adminUser",
		notificationsEnabled: true,
	}
})

database.set("server123", "fr", "language");
const key = database.get("server123", "language");
const otherSettings = database.get("server123", "otherSettings.moderator");

console.log(otherSettings);