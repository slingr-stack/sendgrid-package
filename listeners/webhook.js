/****************************************************
 Listeners
 ****************************************************/

listeners.defaultWebhookSendGrid = {
    label: 'Catch HTTP SendGrid events',
    type: 'service',
    options: {
        service: 'http',
        event: 'webhook',
        matching: {
            path: '/sendgrid',
        }
    },
    callback: function(event) {
        sys.logs.info('[sendgrid] Received SendGrid webhook. Processing and triggering a package event.', event);
        sys.events.triggerEvent('sendgrid:webhook', event.data);
    }
};
