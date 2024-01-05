class WeightedGraph {
    constructor() {
        this.graph = new Map();
    }
    addVertex(v) {
        if (!this.graph.has(v)) {
            this.graph.set(v, []);
        }
    }

    addEdge(v1, v2, weight) {
        this.addVertex(v1);
        this.addVertex(v2);

        this.graph.get(v1).push({node:v2, weight})
        this.graph.get(v2).push({node:v1, weight});
    }

    log() {
        console.log(this.graph);
    }
}

module.exports = { WeightedGraph };