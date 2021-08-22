# RESTFul

Actions
==

|   |         | route         | page           | store     | method |  api             | function | placeholder | comment              |
|---|---------|---------------|----------------|-----------|--------|------------------|----------|-------------|----------------------|
| C | Create  |               |                |           | POST   | /api/users       | create   |             |                      |
| R | Index   | #/users       | UserIndexPage  | userIndex | GET    | /api/users       | index    |             |                      |
|   | Show    | #/users/ab-12 | UserShowPage   | user      | x      | x                | x        |             | pick from local list |
|   |         |               | ~              | ~         | GET    | /api/users/ab-12 | show     |             |                      |
|   |         |               | UserEditorPage | ~         | x      | x                | x        |             | pick from local list |
|   |         |               | ~              | ~         | GET    | /api/users/ab-12 | show     |             |                      |
| U | Update  |               |                |           | PUT    | /api/users/ab-12 | update   |             |                      |
| D | Destroy |               |                |           | DELETE | /api/users/ab-12 | destory  |             |                      |
