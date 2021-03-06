
$('#nav').html(
'<div class="collapse navbar-collapse bckgrnd">' +
  '<!-- Nav tabs -->' +
  '<ul class="nav navbar-nav">' +
  '<li class="dropdown" id="home">'+
  '<a class="dropdown-toggle" data-toggle="dropdown" href="index.html">Home' +
  '<span class="caret"></span></a>' +
  '<ul class="dropdown-menu">' +
    '<li id="home"><a href="index.html">Home</a></li>' +
    '<li id="abt"><a href="About.html">About</a></li>' +
    '<li id="fdbck"><a href="Feedback.html">Feedback</a></li>' +
    '</ul>' +
    '<li><a href="#"></a></li>' +
    '<li id="start" ><a href="Start.html">How Do I Start?</a></li>' +
    '<li><a href="#"></a></li>' +
    '<li class="dropdown" id="design">'+
    '<a class="dropdown-toggle" data-toggle="dropdown" href="Design.html">Design' +
    '<span class="caret"></span></a>' +
    '<ul class="dropdown-menu">' +
      '<li id="des"><a href="Design.html">Design</a></li>' +
      '<li id="des2"><a href="Participants.html">Participants</a></li>' +
      '<li id="des3"><a href="CriticalItems.html">Critical Items</a></li>' +
      '<li id="des4"><a href="DesignTypes.html">Types of Design</a></li>' +
      '<li id="sprdes"><a href="SPRDesign.html">SPR Example: Design</a></li>' +
      '</ul>' +
    '</li>' +
    '<li><a href="#"></a></li>' +
    '<li class="dropdown" id="procedure">'+
    '<a class="dropdown-toggle" data-toggle="dropdown" href="Procedure.html">Procedure' +
    '<span class="caret"></span></a>' +
    '<ul class="dropdown-menu">' +
      '<li id="sprpro"><a href="SPRProcedure.html">SPR: Procedure</a></li>' +
      '</ul>' +
    '</li>' +
    '<li><a href="#"></a></li>' +
    '<li class="dropdown" id="createstim">'+
      '<a class="dropdown-toggle" data-toggle="dropdown" href="Items.html">Materials' +
      '<span class="caret"></span></a>' +
      '<ul class="dropdown-menu">' +
        '<li id="crit"><a href="SPRCriticalItems.html">SPR Example: Critical Items</a></li>' +
        '<li id="regi"><a href="SPRRegion.html">SPR Example: Defining Sentence Regions</a></li>' +
        '<li id="good"><a href="SPRGoodItems.html">SPR Example: How to Make Good Critical Items</a></li>' +
        '<li id="fill"><a href="Fillers.html">Filler Items</a></li>' +
        '<li id="sprfill"><a href="SPRGoodFillers.html">SPR Example: How To Make Good Filler Items</a></li>' +
        '<li id="sprcomp"><a href="SPRComprehension.html">SPR Example: Comprehension Questions</a></li>' +
        '<li id="list"><a href="Lists.html">Lists & Latin Square Design</a></li>' +
        '<li id="sprlist"><a href="SPRLists.html">SPR Example: Lists</a></li>' +
        '<li id="sprform"><a href="SPRFormat.html">SPR Example: Preparing your Experiment for CrowdExp</a></li>' +
        '</ul>' +
    '</li>' +
    '<li><a href="#"></a></li>' +
    '<li class="dropdown" id="analysis">'+
      '<a class="dropdown-toggle" data-toggle="dropdown" href="Analysis.html">Analysis' +
      '<span class="caret"></span></a>' +
      '<ul class="dropdown-menu">' +
        '<li id="an"><a href="Analysis.html">Analysis</a></li>' +
        '<li id="spran"><a href="SPRAnalysisOverview.html">SPR Example: Analysis Overview</a></li>' +
        '<li id="ansco"><a href="Annotation.html">Annotation & Scoring</a></li>' +
        '<li id="spransco"><a href="SPRAnnotation.html">SPR Example: Annotation & Scoring</a></li>' +
        '<li id="excl"><a href="Exclusion.html">Exclusion</a></li>' +
        '<li id="sprexcl"><a href="SPRExclusion.html">SPR Example: Exclusion</a></li>' +
        '<li id="resu"><a href="Results.html">Results</a></li>' +
        '<li id="sprresu"><a href="SPRAnalysisResults.html">SPR Example: Results</a></li>' +
        '<li id="vsrep"><a href="VisualReport.html">Visual Report</a></li>' +
        '<li id="sprvsrep"><a href="SPRVisualReport.html">SPR Example: Visual Report</a></li>' +
        '</ul>' +
    '</li>' +
    '<li><a href="#"></a></li>' +
    '<li class="dropdown" id="interpret">'+
    '<a class="dropdown-toggle" data-toggle="dropdown" href="Interpretation.html">Interpretation' +
    '<span class="caret"></span></a>' +
    '<ul class="dropdown-menu">' +
      '<li id="inte"><a href="Interpretation.html">Interpretation</a></li>' +
      '<li id="sprinte"><a href="SPRInterpretation.html">SPR Example: Interpretation</a></li>' +
      '</ul>' +
    '</li>' +
    '<li><a href="#"></a></li>' +
    '<li><a href="#"></a></li>' +
    '<li id="resource"><a href="Resources.html">Resources</a></li>' +
    '<li id="glossary"><a href="Glossary.html">Glossary</a></li>' +
  '</ul>' +
'</div>');
//reference to the parent frame to get to the daughter frames.
//

$(document).ready(function() {

  //Pop up JS
  $('.LearnMoreBtn').on('click', function() {
    $(this).next('.popup').show();
  });

  $('.CloseBtn').on('click', function() {
    $(this).parent().hide();
  });

  $('[data-toggle="tooltip"]').tooltip();
});
