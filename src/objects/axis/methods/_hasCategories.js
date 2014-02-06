// Copyright: 2014 PMSI-AlignAlytics
// License: "https://github.com/PMSI-AlignAlytics/dimple/blob/master/MIT-LICENSE.txt"
// Source: /src/objects/axis/methods/_hasCategories.js
(function () {
    "use strict";
    dimple.axis.prototype._hasCategories = function () {
        return (this.categoryFields !== null && this.categoryFields !== undefined && this.categoryFields.length > 0);
    };
}());
