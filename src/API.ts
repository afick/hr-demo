/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateEmployeeInput = {
  id?: string | null,
  firstName: string,
  lastName: string,
  title: string,
  linkedInUrl?: string | null,
  headshot?: string | null,
  hireDate?: string | null,
  departmentId: string,
};

export type ModelEmployeeConditionInput = {
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  title?: ModelStringInput | null,
  linkedInUrl?: ModelStringInput | null,
  headshot?: ModelStringInput | null,
  hireDate?: ModelStringInput | null,
  departmentId?: ModelIDInput | null,
  and?: Array< ModelEmployeeConditionInput | null > | null,
  or?: Array< ModelEmployeeConditionInput | null > | null,
  not?: ModelEmployeeConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type Employee = {
  __typename: "Employee",
  id?: string,
  firstName?: string,
  lastName?: string,
  title?: string,
  linkedInUrl?: string | null,
  headshot?: string | null,
  hireDate?: string | null,
  departmentId?: string,
  createdAt?: string,
  updatedAt?: string,
};

export type UpdateEmployeeInput = {
  id: string,
  firstName?: string | null,
  lastName?: string | null,
  title?: string | null,
  linkedInUrl?: string | null,
  headshot?: string | null,
  hireDate?: string | null,
  departmentId?: string | null,
};

export type DeleteEmployeeInput = {
  id?: string | null,
};

export type CreateDepartmentInput = {
  id?: string | null,
  DepartmentName: string,
  DepartmentIcon?: string | null,
};

export type ModelDepartmentConditionInput = {
  DepartmentName?: ModelStringInput | null,
  DepartmentIcon?: ModelStringInput | null,
  and?: Array< ModelDepartmentConditionInput | null > | null,
  or?: Array< ModelDepartmentConditionInput | null > | null,
  not?: ModelDepartmentConditionInput | null,
};

export type Department = {
  __typename: "Department",
  id?: string,
  DepartmentName?: string,
  DepartmentIcon?: string | null,
  employees?: ModelEmployeeConnection,
  createdAt?: string,
  updatedAt?: string,
};

export type ModelEmployeeConnection = {
  __typename: "ModelEmployeeConnection",
  items?:  Array<Employee | null > | null,
  nextToken?: string | null,
};

export type UpdateDepartmentInput = {
  id: string,
  DepartmentName?: string | null,
  DepartmentIcon?: string | null,
};

export type DeleteDepartmentInput = {
  id?: string | null,
};

export type ModelEmployeeFilterInput = {
  id?: ModelIDInput | null,
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  title?: ModelStringInput | null,
  linkedInUrl?: ModelStringInput | null,
  headshot?: ModelStringInput | null,
  hireDate?: ModelStringInput | null,
  departmentId?: ModelIDInput | null,
  and?: Array< ModelEmployeeFilterInput | null > | null,
  or?: Array< ModelEmployeeFilterInput | null > | null,
  not?: ModelEmployeeFilterInput | null,
};

export type ModelDepartmentFilterInput = {
  id?: ModelIDInput | null,
  DepartmentName?: ModelStringInput | null,
  DepartmentIcon?: ModelStringInput | null,
  and?: Array< ModelDepartmentFilterInput | null > | null,
  or?: Array< ModelDepartmentFilterInput | null > | null,
  not?: ModelDepartmentFilterInput | null,
};

export type ModelDepartmentConnection = {
  __typename: "ModelDepartmentConnection",
  items?:  Array<Department | null > | null,
  nextToken?: string | null,
};

export type CreateEmployeeMutationVariables = {
  input?: CreateEmployeeInput,
  condition?: ModelEmployeeConditionInput | null,
};

export type CreateEmployeeMutation = {
  createEmployee?:  {
    __typename: "Employee",
    id: string,
    firstName: string,
    lastName: string,
    title: string,
    linkedInUrl?: string | null,
    headshot?: string | null,
    hireDate?: string | null,
    departmentId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateEmployeeMutationVariables = {
  input?: UpdateEmployeeInput,
  condition?: ModelEmployeeConditionInput | null,
};

export type UpdateEmployeeMutation = {
  updateEmployee?:  {
    __typename: "Employee",
    id: string,
    firstName: string,
    lastName: string,
    title: string,
    linkedInUrl?: string | null,
    headshot?: string | null,
    hireDate?: string | null,
    departmentId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteEmployeeMutationVariables = {
  input?: DeleteEmployeeInput,
  condition?: ModelEmployeeConditionInput | null,
};

export type DeleteEmployeeMutation = {
  deleteEmployee?:  {
    __typename: "Employee",
    id: string,
    firstName: string,
    lastName: string,
    title: string,
    linkedInUrl?: string | null,
    headshot?: string | null,
    hireDate?: string | null,
    departmentId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateDepartmentMutationVariables = {
  input?: CreateDepartmentInput,
  condition?: ModelDepartmentConditionInput | null,
};

export type CreateDepartmentMutation = {
  createDepartment?:  {
    __typename: "Department",
    id: string,
    DepartmentName: string,
    DepartmentIcon?: string | null,
    employees?:  {
      __typename: "ModelEmployeeConnection",
      items?:  Array< {
        __typename: "Employee",
        id: string,
        firstName: string,
        lastName: string,
        title: string,
        linkedInUrl?: string | null,
        headshot?: string | null,
        hireDate?: string | null,
        departmentId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateDepartmentMutationVariables = {
  input?: UpdateDepartmentInput,
  condition?: ModelDepartmentConditionInput | null,
};

export type UpdateDepartmentMutation = {
  updateDepartment?:  {
    __typename: "Department",
    id: string,
    DepartmentName: string,
    DepartmentIcon?: string | null,
    employees?:  {
      __typename: "ModelEmployeeConnection",
      items?:  Array< {
        __typename: "Employee",
        id: string,
        firstName: string,
        lastName: string,
        title: string,
        linkedInUrl?: string | null,
        headshot?: string | null,
        hireDate?: string | null,
        departmentId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteDepartmentMutationVariables = {
  input?: DeleteDepartmentInput,
  condition?: ModelDepartmentConditionInput | null,
};

export type DeleteDepartmentMutation = {
  deleteDepartment?:  {
    __typename: "Department",
    id: string,
    DepartmentName: string,
    DepartmentIcon?: string | null,
    employees?:  {
      __typename: "ModelEmployeeConnection",
      items?:  Array< {
        __typename: "Employee",
        id: string,
        firstName: string,
        lastName: string,
        title: string,
        linkedInUrl?: string | null,
        headshot?: string | null,
        hireDate?: string | null,
        departmentId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetEmployeeQueryVariables = {
  id?: string,
};

export type GetEmployeeQuery = {
  getEmployee?:  {
    __typename: "Employee",
    id: string,
    firstName: string,
    lastName: string,
    title: string,
    linkedInUrl?: string | null,
    headshot?: string | null,
    hireDate?: string | null,
    departmentId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListEmployeesQueryVariables = {
  filter?: ModelEmployeeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListEmployeesQuery = {
  listEmployees?:  {
    __typename: "ModelEmployeeConnection",
    items?:  Array< {
      __typename: "Employee",
      id: string,
      firstName: string,
      lastName: string,
      title: string,
      linkedInUrl?: string | null,
      headshot?: string | null,
      hireDate?: string | null,
      departmentId: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetDepartmentQueryVariables = {
  id?: string,
};

export type GetDepartmentQuery = {
  getDepartment?:  {
    __typename: "Department",
    id: string,
    DepartmentName: string,
    DepartmentIcon?: string | null,
    employees?:  {
      __typename: "ModelEmployeeConnection",
      items?:  Array< {
        __typename: "Employee",
        id: string,
        firstName: string,
        lastName: string,
        title: string,
        linkedInUrl?: string | null,
        headshot?: string | null,
        hireDate?: string | null,
        departmentId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListDepartmentsQueryVariables = {
  filter?: ModelDepartmentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListDepartmentsQuery = {
  listDepartments?:  {
    __typename: "ModelDepartmentConnection",
    items?:  Array< {
      __typename: "Department",
      id: string,
      DepartmentName: string,
      DepartmentIcon?: string | null,
      employees?:  {
        __typename: "ModelEmployeeConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type OnCreateEmployeeSubscription = {
  onCreateEmployee?:  {
    __typename: "Employee",
    id: string,
    firstName: string,
    lastName: string,
    title: string,
    linkedInUrl?: string | null,
    headshot?: string | null,
    hireDate?: string | null,
    departmentId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateEmployeeSubscription = {
  onUpdateEmployee?:  {
    __typename: "Employee",
    id: string,
    firstName: string,
    lastName: string,
    title: string,
    linkedInUrl?: string | null,
    headshot?: string | null,
    hireDate?: string | null,
    departmentId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteEmployeeSubscription = {
  onDeleteEmployee?:  {
    __typename: "Employee",
    id: string,
    firstName: string,
    lastName: string,
    title: string,
    linkedInUrl?: string | null,
    headshot?: string | null,
    hireDate?: string | null,
    departmentId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateDepartmentSubscription = {
  onCreateDepartment?:  {
    __typename: "Department",
    id: string,
    DepartmentName: string,
    DepartmentIcon?: string | null,
    employees?:  {
      __typename: "ModelEmployeeConnection",
      items?:  Array< {
        __typename: "Employee",
        id: string,
        firstName: string,
        lastName: string,
        title: string,
        linkedInUrl?: string | null,
        headshot?: string | null,
        hireDate?: string | null,
        departmentId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateDepartmentSubscription = {
  onUpdateDepartment?:  {
    __typename: "Department",
    id: string,
    DepartmentName: string,
    DepartmentIcon?: string | null,
    employees?:  {
      __typename: "ModelEmployeeConnection",
      items?:  Array< {
        __typename: "Employee",
        id: string,
        firstName: string,
        lastName: string,
        title: string,
        linkedInUrl?: string | null,
        headshot?: string | null,
        hireDate?: string | null,
        departmentId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteDepartmentSubscription = {
  onDeleteDepartment?:  {
    __typename: "Department",
    id: string,
    DepartmentName: string,
    DepartmentIcon?: string | null,
    employees?:  {
      __typename: "ModelEmployeeConnection",
      items?:  Array< {
        __typename: "Employee",
        id: string,
        firstName: string,
        lastName: string,
        title: string,
        linkedInUrl?: string | null,
        headshot?: string | null,
        hireDate?: string | null,
        departmentId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
