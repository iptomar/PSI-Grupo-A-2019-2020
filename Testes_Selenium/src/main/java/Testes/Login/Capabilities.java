/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Testes.Login;

import java.util.Arrays;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.remote.CapabilityType;
import org.openqa.selenium.remote.DesiredCapabilities;

public class Capabilities {
    private final WebDriver driver;
    
    
    public Capabilities(){
	System.setProperty("webdriver.chrome.driver","C:\\Users\\Carlos\\Desktop\\selenium-java-3.141.59\\chromedriver.exe");
        DesiredCapabilities capabilities = DesiredCapabilities.chrome();
        capabilities.setCapability("chrome.switches", Arrays.asList("--test-type","--ignore-certificate-errors"));
        capabilities.setCapability(CapabilityType.ACCEPT_SSL_CERTS, true);
        
	this.driver = new ChromeDriver(capabilities);
    }
    public WebDriver getDriver(){
        return driver;
    }
    
    public void gotoLink(String baseUrl){
        //String baseUrl = "http://localhost:4000"; // Homepage
        driver.get(baseUrl);
    }
    
    
}
