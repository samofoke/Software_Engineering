import mongoose from "mongoose";
import { ContactSchema } from "../models/api-model";

const Contact = mongoose.model("Contact", ContactSchema);

export const addNewConact = (req, res) => {
  let newContact = new Contact(req.body);

  newContact.save((err, contact) => {
    if (err) {
      res.send("Posting Contact has an error: ", err);
    }
    res.json(contact);
  });
};
