const fs = require("fs/promises");
const path = require("path");

const contactsPath = path.resolve("./db/contacts.json");

const listContacts = async () => {
  const contactList = await fs.readFile(contactsPath, "utf8");
  return JSON.parse(contactList);
};

module.exports = { listContacts };
