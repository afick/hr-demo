# Technologies used for this demo

## jest, typescript, react, ag-grid
`yarn create react-app hr-demo --template typescript`

## ant design
`yarn add antd`

_would use sass or less for css if had more time_

## amplify
utilizing graphql, appsync, and CI/CD

## data design
two tables in dynamodb

_would use postgres or aurora for this if had more time, with custom resolvers_
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

_Would use cypress for BDD end E2E testing_


### run application
`yarn`

`yarn start`

#### site
* create / update / delete employees
* create departments
* search employees
* view employees by department

[https://main.d3ltnibt9kbo7y.amplifyapp.com/] Live dev site
