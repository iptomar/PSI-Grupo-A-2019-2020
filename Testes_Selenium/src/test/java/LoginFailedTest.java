import Testes.Login.Capabilities;
import org.junit.Assert;
import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;

public class LoginFailedTest {
    WebDriver driver;
    
    public LoginFailedTest(WebDriver driver) {
        this.driver = new Capabilities().getDriver();
    }

    @Test
    public void loginFail() {
        try {
            driver.get("http://localhost:4000");
            Thread.sleep(5000);
            driver.findElement(By.id("LogInOut")).click();
            Thread.sleep(2000);
             String url = driver.getCurrentUrl();
             Assert.assertEquals(true,url.contains("login"));
             driver.findElement(By.name("email")).click();
             driver.findElement(By.name("email")).sendKeys("user-inexistente");
             Thread.sleep(500);
             driver.findElement(By.name("password")).click();
             driver.findElement(By.name("password")).sendKeys("user-inexistente");
             Thread.sleep(500);
             //Influência o type
             driver.findElement(By.id("LoginBtt")).sendKeys(Keys.RETURN);
             
             //driver.findElement(By.xpath('//*[@id="root"]/div/div[3]/p'));
             String lgnMsg = driver.findElement(By.id("LoginStatusDiv")).getText();
             if(lgnMsg.equals("")){
                 Assert.fail();
                 driver.quit();
                 driver.close();
             }
             Thread.sleep(5000);

        } catch (Exception e) {
             Assert.fail();
             System.out.println(e.getMessage());
        }
    }
}