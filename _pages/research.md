---
layout: archive
title: "Research"
permalink: /research/
author_profile: true
header:
  og_image: "research/ecdf.png"
---

* **A Fast Exact Algorithm to Enumerate Maximal Pseudo-cliques in Large Sparse Graphs:** One of my key research projects involved the development of FPCE (Fast Pseudo-Clique Enumerator), an exact algorithm for enumerating maximal pseudo-cliques in large sparse graphs. Pseudo-cliques represent densely connected subgraphs within a network, and their identification is crucial for various graph mining tasks. FPCE is a reverse search algorithm along with effective pruning techniques employed from graph theory. These pruning techniques allow FPCE to often outperform existing algorithms in terms of speed.


* **An Approximation Algorithm For Vertex-cover Problem:** I was involved in a research project focused on developing an approximation algorithm for the vertex cover problem. This well-known problem seeks a minimal set of vertices in a network that covers all edges. The project aimed to design and implement an approximation algorithm to find near-optimal solutions for the vertex cover problem. This research employed established graph theory theorems alongside the development of potentially novel ones to achieve this goal.

<nbsp>

{% include base_path %}

{% assign ordered_pages = site.research | sort:"order_number" %}

{% for post in ordered_pages %}
  {% include archive-single.html type="grid" %}
{% endfor %}
