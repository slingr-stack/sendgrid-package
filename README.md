# Overview

Repo: [https://github.com/slingr-stack/sendgrid-package](https://github.com/slingr-stack/sendgrid-package)

This [package](https://platform-docs.slingr.io/dev-reference/data-model-and-logic/packages/) provides direct access to the SendGrid API.
SendGrid is an email delivery and marketing platform that allows businesses to send and manage their email campaigns.

## Configuration

#### API Key
API key given by SendGrid. You can find it in [SendGrid](https://app.sendgrid.com/settings/api_keys) once you have an account created.

**Name**: `apiKey`
**Type**: text
**Mandatory**: true

#### Webhooks URL
The URL to configure in webhooks of your SendGrid App.
(Take a look at the [SendGrid documentation](https://www.twilio.com/docs/sendgrid/for-developers/tracking-events/getting-started-event-webhook#add-an-event-webhook).)

**Name**: `webhooksUrl`
**Type**: label

#### SendGrid API URL
The URL of the Twilio API where the requests are performed.

**Name**: `SENDGRID_API_BASE_URL`
**Type**: label

## Javascript API

### HTTP requests
You can make `GET`,`POST`,`OPTIONS`,`PUT`,`DELETE` requests to the [sendgrid API](https://docs.sendgrid.com/for-developers/sending-email/api-getting-started) like this:
```javascript
var response = pkg.sendgrid.api.get('/ips/pools')
var response = pkg.sendgrid.api.post('/validations/email', body)
var response = pkg.sendgrid.api.post('/validations/email')
var response = pkg.sendgrid.api.patch('/tracking_settings/google_analytics', body)
var response = pkg.sendgrid.api.patch('/tracking_settings/google_analytics')
var response = pkg.sendgrid.api.put('/marketing/contacts/imports', body)
var response = pkg.sendgrid.api.put('/marketing/contacts/imports')
var response = pkg.sendgrid.api.delete('/suppression/bounces')
```

Please take a look at the documentation of the [HTTP service](https://github.com/slingr-stack/http-service)
for more information about generic requests.

## Events
### Webhook

Incoming webhook events are automatically captured by the default listener named `Catch HTTP SendGrid events`, which can be found below the `Scripts` section. Alternatively, you have the option to create a new package listener. For more information, please refer to the [Listeners Documentation](https://platform-docs.slingr.io/dev-reference/data-model-and-logic/listeners/). Please refer to the SendGrid documentation of the [Webhooks](https://www.twilio.com/docs/sendgrid/for-developers/tracking-events/getting-started-event-webhook#add-an-event-webhook) for more information.

## Dependencies
* HTTP Service

## About Slingr

Slingr is a low-code rapid application development platform that accelerates development, with robust architecture for integrations and executing custom workflows and automation.

[More info about Slingr](https://slingr.io)

## License

This package is licensed under the Apache License 2.0. See the `LICENSE` file for more details.
