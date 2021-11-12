const { listContacts } = require("./listContacts");
const { getContactById } = require("./getContactById");
const fs = require("fs/promises");
const path = require("path");
const contactsPath = path.resolve("./db/contacts.json");

const removeContact = async (contactId) => {
  const contactList = await listContacts();
  const contact = await getContactById(contactId);
  const newContactsList = contactList.filter(
    (contact) => contact.id !== Number(contactId)
  );
  await fs.writeFile(contactsPath, JSON.stringify(newContactsList));
  return contact;
};

module.exports = { removeContact };
