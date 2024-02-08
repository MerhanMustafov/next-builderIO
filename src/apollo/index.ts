import { ApolloClient, InMemoryCache, ApolloProvider, gql } from "@apollo/client";

const client = new ApolloClient({
  uri: `https://cdn.builder.io/api/v1/graphql/${process.env.NEXT_PUBLIC_BUILDER_API_KEY! as string}`,
  cache: new InMemoryCache(),
});
export { client, gql };
