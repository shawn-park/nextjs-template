# Next.js Template


## Packages
- [pnpm - Fast, disk space efficient package manager](https://pnpm.io/ko/)
- [Next.js - The React Framework for the Web](https://nextjs.org/docs)
- [Typescirpt - TypeScript is JavaScript with syntax for types](https://www.typescriptlang.org/ko/)
- [SCSS - CSS with superpowers](https://sass-lang.com/)
- [GraphQL - A query language for your API](https://graphql.org/)
- [Apollo - The API platform for the modern stack](https://www.apollographql.com/docs/react/)


## Quickstart
```bash
pnpm install
```

### Main page
> http://localhost:3000

### List page
> http://localhost:3000/list

### API call
> http://localhost:3000/api/monitor/l7check

## Use GraphQL
1. Pass page component as a parameter to withApollo function

```tsx
import List from '../../components/list';
import { withApollo } from '../../config/apollo';

function ListPage() {
  return <List />;
}

export default withApollo(ListPage);
```

2. Use apollo react-hook and apply the result to the component

```tsx
import { useQuery } from '@apollo/react-hooks';
import GET_SOMETHING from 'graphql/something.gql';

const List = () => {
  const { loading, error, data } = useQuery(GET_SOMETHING, {
    variables: { device: 'someVar' },
  });

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;

  const { result } = data;

  return result ? <>...</> : null;
};

export default List;

```