// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// To debug code on page load in Ripple or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.
(function () {
    "use strict";

    document.addEventListener('deviceready', onDeviceReady.bind(this), false);

    function onDeviceReady() {
        // Handle the Cordova pause and resume events
        document.addEventListener('pause', onPause.bind(this), false);
        document.addEventListener('resume', onResume.bind(this), false);

        // TODO: Cordova has been loaded. Perform any initialization that requires Cordova here.
        cordova.plugins.cortana.installVoiceCommandSet('ms-appx:///www/commands.vcd', function () {
        }, function (err) {
            console.error('COMMANDS NOT INSTALLED <from callback> DUE TO ' + JSON.stringify(err));
        });

    };


    var app = WinJS.Application;
    app.addEventListener("activated", activated, false);

    function activated(eventObject) {
        /// <summary> Main entrypoint. When an app is invoked by Cortana when pressing a button in 
        /// Cortana's UI, Protocol Activation will occur. However, when activated directly by Cortana
        /// A VoiceCommand action will occur instead. 
        /// In this case, the 'show trip to {destination}' command leads to the VoiceCommand activation,
        /// and buttons displayed by the background task lead to protocol activation. </summary>

        var activationKind = eventObject.detail.kind;
        var activatedEventArgs = eventObject.detail.detail;
        var speechRecognitionResult = activatedEventArgs[0].result;

        var p = WinJS.UI.processAll().
            then(function () {
                if (activationKind == Windows.ApplicationModel.Activation.ActivationKind.voiceCommand) {
                    // When directly launched via VCD, activation is via the VoiceCommand ActivationKind.

                    var voiceCommandName = speechRecognitionResult.rulePath[0];
                    if (voiceCommandName === "test") {
                        console.log('test suceeded!');
                    }
                }
            });

        // Calling done on a promise chain allows unhandled exceptions to propagate.
        p.done();

        // Use setPromise to indicate to the system that the splash screen must not be torn down
        // until after processAll and navigate complete asynchronously.
        eventObject.setPromise(p);
    }


    function onPause() {
        // TODO: This application has been suspended. Save application state here.
    };

    function onResume() {
        // TODO: This application has been reactivated. Restore application state here.
    };
})();