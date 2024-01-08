import reducer, {
  setContent,
  prettifyContent,
  QueryEditorState,
} from '@/store/reducers/queryEditorSlice';

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

const initialState: QueryEditorState = {
  content: '',
};

const stateWithContent: QueryEditorState = {
  content: inputQuery,
};

const stateWithPrettifiedContent: QueryEditorState = {
  content: validResult,
};

describe('queryEditorReducer should work correctly and:', () => {
  it('should return the initial state with undefined', () => {
    expect(reducer(undefined, { type: undefined })).toEqual(initialState);
  });

  it('setContent should set content', () => {
    expect(reducer(initialState, setContent(inputQuery))).toEqual(
      stateWithContent,
    );
    expect(reducer(stateWithContent, setContent(validResult))).toEqual(
      stateWithPrettifiedContent,
    );
    expect(reducer(stateWithPrettifiedContent, setContent(''))).toEqual(
      initialState,
    );
  });

  it('prettifyContent should work correctly', () => {
    expect(reducer(stateWithContent, prettifyContent())).toEqual(
      stateWithPrettifiedContent,
    );
  });
});
