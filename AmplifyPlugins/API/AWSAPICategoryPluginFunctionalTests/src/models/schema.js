export const schema = {
    "models": {
        "Post": {
            "name": "Post",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "title": {
                    "name": "title",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "content": {
                    "name": "content",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": true,
                    "attributes": []
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": []
                },
                "draft": {
                    "name": "draft",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "rating": {
                    "name": "rating",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "status": {
                    "name": "status",
                    "isArray": false,
                    "type": {
                        "enum": "PostStatus"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "comments": {
                    "name": "comments",
                    "isArray": true,
                    "type": {
                        "model": "Comment"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": "post"
                    }
                }
            },
            "syncable": true,
            "pluralName": "Posts",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                }
            ]
        },
        "Comment": {
            "name": "Comment",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "content": {
                    "name": "content",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": true,
                    "attributes": []
                },
                "post": {
                    "name": "post",
                    "isArray": false,
                    "type": {
                        "model": "Post"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetName": "commentPostId"
                    }
                }
            },
            "syncable": true,
            "pluralName": "Comments",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                }
            ]
        },
        "Project1": {
            "name": "Project1",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "team": {
                    "name": "team",
                    "isArray": false,
                    "type": {
                        "model": "Team1"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetName": "project1TeamId"
                    }
                }
            },
            "syncable": true,
            "pluralName": "Project1s",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                }
            ]
        },
        "Team1": {
            "name": "Team1",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                }
            },
            "syncable": true,
            "pluralName": "Team1s",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                }
            ]
        },
        "Project2": {
            "name": "Project2",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "teamID": {
                    "name": "teamID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "team": {
                    "name": "team",
                    "isArray": false,
                    "type": {
                        "model": "Team2"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "HAS_ONE",
                        "associatedWith": "id",
                        "targetName": "teamID"
                    }
                }
            },
            "syncable": true,
            "pluralName": "Project2s",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                }
            ]
        },
        "Team2": {
            "name": "Team2",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                }
            },
            "syncable": true,
            "pluralName": "Team2s",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                }
            ]
        },
        "Post3": {
            "name": "Post3",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "title": {
                    "name": "title",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "comments": {
                    "name": "comments",
                    "isArray": true,
                    "type": {
                        "model": "Comment3"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": "postID"
                    }
                }
            },
            "syncable": true,
            "pluralName": "Post3s",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                }
            ]
        },
        "Comment3": {
            "name": "Comment3",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "postID": {
                    "name": "postID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "content": {
                    "name": "content",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                }
            },
            "syncable": true,
            "pluralName": "Comment3s",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byPost3",
                        "fields": [
                            "postID",
                            "content"
                        ]
                    }
                }
            ]
        },
        "Post4": {
            "name": "Post4",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "title": {
                    "name": "title",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "comments": {
                    "name": "comments",
                    "isArray": true,
                    "type": {
                        "model": "Comment4"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": "post"
                    }
                }
            },
            "syncable": true,
            "pluralName": "Post4s",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                }
            ]
        },
        "Comment4": {
            "name": "Comment4",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "content": {
                    "name": "content",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "post": {
                    "name": "post",
                    "isArray": false,
                    "type": {
                        "model": "Post4"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetName": "postID"
                    }
                }
            },
            "syncable": true,
            "pluralName": "Comment4s",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byPost4",
                        "fields": [
                            "postID",
                            "content"
                        ]
                    }
                }
            ]
        },
        "Post5": {
            "name": "Post5",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "title": {
                    "name": "title",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "editors": {
                    "name": "editors",
                    "isArray": true,
                    "type": {
                        "model": "PostEditor5"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": "post"
                    }
                }
            },
            "syncable": true,
            "pluralName": "Post5s",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                }
            ]
        },
        "PostEditor5": {
            "name": "PostEditor5",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "post": {
                    "name": "post",
                    "isArray": false,
                    "type": {
                        "model": "Post5"
                    },
                    "isRequired": true,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetName": "postID"
                    }
                },
                "editor": {
                    "name": "editor",
                    "isArray": false,
                    "type": {
                        "model": "User5"
                    },
                    "isRequired": true,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetName": "editorID"
                    }
                }
            },
            "syncable": true,
            "pluralName": "PostEditor5s",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byPost5",
                        "fields": [
                            "postID",
                            "editorID"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byEditor5",
                        "fields": [
                            "editorID",
                            "postID"
                        ]
                    }
                }
            ]
        },
        "User5": {
            "name": "User5",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "username": {
                    "name": "username",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "posts": {
                    "name": "posts",
                    "isArray": true,
                    "type": {
                        "model": "PostEditor5"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": "editor"
                    }
                }
            },
            "syncable": true,
            "pluralName": "User5s",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                }
            ]
        },
        "Blog6": {
            "name": "Blog6",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "posts": {
                    "name": "posts",
                    "isArray": true,
                    "type": {
                        "model": "Post6"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": "blog"
                    }
                }
            },
            "syncable": true,
            "pluralName": "Blog6s",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                }
            ]
        },
        "Post6": {
            "name": "Post6",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "title": {
                    "name": "title",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "blog": {
                    "name": "blog",
                    "isArray": false,
                    "type": {
                        "model": "Blog6"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetName": "blogID"
                    }
                },
                "comments": {
                    "name": "comments",
                    "isArray": true,
                    "type": {
                        "model": "Comment6"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": "post"
                    }
                }
            },
            "syncable": true,
            "pluralName": "Post6s",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byBlog",
                        "fields": [
                            "blogID"
                        ]
                    }
                }
            ]
        },
        "Comment6": {
            "name": "Comment6",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "post": {
                    "name": "post",
                    "isArray": false,
                    "type": {
                        "model": "Post6"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetName": "postID"
                    }
                },
                "content": {
                    "name": "content",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                }
            },
            "syncable": true,
            "pluralName": "Comment6s",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byPost",
                        "fields": [
                            "postID",
                            "content"
                        ]
                    }
                }
            ]
        },
        "ScalarContainer": {
            "name": "ScalarContainer",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "myString": {
                    "name": "myString",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "myInt": {
                    "name": "myInt",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "myDouble": {
                    "name": "myDouble",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "myBool": {
                    "name": "myBool",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "myDate": {
                    "name": "myDate",
                    "isArray": false,
                    "type": "AWSDate",
                    "isRequired": false,
                    "attributes": []
                },
                "myTime": {
                    "name": "myTime",
                    "isArray": false,
                    "type": "AWSTime",
                    "isRequired": false,
                    "attributes": []
                },
                "myDateTime": {
                    "name": "myDateTime",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": []
                },
                "myTimeStamp": {
                    "name": "myTimeStamp",
                    "isArray": false,
                    "type": "AWSTimestamp",
                    "isRequired": false,
                    "attributes": []
                },
                "myEmail": {
                    "name": "myEmail",
                    "isArray": false,
                    "type": "AWSEmail",
                    "isRequired": false,
                    "attributes": []
                },
                "myJSON": {
                    "name": "myJSON",
                    "isArray": false,
                    "type": "AWSJSON",
                    "isRequired": false,
                    "attributes": []
                },
                "myPhone": {
                    "name": "myPhone",
                    "isArray": false,
                    "type": "AWSPhone",
                    "isRequired": false,
                    "attributes": []
                },
                "myURL": {
                    "name": "myURL",
                    "isArray": false,
                    "type": "AWSURL",
                    "isRequired": false,
                    "attributes": []
                },
                "myIPAddress": {
                    "name": "myIPAddress",
                    "isArray": false,
                    "type": "AWSIPAddress",
                    "isRequired": false,
                    "attributes": []
                }
            },
            "syncable": true,
            "pluralName": "ScalarContainers",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                }
            ]
        },
        "ListIntContainer": {
            "name": "ListIntContainer",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "test": {
                    "name": "test",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "nullableInt": {
                    "name": "nullableInt",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "intList": {
                    "name": "intList",
                    "isArray": true,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": [],
                    "isArrayNullable": false
                },
                "intNullableList": {
                    "name": "intNullableList",
                    "isArray": true,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "nullableIntList": {
                    "name": "nullableIntList",
                    "isArray": true,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": false
                },
                "nullableIntNullableList": {
                    "name": "nullableIntNullableList",
                    "isArray": true,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                }
            },
            "syncable": true,
            "pluralName": "ListIntContainers",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                }
            ]
        },
        "ListStringContainer": {
            "name": "ListStringContainer",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "test": {
                    "name": "test",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "nullableString": {
                    "name": "nullableString",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "stringList": {
                    "name": "stringList",
                    "isArray": true,
                    "type": "String",
                    "isRequired": true,
                    "attributes": [],
                    "isArrayNullable": false
                },
                "stringNullableList": {
                    "name": "stringNullableList",
                    "isArray": true,
                    "type": "String",
                    "isRequired": true,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "nullableStringList": {
                    "name": "nullableStringList",
                    "isArray": true,
                    "type": "String",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": false
                },
                "nullableStringNullableList": {
                    "name": "nullableStringNullableList",
                    "isArray": true,
                    "type": "String",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                }
            },
            "syncable": true,
            "pluralName": "ListStringContainers",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                }
            ]
        },
        "EnumTestModel": {
            "name": "EnumTestModel",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "enumVal": {
                    "name": "enumVal",
                    "isArray": false,
                    "type": {
                        "enum": "TestEnum"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "nullableEnumVal": {
                    "name": "nullableEnumVal",
                    "isArray": false,
                    "type": {
                        "enum": "TestEnum"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "enumList": {
                    "name": "enumList",
                    "isArray": true,
                    "type": {
                        "enum": "TestEnum"
                    },
                    "isRequired": true,
                    "attributes": [],
                    "isArrayNullable": false
                },
                "enumNullableList": {
                    "name": "enumNullableList",
                    "isArray": true,
                    "type": {
                        "enum": "TestEnum"
                    },
                    "isRequired": true,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "nullableEnumList": {
                    "name": "nullableEnumList",
                    "isArray": true,
                    "type": {
                        "enum": "TestEnum"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": false
                },
                "nullableEnumNullableList": {
                    "name": "nullableEnumNullableList",
                    "isArray": true,
                    "type": {
                        "enum": "TestEnum"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                }
            },
            "syncable": true,
            "pluralName": "EnumTestModels",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                }
            ]
        },
        "NestedTypeTestModel": {
            "name": "NestedTypeTestModel",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "nestedVal": {
                    "name": "nestedVal",
                    "isArray": false,
                    "type": {
                        "nonModel": "Nested"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "nullableNestedVal": {
                    "name": "nullableNestedVal",
                    "isArray": false,
                    "type": {
                        "nonModel": "Nested"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "nestedList": {
                    "name": "nestedList",
                    "isArray": true,
                    "type": {
                        "nonModel": "Nested"
                    },
                    "isRequired": true,
                    "attributes": [],
                    "isArrayNullable": false
                },
                "nestedNullableList": {
                    "name": "nestedNullableList",
                    "isArray": true,
                    "type": {
                        "nonModel": "Nested"
                    },
                    "isRequired": true,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "nullableNestedList": {
                    "name": "nullableNestedList",
                    "isArray": true,
                    "type": {
                        "nonModel": "Nested"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": false
                },
                "nullableNestedNullableList": {
                    "name": "nullableNestedNullableList",
                    "isArray": true,
                    "type": {
                        "nonModel": "Nested"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                }
            },
            "syncable": true,
            "pluralName": "NestedTypeTestModels",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                }
            ]
        }
    },
    "enums": {
        "PostStatus": {
            "name": "PostStatus",
            "values": [
                "PRIVATE",
                "DRAFT",
                "PUBLISHED"
            ]
        },
        "TestEnum": {
            "name": "TestEnum",
            "values": [
                "VALUE_ONE",
                "VALUE_TWO"
            ]
        }
    },
    "nonModels": {
        "Nested": {
            "name": "Nested",
            "fields": {
                "valueOne": {
                    "name": "valueOne",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "valueTwo": {
                    "name": "valueTwo",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                }
            }
        }
    },
    "version": "b3dd418b79a84fe2aa587d90790ebe23"
};