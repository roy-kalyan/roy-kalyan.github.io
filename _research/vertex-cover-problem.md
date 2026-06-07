---
title: "Vertex-cover Problem"
layout: single-portfolio
thumbnail: /images/research/vertex-cover.png
excerpt: "A vertex cover is a set of nodes that touches every edge in a graph; finding the smallest one is a classic, computationally hard problem with broad applications. This project develops an approximation algorithm to find minimal or near-minimal vertex covers efficiently on large networks. (Ongoing.)"
collection: research
order_number: 40
header: 
  og_image: "research/vertex-cover.png"
---

A vertex cover of an undirected graph $G = (V, E)$ is a subset $V' \subseteq V$ such that if $(u, v)$ is an edge of $G$, then either $u \in V'$ or $v \in V'$. Simply, a vertex cover is a set of vertices that includes at least one endpoints of each individual edge of a graph.

Finding minimal vertex cover in a graph has many real world applications. Due to its importance, numerous research has been conducted on vertex cover. Discovering minimal vertex cover has been proved to be an NP-complete problem. So it is highly unlikely that any polynomial-time algorithm exists to solve this problem. This issue is compounded because many real-world networks are extensive, containing hundreds of thousands to billions of nodes and/or edges. To solve this problem, an approximation algorithm is being developed to find the minimal or near minimal vertex-cover of a graph.

<ins>This research is still ongoing.</ins>
