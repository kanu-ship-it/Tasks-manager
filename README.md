# Tasks-manager
1. HOW TO RUN THE PROJECT: Open your project on vs-code,navigate to terminal and run the project with (npm run devstart).
  Testing the code on postman
  * Register a User
  method:Post
  url(http://localhost:3000/register)

  * Login user
  method: Get
  url(http://localhost:3000/login)

  * set authorization header
  Go to headers and add
  Key: Authorization
  Value: your_token_here

 * Create task
  method:post
  url(http://localhost:3000/)
  click header then paste;
 Authorization: your_token_here
 Go to (Body → raw → JSON) and add your data;
{
  "title": "cooking",
  "description": "pepper soup and rice",
  "status": "in-progress"
}

* Get all tasks
method: Get
url(http://localhost:3000/tasks)
click Headerthen paste;
Authorization: your_token_here
then click send.

*Get a specific task by id
method: Get
url(http://localhost:3000/tasks/_id)

* Update data(insert the specific id at the end of the url you want to update)
method: PUT
URL(http://localhost:000/tasks/_id)

* Delete( insert id at the end to delete a specific task)
method:delete
url(http://localhost:3000/tasks/)
click Header then paste;
Authorization: your_token_here
then click send.

2. TOOLS USED: vs-code(IDE), postman(testing), mongodb(database)

3. I ASSUMED;
  A. users Only access their own tasks;
Every task is tied to exactly one user
Users should never see other users' tasks
All task queries are filtered by user: req.user

B. One account per Email;
Email must be unique
Users won’t try to create multiple accounts with same email

C. all users are equal, no admin role.
