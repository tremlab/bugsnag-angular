import bugsnag from 'bugsnag-js';

// This service initializes Bugsnag and makes it available to the root module. Below are examples of some possible configurations, but only the api apiKey is required to get started.

const bugsnagClient = bugsnag({
  // get your own api key at bugsnag.com
  apiKey: 'aaa5f6d3250177a3ea6d5dd52c8d5b07',

  // if you track deploys or use source maps, make sure to set the correct version.
  appVersion: '1.2.3',

  // defines the release stage for all events that occur in this app.
  releaseStage: 'production',

  //  defines which release stages bugsnag should report. e.g. ignore staging errors.
  notifyReleaseStages: [ 'development', 'production'],

  // because this is a demo app, below extends the default of 10 notifications per pageload. click away!
  maxEvents: 50,

  // one of the most powerful tools in our library, beforeSend lets you evaluate, modify, add and remove data before sending to bugsnag. The actions here will be applied to *all* errors, handled and unhandled.
  beforeSend: function (report) {
    report.user = {
      name: "Katherine Joshnson",
      email: "kj@nasa.gov",
      id: "0112358"
    }
    // add any custom attributes relevant to your app. Note that metadata can be added here, in a specific notify (example bleow) or globally.
    // using updateMetaData() to preserve any metadata already attached to the report object.
    report.updateMetaData('company', {
      name: "Hogwarts School of Witchcraft and Wizardry"
      })
    },
    // N.B. our notifer automatically creates a metadata tab called "Angular" and populates it with component and context details.
});

export default bugsnagClient;

// See our documentation for futher options and examples https://docs.bugsnag.com/
