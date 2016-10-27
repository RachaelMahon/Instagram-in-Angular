
$(document).ready(function(){
   var $pc = $('#progressController');
   var $pCaption = $('.progress-bar p');
   var iProgress = document.getElementById('inactiveProgress');
   var aProgress = document.getElementById('activeProgress');
   var iProgressCTX = iProgress.getContext('2d');
   var thermostat = new Thermostat();

   drawInactive(iProgressCTX);

   $pc.on('change', function(){
     var percentage = $(this).val() / 100;
     console.log(percentage + '%');
     drawProgress(aProgress, percentage, $pCaption);
   });

   function drawInactive(iProgressCTX){
     iProgressCTX.lineCap = 'square';
     //
    //  //outer ring
    //  iProgressCTX.beginPath();
    //  iProgressCTX.lineWidth = 15;
    //  iProgressCTX.strokeStyle = '#e1e1e1';
    //  iProgressCTX.arc(137.5,137.5,129,0,2*Math.PI);
    //  iProgressCTX.stroke();

     //progress bar
     iProgressCTX.beginPath();
     iProgressCTX.lineWidth = 0;
     iProgressCTX.fillStyle = '#e6e6e6';
     iProgressCTX.arc(137.5,137.5,121,0,2*Math.PI);
     iProgressCTX.fill();

     //progressbar caption
     iProgressCTX.beginPath();
     iProgressCTX.lineWidth = 0;
     iProgressCTX.fillStyle = '#fff';
     iProgressCTX.arc(137.5,137.5,100,0,2*Math.PI);
     iProgressCTX.fill();
   }

   function drawProgress(bar, percentage, $pCaption){
     var barCTX = bar.getContext("2d");
     var quarterTurn = Math.PI / 2;
     var endingAngle = ((2*percentage) * Math.PI) - quarterTurn;
     var startingAngle = 0 - quarterTurn;

     bar.width = bar.width;
     barCTX.lineCap = 'square';

     barCTX.beginPath();
     barCTX.lineWidth = 20;
     barCTX.strokeStyle = '#76e1e5';
     barCTX.arc(137.5,137.5,111,startingAngle, endingAngle);
     barCTX.stroke();

     $pCaption.text( (parseInt(percentage * 100, 10)) + '%');
   }

     var percentage = $pc.val() / 100;
     drawProgress(aProgress, percentage, $pCaption);

     document.getElementById('tempupdate').innerHTML = thermostat.temperature();

     $('#temperature-up').click(function (){
       thermostat.upButton();
       document.getElementById('tempupdate').innerHTML = thermostat.temperature();
     });

     $('#temperature-down').click(function (){
       thermostat.downButton();
       document.getElementById('tempupdate').innerHTML = thermostat.temperature();
     });

     $('#temperature-reset').click(function (){
       thermostat.resetTemp();
       document.getElementById('tempupdate').innerHTML = thermostat.temperature();
     });

     $('#turn-power-saving-on').click(function (){
       thermostat.switchPowerSavingOn();
       $('body').addClass('cold').removeClass('hot');
     });

     $('#turn-power-saving-off').click(function (){
       thermostat.switchPowerSavingOff();
       $('body').addClass('hot').removeClass('cold');
     });

 });
