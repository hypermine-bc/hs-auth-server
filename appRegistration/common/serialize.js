const success = (data) => {
    return {
        "links": {},
        "data": [
            {
                "attributes": data,
                "relationships": {}
            }
        ],
        "meta": {},
        "includes": []
    }
}
const error = (code, message) => {
    return {
        "links": {},
        "data": [],
        "errors": [
            {
                "detail": {
                    code: code || 400,
                    message: message || "Bad Request"
                },
            }
        ],
        "meta": {},
        "includes": []
    }
}


module.exports.success = success
module.exports.error = error