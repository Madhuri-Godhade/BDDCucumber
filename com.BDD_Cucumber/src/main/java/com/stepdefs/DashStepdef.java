package com.stepdefs;

import java.util.ArrayList;
import java.util.List;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class DashStepdef {

	WebDriver driver=null;
	ArrayList<String> actcourse=null;
	ArrayList<String> exptcourse=null;
	
	@Before("@Dash")             //tagged hooks
	public void setUp()throws Throwable
	{
			System.setProperty("webdriver.chrome.driver", "C:/Users/dell/Downloads/selenium/chromedriver.exe");
			driver = new ChromeDriver();
			driver.get("C:/Users/dell/Downloads/selenium/Selenium Softwares/Offline Website/index.html");		
	}
		
		@After("@Dash")  
		public void tearDown()
		{
			driver.close();
		}
		
		@Given("^user should be on Home page$")
		public void user_should_be_on_Home_page() throws Throwable {
		     driver.findElement(By.id("email")).sendKeys("kiran@gmail.com");
		     driver.findElement(By.id("password")).sendKeys("123456");
		     driver.findElement(By.xpath("//button")).click();
		}

		@Then("^user should make list of courses$")
		public void user_should_make_list_of_courses() throws Throwable {
		 actcourse=new ArrayList<>();
		 List<WebElement> list=driver.findElements(By.tagName("h3"));
		for(WebElement course:list)
		{
			String text=course.getText();
			actcourse.add(text);
		}
		
		}

		@Then("^user verify user list$")
		public void user_verify_user_list() throws Throwable {
			exptcourse= new ArrayList<>();
			exptcourse.add("Selenium");
			exptcourse.add("Java / J2EE");
			exptcourse.add("Python");
			exptcourse.add("Php");
		  Assert.assertEquals(exptcourse, actcourse);
		}
}
