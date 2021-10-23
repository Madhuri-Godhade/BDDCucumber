package com.stepdefs;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginStepdef {
	WebDriver driver;
	@Before("@Login")             //tagged hooks
public void setUp()throws Throwable
{
		System.setProperty("webdriver.chrome.driver", "C:/Users/dell/Downloads/selenium/chromedriver.exe");
		driver = new ChromeDriver();
		driver.get("C:/Users/dell/Downloads/selenium/Selenium Softwares/Offline Website/index.html");		
}
	
	@After("@Login") 
	public void tearDown()
	{
		driver.close();
	}
	
	@When("^user enters \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_enters_and(String uname, String pass) throws Throwable {
	   if(!driver.getTitle().contains("Log in"))
		   driver.findElement(By.xpath("//a[text()='LOGOUT']")).click();
	   
	   driver.findElement(By.id("email")).clear();
	   driver.findElement(By.id("password")).clear();
	   driver.findElement(By.id("email")).sendKeys(uname);
	   driver.findElement(By.id("password")).sendKeys(pass);
		   
		
	}

	@When("^user click on login button$")
	public void user_click_on_login_button() throws Throwable {
		driver.findElement(By.xpath("//button")).click();
	}

	@Then("^user will be on Home page$")
	public void user_will_be_on_Home_page() throws Throwable {
		 Assert.assertEquals("JavaByKiran | Dashboard",driver.getTitle());
	}

}
