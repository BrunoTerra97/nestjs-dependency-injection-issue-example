## This is a repository to reproduce a dependecy injection error in nestjs unit tests
### This repository has two branches 
- `main` -> Contains the dependency injection issue
- `working-tests-with-inject-decorator` -> Contains the workaround to make it work

  
## If you want to run the code this is what you have to do:

#### To run the tests you need to

- Install the packages `$ pnpm i` or `$ npm i`
- Run `$ pnpm test` or `$ npm test`

#### To run the service you need to

- Install the packages `$ pnpm i` or `$ npm i`
- Have a postgresql (the connection config is in the .env file)
- Run `$ pnpm prisma migrate dev` (creates the database)
- Run `$ pnpm prisma generate dev` (I recommend you to reload your vscode to load the types)
- Run `$ pnpm start:dev`
- Go to `localhost:3000/user` if you do not have a user with id 123 in postgresql, you will receive

```
{
  "message": "User not found",
  "error": "Not Found",
  "statusCode": 404
}
```

but if you have, you will receive the user as response.
