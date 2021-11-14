const listContacts = require("./listContacts");
const getContactById = require("./getContactById");
const updateFile = require("../../helpers");
const contactsPath = require("../../helpers");

const removeContact = async (contactId) => {
  const contactList = await listContacts();
  const contact = await getContactById(contactId);
  const newContactsList = contactList.filter(
    (contact) => contact.id !== Number(contactId)
  );
  await updateFile(contactsPath, newContactsList);
  return contact;
};

module.exports = removeContact;
