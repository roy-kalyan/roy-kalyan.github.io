---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---

**You can also find my articles on my [ORCiD](https://orcid.org/0009-0000-4915-2169) profile.**

{% if author.googlescholar %}
  You can also find my articles on <u><a href="{{author.googlescholar}}">my Google Scholar profile</a>.</u>
{% endif %}

{% include base_path %}

{% for post in site.publications reversed %}
  {% include archive-single.html %}
{% endfor %}
