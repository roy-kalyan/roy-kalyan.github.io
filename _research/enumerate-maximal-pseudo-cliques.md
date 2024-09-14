---
title: "Enumerate Maximal Pseudo-cliques"
layout: single-portfolio
excerpt: "<img src='/images/research/sample-graph.png' alt=''>"
collection: research
order_number: 40
header: 
  og_image: "research/sample-graph.png"
---

Graphs (a.k.a., networks) are ubiquitously used to model mutual interactions among real world objects. For example, social networks represent friendship, acquaintanceship, workmate, or other forms of online/offline social relations between persons; web graphs represent links among web-pages; protein-protein interaction (PPI) networks show mutual interactions between proteins; connections in functional linkage networks indicate which pairs of genes/gene-products perform the same function in the cell; edges in co-expression/correlation networks denote which objects (be it a gene, gene-product, brain-region, or something else) have similar expression patterns, and so on.

Densely interconnected parts of a graph, i.e., dense subgraphs of such networks, have been found to give interesting insights about the underlying relationships among the concerned objects. For example, dense subgraphs in a social, PPI, brain, or functional linkage network tend to represent communities in the society, protein complexes in a living cell etc. Dense subgraph mining is also useful for discovering link-spams from web-graphs, graph compression, indexing in graph databases, story-telling in micro-blogs, regulatory motif identification, visualization of large graphs, and so on.

Due to its importance, numerous research has been conducted on dense subgraph mining. Different research use different mathematical formulations to define the concept of densesubgraphs. We are interested in a particular formulation, known as a pseudo-clique (a.k.a., a pseudo-clique or simply, a dense-subgraph): a group of nodes which are densely interconnected with each other and thereby forms a subgraph that looks almost like a clique (a subgraph among which all possible connections/edges are present).

Discovering pseudo-cliques has been proved to be an NP-complete problem. So it is highly unlikely that there exists any polynomial-time algorithm to solve this problem. This issue is compounded by the fact that many real-world networks are very large, containing hundreds of thousands to billions of nodes and/or edges. Using exact algorithms for dense subgraph mining on such large graphs would be prohibitively slow and/or memory-crashing. Hence, most research on this problem focused on developing heuristic or approximation algorithms. But heuristic/approximation algorithms do not guarantee to discover all the dense subgraphs in a graph and thereby may fail to achieve its goal perfectly (correctly identifying all the communities present in a society, all the protein complexes and/or gene-functions in a living cell, etc.). Therefore, we need exact algorithms for these purposes.

To the best of our knowledge, very few exact algorithms can correctly enumerate all pseudo-cliques in a graph. All of them suffer from high running time, high memory requirement, or both. The main reason for their inefficiency is: unlike some other popular pattern mining problem, such as mining frequent itemsets or cliques, pseudo-clique doesn’t satisfy the famous anti-monotone property, i.e., not every subset of a pseudo-clique is a pseudo-clique. As a result, it is difficult to devise effective techniques to prune the search space.

To address these challenges, we have developed an exact algorithm called FPCE (Fast Pseudo-Clique Enumerator) for dense subgraph enumeration. FPCE is a reverse search algorithm that employs effective pruning techniques from graph theory, such as Order Bound, Turan Filtering, and Edge Bound. By leveraging these techniques, our algorithm achieves significantly faster performance compared to existing solutions, thereby advancing the state-of-the-art in exact pseudo-clique enumeration.
