const fs = require("fs/promises");
const path = require("path");
const { v4: uuidv4 } = require("uuid");

const contactsPath = path.resolve("./db/contacts.json");
console.log(contactsPath);

const listContacts = async () => {
  const contactList = await fs.readFile(contactsPath, "utf8");
  return JSON.parse(contactList);
};

const getContactById = async (contactId) => {
  const contactList = await listContacts();

  const contact = contactList.find(
    (contact) => contact.id === Number(contactId)
  );
  return contact;
};

const removeContact = async (contactId) => {
  const contactList = await listContacts();
  const contact = await getContactById(contactId);
  const newContactsList = contactList.filter(
    (contact) => contact.id !== Number(contactId)
  );
  await fs.writeFile(contactsPath, JSON.stringify(newContactsList));
  return contact;
};

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

module.exports = { listContacts, getContactById, removeContact, addContact };
