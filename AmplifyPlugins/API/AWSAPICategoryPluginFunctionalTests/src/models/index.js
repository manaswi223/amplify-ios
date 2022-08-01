// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const PostStatus = {
  "PRIVATE": "PRIVATE",
  "DRAFT": "DRAFT",
  "PUBLISHED": "PUBLISHED"
};

const TestEnum = {
  "VALUE_ONE": "VALUE_ONE",
  "VALUE_TWO": "VALUE_TWO"
};

const { Post, Comment, Project1, Team1, Project2, Team2, Post3, Comment3, Post4, Comment4, Post5, PostEditor5, User5, Blog6, Post6, Comment6, ScalarContainer, ListIntContainer, ListStringContainer, EnumTestModel, NestedTypeTestModel, Nested } = initSchema(schema);

export {
  Post,
  Comment,
  Project1,
  Team1,
  Project2,
  Team2,
  Post3,
  Comment3,
  Post4,
  Comment4,
  Post5,
  PostEditor5,
  User5,
  Blog6,
  Post6,
  Comment6,
  ScalarContainer,
  ListIntContainer,
  ListStringContainer,
  EnumTestModel,
  NestedTypeTestModel,
  PostStatus,
  TestEnum,
  Nested
};