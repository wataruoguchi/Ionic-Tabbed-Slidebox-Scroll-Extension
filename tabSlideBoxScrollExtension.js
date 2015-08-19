/*global angular*/
(function() {
  "use strict";
  var tabSlideBoxScrollExtension = [
    "$timeout", "$window", function($timeout, $window) {
      return {
        restrict: "E",
        link: function(scope, element) {
          $timeout(function() {
            var expndSld, iconsDiv, iconsOffsetHeight, ionContent, margins, styles;
            iconsDiv = element[0].querySelector(".tsb-icons");
            styles = $window.getComputedStyle(iconsDiv);
            margins = parseFloat(styles.marginTop) + parseFloat(styles.marginBottom);
            iconsOffsetHeight = iconsDiv.offsetHeight + margins + "px";
            ionContent = element.find("ion-content");
            expndSld = angular.element(ionContent);
            expndSld.css("margin-bottom", iconsOffsetHeight);
          }, 500);
        }
      };
    }
  ];
  return angular.module("tabSlideBoxScrollExtension", []).directive("tabSlideBox", tabSlideBoxScrollExtension);
})();
