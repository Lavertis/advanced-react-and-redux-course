export default {
    "$schema": "https://json-schema.org/draft/2019-09/schema",
    "$id": "http://example.com/example.json",
    "type": "object",
    "default": {},
    "title": "Root Schema",
    "required": [
        "comments",
        "auth"
    ],
    "properties": {
        "comments": {
            "type": "array",
            "default": [],
            "title": "The comments Schema",
            "items": {
                "type": "string",
                "title": "A Schema",
                "examples": [
                    "Comment #1",
                    "Comment #2"
                ]
            },
            "examples": [
                ["Comment #1",
                    "Comment #2"
                ]
            ]
        },
        "auth": {
            "type": "boolean",
            "default": false,
            "title": "The auth Schema",
            "examples": [
                true
            ]
        }
    },
    "examples": [{
        "comments": [
            "Comment #1",
            "Comment #2"
        ],
        "auth": true
    }]
}