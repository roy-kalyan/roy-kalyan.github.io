---
layout: archive
title: "Research"
permalink: /research/
author_profile: true
header:
  og_image: "research/ecdf.png"
---

My research interest lies in Graph Theory. In the last few years, I am working on a research project titled **A Fast Algorithm to Enumerate Maximal Quasi-cliques in a Graph**. In this research, we are developing an exact algorithm to enumerate maximal quasi-cliques in a given graph. Our algorithm is a reverse search algorithm along with effective pruning techniques employed from graph theory. Our algorithm runs significantly faster than our competitors as well as takes less or comparable amount of memory because of these pruning techniques.

Recently, I am working on another research project titled **An Algorithm to Find Near Minimal Vertex-cover in a Graph**. In this research, we are developing an algorithm to find the near minimal vertex cover in a graph in polynomial time as the optimal solution for finding minimal vertex cover is an NP-complete problem.


<nbsp>

{% include base_path %}

{% assign ordered_pages = site.research | sort:"order_number" %}

{% for post in ordered_pages %}
  {% include archive-single.html type="grid" %}
{% endfor %}
