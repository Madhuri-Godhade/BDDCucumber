package com.runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions
(
	features="src/main/java/com/features",
	glue="com.stepdefs",
	plugin= "html:test-output",
	dryRun=false,
	tags= {"@Login,@Dash"}
)

public class TestRunner {

}
