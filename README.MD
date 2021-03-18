# Okta Technical Challenge - API Access Management

## Introduction

This task is to demonstrate your understanding of authorization to an API
gateway using OAuth tokens. It is important to remember that during the interview
we'll be asking you to explain what you have built and why this approach is preferred.

## Setup

This challenge uses Serverless to spin up free resources in AWS which you will
protect.
 * Fork this repo to your own github (make it private)
 * Clone your repo locally
 * Install and configure Serverless if not already installed (AWS quickstart
   guide
   [here](https://www.serverless.com/framework/docs/providers/aws/guide/quick-start/))
 * Copy the `config.dev.json.template` and rename to `config.dev.json`
 * Fill in the values in `config.dev.json` with those of your environment
 * `serverless deploy` to launch your service

 A Postman collection has been provided to allow you to easily call the dummy API.
 The unauthenticated endpoint of `/` can be used to test your deployment.

## The challenge
Awesome Travel Inc have created an API to allow their customers to make 
bookings and manage their person information on the service. This API is found in
`/dummyapi.js` it contains a number of operations, each of these is protected by 
one of three authorizers. A stub for these authorizers is provided in 
`/authorizer/handler.js`. Currently all of these authorizers allow anyone to call the API.Your task is to build out the authorizers to validate access tokens minted by your Okta tenant's authorization server.

Each of the authorizers will require a different approach:
* Authenticated: Implement handler.auth to verify the provided access token is valid.
* Bookings: Implement handler.admin to verify the provided access token is valid and has a scope of 'bookings:read'.
* Personal: Implement handler.personal to introspect the provided access
  token to ensure it is not revoked.

