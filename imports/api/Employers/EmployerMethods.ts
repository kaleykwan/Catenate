import { Meteor } from "meteor/meteor";
import { EmployerCollection } from "../Collections";

Meteor.methods({
  "employer-profile.getProfile"({ username }) {
    return EmployerCollection.findOne({ username: username });
  },
  "employer-profile.createNewProfile"({ username, name, type }) {
    EmployerCollection.insert({
      username: username,
      name: name,
      type: type,
    });
  },
});
