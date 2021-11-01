const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
} = require("./contacts");
const { Command } = require("commander");
const program = new Command();
program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv);

const argv = program.opts();

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const contactList = await listContacts();
      console.table(contactList);
      break;

    case "get":
      const contact = await getContactById(id);
      if (contact === undefined) {
        return console.log("There is no such contact");
      }
      return console.table(contact);
      break;

    case "add":
      const newContact = await addContact(name, email, phone);
      return console.table(newContact);
      break;

    case "remove":
      const removedContact = await removeContact(id);
      return console.table(removedContact);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);
