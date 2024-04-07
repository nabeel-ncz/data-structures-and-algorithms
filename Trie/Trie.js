class TrieNode {
    constructor(data) {
        this.data = data;
        this.children = {};
        this.isEnd = false;
    }
}

class Trie {
    constructor() {
        this.root = new Trie(null);
    }
    insert(word) {
        let curr = this.root;
        for (let char of word) {
            if (!curr.children[char]) {
                curr.children[char] = new TrieNode(char);
            }
            curr = curr.children[char];
        }
        curr.isEnd = true;
    }

    getSuggestions(prefix) {
        let curr = this.root;
        for (let char of prefix) {
            if (!curr.children[char]) {
                return [];
            }
            curr = curr.children[char];
        }
        return this.findWordsWithPrefix(curr, prefix);
    }

    findWordsWithPrefix(curr, word) {
        let suggestions = [];
        if (curr.isEnd) {
            suggestions.push(word);
        }
        for (let char in curr.children) {
            suggestions = suggestions.concat(this.findWordsWithPrefix(curr.children[char], word + char));
        }
        return suggestions;
    }

}


module.exports = { Trie }