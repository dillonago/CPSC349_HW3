(function (window) {
    'use strict';
    var FORM_SELECTOR = '[payment-info="form"]';
    var FormHandler = App.FormHandler;
    var payFormHandler = new FormHandler(FORM_SELECTOR);

    payFormHandler.addSubmitHandler(function (data) {
        var str = "Thank you for your payment, " + data.title + " " + data.username + ". Press close to be redirected.";
        $('#thanks-modal-body').html(str);
        $('#thanks-modal').modal('show');
        $('#myModal').on('hidden.bs.modal', function () {
            window.location.pathname = ('/');
            console.log(window.location);
        })

        console.log("Submitted");

    });
    console.log(payFormHandler);
})(window);