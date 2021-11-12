const { listContacts } = require("./listContacts");
const { v4: uuidv4 } = require("uuid");
const fs = require("fs/promises");
const path = require("path");

const contactsPath = path.resolve("./db/contacts.json");

const addContact = async (name, email, phone) => {
  const contactList = await listContacts();
  const newContact = {
    id: uuidv4(),
    name,
    email,
    phone,
  };

  contactList.push(newContact);
  await fs.writeFile(contactsPath, JSON.stringify(contactList));
  return newContact;
};

module.exports = { addContact };
