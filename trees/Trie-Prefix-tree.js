/*
problem:
https://leetcode.com/problems/implement-trie-prefix-tree/solution/

based on:
https://gist.github.com/tpae/72e1c54471e88b689f85ad2b3940a8f0
*/

var TrieNode = function (key) {
    this.key = key;
    // this.parent = null;
    this.children = {};
    this.end = false;
}

/**
 * Initialize your data structure here.
 */
var Trie = function() {
    this.root = new TrieNode(null);
};

/**
 * Inserts a word into the trie.
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let node = this.root;

    for (let i=0; i<word.length; i++) {
        const currentChar = word[i];
        if (!node.children[currentChar]) {
            node.children[currentChar] = new TrieNode(currentChar);
        }

        // proceed to the next depth in the trie.
        node = node.children[currentChar];

        // if it is the las char, set it as the end
        if (i == word.length - 1) {
            node.end = true;
        }
    }
};

/**
 * Returns if the word is in the trie.
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    let node = this.root;
    // console.log("node: ", Object.keys(node))

    for (let i=0; i<word.length; i++) {
        const currentChar = word[i];

        if (node.children[currentChar]) {
            node = node.children[currentChar];
        } else {
            return false;
        }
    }

    return node.end;
};

/**
 * Returns if there is any word in the trie that starts with the given prefix.
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {

};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */

var obj = new Trie()
obj.insert('rodo')
obj.insert('rola')
// console.log(JSON.stringify(obj))
console.log(obj.search('rodo')) // true
console.log(obj.search('rod')) // false
console.log(obj.search('rol')) // false
console.log(obj.search('rola')) // true
