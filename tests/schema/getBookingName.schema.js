export const VALID_BOOKING_NAME = {
    
        "$schema": "https://json-schema.org/draft/2019-09/schema",
        "$id": "http://example.com/example.json",
        "type": "array",
        "default": [],
        "title": "Root Schema",
        "items": {
            "type": "object",
            "default": {},
            "title": "A Schema",
            "required": [
                "bookingid"
            ],
            "properties": {
                "bookingid": {
                    "type": "integer",
                    "default": 0,
                    "title": "The bookingid Schema",
                    "examples": [
                        6516
                    ]
                }
            },
            "examples": [{
                "bookingid": 6516
            }]
        },
        "examples": [
            [{
                "bookingid": 6516
            }]
        ]
    }
