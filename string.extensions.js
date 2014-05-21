/*
* String extensions
*
* Adds a few methods to the String object.
*
* Released under the MIT license.
* http://www.opensource.org/licenses/mit-license.php
*/

String.prototype.padLeft = function (n, pad) {
    t = '';
    if (n > this.length) {
        for (i = 0; i < n - this.length; i++) {
            t += pad;
        }
    }
    return t + this;
};

String.prototype.padRight = function (n, pad) {
    t = this;
    if (n > this.length) {
        for (i = 0; i < n - this.length; i++) {
            t += pad;
        }
    }
    return t;
};

String.prototype.toTitleCase = function () {
    return this.replace(/\w\S*/g, function (txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
};