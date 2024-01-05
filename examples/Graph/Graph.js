class Graph {
    constructor() {
        this.graph = new Map();
    }

    addVertex(vertex) {
        if (!this.graph.has(vertex)) {
            this.graph.set(vertex, []);
        }
    }

    addEdge(v1, v2) {
        if (this.graph.has(v1) && this.graph.has(v2)) {
            this.graph.get(v1).push(v2);
            this.graph.get(v2).push(v1);
        }
    }

    remove(vertex) {
        if (!this.graph.has(vertex)) {
            return false;
        }
        this.graph.delete(vertex);
        for (let [v, e] of this.graph) {
            let index = e.indexOf(vertex);
            if (index !== -1) {
                e.splice(index, 1);
            }
        }
    }

    log() {
        console.log(this.graph);
    }

    degree(vertex) {
        return this.graph.has(vertex) && Array.from(this.graph.get(vertex))?.length;
    }

    neighbours(vertex) {
        return this.graph.has(vertex) && Array.from(this.graph.get(vertex));
    }

    bfs(startingVertex){
        let queue = [];
        let visited = new Set();

        queue.push(startingVertex);
        visited.add(startingVertex);

        let out = '';
        while(queue.length > 0){
            let curr = queue.shift();
            out += curr + ' ';
            
            let neighbours = this.graph.get(curr);
            for(let item of neighbours){
                if(!visited.has(item)){
                    queue.push(item);
                    visited.add(item);
                }
            }
        }
        console.log(out)
    }
    dfs(startingVertex){
        let stack = [];
        let visited = new Set();

        stack.push(startingVertex);

        let out = '';
        while(stack.length > 0){

            let curr = stack.pop();
            
            if(!visited.has(curr)){
                out += curr + ' ';
                visited.add(curr);

                let neighbours = this.graph.get(curr);
                for(let item of neighbours){
                    if(!visited.has(item)){
                        stack.push(item);
                    }
                }
            }

        };
        console.log(out);
    }
}

module.exports = { Graph };