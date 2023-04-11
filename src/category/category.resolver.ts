import { Resolver, Query } from '@nestjs/graphql';

@Resolver('Category')
export class CategoryResolver {
  @Query((returns) => String)
  async category(): Promise<string> {
    return 'Hello world!';
  }
}
