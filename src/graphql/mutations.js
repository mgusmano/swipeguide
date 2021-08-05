/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createOperator = /* GraphQL */ `
  mutation CreateOperator(
    $input: CreateOperatorInput!
    $condition: ModelOperatorConditionInput
  ) {
    createOperator(input: $input, condition: $condition) {
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
export const updateOperator = /* GraphQL */ `
  mutation UpdateOperator(
    $input: UpdateOperatorInput!
    $condition: ModelOperatorConditionInput
  ) {
    updateOperator(input: $input, condition: $condition) {
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
export const deleteOperator = /* GraphQL */ `
  mutation DeleteOperator(
    $input: DeleteOperatorInput!
    $condition: ModelOperatorConditionInput
  ) {
    deleteOperator(input: $input, condition: $condition) {
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
export const createSkill = /* GraphQL */ `
  mutation CreateSkill(
    $input: CreateSkillInput!
    $condition: ModelSkillConditionInput
  ) {
    createSkill(input: $input, condition: $condition) {
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
export const updateSkill = /* GraphQL */ `
  mutation UpdateSkill(
    $input: UpdateSkillInput!
    $condition: ModelSkillConditionInput
  ) {
    updateSkill(input: $input, condition: $condition) {
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
export const deleteSkill = /* GraphQL */ `
  mutation DeleteSkill(
    $input: DeleteSkillInput!
    $condition: ModelSkillConditionInput
  ) {
    deleteSkill(input: $input, condition: $condition) {
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
export const createCertification = /* GraphQL */ `
  mutation CreateCertification(
    $input: CreateCertificationInput!
    $condition: ModelCertificationConditionInput
  ) {
    createCertification(input: $input, condition: $condition) {
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
export const updateCertification = /* GraphQL */ `
  mutation UpdateCertification(
    $input: UpdateCertificationInput!
    $condition: ModelCertificationConditionInput
  ) {
    updateCertification(input: $input, condition: $condition) {
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
export const deleteCertification = /* GraphQL */ `
  mutation DeleteCertification(
    $input: DeleteCertificationInput!
    $condition: ModelCertificationConditionInput
  ) {
    deleteCertification(input: $input, condition: $condition) {
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
