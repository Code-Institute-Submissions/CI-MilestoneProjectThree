//Function to display a message to a user of using an old browser which may not be fully compatible with the site.
var $buoop = {required:{e:-4,f:-3,o:-3,s:-1,c:-3},insecure:true,api:2020.03 }; 
            function $buo_f(){ 
                var e = document.createElement("script"); 
                    e.src = "//browser-update.org/update.min.js"; 
                    document.body.appendChild(e);
            };
            try {document.addEventListener("DOMContentLoaded", $buo_f,false)}
            catch(e){window.attachEvent("onload", $buo_f)}

// call the function
$buo_f();