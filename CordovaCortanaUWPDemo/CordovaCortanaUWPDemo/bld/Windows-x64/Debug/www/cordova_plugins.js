cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/com.msopentech.cortana/www/cortana.js",
        "id": "com.msopentech.cortana.Cortana.js",
        "clobbers": [
            "cordova.plugins.cortana"
        ]
    },
    {
        "file": "plugins/com.msopentech.cortana/src/windows/CortanaProxy.js",
        "id": "com.msopentech.cortana.CortanaProxy",
        "runs": true
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "com.msopentech.cortana": "0.0.1"
}
// BOTTOM OF METADATA
});