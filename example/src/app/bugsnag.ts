import bugsnag from 'bugsnag-js';

const bugsnagClient = bugsnag({
  // get your own api key at bugsnag.com
  apiKey: 'API_KEY',

  // if you track deploys or use source maps, make sure to set the correct version.
  appVersion: '1.2.3',

  // defines the release stage for all events that occur in this app.
  releaseStage: 'development',

  //  defines which release stages bugsnag should report. e.g. ignore staging errors.
  notifyReleaseStages: [ 'development', 'production'],

  // because this is a demo app, below extends the default of 10 notifications per pageload. click away!
  maxEvents: 50,

  // one of the most powerful tools in our library, beforeSend lets you evaluate, modify, add and remove data before sending to bugsnag. The actions here will be applied to *all* errors, handled and unhandled.
  beforeSend: function (report) {
    report.user = {
      name: "Grace Hopper",
      email: "ghopper@code.com",
      id: "123456789"
    }
    // add any custom attributes relevant to your app. Note that metadata can be added here, in a specific notify (example bleow) or globally.
    // using updateMetaData() to preserve any metadata already attached to the report object.
    report.updateMetaData('company', {
      name: "Xavier's School for Gifted Youngsters"
      })
    },
});

export default bugsnagClient;
