'use strict';

angular.module('infrastructure.printer', [])
    .factory('printer', [function () {
        var print = function (printElementId) {
                        var hiddenFrame = $('<iframe style="display: none" id="printPatientFrame"></iframe>').appendTo('body')[0];
                        hiddenFrame.contentWindow.printAndRemove = function() {
                            hiddenFrame.contentWindow.print();
                            $(hiddenFrame).remove();
                        }
                        var code = "<!doctype html>"+
                                    "<html>"+
                                        "<head>" +
                                            '<style type="text/css">' +
                                                '.hindi-text { vertical-align:bottom; }' +
                                                'h1, h2, h3 { padding: 0; margin: 0;}' +
                                            '</style>'+
                                       "</head>"+
                                        '<body onload="printAndRemove();">' +
                                             document.getElementById(printElementId).innerHTML +
                                        "</body>"+
                                    "</html>";
                        var doc = hiddenFrame.contentWindow.document.open("text/html", "replace");
                        doc.write(code);
                        doc.close();
                    };
        return {
            print: print
        }
}]);