/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateOperator = /* GraphQL */ `
  subscription OnCreateOperator {
    onCreateOperator {
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
export const onUpdateOperator = /* GraphQL */ `
  subscription OnUpdateOperator {
    onUpdateOperator {
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
export const onDeleteOperator = /* GraphQL */ `
  subscription OnDeleteOperator {
    onDeleteOperator {
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
export const onCreateSkill = /* GraphQL */ `
  subscription OnCreateSkill {
    onCreateSkill {
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
export const onUpdateSkill = /* GraphQL */ `
  subscription OnUpdateSkill {
    onUpdateSkill {
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
export const onDeleteSkill = /* GraphQL */ `
  subscription OnDeleteSkill {
    onDeleteSkill {
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
export const onCreateCertification = /* GraphQL */ `
  subscription OnCreateCertification {
    onCreateCertification {
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
export const onUpdateCertification = /* GraphQL */ `
  subscription OnUpdateCertification {
    onUpdateCertification {
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
export const onDeleteCertification = /* GraphQL */ `
  subscription OnDeleteCertification {
    onDeleteCertification {
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
