let trie = new Trie();
let commonWord = []; // Please include the dictionary somewhere else, don't paste it here!
for(let i in commonWord){
    trie.insert(commonWord[i]);
}

let checkSpelling = function(text){
    let spellingError = [];
    text.toLowerCase().split(/[ .:;?!~,`"&|()<>{}\[\]\r\n/\\]+/).map(function(val){
        if(!trie.contain(val)){
            spellingError.push(val);
        }
    });
    document.getElementById("SpellCheck").textContent = spellingError.join(', ');
}

let textChange = function(){
    let text = document.getElementById("textarea").value;
    checkSpelling(text);
}
