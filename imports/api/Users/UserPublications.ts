import { Meteor } from "meteor/meteor";
import { UserCollection } from "../Collections";

Meteor.publish("allUserProfiles", function publishAllProfiles() {
  return UserCollection.find();
});