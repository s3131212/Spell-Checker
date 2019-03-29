function Node(text){
    this.text = text;
    this.parent = null;
    this.children = {};
    this.isEnd = false;
    this.getWord = function(){
        let array = [];
        let currentNode = this;
        while(currentNode !== null){
            array.push(currentNode.text);
        }
        return array.reverse().join('');
    };
}
function Trie(){
    this.root = new Node(null);
    this.contain = function(str){
        if(str === null || str === '') return true;
        let currentNode = this.root;
        for(let i = 0; i < str.length; i++){
            if(!currentNode.children.hasOwnProperty(str[i])){
                return false;
            }
            currentNode = currentNode.children[str[i]];
        }
        return currentNode.isEnd;
    }
    this.insert = function(str){
        if(this.contain(str)){
            throw new UserException('String already exist');
        }
        if(str === null || str === ''){
            throw new UserException('Empty string');
        }
        let currentNode = this.root;
        for(let i = 0; i < str.length; i++){
            if(!currentNode.children.hasOwnProperty(str[i])){
                currentNode.children[str[i]] = new Node(str[i]);
                currentNode.children[str[i]].parent = currentNode;
            }
            currentNode = currentNode.children[str[i]];
        }
        currentNode.isEnd = true;
    }
}
