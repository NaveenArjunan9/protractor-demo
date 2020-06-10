let homepage = function(){
    let firstInput=element(by.model('first'));
    let secondInput=element(by.model('second'));
    let goBtn=element(by.css('[ng-click="doAddition()"]'));

    this.getBrowser=function(url){
        browser.get(url);
    }

    this.enterFirstNo=function(fvalue){
        firstInput.sendKeys(fvalue);

    };
    this.enterSecondNo=function(svalue){
        secondInput.sendKeys(svalue);

    };
    this.clickGo=function(){
        goBtn.click();

    };
    this.verifyResult=function(result){
        let output=element(by.cssContainingText('.ng-binding',result));
        expect(output.getText()).toEqual(result);
    }
};
module.exports=new homepage();