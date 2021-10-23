Feature:JBK offline website

@Login
Scenario Outline: login Test

When  user enters "<uname>" and "<pass>"
And   user click on login button
Then  user will be on Home page

Examples:
|uname|pass|
|kiran@gmail.com|123456|
|raghav|abcd|
|sonal|1234a|
