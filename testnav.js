
$('#nav').html(
'<div class="collapse navbar-collapse">' +
  '<!-- Nav tabs -->' +
  '<ul class="nav navbar-nav">' +
    '<li id="home" ><a href="TestBCSFrontpage.html">Home</a></li>' +
    '<li id="design"><a href="TestBCSDesign.html">Design</a></li>' +
    '<li id="method"><a href="BCSMethod.html">Method</a></li>' +
    '<li id="createstim"><a href="BCSStimuli.html">Creating Stimuli</a></li>' +
    '<li id="spr"><a href="BCSSPR.html">Self-Paced Reading</a></li>' +
    '<li id="analysis"><a href="BCSAnalysis.html">Stimuli Analysis</a></li>' +
    '<li id="resource"><a href="BCSResources.html">Resources</a></li>' +
  '</ul>' +
'</div>');
//reference to the parent frame to get to the daughter frames.
//

$(document).ready(function() {

  //Pop up JS
  $('.LearnMoreBtn').on('click', function() {
    $(this).siblings('.overlay').show();
    $(this).siblings('.popup').show();
  });

  $('.CloseBtn').on('click', function() {
    $(this).parent().hide(function() {
      $(this).siblings('.overlay').hide();
    });
  });

  $('[data-toggle="tooltip"]').tooltip();
});


/* Just a cool script! No idea for a practical use yet
<script>
$(document).ready(function(){
    $("button").click(function(){
        $("#div1").fadeIn();
        $("#div2").fadeIn("slow");
        $("#div3").fadeIn(3000);
    });
});
</script> */
