# Technologies used for this demo

## jest, typescript, react, ag-grid
`yarn create react-app hr-demo --template typescript`

## ant design
`yarn add antd`

## amplify
utilizing graphql, appsync, and CI/CD

## data design
two tables in dynamodb

#### employee
    id: ID!
    firstName: String!
    lastName: String!
    title: String!
    linkedInUrl: String
    headshot: String
    hireDate: String!
    departmentId: ID!

#### department
    id: ID!
    DepartmentName: String!
    DepartmentIcon: String


## testing
Jest with @testing-library/react

_Would use cypress for front end E2E testing_


### run application
`yarn`

`yarn start`
