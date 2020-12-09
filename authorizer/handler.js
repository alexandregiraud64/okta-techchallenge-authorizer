exports.auth = function (event,context){
    let bearer = event.authorizationToken
    //TASK 1
    //implement verification
    context.succeed(generateAuthResponse("Unknown User", 'Allow',  event.methodArn))
    //context.fail('Unauthorized')
}

exports.admin = function (event,context){
    let bearer = event.authorizationToken
    //TASK 2
    //implement verification with a given scope
    context.succeed(generateAuthResponse("Unknown User", 'Allow',  event.methodArn))
    //context.fail('Unauthorized')
}

exports.sensitive = function (event,context){
    let bearer = event.authorizationToken
    //TASK 3
    //implement introspection
    context.succeed(generateAuthResponse("Unknown User", 'Allow',  event.methodArn))
    //context.fail('Unauthorized')
}

function generateAuthResponse(principalId, effect, methodArn) {
    return {
        'principalId': principalId,
        'policyDocument': {
            Version: '2012-10-17',
            Statement: [{
                Action: 'execute-api:Invoke',
                Effect: effect,
                Resource: methodArn
            }]
        }
    }
}