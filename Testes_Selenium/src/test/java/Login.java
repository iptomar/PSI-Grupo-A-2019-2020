
import Testes.Login.Capabilities;
import org.junit.Test;
import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.openqa.selenium.WebDriver;

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 *
 * @author Carlos
 */
public class Login {
    WebDriver driver;
    
    public Login() {
        this.driver = new Capabilities().getDriver();
    }

    // TODO add test methods here.
    // The methods must be annotated with annotation @Test. For example:
    //
     @Test
    public void LoginSuccess() {
        LoginSuccessTest loginTest = new LoginSuccessTest(driver);
        loginTest.loginSuccess();// Testa um login que tem sucesso.
        //loginTest.checkRoutes();// Testa a página rotas
       // loginTest.checkPoints();// Testa a página pontos
        loginTest.checkUsers();// Testa a página de users registados
        loginTest.createUser();
    //new RegisterSuccess(driver).registerSuccessfully(); // Testa um registo que tem sucesso.
    //new RegisterUnsuccessfull(driver).registerUnsuccessfully(); // Testa um registo sem sucesso.
    }
    @Test
    public void LoginFail(){
        new LoginFailedTest(driver).loginFail(); // Testa um login que falha.
    }
    @AfterEach
    public void quit(){
    driver.quit();
    }
}

