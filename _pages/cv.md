---
layout: archive
title: "Curriculum Vitae (CV)"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

<div class="pdf-container" id="pdfContainer" style="max-width: 800px; margin: 0 auto;">
  <div class="pdf-control-bar">
    <div class="pdf-control-left">
      <button class="pdf-btn" id="btnFullscreen"><i class="fas fa-expand" aria-hidden="true"></i> Full Screen</button>
      <a class="pdf-btn" href="/files/resume/resume-kalyan.pdf" target="_blank"><i class="fas fa-external-link-alt" aria-hidden="true"></i> Open in New Tab</a>
    </div>
    <div class="pdf-control-right">
      <a class="pdf-btn download-btn" href="/files/resume/resume-kalyan.pdf" download><i class="fas fa-download" aria-hidden="true"></i> Download</a>
    </div>
  </div>
  <iframe src="/files/resume/resume-kalyan.pdf#view=FitH" id="pdfIframe" width="100%" height="550" frameborder="no" border="0" marginwidth="0" marginheight="0"></iframe>
</div>

<script>
  var pdfSrc = "/files/resume/resume-kalyan.pdf#view=FitH";

  document.getElementById('btnFullscreen').addEventListener('click', function() {
    var container = document.getElementById('pdfContainer');
    if (!document.fullscreenElement) {
      if (container.requestFullscreen) {
        container.requestFullscreen();
      } else if (container.mozRequestFullScreen) { /* Firefox */
        container.mozRequestFullScreen();
      } else if (container.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
        container.webkitRequestFullscreen();
      } else if (container.msRequestFullscreen) { /* IE/Edge */
        container.msRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  });

  // Update PDF zoom dynamically on entering/exiting fullscreen
  function handleFullscreenChange() {
    var iframe = document.getElementById('pdfIframe');
    if (document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement) {
      iframe.src = "/files/resume/resume-kalyan.pdf#zoom=100";
    } else {
      iframe.src = "/files/resume/resume-kalyan.pdf#view=FitH";
    }
  }

  document.addEventListener('fullscreenchange', handleFullscreenChange);
  document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
  document.addEventListener('mozfullscreenchange', handleFullscreenChange);
  document.addEventListener('MSFullscreenChange', handleFullscreenChange);
</script>

Last updated: September 28, 2024

<!---

---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

Education
======
* B.S. in GitHub, GitHub University, 2012
* M.S. in Jekyll, GitHub University, 2014
* Ph.D in Version Control Theory, GitHub University, 2018 (expected)

Work experience
======
* Summer 2015: Research Assistant
  * Github University
  * Duties included: Tagging issues
  * Supervisor: Professor Git

* Fall 2015: Research Assistant
  * Github University
  * Duties included: Merging pull requests
  * Supervisor: Professor Hub
  
Skills
======
* Skill 1
* Skill 2
  * Sub-skill 2.1
  * Sub-skill 2.2
  * Sub-skill 2.3
* Skill 3

Publications
======
  <ul>{% for post in site.publications %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>
  
Talks
======
  <ul>{% for post in site.talks %}
    {% include archive-single-talk-cv.html %}
  {% endfor %}</ul>
  
Teaching
======
  <ul>{% for post in site.teaching %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>
  
Service and leadership
======
* Currently signed in to 43 different slack teams

-->
