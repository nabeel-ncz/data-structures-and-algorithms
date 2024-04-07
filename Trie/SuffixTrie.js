class TrieNode {
    constructor() {
        this.children = {};
        this.isEndOfWord = false;
    }
}

class SuffixTrie {
    constructor() {
        this.root = new TrieNode();
    }

    insertSuffix(suffix) {
        let node = this.root;
        for (const char of suffix) {
            if (!node.children[char]) {
                node.children[char] = new TrieNode();
            }
            node = node.children[char];
        }
        node.isEndOfWord = true;
    }

    buildSuffixTrie(word) {
        for (let i = 0; i < word.length; i++) {
            const suffix = word.slice(i);
            this.insertSuffix(suffix);
        }
    }

    search(suffix) {
        let node = this.root;
        for (const char of suffix) {
            if (!node.children[char]) {
                return false;
            }
            node = node.children[char];
        }
        return node.isEndOfWord;
    }
}


