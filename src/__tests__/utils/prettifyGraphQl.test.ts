import { prettifyGraphQl } from '@/utils/prettifyGraphQl';

const inputQuery = `subscription sub {
  newMessage {
    body
    sender
    height(unit: FOOT)
    demo
  }
}

query getConfigurationList($ids: [String!]!) {
  configuration(where: {id: {_in: $ids}}) {
    id
    value
  }
}

mutation dogOperation {
  mutateDog {
    id
  }
}

mutation {
  sendEmail(message: """
  Hello,
    World!
  
    Yours,
      GraphQL.
  """)
}

mutation {
  sendEmail(message: """
  EEEEE,
    World!
  
  Yours,
    GraphQL.
  """)
}

query HeroComparison($first: Int = 3) {
  leftComparison: hero(episode: EMPIRE) {
    ...comparisonFields
  }
  rightComparison: hero(episode: JEDI) {
    ...comparisonFields
  }
}

fragment comparisonFields on Character {
  name
  friendsConnection(first: $first) {
    totalCount
    edges {
      node {
        name
      }
    }
  }
}
`;

const validResult = `subscription sub {
  newMessage {
    body
    sender
    height(unit: FOOT)
    demo
  }
}

query getConfigurationList($ids: [String!]!) {
  configuration(where: {id: {_in: $ids}}) {
    id
    value
  }
}

mutation dogOperation {
  mutateDog {
    id
  }
}

mutation {
  sendEmail(message: """
  Hello,
    World!
  
    Yours,
      GraphQL.
  """)
}

mutation {
  sendEmail(message: """
  EEEEE,
    World!
  
  Yours,
    GraphQL.
  """)
}

query HeroComparison($first: Int = 3) {
  leftComparison: hero(episode: EMPIRE) {
    ...comparisonFields
  }
  rightComparison: hero(episode: JEDI) {
    ...comparisonFields
  }
}

fragment comparisonFields on Character {
  name
  friendsConnection(first: $first) {
    totalCount
    edges {
      node {
        name
      }
    }
  }
}`;

describe('prettifyGraphQL', () => {
  it('should return valid result for specified input', () => {
    expect(prettifyGraphQl(inputQuery)).toBe(validResult);
  });
});
