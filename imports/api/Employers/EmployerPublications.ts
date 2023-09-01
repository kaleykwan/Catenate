import { Meteor } from "meteor/meteor";
import { EmployerCollection } from "../Collections";

Meteor.publish("allEmployers", function publishAllEmployers() {
  return EmployerCollection.find();
});
