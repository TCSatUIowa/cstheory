# Past reading-group talks
# Add new entries at the top. Separate talks with --- on its own line.

date: 2025-12-04
title: Biased Linearity Testing in the 1% Regime
speaker: Haakon Larsen
link: https://arxiv.org/abs/2502.01900
abstract:
We study linearity testing over the $$p$$-biased hypercube $$(\{0,1\}^n, \mu_p^{\otimes n})$$ in the 1\% regime.
For a distribution $$\nu$$ supported over $$\{x\in \{0,1\}^k:\sum_{i=1}^k x_i=0 \textnormal{ (mod 2)} \}$$, with marginal distribution $$\mu_p$$ in each coordinate, the corresponding $$k$$-query linearity test $$\textnormal{Lin}(\nu)$$ proceeds as follows:
Given query access to a function $$f:\{0,1\}^n\to \{-1,1\}$$, sample $$(x_1,\dots,x_k)\sim \nu^{\otimes n}$$, query $$f$$ on $$x_1,\dots,x_k$$,  and accept if and only if $$\prod_{i\in [k]}f(x_i)=1$$.
	
Building on the work of Bhangale, Khot, and Minzer (STOC '23), we show, for $$0<p\leq \frac{1}{2}$$, that if $$k \geq  1+\frac{1}{p}$$, then there exists a distribution $$\nu$$ such that the test $$\textnormal{Lin}(\nu)$$ works in the 1\% regime; that is, any function $$f:\{0,1\}^n\to \{-1,1\}$$ passing the test $$\textnormal{Lin}(\nu)$$ with probability $$\geq \frac{1}{2}+\epsilon$$, for some constant $$\epsilon>0$$, satisfies $$\Pr_{x\sim \mu_p^{\otimes n}}[f(x)=g(x)] \geq \frac{1}{2}+\delta$$, for some linear function $$g$$, and a constant $$\delta = \delta(\epsilon)>0$$.
	
Conversely, we show that if $$k < 1+\frac{1}{p}$$, then no such test $$\textnormal{Lin}(\nu)$$ works in the 1\% regime. 
Our key observation is that the linearity test $$\textnormal{Lin}(\nu)$$ works if and only if the distribution $$\nu$$ satisfies a certain pairwise independence property.

---

date: 2025-11-20
title: A general framework for graph sparsification (Proof)
speaker: Sriram Pemmaraju
link: https://courses.cs.duke.edu/cps296.5/current/scribing/cps590_lec8.pdf
abstract:
We present a general framework for constructing cut sparsifiers in undirected graphs---weighted subgraphs for which every cut has the same weight as the original graph, up to a multiplicative factor of $$(1 \pm \epsilon)$$. Using this framework, we simplify, unify, and improve upon previous sparsification results. As simple instantiations of this framework, we show that sparsifiers can be constructed by sampling edges according to their strength (a result of Benczúr and Karger [Approximating s-t minimum cuts in o͂(n$$^2$$) time, in Proceedings of the Twenty-Eighth Annual ACM Symposium on Theory of Computing, ACM, New York, 1996, pp. 47--55], [SIAM J. Comput., 44 (2015), pp. 290--319]), effective resistance (a result of Spielman and Srivastava [SIAM J. Comput., 40 (2011), pp. 1913--1926]), or edge connectivity. Sampling according to edge connectivity is the most aggressive method, and the most challenging to analyze. Our proof that this method produces sparsifiers resolves an open question of Benczúr and Karger. While the above results are interesting from a combinatorial standpoint, we also prove new algorithmic results. In particular, we give the first (optimal) $$O(m)$$-time sparsification algorithm for unweighted graphs. Our algorithm has a running time of $$O(m) + \tilde{O}(n/\epsilon^2)$$ for weighted graphs, which is also linear unless the input graph is very sparse itself. In both cases, this improves upon the previous best running times (due to Benczúr and Karger [Approximating s-t minimum cuts in $$o͂(n^2)$$ time, in Proceedings of the Twenty-Eighth Annual ACM Symposium on Theory of Computing, ACM, New York, 1996, pp. 47--55], [SIAM J. Comput., 44 (2015), pp. 290--319]) of $$O(m\log^2 n)$$ (for the unweighted case) and $$O(m\log^3 n)$$ (for the weighted case), respectively. Our algorithm constructs sparsifiers that contain $$O(n\log n/\epsilon^2)$$ edges in expectation. A key ingredient of our proofs is a natural generalization of Karger's bound on the number of small cuts in an undirected graph. Given the numerous applications of Karger's bound, we suspect that our generalization will also be of independent interest.

---

date: 2025-11-13
title: A general framework for graph sparsification
speaker: Sriram Pemmaraju
link: https://www.cs.ubc.ca/~nickhar/papers/Sparsifier/Sparsifier-Long.pdf
abstract:
We present a general framework for constructing cut sparsifiers in undirected graphs---weighted subgraphs for which every cut has the same weight as the original graph, up to a multiplicative factor of $$(1 \pm \epsilon)$$. Using this framework, we simplify, unify, and improve upon previous sparsification results. As simple instantiations of this framework, we show that sparsifiers can be constructed by sampling edges according to their strength (a result of Benczúr and Karger [Approximating s-t minimum cuts in o͂(n$$^2$$) time, in Proceedings of the Twenty-Eighth Annual ACM Symposium on Theory of Computing, ACM, New York, 1996, pp. 47--55], [SIAM J. Comput., 44 (2015), pp. 290--319]), effective resistance (a result of Spielman and Srivastava [SIAM J. Comput., 40 (2011), pp. 1913--1926]), or edge connectivity. Sampling according to edge connectivity is the most aggressive method, and the most challenging to analyze. Our proof that this method produces sparsifiers resolves an open question of Benczúr and Karger. While the above results are interesting from a combinatorial standpoint, we also prove new algorithmic results. In particular, we give the first (optimal) $$O(m)$$-time sparsification algorithm for unweighted graphs. Our algorithm has a running time of $$O(m) + \tilde{O}(n/\epsilon^2)$$ for weighted graphs, which is also linear unless the input graph is very sparse itself. In both cases, this improves upon the previous best running times (due to Benczúr and Karger [Approximating s-t minimum cuts in $$o͂(n^2)$$ time, in Proceedings of the Twenty-Eighth Annual ACM Symposium on Theory of Computing, ACM, New York, 1996, pp. 47--55], [SIAM J. Comput., 44 (2015), pp. 290--319]) of $$O(m\log^2 n)$$ (for the unweighted case) and $$O(m\log^3 n)$$ (for the weighted case), respectively. Our algorithm constructs sparsifiers that contain $$O(n\log n/\epsilon^2)$$ edges in expectation. A key ingredient of our proofs is a natural generalization of Karger's bound on the number of small cuts in an undirected graph. Given the numerous applications of Karger's bound, we suspect that our generalization will also be of independent interest.

---

date: 2025-10-30
title: Recovering Planted Structures in Randomly Weighted Graphs
speaker: Mehrdad Moharrami
link: https://arxiv.org/abs/2502.08790
abstract:
We study the problem of detecting and recovering a planted spanning tree $$M_n^*$$  hidden within a complete, randomly weighted graph $$G_n$$.  Specifically, each edge $$e$$ has a non-negative weight drawn independently from $$P_n$$ if $$e \in M_n^*$$ and from  
$$Q_n$$ otherwise, where $$P_n \equiv P$$ is fixed and $$Q_n$$ scales with $$n$$ such that its density at the origin satisfies $$\lim_{n\to\infty} n Q'_n(0)=1.$$  
We consider two representative cases: when $$M_n^*$$ is either a uniform spanning tree or a uniform Hamiltonian path. 
We analyze the recovery performance of the minimum spanning tree (MST) algorithm and derive a fixed-point equation that characterizes the asymptotic fraction of edges in $$M_n^*$$ successfully recovered by the MST as  $$n \to \infty.$$ Furthermore, we establish the asymptotic mean  weight of the MST, extending Frieze's $$\zeta(3)$$ result to the planted model. {Leveraging this result, we design an efficient test based on the MST weight and show that it can distinguish the planted model from the unplanted model with vanishing testing error as  $$n \to \infty.$$} Our analysis relies on an asymptotic characterization of the local structure of the planted model, employing the framework of local weak convergence.

---

date: 2025-10-16
title: Computing Optimal Epsilon-Nets Is As Easy As Finding An Unhit Set
speaker: Kasturi Varadarajan
link: https://drops.dagstuhl.de/entities/document/10.4230/LIPIcs.ICALP.2019.87
abstract:
Given a set system $$(X, R)$$ with VC-dimension $$d$$, the celebrated result of Haussler and Welzl (1987) showed that there exists an epsilon-net for $$(X, R)$$ of size $$O(d/\epsilon \cdot \log(1/\epsilon))$$. Furthermore, the algorithm is simple: just take a uniform random sample from $$X$$! However, for many geometric set systems this bound is sub-optimal and since then, there has been much work presenting improved bounds and algorithms tailored to specific geometric set systems.
In this paper, we consider the following natural algorithm to compute an epsilon-net: start with an initial random sample $$N$$. Iteratively, as long as $$N$$ is not an epsilon-net for $$R$$, pick any unhit set $$S$$ in $$R$$ (say, given by an Oracle), and add $$O(1)$$ randomly chosen points from $$S$$ to $$N$$.
We prove that the above algorithm computes, in expectation, epsilon-nets of asymptotically optimal size for all known cases of geometric set systems. Furthermore, it makes $$O(1/\epsilon)$$ calls to the Oracle. In particular, this implies that computing optimal-sized epsilon-nets are as easy as computing an unhit set in the given set system.

---

date: 2025-10-09
title: Breaking the Sorting Barrier for Directed Single-Source Shortest Paths
speaker: Xiang Liu
link: https://dl.acm.org/doi/10.1145/3717823.3718179
abstract:
We give a deterministic $$O(m \log^{2/3} n)$$-time algorithm for single-source shortest paths (SSSP) on directed graphs with real non-negative edge weights in the comparison-addition model. This is the first result to break the $$O(m+nlogn)$$ time bound of Dijkstra’s algorithm on sparse graphs, showing that Dijkstra’s algorithm is not optimal for SSSP.

---

date: 2025-10-02
title: Online and Dynamic Algorithms for Geometric Set Cover and Hitting Set
speaker: Parth Gor
link: https://drops.dagstuhl.de/entities/document/10.4230/LIPIcs.SoCG.2023.46
abstract:
Set cover and hitting set are fundamental problems in combinatorial optimization which are well-studied in the offline, online, and dynamic settings. We study the geometric versions of these problems and present new online and dynamic algorithms for them. In the online version of set cover (resp. hitting set), $$m$$ sets (resp. $$n$$ points) are given and $$n$$ points (resp. $$m$$ sets) arrive online, one-by-one. In the dynamic versions, points (resp. sets) can arrive as well as depart. Our goal is to maintain a set cover (resp. hitting set), minimizing the size of the computed solution.
For online set cover for (axis-parallel) squares of arbitrary sizes, we present a tight $$O(\log n)$$-competitive algorithm. In the same setting for hitting set, we provide a tight $$O(\log N)$$-competitive algorithm, assuming that all points have integral coordinates in $$[0,N)^2$$. No online algorithm had been known for either of these settings, not even for unit squares (apart from the known online algorithms for arbitrary set systems).
For both dynamic set cover and hitting set with $$d$$-dimensional hyperrectangles, we obtain $$(\log m)^{O(d)}$$-approximation algorithms with $$(\log m)^{O(d)}$$ worst-case update time. This partially answers an open question posed by Chan et al. [SODA'22]. Previously, no dynamic algorithms with polylogarithmic update time were known even in the setting of squares (for either of these problems). Our main technical contributions are an extended quad-tree approach and a frequency reduction technique that reduces geometric set cover instances to instances of general set cover with bounded frequency.

---

date: 2025-09-25
title: AWLCO All-Window Length Co-Occurrence
speaker: Joshua Sobel
link: https://drops.dagstuhl.de/entities/document/10.4230/LIPIcs.CPM.2021.24
abstract:
Analyzing patterns in a sequence of events has applications in text analysis, computer programming, and genomics research. In this paper, we consider the all-window-length analysis model which analyzes a sequence of events with respect to windows of all lengths. We study the exact co-occurrence counting problem for the all-window-length analysis model. Our first algorithm is an offline algorithm that counts all-window-length co-occurrences by performing multiple passes over a sequence and computing single-window-length co-occurrences. This algorithm has the time complexity $$O(n)$$ for each window length and thus a total complexity of $$O(n^2)$$ and the space complexity $$O(\lvert I \rvert)$$ for a sequence of size n and an itemset of size $$\lvert I \rvert$$. We propose AWLCO, an online algorithm that computes all-window-length co-occurrences in a single pass with the time complexity of $$O(n)$$ and space complexity of $$O(\sqrt{n\lvert I\rvert})$$, assuming perfect hashing. Following this, we generalize our use case to patterns in which we propose an algorithm that computes all-window-length co-occurrence with time complexity $$O(n\lvert I \rvert)$$, assuming perfect hashing, with an additional pre-processing step and space complexity $$O(\sqrt{n \lvert I \rvert}+ \lvert I \rvert)$$, plus the overhead of the Aho-Corasick algorithm [Aho and Corasick, 1975].

---

date: 2025-09-18
title: Efficient Algorithms for Constructing Very Sparse Spanners and Emulators
speaker: Hongyan Ji
link: https://arxiv.org/abs/1607.08337
abstract:
Miller et al. \cite{MPVX15} devised a distributed\footnote{They actually showed a PRAM algorithm. The distributed algorithm with these properties is implicit in \cite{MPVX15}.} algorithm in the CONGEST model, that given a parameter $$k = 1, 2, \dots$$, constructs an $$O(k)$$-spanner of an input unweighted $$n$$-vertex graph with $$O(n^{1+1/k})$$ expected edges in $$O(k)$$ rounds of communication. In this paper we improve the result of \cite{MPVX15}, by showing a $$k$$-round distributed algorithm in the same model, that constructs a $$(2k-1)$$-spanner with $$O(n^{1+1/k}/\epsilon)$$ edges, with probability $$1 - \epsilon$$, for any $$\epsilon > 0$$. Moreover, when $$k = \omega(\log n)$$, our algorithm produces (still in $$k$$ rounds) *ultra-sparse* spanners, i.e., spanners of size $$n(1+o(1))$$, with probability $$1 - o(1)$$. To our knowledge, this is the first distributed algorithm in the CONGEST or in the PRAM models that constructs spanners or skeletons (i.e., connected spanning subgraphs) that sparse. Our algorithm can also be implemented in linear time in the standard centralized model, and for large $$k$$, it provides spanners that are sparser than any other spanner given by a known (near-)linear time algorithm.

We also devise improved bounds (and algorithms realizing these bounds) for $$(1+\epsilon, \beta)$$-spanners and emulators. In particular, we show that for any unweighted $$n$$-vertex graph and any $$\epsilon > 0$$, there exists a $$(1+\epsilon, (\frac{\log\log n}{\epsilon \log n})^{\log\log n})$$-emulator with $$O(n)$$ edges. All previous constructions of $$(1+\epsilon, \beta)$$-spanners and emulators employ a superlinear number of edges, for all choices of parameters.

Finally, we provide some applications of our results to approximate shortest paths' computation in unweighted graphs.

---

date: 2025-09-04
title: Work-Efficient Parallel Counting via Sampling
speaker: Joshua Sobel
link: https://arxiv.org/abs/2408.09719
abstract:
A canonical approach to approximating the partition function of a Gibbs distribution via sampling is simulated annealing. This method has led to efficient reductions from counting to sampling, including:
$$\bullet$$ classic non-adaptive (parallel) algorithms with sub-optimal cost (Dyer-Frieze-Kannan '89; Bezáková-Štefankovič-Vazirani-Vigoda '08); 
$$\bullet$$ adaptive (sequential) algorithms with near-optimal cost (Štefankovič-Vempala-Vigoda '09; Huber '15; Kolmogorov '18; Harris-Kolmogorov '24).
We present an algorithm that achieves both near-optimal total work and efficient parallelism, providing a reduction from counting to sampling with logarithmic depth and near-optimal work. As consequences, we obtain work-efficient parallel counting algorithms for several important models, including the hardcore and Ising models within the uniqueness regime.

---

date: 2023-11-28
title: Can Q-learning be improved with advice?
speaker: Yongjian Zhong
link: https://arxiv.org/pdf/2110.13052.pdf
topics: Q-learning
abstract:
Despite rapid progress in theoretical reinforcement learning (RL) over the last few years, most of the known guarantees are worst-case in nature, failing to take advantage of structure that may be known a priori about a given RL problem at hand. In this paper we address the question of whether worst-case lower bounds for regret in online learning of Markov decision processes (MDPs) can be circumvented when information about the MDP, in the form of predictions about its optimal Q-value function, is given to the algorithm. We show that when the predictions about the optimal Q-value function satisfy a reasonably weak condition we call distillation, then we can improve regret bounds by replacing the set of state-action pairs with the set of state-action pairs on which the predictions are grossly inaccurate. This improvement holds for both uniform regret bounds and gap-based ones. Further, we are able to achieve this property with an algorithm that achieves sublinear regret when given arbitrary predictions (i.e., even those which are not a distillation). Our work extends a recent line of work on algorithms with predictions, which has typically focused on simple online problems such as caching and scheduling, to the more complex and general problem of reinforcement learning.

---

date: 2023-11-07
title: The primal-dual method for learning augmented algorithms
speaker: Sriram Pemmaraju
link: https://arxiv.org/pdf/2010.11632.pdf
topics: primal-dual
abstract:
The extension of classical online algorithms when provided with predictions is a new and active research area. In this paper, we extend the primal-dual method for online algorithms in order to incorporate predictions that advise the online algorithm about the next action to take. We use this framework to obtain novel algorithms for a variety of online covering problems. We compare our algorithms to the cost of the true and predicted offline optimal solutions and show that these algorithms outperform any online algorithm when the prediction is accurate while maintaining good guarantees when the prediction is misleading.

---

date: 2023-10-31
title: A Universal Randomized Packet Scheduling Algorithm
speaker: Mehrdad Moharrami
link: https://link.springer.com/article/10.1007/s00453-012-9700-0
abstract:
We give a memoryless scale-invariant randomized algorithm REMIX for Packet Scheduling that is $$\epsilon/(\epsilon−1)$$-competitive against an adaptive adversary. REMIX unifies most of previously known randomized algorithms, and its general analysis yields improved performance guarantees for several restricted variants, including the s-bounded instances. In particular, REMIX attains the optimum competitive ratio of $$4/3$$ on 2-bounded instances.

Our results are applicable to a more general problem, called Item Collection, in which only the relative order between packets’ deadlines is known. REMIX is the optimal memoryless randomized algorithm against adaptive adversary for that problem.

---

date: 2023-10-17
title: Graph Searching with Predictions
speaker: Joshua Sobel
link: https://arxiv.org/pdf/2212.14220.pdf
topics: exploration planning
abstract:
Consider an agent exploring an unknown graph in search of some goal state. As it walks around the graph, it learns the nodes and their neighbors. The agent only knows where the goal state is when it reaches it. How do we reach this goal while moving only a small distance? This problem seems hopeless, even on trees of bounded degree, unless we give the agent some help. This setting with “help” often arises in exploring large search spaces (e.g., huge game trees) where we assume access to some score/quality function for each node, which we use to guide us towards the goal. In our case, we assume the help comes in the form of distance predictions: each node v provides a prediction $f(v)$ of its distance to the goal vertex. Naturally if these predictions are correct, we can reach the goal along a shortest path. What if the predictions are unreliable and some of them are erroneous? Can we get an algorithm whose performance relates to the error of the predictions?
In this work, we consider the problem on trees and give deterministic algorithms whose total movement cost is only $O(OPT +\Delta\cdot ERR)$, where $OPT$ is the distance from the start to the goal vertex, $\Delta$ the maximum degree, and the $ERR$ is the total number of vertices whose predictions are erroneous. We show this guarantee is optimal. We then consider a “planning” version of the problem where the graph and predictions are known at the beginning, so the agent can use this global information to devise a search strategy of low cost. For this planning version, we go beyond trees and give an algorithms which gets good performance on (weighted) graphs with bounded doubling dimension.

---

date: 2023-10-10
title: Proportionally Fair Online Allocation of Public Goods with Predictions
speaker: Jeffrey S Keithley
link: https://arxiv.org/abs/2209.15305
abstract:
We design online algorithms for the fair allocation of public goods to a set of N agents over a sequence of T rounds and focus on improving their performance using predictions. In the basic model, a public good arrives in each round, the algorithm learns every agent's value for the good, and must irrevocably decide the amount of investment in the good without exceeding a total budget of B across all rounds. The algorithm can utilize (potentially inaccurate) predictions of each agent's total value for all the goods to arrive. We measure the performance of the algorithm using a proportional fairness objective, which informally demands that every group of agents be rewarded in proportion to its size and the cohesiveness of its preferences. 
In the special case of binary agent preferences and a unit budget, we show that $O(\log N)$ proportional fairness can be achieved without using any predictions, and that this is optimal even if perfectly accurate predictions were available. However, for general preferences and budget no algorithm can achieve better than $\Theta(T/B)$ proportional fairness without predictions. We show that algorithms with (reasonably accurate) predictions can do much better, achieving $\Theta(\log(T/B))$ proportional fairness. We also extend this result to a general model in which a batch of L public goods arrive in each round and achieve $O(\log(min(N,L)\cdot T/B))$ proportional fairness. Our exact bounds are parametrized as a function of the error in the predictions and the performance degrades gracefully with increasing errors.

---

date: 2023-10-03
title: Learning-Augmented Algorithms for Online Steiner Tree
speaker: Hongyan Ji
link: https://arxiv.org/pdf/2112.05353.pdf
topics: online steiner-tree
abstract:
This paper considers the recently popular beyond-worst-case algorithm analysis model which integrates machine-learned predictions with online algorithm design. We consider the on- line Steiner tree problem in this model for both directed and undirected graphs. Steiner tree is known to have strong lower bounds in the online setting and any algorithm’s worst-case guarantee is far from desirable.
This paper considers algorithms that predict which terminal arrives online. The predictions may be incorrect and the al- gorithms’ performance is parameterized by the number of in- correctly predicted terminals. These guarantees ensure that algorithms break through the online lower bounds with good predictions and the competitive ratio gracefully degrades as the prediction error grows. We then observe that the theory is predictive of what will occur empirically. We show on graphs where terminals are drawn from a distribution, the new on- line algorithms have strong performance even with modestly correct predictions.

---

date: 2023-09-26
title: (Learned) Frequency Estimation Algorithms under Zipfian Distribution
speaker: Sourya Roy
link: https://arxiv.org/pdf/1908.05198.pdf
topics: streaming-algorithms
abstract:
The frequencies of the elements in a data stream are an important statistical measure and the task of estimating them arises in many applications within data analysis and machine learning. Two of the most popular algorithms for this problem, Count-Min and Count-Sketch, are widely used in practice.
In a recent work [Hsu et al., ICLR'19], it was shown empirically that augmenting Count- Min and Count-Sketch with a machine learning algorithm leads to a significant reduction of the estimation error. The experiments were complemented with an analysis of the expected error incurred by Count-Min (both the standard and the augmented version) when the input frequencies follow a Zipfian distribution. Although the authors established that the learned version of Count-Min has lower estimation error than its standard counterpart, their analysis of the standard Count-Min algorithm was not tight. Moreover, they provided no similar analysis for Count-Sketch.
In this paper we resolve these problems. First, we provide a simple tight analysis of the expected error incurred by Count-Min. Second, we provide the first error bounds for both the standard and the augmented version of Count-Sketch. These bounds are nearly tight and again demonstrate an improved performance of the learned version of Count-Sketch.
In addition to demonstrating tight gaps between the aforementioned algorithms, we believe that our bounds for the standard versions of Count-Min and Count-Sketch are of independent interest. In particular, it is a typical practice to set the number of hash functions in those algorithms to $\theta(\log n)$. In contrast, our results show that to minimize the expected error, the number of hash functions should be a constant, strictly greater than 1.

---

date: 2023-09-19
title: Machine Learning Advised Ski Rental Problem with a Discount
speaker: Xiang Liu
link: https://dl.acm.org/doi/abs/10.1007/978-3-030-96731-4_18
topics: online ski-rental
abstract:
Traditional online algorithms are designed to make decisions online in the face of uncertainty to perform well in comparison with the optimal offline algorithm for the worst-case inputs. On the other hand, machine learning algorithms try to extrapolate the pattern from the past inputs to predict the future and take decisions online on basis of the predictions to perform well for the average-case inputs. There have been recent studies to augment traditional online algorithms with machine learning oracles to get better performance for all the possible inputs. The machine learning augmented online algorithms perform provably better than the traditional online algorithms when the error of the machine learning oracle is low for the worst-case inputs and all other average-case inputs.
In this paper, we integrate the advantages of the traditional online algorithms and the machine learning algorithms in the context of a novel variant of the ski rental problem. Firstly, we propose the ski rental problem with a discount: in this problem, the rent of the ski, instead of being fixed over time, varies as a function of time. Secondly, we discuss the design and performance evaluation of the online algorithms with machine learning advice to solve the ski rental problem with a discount. Finally, we extend this study to the situation where multiple independent machine learning advice is available. This algorithm design framework motivates to redesign of several online algorithms by augmenting them with one or more machine learning oracles to improve the performance.

---

date: 2023-09-12
title: Improving Online Algorithms via ML Predictions
speaker: Haakon Larsen
link: https://dl.acm.org/doi/pdf/10.5555/3327546.3327635
topics: online ski-rental non-clairvoyant-job-scheduling
abstract:
In this work we study the problem of using machine-learned predictions to improve the performance of online algorithms. We consider two classical problems, ski rental and non-clairvoyant job scheduling, and obtain new online algorithms that use predictions to make their decisions. These algorithms are oblivious to the performance of the predictor, improve with better predictions, but do not degrade much if the predictions are poor.

---

date: 2023-09-05
title: Algorithms with predictions
speaker: Bijaya Adhikari
link: http://www.cs.toronto.edu/~bor/2421s21/papers/mitzenmacher-survey.pdf
topics: online survey
abstract:
We introduce algorithms that use predictions from machine learning applied to the input to circumvent worst-case analysis. We aim for algorithms that have near optimal performance when these predictions are good, but recover the prediction-less worst case behavior when the predictions have large errors.
