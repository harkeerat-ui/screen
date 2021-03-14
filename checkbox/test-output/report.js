$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/harke/class 2021/checkbox/src/test/java/features/checkbox.feature");
formatter.feature({
  "line": 1,
  "name": "As a user i want to check the checkbox",
  "description": "",
  "id": "as-a-user-i-want-to-check-the-checkbox",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "user should be able to check the checkbox",
  "description": "",
  "id": "as-a-user-i-want-to-check-the-checkbox;user-should-be-able-to-check-the-checkbox",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "a valid user",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user goes to EXA Login site",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "take screenshot of checkbox",
  "keyword": "Then "
});
formatter.match({
  "location": "stepbystep.a_valid_user()"
});
formatter.result({
  "duration": 4505801600,
  "status": "passed"
});
formatter.match({
  "location": "stepbystep.user_goes_to_EXA_Login_site()"
});
formatter.result({
  "duration": 5073213500,
  "status": "passed"
});
formatter.match({
  "location": "stepbystep.take_screenshot_of_checkbox()"
});
formatter.result({
  "duration": 553094600,
  "status": "passed"
});
});