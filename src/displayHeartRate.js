function displayHeartRate() {
  console.log('HRM permission succeeded');

  // add eventListener for hardware key tizenhwkey
  document.addEventListener('tizenhwkey', (e) => {
    if (e.keyName === 'back') {
      tizen.application.getCurrentApplication().exit();
    }
  });

  console.log('Back key listener added');

  const textbox = document.querySelector('.contents');
  const box = document.querySelector('#textbox');

  console.log('text box selected');

  function onsuccessCB(hrmInfo) {
    box.innerHTML = `Heart rate: ${hrmInfo.heartRate}`;
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

  textbox.addEventListener('click', () => {
    console.log('have box');
    tizen.humanactivitymonitor.getHumanActivityData('HRM', onsuccessCB, onerrorCB);
  });
}

exports = displayHeartRate;
