import { Meteor } from "meteor/meteor";
import { ApplicationCollection } from "../Collections";

Meteor.publish("allApplications", function publishAllApplications() {
  return ApplicationCollection.find();
});
