# Testcases

Title: Testing "back to blog" link

Summary:
When clicking "back to blog" the user goes the homepage.

Steps:	
1. Go to blog.ro/login
2. Click "back to blog"

Expected Results:
The main page of the blog should be dispayed.

----

Title: Test "remember me" option checked

Summary:
It test the function of "remember me". The webpage should remember your name and password.
 
Steps:
1. Go to blogdeit.ro/login
2. Enter email in the field "email"
3. Enter password in "password" field
4. Use the check mark in "remember me" square field
5. Click "login"
6. Exit the page
7. Go to blogdeit.ro/login

Expected Results:
If you login with "remember me" checked, close the page and return you should be remembered and entered direct in your account.

 ----
 
Title: Testing "forgot password" functionality
 
Description:
When using "forgot password" the user should be able to recover his password.
 
Steps:
1. Go to blogdeit.ro/login
2. Click "forgot password"
3. Write in "username" or "email" username or your email and click "reset password"

Expected Results:
When you click "forgot password" user is redirected to a form where an email is required.
If you use a valid email in "email" field and press "reset password" buton you have to see a message that notice you that a mail with a new password was send it to that email that was use in the "email" field.

----

Title: Testing "geographic coordinates" with 2 valid values

Description:
The endpoint for "Geographic Coordinates" should give you a correct forecast.

Steps:
1. Go to https://openweathermap.org/current
2. Copy "API call" link in postman
3. Add the value "-73.98" to lon parameter
4. Add the value "40.74" to lat parameter
5. Add the value "b877cc138ceeb7015615b7b122be7958'' to "APPID" parameter
6. Press "Send"

Expected Results: 
You should receive the correct forecast for those coordinates.
Check weather data for New York on https://www.meteoblue.com/ro/vreme/s%C4%83pt%C4%83m%C3%A2na/new-york-city_statele-unite_5128581

----

Title: Testing "geographic coordinates" with letter values

Description:
"Geographic coordinates" shouldn't work if you use letters as values for "lat" or "lon" parameters.

Steps:
1. Go to https://openweathermap.org/current
2. Copy "API call" link in postman
3. Add the value "abc" to "lon" parameter
4. Add the value "b877cc138ceeb7015615b7b122be7958'' to "APPID" parameter
5. Press "Send"

Expected Results:
The response should show you an error message.
{
  "cod": "400",
  "message": "Nothing to geocode"
}






# Bugs



Title: Words are repeating in section title

Description:
In a section title two words are repeating.

Steps To Reproduce:
1. Go to "https://www.maurerimobiliare.ro/maurer-residence-tgmures/despre-noi/"
2. Scroll down to the map of Romania and see the title in the right side

Expected: Title should be "Unul dintre cei mai puternici dezvoltatori din România".
Actual: The title has s repetition "cei mai cei mai"

----

Title: Contact form not working

Description:
The Contact form is not loading in the page but a shortcode.

Steps To Reproduce:
1. Go to "https://www.zi-de-zi.ro/"
2. Click "Contact"
3. Observe the error

Expected: To have a contact form.
Actual: You see a form code.


----

Title: Broken link on Schengen banner

Description:	
The Schengen banner link doesn't work.

Steps To Reproduce:
1. Go to "http://pasapoartecluj.ro/".
2. Observe the Schengen banner.

Expected: You should go to a new website.
Actual: The website doesn't exist.


----

Title: JS file is missing

Description:	
A traking JS file used in the page is missing.

Steps To Reproduce:
1. Go to "https://www.reginamaria.ro/spitale/spitalul-cluj"
2. Press F12
3. Go to Console

Expected: No 404 error should appear.
Actual: 404 error on a3cef5a.js file.


# Automated tests
Sample: https://github.com/BordaCod/QA/blob/master/Automated-test-sample.js
