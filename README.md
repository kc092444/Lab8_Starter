# Lab 8 - Starter

Contributor: Kevin Chang

### Answers

1.  Where would you fit your automated tests in your Recipe project development pipeline?

 -  Within a Github action that runs whenever code is pushed : it will test on every push, and it will let the team know if the pushed code is functioning as expected.
 
 2. Would you use an end to end test to check if a function is returning the correct output? 
 
 - No. it should be done in unit tests. E2E test is meant to emulate user actions from start to finish.
 
 3. Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.

 - No. Because unit test is focus on a individual part of the code such as a function. We can use end-to-end testing to make sure that the message is properly sent and received.
 
 4. Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.
 
 - Yes. Unit test is designed to test a single function or method working as expected, therefore, we can use unit test to test the “max message length” function.
