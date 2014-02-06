// Copyright: 2014 PMSI-AlignAlytics
// License: "https://github.com/PMSI-AlignAlytics/dimple/blob/master/MIT-LICENSE.txt"
// Source: /src/objects/storyboard/methods/addOrderRule.js
// Help: http://github.com/PMSI-AlignAlytics/dimple/wiki/dimple.storyboard#wiki-addOrderRule
(function () {
    "use strict";
    dimple.storyboard.prototype.addOrderRule = function (ordering, desc) {
        this._orderRules.push({ ordering : ordering, desc : desc });
    };
}());
