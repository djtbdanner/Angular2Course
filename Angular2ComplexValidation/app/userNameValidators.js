System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var UserNameValidators;
    return {
        setters:[],
        execute: function() {
            UserNameValidators = (function () {
                function UserNameValidators() {
                }
                UserNameValidators.shouldBeUnique = function (control) {
                    return new Promise(function (resolve, reject) {
                        setTimeout(function () {
                            if (control.value == "mosh") {
                                resolve({ shouldBeUnique: true });
                            }
                            resolve(null);
                        }, 1000);
                    });
                };
                UserNameValidators.cannotContainSpace = function (control) {
                    if (control.value.indexOf(' ') >= 0) {
                        return { cannotContainSpace: true };
                    }
                    return null;
                };
                return UserNameValidators;
            }());
            exports_1("UserNameValidators", UserNameValidators);
        }
    }
});
//# sourceMappingURL=userNameValidators.js.map