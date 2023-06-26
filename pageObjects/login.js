class Login{

    txtUserName="#username";
    txtPassowrd="#password";
    btnSubmit="#log-in";
    veriMsg="#time";
    
    rememberMe=".form-check-label";

    setUserName(username){
        cy.get(this.txtUserName).type(username);
    }


    setPassword(password){

        cy.get(this.txtPassowrd).type(password);
    }
    clickOnRememberMe(){
        cy.get(this.rememberMe).click();
    }

    clickSubmit(){

        cy.get(this.btnSubmit).click();
    }

    verifyLogin(){
        cy.get(this.veriMsg).should('have.text',"Your nearest branch closes in: 30m 5s");
    
    }
}
export default Login;