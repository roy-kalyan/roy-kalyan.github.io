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
      <a class="pdf-btn" href="/files/resume/resume-kalyan.pdf" target="_blank" rel="noopener noreferrer"><i class="fas fa-external-link-alt" aria-hidden="true"></i> Open in New Tab</a>
    </div>
    <div class="pdf-control-right">
      <a class="pdf-btn download-btn" href="/files/resume/resume-kalyan.pdf" download><i class="fas fa-download" aria-hidden="true"></i> Download</a>
    </div>
  </div>
  <iframe src="/files/resume/resume-kalyan.pdf#view=FitH" id="pdfIframe" title="Curriculum Vitae (PDF)" width="100%" height="550"></iframe>
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

Last updated: June 12, 2026
