/* eslint-global window, tizen */

window.onload = function () {
    tizen.ppm.requestPermission("http://developer.samsung.com/privilege/healthinfo", onsuccessPermission, onErrorPermission);

    function onErrorPermission(){
        console.log('No permission to access health info');
    }

    function onsuccessPermission(){
        console.log('HRM permission succeeded');

        // add eventListener for hardware key tizenhwkey
        document.addEventListener('tizenhwkey', function(e) {
            if(e.keyName === "back") {
                tizen.application.getCurrentApplication().exit();
            }
        });
        
        console.log('Back key listener added');

        var textbox = document.querySelector('.contents');
        var box = document.querySelector('#textbox');

        console.log('text box selected');

        function onsuccessCB(hrmInfo) {
            box.innerHTML = 'Heart rate: ' + hrmInfo.heartRate;
            // holding 15 seconds as HRM sensor needs some time 
        }

        function onerrorCB() {
            tizen.humanactivitymonitor.stop('HRM');
            // console.log('Error occurred: ' + error.message);
        }

        function onchangedCB(hrmInfo) {
            // alert("onChanged...");
            console.log(hrmInfo);
            tizen.humanactivitymonitor.getHumanActivityData('HRM', onsuccessCB, onerrorCB);
        }

        tizen.humanactivitymonitor.start('HRM', onchangedCB);
        console.log('Activity monitor started');
        
        textbox.addEventListener("click", function(){
            console.log('have box');
            tizen.humanactivitymonitor.getHumanActivityData('HRM', onsuccessCB, onerrorCB);
        });
    }
};
