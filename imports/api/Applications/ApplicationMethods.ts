import { Meteor } from "meteor/meteor";
import { ApplicationCollection } from "../Collections";
import { useFind } from "meteor/react-meteor-data";

Meteor.methods({
  "applications.findOne"({ postId }) {
    return ApplicationCollection.findOne(postId);
  },
  "applications.insertApplication"({ name, company, location, pay, description, username, status }) {
    return ApplicationCollection.insert({
      name,
      company,
      location,
      pay,
      description,
      username,
      status,
      createdAt: new Date(),
    });
  },
});
