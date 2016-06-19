$(document).ready(function () {
    var $form = $('#subscribeForm'),
        $alert = $('#subscribeAlert'),
        $alertTitle = $alert.find('.title'),
        $alertMessage = $alert.find('.sub-title'),
        $cancelButton = $('#cancelButton'),
        url = 'http://withpulp.us7.list-manage.com/subscribe?u=d2dfcf7ddc2440565bdc763b9&id=9e64c712f7';

    // update alert
    function updateAlert(title, message) {
        $alertTitle.text(title);
        $alertMessage.text(message);
    }

    // ajax chimp callback
    function chimpCallback(response) {
        // if the response is success
        if (response.result === 'success') {
            console.log('mailchimp received the subscription', response);

            // hide form and show alert message
            $form.hide();
            $alert.show();
        } else {
            console.error('something went wrong', response);

            // update alert details
            updateAlert('Something Failed', 'Try submitting the form again');

            // show form and alert
            $form.show();
            $alert.show();
        }
    }

    // set alert state
    $alert.hide();

    // init ajaxchimp on form
    $form.ajaxChimp({
        url: url,
        callback: chimpCallback
    });

    // on form submit
    $form.submit(function (event) {
        event.preventDefault();

        // @TODO: validate form
        console.log('form submitted');
        //if () {
        //
        //} else {
        //
        //}
    });

    $cancelButton.click(function (event) {
        event.preventDefault();

        console.log('clicked cancel button');
        updateAlert('You said no', 'We will let you die in peace.');

        $form.hide();
        $alert.show();
    });
});