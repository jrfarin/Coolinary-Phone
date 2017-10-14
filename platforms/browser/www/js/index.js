var app = {
    initialize: function() {
        this.bindEvents()
    },
    bindEvents: function() {
        document.addEventListener("deviceready", this.onDeviceReady, false)
    },
    onDeviceReady: function() {
        app.receivedEvent("deviceready")
        document.getElementById("openBrowser").addEventListener("click", openBrowser);
        document.getElementById("openBrowser2").addEventListener("click", openBrowser2);

        function openBrowser() {
           var url = 'https://www.facebook.com/marc.dicarlo.75';
           var target = '_blank';
           var options = "location = yes"
           var ref = cordova.InAppBrowser.open(url, target, options);
         }

         function openBrowser2() {
            var url = 'https://www.instagram.com/coolinarymasterclasses/';
            var target = '_blank';
            var options = "location = yes"
            var ref = cordova.InAppBrowser.open(url, target, options);
          }
    },
    receivedEvent: function(d) {
        // var a = document.getElementById(d);
        // var c = a.querySelector(".listening");
        // var b = a.querySelector(".received");
        // c.setAttribute("style", "display:none;");
        // b.setAttribute("style", "display:block;");
        console.log("Received Event: " + d)
    }
};
$(function() {
    $(".plusIng").click(function() {
        $(this).toggleClass("minusIng")
    });
    $(".plusElb").click(function() {
        $(this).toggleClass("minusElb")
    })
});
$(function() {
    $(".disabled").click(function() {
        $(".alert").toggleClass("show")
    })
});
$(function() {
    $(".disabled-section").click(function(a) {
        a.preventDefault();
        $(".alert").toggleClass("show")
    })
});
