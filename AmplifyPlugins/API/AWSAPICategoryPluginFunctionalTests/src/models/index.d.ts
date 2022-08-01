import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum PostStatus {
  PRIVATE = "PRIVATE",
  DRAFT = "DRAFT",
  PUBLISHED = "PUBLISHED"
}

export enum TestEnum {
  VALUE_ONE = "VALUE_ONE",
  VALUE_TWO = "VALUE_TWO"
}

export declare class Nested {
  readonly valueOne?: number | null;
  readonly valueTwo?: string | null;
  constructor(init: ModelInit<Nested>);
}

export declare class Post {
  readonly id: string;
  readonly title: string;
  readonly content: string;
  readonly createdAt: string;
  readonly updatedAt?: string | null;
  readonly draft?: boolean | null;
  readonly rating?: number | null;
  readonly status?: PostStatus | keyof typeof PostStatus | null;
  readonly comments?: (Comment | null)[] | null;
  constructor(init: ModelInit<Post>);
  static copyOf(source: Post, mutator: (draft: MutableModel<Post>) => MutableModel<Post> | void): Post;
}

export declare class Comment {
  readonly id: string;
  readonly content: string;
  readonly createdAt: string;
  readonly post?: Post | null;
  constructor(init: ModelInit<Comment>);
  static copyOf(source: Comment, mutator: (draft: MutableModel<Comment>) => MutableModel<Comment> | void): Comment;
}

export declare class Project1 {
  readonly id: string;
  readonly name?: string | null;
  readonly team?: Team1 | null;
  constructor(init: ModelInit<Project1>);
  static copyOf(source: Project1, mutator: (draft: MutableModel<Project1>) => MutableModel<Project1> | void): Project1;
}

export declare class Team1 {
  readonly id: string;
  readonly name: string;
  constructor(init: ModelInit<Team1>);
  static copyOf(source: Team1, mutator: (draft: MutableModel<Team1>) => MutableModel<Team1> | void): Team1;
}

export declare class Project2 {
  readonly id: string;
  readonly name?: string | null;
  readonly teamID: string;
  readonly team?: Team2 | null;
  constructor(init: ModelInit<Project2>);
  static copyOf(source: Project2, mutator: (draft: MutableModel<Project2>) => MutableModel<Project2> | void): Project2;
}

export declare class Team2 {
  readonly id: string;
  readonly name: string;
  constructor(init: ModelInit<Team2>);
  static copyOf(source: Team2, mutator: (draft: MutableModel<Team2>) => MutableModel<Team2> | void): Team2;
}

export declare class Post3 {
  readonly id: string;
  readonly title: string;
  readonly comments?: (Comment3 | null)[] | null;
  constructor(init: ModelInit<Post3>);
  static copyOf(source: Post3, mutator: (draft: MutableModel<Post3>) => MutableModel<Post3> | void): Post3;
}

export declare class Comment3 {
  readonly id: string;
  readonly postID: string;
  readonly content: string;
  constructor(init: ModelInit<Comment3>);
  static copyOf(source: Comment3, mutator: (draft: MutableModel<Comment3>) => MutableModel<Comment3> | void): Comment3;
}

export declare class Post4 {
  readonly id: string;
  readonly title: string;
  readonly comments?: (Comment4 | null)[] | null;
  constructor(init: ModelInit<Post4>);
  static copyOf(source: Post4, mutator: (draft: MutableModel<Post4>) => MutableModel<Post4> | void): Post4;
}

export declare class Comment4 {
  readonly id: string;
  readonly content: string;
  readonly post?: Post4 | null;
  constructor(init: ModelInit<Comment4>);
  static copyOf(source: Comment4, mutator: (draft: MutableModel<Comment4>) => MutableModel<Comment4> | void): Comment4;
}

export declare class Post5 {
  readonly id: string;
  readonly title: string;
  readonly editors?: (PostEditor5 | null)[] | null;
  constructor(init: ModelInit<Post5>);
  static copyOf(source: Post5, mutator: (draft: MutableModel<Post5>) => MutableModel<Post5> | void): Post5;
}

export declare class PostEditor5 {
  readonly id: string;
  readonly post: Post5;
  readonly editor: User5;
  constructor(init: ModelInit<PostEditor5>);
  static copyOf(source: PostEditor5, mutator: (draft: MutableModel<PostEditor5>) => MutableModel<PostEditor5> | void): PostEditor5;
}

