module.exports.public = async event => {
    return {
        statusCode: 200,
        body: JSON.stringify(
            {
                message: 'This is public content, anyone can read.',
            },
            null,
            2
            )
    }
}

module.exports.authenticated = async event => {
    console.log("authentd")
    return {
        statusCode: 200,
        body: JSON.stringify(
            {
                message: 'This is authenticated content, only users can read.',
            },
            null,
            2
            )
    }
}

module.exports.admin = async event => {
    return {
        statusCode: 200,
        body: JSON.stringify(
            {
                message: 'This is an admin scoped request, only tokens with "admin" scope may make this call.',
            },
            null,
            2
            )
    }
}

module.exports.sensitive = async event => {
    return {
        statusCode: 200,
        body: JSON.stringify(
            {
                message: 'This is an introspected request, revoked tokens are not accepted.',
            },
            null,
            2
            )
    }
}