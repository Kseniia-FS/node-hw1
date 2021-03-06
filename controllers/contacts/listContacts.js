const fs = require("fs/promises");
const contactsPath = require("../../helpers");

const listContacts = async () => {
  const contactList = await fs.readFile(contactsPath, "utf8");
  return JSON.parse(contactList);
};

module.exports = listContacts;
