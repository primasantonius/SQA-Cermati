module.exports = {
    // An array of folders (excluding subfolders) where your tests are located;
    // if this is not specified, the test source must be passed as the second argument to the test runner.
    src_folders: ['tests'],
  
    webdriver: {
      start_process: true,
      port: 4444,
      server_path: require('chromedriver').path,
      waitForAction: 15000,
      cli_args: [
        // very verbose geckodriver logs
        // '-vv'
      ]
    },
  
    test_settings: {
      default: {
        launch_url: 'https://nightwatchjs.org',
        desiredCapabilities : {
          browserName : 'chrome',
          chromeOptions: {
            // Enable this if you encounter unexpected SSL certificate errors in Firefox
            // acceptInsecureCerts: true,
              args: [
                // '-headless',
                // '-verbose'
              ],
          }
        }
      }
    },

    test_runner: {
        type: "mocha",
        options: {
          ui: "bdd",
          reporter: require("mochawesome"),
          reporterOptions: {
            reportDir: "./report",
            quiet: true,
          },
        }
     }
    };