import { Meteor } from "meteor/meteor";
import { PostingCollection } from "./Collections";

Meteor.methods({
  "postings.findOne"({ postId }) {
    PostingCollection.findOne(postId);
  },
  "postings.insertPosting"({ name, company, location, pay, description }) {
    return PostingCollection.insert({
      name,
      company,
      location,
      pay,
      description,
      createdAt: new Date(),
    });
  },
});
