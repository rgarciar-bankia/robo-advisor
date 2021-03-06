"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(require("./browser-directives"));
__export(require("./browser-pipes"));
__export(require("./browser-providers"));
var browser_directives_1 = require("./browser-directives");
var browser_pipes_1 = require("./browser-pipes");
var browser_providers_1 = require("./browser-providers");
exports.PLATFORM_PROVIDERS = browser_providers_1.PROVIDERS.concat(browser_directives_1.DIRECTIVES, browser_pipes_1.PIPES);
//# sourceMappingURL=browser.js.map