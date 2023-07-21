import { Meteor } from "meteor/meteor";
import { PostingCollection } from "./Collections";

Meteor.publish("allPostings", function publishAllPosts() {
  return PostingCollection.find();
});
