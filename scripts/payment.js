(function(window){
    'use strict';
    var FORM_SELECTOR = '[payment-info="form"]';
    var FormHandler = App.FormHandler;
    var formHandler = new FormHandler(FORM_SELECTOR);

    formHandler.addSubmitHandler(function(data){
        var str="Thank you for your payment, "+data.title+" "+data.username;
        $('#thanks-modal-body').html(str);
        $('#thanks-modal').modal('show');
        console.log("Submitted");
    });
    console.log(formHandler);
})(window);