import { Meteor } from "meteor/meteor";
import { UserCollection } from "../Collections";

Meteor.methods({
  "user-profile.getProfile"({ username }) {
    return UserCollection.findOne({ username: username });
  },
  "user-profile.createNewProfile"({ username, name, type }) {
    UserCollection.insert({
      username: username,
      name: name,
      type: type,
    });
  },
});
