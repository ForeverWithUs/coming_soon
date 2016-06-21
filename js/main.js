$(document).ready(function () {
    var $form = $('#subscribeForm'),
        $alert = $('#subscribeAlert'),
        $input = $form.find('.input.email'),
        $alertTitle = $alert.find('.title'),
        $alertMessage = $alert.find('.sub-title'),
        url = 'https://withpulp.us7.list-manage.com/subscribe?u=d2dfcf7ddc2440565bdc763b9&id=9e64c712f7';

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

            // update alert details
            updateAlert('We got your info!', 'We will contact you with more details soon.');

            // hide form and show alert message
            $form.hide();
            $alert.show();
        } else {
            console.error('something went wrong', response);

            // update alert details
            updateAlert('Something Failed', 'Try submitting the form again.');

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

        // @TODO: validate email input with regex
        // need to prevent the submit to mailchimp
        if ($input.val() === '') {
            console.error('Missing email input');

            updateAlert('Incorrect Email!', 'We need a valid email address.');
            $alert.show();
        } else {
            // submit form after validation passes
            console.log('Form submitted');
        }
    });
});