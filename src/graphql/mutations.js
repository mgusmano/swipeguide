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
      certifications {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createScore = /* GraphQL */ `
  mutation CreateScore(
    $input: CreateScoreInput!
    $condition: ModelScoreConditionInput
  ) {
    createScore(input: $input, condition: $condition) {
      id
      p
      s
      createdAt
      updatedAt
    }
  }
`;
export const updateScore = /* GraphQL */ `
  mutation UpdateScore(
    $input: UpdateScoreInput!
    $condition: ModelScoreConditionInput
  ) {
    updateScore(input: $input, condition: $condition) {
      id
      p
      s
      createdAt
      updatedAt
    }
  }
`;
export const deleteScore = /* GraphQL */ `
  mutation DeleteScore(
    $input: DeleteScoreInput!
    $condition: ModelScoreConditionInput
  ) {
    deleteScore(input: $input, condition: $condition) {
      id
      p
      s
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
        createdAt
        updatedAt
      }
      skillID
      skill {
        id
        skillName
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
        createdAt
        updatedAt
      }
      skillID
      skill {
        id
        skillName
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
        createdAt
        updatedAt
      }
      skillID
      skill {
        id
        skillName
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
export const createTalk = /* GraphQL */ `
  mutation CreateTalk(
    $input: CreateTalkInput!
    $condition: ModelTalkConditionInput
  ) {
    createTalk(input: $input, condition: $condition) {
      id
      clientId
      name
      description
      speakerName
      speakerBio
      createdAt
      updatedAt
    }
  }
`;
export const updateTalk = /* GraphQL */ `
  mutation UpdateTalk(
    $input: UpdateTalkInput!
    $condition: ModelTalkConditionInput
  ) {
    updateTalk(input: $input, condition: $condition) {
      id
      clientId
      name
      description
      speakerName
      speakerBio
      createdAt
      updatedAt
    }
  }
`;
export const deleteTalk = /* GraphQL */ `
  mutation DeleteTalk(
    $input: DeleteTalkInput!
    $condition: ModelTalkConditionInput
  ) {
    deleteTalk(input: $input, condition: $condition) {
      id
      clientId
      name
      description
      speakerName
      speakerBio
      createdAt
      updatedAt
    }
  }
`;
export const createBlog = /* GraphQL */ `
  mutation CreateBlog(
    $input: CreateBlogInput!
    $condition: ModelBlogConditionInput
  ) {
    createBlog(input: $input, condition: $condition) {
      id
      name
      posts {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateBlog = /* GraphQL */ `
  mutation UpdateBlog(
    $input: UpdateBlogInput!
    $condition: ModelBlogConditionInput
  ) {
    updateBlog(input: $input, condition: $condition) {
      id
      name
      posts {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteBlog = /* GraphQL */ `
  mutation DeleteBlog(
    $input: DeleteBlogInput!
    $condition: ModelBlogConditionInput
  ) {
    deleteBlog(input: $input, condition: $condition) {
      id
      name
      posts {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createPost = /* GraphQL */ `
  mutation CreatePost(
    $input: CreatePostInput!
    $condition: ModelPostConditionInput
  ) {
    createPost(input: $input, condition: $condition) {
      id
      title
      blogID
      blog {
        id
        name
        createdAt
        updatedAt
      }
      comments {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updatePost = /* GraphQL */ `
  mutation UpdatePost(
    $input: UpdatePostInput!
    $condition: ModelPostConditionInput
  ) {
    updatePost(input: $input, condition: $condition) {
      id
      title
      blogID
      blog {
        id
        name
        createdAt
        updatedAt
      }
      comments {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deletePost = /* GraphQL */ `
  mutation DeletePost(
    $input: DeletePostInput!
    $condition: ModelPostConditionInput
  ) {
    deletePost(input: $input, condition: $condition) {
      id
      title
      blogID
      blog {
        id
        name
        createdAt
        updatedAt
      }
      comments {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
      id
      postID
      post {
        id
        title
        blogID
        createdAt
        updatedAt
      }
      content
      createdAt
      updatedAt
    }
  }
`;
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
      id
      postID
      post {
        id
        title
        blogID
        createdAt
        updatedAt
      }
      content
      createdAt
      updatedAt
    }
  }
`;
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
      id
      postID
      post {
        id
        title
        blogID
        createdAt
        updatedAt
      }
      content
      createdAt
      updatedAt
    }
  }
`;
