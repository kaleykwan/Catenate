import { Mongo } from 'meteor/mongo';

export const PostingCollection = new Mongo.Collection('postings');

export const UserCollection = new Mongo.Collection('user-profiles');

export const EmployerCollection = new Mongo.Collection('employer-profiles');

export const ApplicationCollection = new Mongo.Collection('applications');