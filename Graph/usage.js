const { Graph } = require('./Graph');
const { WeightedGraph } = require('./WeightedGraph');

const graph = new Graph();


graph.addVertex(1);
graph.addVertex(4);
graph.addVertex(6);
graph.addVertex(3);
graph.addVertex(7);

graph.addEdge(1, 4);
graph.addEdge(7, 6);
graph.addEdge(3, 7);
graph.addEdge(5, 6);
graph.addEdge(3, 6);
graph.addEdge(1, 3);

graph.log();
graph.bfs(1);
graph.dfs(1);


const wGraph = new WeightedGraph();

wGraph.addVertex('A');
wGraph.addVertex('B');
wGraph.addVertex('C');
wGraph.addVertex('D');
wGraph.addVertex('E');

wGraph.addEdge('A', 'B', 3);
wGraph.addEdge('E', 'C', 1);
wGraph.addEdge('D', 'E', 0);
wGraph.addEdge('F', 'C', 6);
wGraph.addEdge('D', 'C', 1);
wGraph.addEdge('A', 'D', 7);
