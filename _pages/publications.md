---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---

<p class="publications__intro">This section presents my research publications. You can also find my articles on my ORCiD profile: <a href="https://orcid.org/0009-0000-4915-2169" target="_blank">0009-0000-4915-2169</a>.</p>

{% if author.googlescholar %}
  <p class="publications__intro" style="margin-top: -1rem;">You can also find my articles on <a href="{{author.googlescholar}}" target="_blank">my Google Scholar profile</a>.</p>
{% endif %}

{% include base_path %}

{% for post in site.publications reversed %}
  {% include archive-publication.html %}
{% endfor %}
