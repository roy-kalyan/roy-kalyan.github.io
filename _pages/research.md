---
layout: archive
title: "Research"
permalink: /research/
author_profile: true
header:
  og_image: "research/ecdf.png"
---

My research journey started with an AI based project titled, **A Unified Platform for Face Recognition - Deep Learning and Conventional Approach**. This project built a unified platform for face recognition using several state-of-the-art deep learning and conventional models. After that, I worked on a fuzzy theory project, namely, **Crime Prediction Using Multiple-ANFIS Architecture and Spatiotemporal Data**. In this work, we have used several FIS and ANFIS to predict the type of crime highly likely to occur at a certain place and time. Simultaneously, I have worked on a research project titled, **A step towards information extraction: Named entity recognition in Bangla using deep learning**. In this project, a NER system was proposed, which required minimum information to deliver a decent performance with less dependency on handcrafted features. **Bangla Automatic License Plate Recognition (ALPR) System** was the name of my final year capstone project. This time, we built a system that recognizes multiple vehicle license plates in real-time. It works perfectly even if the captured videos of license plates are skewed, faded, blurry or taken at night/in dark light.

In the last few years, I have worked on a research project titled **A Fast Algorithm to Enumerate Maximal Quasi-cliques in a Graph**. In this research, a fast algorithm is being devised to efficiently enumerate large quasi-cliques from a given graph that retains anti-monotone property. We worked on an exact algorithm to compute these quasi-cliques from both real and synthetic graphs. We used C programming language, Python, NetworkX, Matplotlib, Seaborn for implementation purposes. I have been working on another research project titled **An Algorithm to Find Near Minimal Vertex-cover in a Graph**. We are working to find the near minimal vertex cover in a graph in polynomial time as the optimistic solution for finding minimal vertex cover from a graph is an NP-complete problem. Initially, we used C++ programming language, Python, NetworkX, Matplotlib, Seaborn to accomplishing our project.


<nbsp>

{% include base_path %}

{% assign ordered_pages = site.research | sort:"order_number" %}

{% for post in ordered_pages %}
  {% include archive-single.html type="grid" %}
{% endfor %}
