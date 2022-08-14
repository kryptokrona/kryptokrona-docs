# Testing

## Manual Testing

We have some options for manual testing of the endpoints which are using .http files. Recommended to use WebStorm in order
to run these tests, but it should be possible to import these to another HTTP client tool as well. If we add more endpoints
it should be added to corresponding file or adding a new if we have an entirely new endpoint path.

## Unit testing

Unit tests are conducted using Mocha and Chai. All unit tests can be found under the **tests** directory in the root of
this repository.

To run the tests:

- `npm run test`

## Code Coverage

We are using C8 as the tool to execute the code coverage. We have a global threshold of 75%, this will probably increase a little over time when we optimize our code. But for now we will use 75%. To run all test and get code coverage results run the command:

- `npm run code-coverage`

To be able to view in detail we can generate the report in HTML, we run the following command (it will automatically open it in your default browser):

- `npm run code-coverage-report`