package steps;


import java.io.File;
import java.io.IOException;
import java.util.Random;

import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.apache.commons.io.FileUtils;
import util.browserFactory;

public class stepbystep {
	
	WebDriver driver;	

@Given("^a valid user$")
public void a_valid_user()  {
	driver = browserFactory.startBrowser();
}

@When("^user goes to EXA Login site$")
public void user_goes_to_EXA_Login_site() throws InterruptedException  {
	Thread.sleep(3000);
	JavascriptExecutor js=(JavascriptExecutor)driver;
js.executeScript("document.querySelector('form.login-form input#chkHipaaPrivacy + label').click()");

Thread.sleep(2000);
   
}

@Then("^take screenshot of checkbox$")
public void take_screenshot_of_checkbox() throws IOException  {
	Random random = new Random();
	int randomNumber = random.nextInt(999);
	
 File scrFile = ((TakesScreenshot)driver).getScreenshotAs(OutputType.FILE);
 FileUtils.copyFile(scrFile, new File(".//screenshot//"+randomNumber+".png"));
 
   driver.close();
}



}
