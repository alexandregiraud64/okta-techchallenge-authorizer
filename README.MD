# Okta Technical Challenge - API Access Management

## Introduction

This task is to demonstrate your understanding of authorization to an API
gateway using OAuth tokens. It is important to remember that during the interview
we'll be asking you to explain what you have built, so make sure you have a
clear understanding of why you are doing a given operation.

## Setup

This challenge uses serverless to spin up resources in AWS which you will
protect.
 * Fork this repo to your own github (make it private)
 * Clone your repo locally
 * Install and configure serverless if not already installed (AWS quickstart
   guide
   [here](https://www.serverless.com/framework/docs/providers/aws/guide/quick-start/))
 * Copy the `config.dev.json.template` and rename to `config.dev.json`
 * Fill in the values in `config.dev.json` with those of your environment
 * `serverless deploy` to launch your service

## The challenge
This repo contains a stub file for an OAuth authorizer (`/authorizer/handler.js`)
 which protects access to the dummy API. Your task is to build out this
 authorizer to validate access tokens minted by your Okta tenant's authorization server.

There are three steps to this each of which will require a different approach:
* Authenticated: Implement handler.auth so to verify the provided access token.
* Admin: Implement handler.admin to verify the provided access token has a given
  scope.
* Sensitive: Implement handler.sensitive to introspect the provided access
  token.

## The interview

During the interview you will be asked to demonstrate each of the calls to your
service, explain how you implemented the authorizer and why each step requires a
different approach.

