/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateOperator = /* GraphQL */ `
  subscription OnCreateOperator {
    onCreateOperator {
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
export const onUpdateOperator = /* GraphQL */ `
  subscription OnUpdateOperator {
    onUpdateOperator {
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
export const onDeleteOperator = /* GraphQL */ `
  subscription OnDeleteOperator {
    onDeleteOperator {
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
export const onCreateSkill = /* GraphQL */ `
  subscription OnCreateSkill {
    onCreateSkill {
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
export const onUpdateSkill = /* GraphQL */ `
  subscription OnUpdateSkill {
    onUpdateSkill {
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
export const onDeleteSkill = /* GraphQL */ `
  subscription OnDeleteSkill {
    onDeleteSkill {
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
export const onCreateScore = /* GraphQL */ `
  subscription OnCreateScore {
    onCreateScore {
      id
      p
      s
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateScore = /* GraphQL */ `
  subscription OnUpdateScore {
    onUpdateScore {
      id
      p
      s
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteScore = /* GraphQL */ `
  subscription OnDeleteScore {
    onDeleteScore {
      id
      p
      s
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
export const onUpdateCertification = /* GraphQL */ `
  subscription OnUpdateCertification {
    onUpdateCertification {
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
export const onDeleteCertification = /* GraphQL */ `
  subscription OnDeleteCertification {
    onDeleteCertification {
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
export const onCreateTalk = /* GraphQL */ `
  subscription OnCreateTalk {
    onCreateTalk {
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
export const onUpdateTalk = /* GraphQL */ `
  subscription OnUpdateTalk {
    onUpdateTalk {
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
export const onDeleteTalk = /* GraphQL */ `
  subscription OnDeleteTalk {
    onDeleteTalk {
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
export const onCreateBlog = /* GraphQL */ `
  subscription OnCreateBlog {
    onCreateBlog {
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
export const onUpdateBlog = /* GraphQL */ `
  subscription OnUpdateBlog {
    onUpdateBlog {
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
export const onDeleteBlog = /* GraphQL */ `
  subscription OnDeleteBlog {
    onDeleteBlog {
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
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost {
    onCreatePost {
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
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost {
    onUpdatePost {
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
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost {
    onDeletePost {
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
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment {
    onCreateComment {
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
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment {
    onUpdateComment {
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
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment {
    onDeleteComment {
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
