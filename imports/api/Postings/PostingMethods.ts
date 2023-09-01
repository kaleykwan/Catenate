import { Meteor } from "meteor/meteor";
import { PostingCollection } from "../Collections";
import { useFind } from "meteor/react-meteor-data";

Meteor.methods({
  "postings.findOne"({ postId }) {
    return PostingCollection.findOne(postId);
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
  "postings.findPostingsContaining"({ searchInput }) {
    let postings = useFind(() =>
      PostingCollection.find(
        { title: searchInput },
        { sort: { createdAt: -1 } }
      )
    );
    return postings;
  },
});
