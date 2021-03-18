module.exports.public = async event => {
    return {
        statusCode: 200,
        body: JSON.stringify(
            {
                message: 'Awesome Travel Inc can take you anywhere',
            },
            null,
            2
            )
    }
}

module.exports.authenticated = async event => {
    return {
        statusCode: 200,
        body: JSON.stringify(
            {
                message: 'Welcome registered user, where do you want to go today?',
            },
            null,
            2
            )
    }
}

module.exports.bookings = async event => {
    return {
        statusCode: 200,
        body: JSON.stringify(
            {
                message: 'Here are your bookings.',
                tickets: [
                    {id:123, from:"LHR", to: "SFO", seatPref: "window" },
                    {id:456, from: "AMS", to: "LAS", seatPref: "aisle", upgrade: "yes" }
                ]
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
                message: 'Here is your profile',
                profile: {
                    title: "Mr",
                    givenName: "Dade",
                    familyName: "Murphy",
                    passportNumber: "533301334",
                    nationality: "American"
                }
            },
            null,
            2
            )
    }
}