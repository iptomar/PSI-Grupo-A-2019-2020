import Testes.Login.Capabilities;
import java.util.logging.Level;
import java.util.logging.Logger;
import org.junit.Assert;
import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;

public class LoginSuccessTest {
    WebDriver driver;
    
    public LoginSuccessTest(WebDriver driver) {
        this.driver = new Capabilities().getDriver();
    }

    @Test
    public void loginSuccess() {
        try {
            driver.get("http://188.251.50.68:4000/");
            Thread.sleep(5000);
            driver.findElement(By.id("LogInOut")).click();
            Thread.sleep(2000);
             String url = driver.getCurrentUrl();
             Assert.assertEquals(true,url.contains("Login"));
             driver.findElement(By.name("email")).click();
             driver.findElement(By.name("email")).sendKeys("admin@admin.com");
             Thread.sleep(500);
             driver.findElement(By.name("password")).click();
             driver.findElement(By.name("password")).sendKeys("admin");
             Thread.sleep(500);
             //Influência o type
             driver.findElement(By.id("LoginBtt")).sendKeys(Keys.RETURN);
             
             //driver.findElement(By.xpath('//*[@id="root"]/div/div[3]/p'));
             Thread.sleep(3000);    
             if(!driver.findElement(By.id("LogInOut")).isDisplayed()){
                 Assert.fail("LoginSucess: Login admin@admin.com falhado!");
                 driver.quit();
                 driver.close();
             }
             Thread.sleep(5000);
        } catch (Exception e) {
             Assert.fail();
             driver.quit();
             driver.close();
             System.out.println(e.getMessage());
        }
    }
    
    @Test
    public void checkRoutes(){
        try {
            //*[@id="NavButtons"]/button[1]
            driver.findElement(By.xpath("//*[@id='NavButtons']/button[1]")).click();
            if(!driver.getCurrentUrl().contains("Routes")){
                Assert.fail();
                driver.quit();
            }
            Thread.sleep(2500);
        } catch (InterruptedException ex) {
            Assert.fail();
             driver.quit();
             driver.close();
        }
    }
    
    
    @Test
    public void checkPoints(){
        try {
            //*[@id="NavButtons"]/button[1]
            driver.findElement(By.xpath("//*[@id='NavButtons']/button[2]")).click();
            if(!driver.getCurrentUrl().contains("MyPoints")){
                Assert.fail();
                
                driver.quit();
            }
            Thread.sleep(2500);
        } catch (InterruptedException ex) {
            Assert.fail();
             driver.quit();
             driver.close();
        }
    }
    
    @Test
    public void createPoint(){
        try {
            //*[@id="PageCentralDiv"]/a
            driver.findElement(By.xpath("//*[@id=\"PageCentralDiv\"]/a")).click();
            if(!driver.getCurrentUrl().contains("createPoint")){
                Assert.fail();
                driver.quit();
            }
            Thread.sleep(2500);
            driver.findElement(By.name("title")).click();
             driver.findElement(By.name("title")).sendKeys("Teste Selenium");
             driver.findElement(By.name("descr")).click();
             driver.findElement(By.name("descr")).sendKeys("Teste Selenium");
             driver.findElement(By.name("tipoEdif")).click();
             driver.findElement(By.name("tipoEdif")).sendKeys("Teste Selenium");
             driver.findElement(By.name("date")).click();
             driver.findElement(By.name("date")).sendKeys("Teste Selenium");
             driver.findElement(By.name("coordinates")).click();
             driver.findElement(By.name("coordinates")).sendKeys("Teste Selenium");
             driver.findElement(By.xpath("//*[@id=\"root\"]/div/div[2]/button")).click();
             Thread.sleep(2500);
             
             if(!driver.findElement(By.xpath("//*[@id=\"root\"]/div/div[3]/p")).getText().contains("inserido")){
                 Assert.fail();
                 driver.quit();
             }
             Thread.sleep(2000);
             driver.findElement(By.xpath("//*[@id=\"root\"]/div/a")).click();
        } catch (InterruptedException ex) {
            Logger.getLogger(LoginSuccessTest.class.getName()).log(Level.SEVERE, null, ex);
        }
    }
}