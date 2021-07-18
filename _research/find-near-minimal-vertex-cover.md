---
title: "Find Near Minimal Vertex-cover in a Graph"
layout: single-portfolio
excerpt: "<img src='/images/research/vertex-cover.png' alt=''>"
collection: research
order_number: 40
header: 
  og_image: "research/vertex-cover.png"
---

A vertex cover of an undirected graph $G = (V, E)$ is a subset $V' \subseteq V$ such that if $(u, v)$ is an edge of $G$, then either $u \in V'$ or $v \in V'$. Simply, a vertex cover is a set of vertices that contains at least one endpoints of each individual edge of a graph.

Finding minimal vertex cover in a graph has many real world applications. Due to its importance, a lot of research have been conducted on vertex cover. Discovering minimal vertex cover has been proved to be an NP-complete problem. So it is highly unlikely that there exists any polynomial-time algorithm to solve this problem. This issue is compounded by the fact that many real-world networks are very large, containing hundreds of thousands to billions of nodes and/or edges. To solve this problem, we are trying to develop an algorithm to find the near minimal vertex cover in a graph in polynomial time. Our research is still ongoing.
