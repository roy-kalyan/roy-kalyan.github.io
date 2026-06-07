---
layout: archive
title: "Research"
permalink: /research/
author_profile: true
header:
  og_image: "research/ecdf.png"
---

<p class="publications__intro">My research projects are listed here. Further details are available by clicking on each project.</p>

{% include base_path %}

{% assign ordered_pages = site.research | sort:"order_number" %}

<div class="research-list" style="margin-top: 2rem;">
  {% for post in ordered_pages %}
    {% include archive-research.html %}
  {% endfor %}
</div>