export declare class User5 {
  readonly id: string;
  readonly username: string;
  readonly posts?: (PostEditor5 | null)[] | null;
  constructor(init: ModelInit<User5>);
  static copyOf(source: User5, mutator: (draft: MutableModel<User5>) => MutableModel<User5> | void): User5;
}

export declare class Blog6 {
  readonly id: string;
  readonly name: string;
  readonly posts?: (Post6 | null)[] | null;
  constructor(init: ModelInit<Blog6>);
  static copyOf(source: Blog6, mutator: (draft: MutableModel<Blog6>) => MutableModel<Blog6> | void): Blog6;
}

export declare class Post6 {
  readonly id: string;
  readonly title: string;
  readonly blog?: Blog6 | null;
  readonly comments?: (Comment6 | null)[] | null;
  constructor(init: ModelInit<Post6>);
  static copyOf(source: Post6, mutator: (draft: MutableModel<Post6>) => MutableModel<Post6> | void): Post6;
}

export declare class Comment6 {
  readonly id: string;
  readonly post?: Post6 | null;
  readonly content: string;
  constructor(init: ModelInit<Comment6>);
  static copyOf(source: Comment6, mutator: (draft: MutableModel<Comment6>) => MutableModel<Comment6> | void): Comment6;
}

export declare class ScalarContainer {
  readonly id: string;
  readonly myString?: string | null;
  readonly myInt?: number | null;
  readonly myDouble?: number | null;
  readonly myBool?: boolean | null;
  readonly myDate?: string | null;
  readonly myTime?: string | null;
  readonly myDateTime?: string | null;
  readonly myTimeStamp?: number | null;
  readonly myEmail?: string | null;
  readonly myJSON?: string | null;
  readonly myPhone?: string | null;
  readonly myURL?: string | null;
  readonly myIPAddress?: string | null;
  constructor(init: ModelInit<ScalarContainer>);
  static copyOf(source: ScalarContainer, mutator: (draft: MutableModel<ScalarContainer>) => MutableModel<ScalarContainer> | void): ScalarContainer;
}

export declare class ListIntContainer {
  readonly id: string;
  readonly test: number;
  readonly nullableInt?: number | null;
  readonly intList: number[];
  readonly intNullableList?: number[] | null;
  readonly nullableIntList: (number | null)[];
  readonly nullableIntNullableList?: (number | null)[] | null;
  constructor(init: ModelInit<ListIntContainer>);
  static copyOf(source: ListIntContainer, mutator: (draft: MutableModel<ListIntContainer>) => MutableModel<ListIntContainer> | void): ListIntContainer;
}

export declare class ListStringContainer {
  readonly id: string;
  readonly test: string;
  readonly nullableString?: string | null;
  readonly stringList: string[];
  readonly stringNullableList?: string[] | null;
  readonly nullableStringList: (string | null)[];
  readonly nullableStringNullableList?: (string | null)[] | null;
  constructor(init: ModelInit<ListStringContainer>);
  static copyOf(source: ListStringContainer, mutator: (draft: MutableModel<ListStringContainer>) => MutableModel<ListStringContainer> | void): ListStringContainer;
}

export declare class EnumTestModel {
  readonly id: string;
  readonly enumVal: TestEnum | keyof typeof TestEnum;
  readonly nullableEnumVal?: TestEnum | keyof typeof TestEnum | null;
  readonly enumList: TestEnum[] | keyof typeof TestEnum;
  readonly enumNullableList?: TestEnum[] | keyof typeof TestEnum | null;
  readonly nullableEnumList: (TestEnum | null)[] | keyof typeof TestEnum;
  readonly nullableEnumNullableList?: (TestEnum | null)[] | keyof typeof TestEnum | null;
  constructor(init: ModelInit<EnumTestModel>);
  static copyOf(source: EnumTestModel, mutator: (draft: MutableModel<EnumTestModel>) => MutableModel<EnumTestModel> | void): EnumTestModel;
}

export declare class NestedTypeTestModel {
  readonly id: string;
  readonly nestedVal: Nested;
  readonly nullableNestedVal?: Nested | null;
  readonly nestedList: Nested[];
  readonly nestedNullableList?: Nested[] | null;
  readonly nullableNestedList: (Nested | null)[];
  readonly nullableNestedNullableList?: (Nested | null)[] | null;
  constructor(init: ModelInit<NestedTypeTestModel>);
  static copyOf(source: NestedTypeTestModel, mutator: (draft: MutableModel<NestedTypeTestModel>) => MutableModel<NestedTypeTestModel> | void): NestedTypeTestModel;
}