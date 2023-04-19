# ALX-Forum
The  project  is  built  using  MERN  stack (MySQL, Express.js, React.js and  Node.js)
## Project Objectives 
To create a place where ALX students and developer can ask programing related questions and get answers for their questions
## Project Deliverables
* A completed Q&A platform that allows users to create an account and login to their account
+ A completed Q&A platform that allows account holders to post questions or answers and review questions or answers posted by other users
## Project Requirements
### Landing/Login/Sign up Page
This is the login page with an option to create a new account (sign up option) for new users
- If a user has an already existing account, they can just provide email and password to log in
- If a user has no account, the user should have the option to create an account. To create an account, users will need to provide the following
“required” information: “First Name”, “Last Name”, “Username”, “Email” and “Password”
+ Note: Email and username must be unique to each user. Meaning, there should be no two users with similar email addresses or usernames
- Note: Passwords must include at least 8 characters. If user provides less than 8 characters when creating a password, an alert message should show to notify user about the error
### Questions Page
Upon successful login, the user will be taken to the “Questions Page”. The “Questions page” should show:
- A welcome message followed by the first name of the user. Example: “Welcome: Abenezer”
- An option for users to ask questions
- Note: Clicking the option to ask a question option will take a user to the “Ask a question” Page
- Questions listed by title (question’s title)
- Note: It will be each “question’s title” that will display, meaning, the description of each question will remain hidden until the “question’s title” is clicked.
- Note: To identify who asked each question, it is required to show username of the user with each “question’s title”
- Note: The “question’s title” is ordered in a way that the first question to show in the list is the newest question asked by a user
- When the “question’s title” is clicked, user will be taken to the “Question and Answers Page”
### Question and Answers Page
When a specific “question title” is clicked, the user will be taken to the “Question and Answers Page”. This page will show:
- The “question title”
- Full description of the question
- Answers given to the question by different users, if any
- Note: If there are answers to a question, in addition to the answer body, the username of the user who answered the question should show
- An input option for a user to provide an answer to that question
- An option (button) for users to post their answer
- When users post their answers (clicking a post button), they will remain on the “Question and Answers Page”, but the question they just posted should display on this page
### Ask a Question Page
This is a page where a user can ask her/his question. This page should have/show:
- List of instructions a user must follow to write a good question. Here is what the instruction should say:
- Summarize your problem in a one-line title.
- Describe your problem in more detail.
- Describe what you tried and what you expected to happen.
- Review your question and post it to the site.
- An input to write the “question title”
- An input to write the “question description”
- “Title”. This is where the 200-word limitation comes for the question title
- An option (button) to post a user’s question
- When users click on the option to post their question, they will be redirected to the “home page”. The “home page” should show title of the user’s question on top of the rest of previously added questions titles
### All pages
- Users should have the option to go to the “home page” regardless of what page they are
- Unless a user is new and clicked the option to create an account, account holder users should have the option to logout regardless of what page they are
- The application needs to be responsive
## Project Scope
- In scope: Only registered users can post questions and answers
- Out of scope: 
-- The Q&A page will not allow unregistered users to access the page. Meaning, users with no account will not be able to view and post questions or answers on the page
--The Q&A page will not allow any user to edit or delete answers and
questions posted by themselves or other users

## AUTHORS
- Abenezer Baheru  (abeniug2001@gmail.com)
- Onolameh Daniel (djake8991@gmail.com)
- Akande Abayomi Paul (akandeabayomipaul@gmail.com)
