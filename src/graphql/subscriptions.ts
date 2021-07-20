/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateEmployee = /* GraphQL */ `
  subscription OnCreateEmployee {
    onCreateEmployee {
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
export const onUpdateEmployee = /* GraphQL */ `
  subscription OnUpdateEmployee {
    onUpdateEmployee {
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
export const onDeleteEmployee = /* GraphQL */ `
  subscription OnDeleteEmployee {
    onDeleteEmployee {
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
export const onCreateDepartment = /* GraphQL */ `
  subscription OnCreateDepartment {
    onCreateDepartment {
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
export const onUpdateDepartment = /* GraphQL */ `
  subscription OnUpdateDepartment {
    onUpdateDepartment {
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
export const onDeleteDepartment = /* GraphQL */ `
  subscription OnDeleteDepartment {
    onDeleteDepartment {
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
