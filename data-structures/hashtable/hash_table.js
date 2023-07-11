// HashTable class that takes an optional size argument to determine the size of the underlying array
class HashTable {
  constructor(size=53){
    // Create a new array of the provided size
    this.keyMap = new Array(size);
  }

  // The _hash function takes a key and hashes it into a number 
  // which is used as an index to store the value associated with that key
  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    // Iterate over each character of the key (up to the first 100 characters)
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      // Calculate the ASCII value of the character, minus 96 so 'a' starts at 1
      let char = key[i];
      let value = char.charCodeAt(0) - 96
      // Accumulate the total, multiplied by a prime and added to the character value
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total; // Return the hash
  }

  // The set method takes a key and value, hashes the key, and stores the key-value pair in the hash table array
  set(key,value){
    let index = this._hash(key); // Hash the key to get an index
    // If there's nothing at this index in the array, set it to a new array
    if(!this.keyMap[index]){
      this.keyMap[index] = [];
    }
    // Push the key-value pair into the array at this index
    this.keyMap[index].push([key, value]);
  }

  // The get method takes a key, hashes it to get an index, 
  // and then retrieves the value associated with the key from the hash table array
  get(key){
    let index = this._hash(key); // Hash the key to get an index
    // If there's something at this index
    if(this.keyMap[index]){
      // Loop over the array at this index
      for(let i = 0; i < this.keyMap[index].length; i++){
        // If the key of the current subarray matches the key passed in, return its value
        if(this.keyMap[index][i][0] === key) {
          return this.keyMap[index][i][1]
        }
      }
    }
    // If no key-value pair was found, return undefined
    return undefined;
  }

  // The keys method returns all keys in the hash table
  keys(){
    let keysArr = [];
    // Loop over the entire hash table array
    for(let i = 0; i < this.keyMap.length; i++){
      // If there's something at this index
      if(this.keyMap[i]){
        // Loop over the subarray at this index
        for(let j = 0; j < this.keyMap[i].length; j++){
          // If the key isn't already in keysArr, push it in
          if(!keysArr.includes(this.keyMap[i][j][0])){
            keysArr.push(this.keyMap[i][j][0])
          }
        }
      }
    }
    return keysArr; // Return the array of keys
  }

  // The values method returns all unique values in the hash table
  values(){
    let valuesArr = [];
    // Loop over the entire hash table array
    for(let i = 0; i < this.keyMap.length; i++){
      // If there's something at this index
      if(this.keyMap[i]){
        // Loop over the subarray at this index
        for(let j = 0; j < this.keyMap[i].length; j++){
          // If the value isn't already in valuesArr, push it in
          if(!valuesArr.includes(this.keyMap[i][j][1])){
            valuesArr.push(this.keyMap[i][j][1])
          }
        }
      }
    }
    return valuesArr; // Return the array of values
  }
}

// Creating a new instance of HashTable and setting some keys and values
let ht = new HashTable(17);
ht.set("maroon","#800000")
ht.set("yellow","#FFFF00")
ht.set("olive","#808000")
ht.set("salmon","#FA8072")
ht.set("lightcoral","#F08080")
ht.set("mediumvioletred","#C71585")
ht.set("plum","#DDA0DD")
ht.set("purple","#DDA0DD")
ht.set("violet","#DDA0DD")

// Looping over each key and logging out the associated value
ht.keys().forEach(function(key){
  console.log(ht.get(key));
});
