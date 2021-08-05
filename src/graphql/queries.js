/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getOperator = /* GraphQL */ `
  query GetOperator($id: ID!) {
    getOperator(id: $id) {
      id
      operatorName
      goal
      certifications {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listOperators = /* GraphQL */ `
  query ListOperators(
    $filter: ModelOperatorFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOperators(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        operatorName
        goal
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getSkill = /* GraphQL */ `
  query GetSkill($id: ID!) {
    getSkill(id: $id) {
      id
      skillName
      goal
      certifications {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listSkills = /* GraphQL */ `
  query ListSkills(
    $filter: ModelSkillFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSkills(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        skillName
        goal
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getCertification = /* GraphQL */ `
  query GetCertification($id: ID!) {
    getCertification(id: $id) {
      id
      operatorID
      operator {
        id
        operatorName
        goal
        createdAt
        updatedAt
      }
      skillID
      skill {
        id
        skillName
        goal
        createdAt
        updatedAt
      }
      meta
      data
      createdAt
      updatedAt
    }
  }
`;
export const listCertifications = /* GraphQL */ `
  query ListCertifications(
    $filter: ModelCertificationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCertifications(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        operatorID
        skillID
        meta
        data
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
