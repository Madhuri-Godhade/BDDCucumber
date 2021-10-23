$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Dash.feature");
formatter.feature({
  "line": 1,
  "name": "Dashboard of JBK application",
  "description": "",
  "id": "dashboard-of-jbk-application",
  "keyword": "Feature"
});
formatter.before({
  "duration": 7497521253,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "verify courses",
  "description": "",
  "id": "dashboard-of-jbk-application;verify-courses",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@Dash"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user should be on Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user should make list of courses",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user verify user list",
  "keyword": "Then "
});
formatter.match({
  "location": "DashStepdef.user_should_be_on_Home_page()"
});
formatter.result({
  "duration": 2491769309,
  "status": "passed"
});
formatter.match({
  "location": "DashStepdef.user_should_make_list_of_courses()"
});
formatter.result({
  "duration": 303300533,
  "status": "passed"
});
formatter.match({
  "location": "DashStepdef.user_verify_user_list()"
});
formatter.result({
  "duration": 3871483,
  "status": "passed"
});
formatter.after({
  "duration": 210278580,
  "status": "passed"
});
formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "JBK offline website",
  "description": "",
  "id": "jbk-offline-website",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "login Test",
  "description": "",
  "id": "jbk-offline-website;login-test",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user enters \"\u003cuname\u003e\" and \"\u003cpass\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user will be on Home page",
  "keyword": "Then "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "jbk-offline-website;login-test;",
  "rows": [
    {
      "cells": [
        "uname",
        "pass"
      ],
      "line": 11,
      "id": "jbk-offline-website;login-test;;1"
    },
    {
      "cells": [
        "kiran@gmail.com",
        "123456"
      ],
      "line": 12,
      "id": "jbk-offline-website;login-test;;2"
    },
    {
      "cells": [
        "raghav",
        "abcd"
      ],
      "line": 13,
      "id": "jbk-offline-website;login-test;;3"
    },
    {
      "cells": [
        "sonal",
        "1234a"
      ],
      "line": 14,
      "id": "jbk-offline-website;login-test;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5230685620,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "login Test",
  "description": "",
  "id": "jbk-offline-website;login-test;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user enters \"kiran@gmail.com\" and \"123456\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user will be on Home page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "kiran@gmail.com",
      "offset": 13
    },
    {
      "val": "123456",
      "offset": 35
    }
  ],
  "location": "LoginStepdef.user_enters_and(String,String)"
});
formatter.result({
  "duration": 703822921,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdef.user_click_on_login_button()"
});
formatter.result({
  "duration": 1704237639,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdef.user_will_be_on_Home_page()"
});
formatter.result({
  "duration": 17598244,
  "status": "passed"
});
formatter.after({
  "duration": 299683293,
  "status": "passed"
});
formatter.before({
  "duration": 4710888062,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "login Test",
  "description": "",
  "id": "jbk-offline-website;login-test;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user enters \"raghav\" and \"abcd\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user will be on Home page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "raghav",
      "offset": 13
    },
    {
      "val": "abcd",
      "offset": 26
    }
  ],
  "location": "LoginStepdef.user_enters_and(String,String)"
});
formatter.result({
  "duration": 601126690,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdef.user_click_on_login_button()"
});
formatter.result({
  "duration": 171180753,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdef.user_will_be_on_Home_page()"
});
formatter.result({
  "duration": 23035301,
  "error_message": "org.junit.ComparisonFailure: expected:\u003cJavaByKiran | [Dashboard]\u003e but was:\u003cJavaByKiran | [Log in]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat com.stepdefs.LoginStepdef.user_will_be_on_Home_page(LoginStepdef.java:50)\r\n\tat ✽.Then user will be on Home page(login.feature:8)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 158961721,
  "status": "passed"
});
formatter.before({
  "duration": 5390916220,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "login Test",
  "description": "",
  "id": "jbk-offline-website;login-test;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user enters \"sonal\" and \"1234a\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user will be on Home page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "sonal",
      "offset": 13
    },
    {
      "val": "1234a",
      "offset": 25
    }
  ],
  "location": "LoginStepdef.user_enters_and(String,String)"
});
formatter.result({
  "duration": 646950046,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdef.user_click_on_login_button()"
});
formatter.result({
  "duration": 221180216,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdef.user_will_be_on_Home_page()"
});
formatter.result({
  "duration": 13123109,
  "error_message": "org.junit.ComparisonFailure: expected:\u003cJavaByKiran | [Dashboard]\u003e but was:\u003cJavaByKiran | [Log in]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat com.stepdefs.LoginStepdef.user_will_be_on_Home_page(LoginStepdef.java:50)\r\n\tat ✽.Then user will be on Home page(login.feature:8)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 137557770,
  "status": "passed"
});
});