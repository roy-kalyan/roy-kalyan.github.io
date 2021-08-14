---
layout: archive
title: "Research"
permalink: /research/
author_profile: true
header:
  og_image: "research/ecdf.png"
---

My research interest lies in Theoretical Computer Science, specifically in Graph Theory. Over the past few years, I am working on a research project titled **A Fast Algorithm to Enumerate Maximal Quasi-cliques in a Graph**. In this research, we are developing an exact algorithm, called QCE (stands for Quasi-Clique Enumerator) to enumerate maximal quasi-cliques of a graph. QCE is a reverse search algorithm along with effective pruning techniques employed from graph theory. QCE runs significantly faster than other competitors as well as takes less or comparable amount of memory because of these pruning techniques.

Currently, I am working on another research project titled **An Approximation Algorithm For Vertex-cover Problem**. In this research, our goal is to design and implement an approximation algorithm to find the minimal or near minimal vertex-cover of a graph. We are employing known theorems from graph theory as well as deriving new theorems for the research purpose.

<nbsp>

{% include base_path %}

{% assign ordered_pages = site.research | sort:"order_number" %}

{% for post in ordered_pages %}
  {% include archive-single.html type="grid" %}
{% endfor %}
