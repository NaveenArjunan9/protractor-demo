let homepage=require('../pages/homepage')
describe('Calc',function(){
    it('Addition test', function(){
        homepage.getBrowser('http://juliemr.github.io/protractor-demo/')
        homepage.enterFirstNo('5')
        homepage.enterSecondNo('5')
        homepage.clickGo()
        homepage.verifyResult('10')
        browser.sleep(2000);
    
    
    
    });
    it('Subtraction test', function(){
        homepage.getBrowser('http://juliemr.github.io/protractor-demo/')
        homepage.enterFirstNo('5')
        homepage.enterSecondNo('5')
        homepage.clickGo1()
        homepage.verifyResult('10')
        browser.sleep(2000);
    
    
    
    });
});
