const listContacts = require("./listContacts");

const getContactById = async (contactId) => {
  const contactList = await listContacts();

  const contact = contactList.find(
    (contact) => contact.id === Number(contactId)
  );
  return contact;
};

module.exports = getContactById;
