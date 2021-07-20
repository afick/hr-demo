/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getEmployee = /* GraphQL */ `
  query GetEmployee($id: ID!) {
    getEmployee(id: $id) {
      id
      firstName
      lastName
      title
      linkedInUrl
      headshot
      hireDate
      departmentId
      createdAt
      updatedAt
    }
  }
`;
export const listEmployees = /* GraphQL */ `
  query ListEmployees(
    $filter: ModelEmployeeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEmployees(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        firstName
        lastName
        title
        linkedInUrl
        headshot
        hireDate
        departmentId
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getDepartment = /* GraphQL */ `
  query GetDepartment($id: ID!) {
    getDepartment(id: $id) {
      id
      DepartmentName
      DepartmentIcon
      employees {
        items {
          id
          firstName
          lastName
          title
          linkedInUrl
          headshot
          hireDate
          departmentId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listDepartments = /* GraphQL */ `
  query ListDepartments(
    $filter: ModelDepartmentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDepartments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        DepartmentName
        DepartmentIcon
        employees {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
