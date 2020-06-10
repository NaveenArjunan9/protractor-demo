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
   
});
