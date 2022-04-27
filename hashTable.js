function HashTable(size) {
  this.buckets = Array(size);
  this.numBuckets = this.buckets.length;
}

//  var myHT = new HashTable(30)
// console.log(myHT);

/**
 Now let's make our constructor function for each piece of data or hash node that we will put into our hash table.

We will say function hash node.

And our hash node will take in key.

Value.

And next parameters.

Inside, we will set this that key.

Equal to the key parameter passed in this value.

Equal to the value parameter passed in.

And this next equal to the next parameter passed in.

Or if there is no next parameter passed in, we will set it equal to no by default, the next property

on our hash node will refer to the next node in that specific bucket if we end up having any collisions,

great.

So our constructor functions are all set up.
 */
function HashNode(key, value, next) {
  this.key = key;
  this.value = value;
  this.next = next || null;
}

HashTable.prototype.hash = function (key) {
  var total = 0;
  for (var i = 0; i < key.length; i++) {
    total += key.charCodeAt(i);
  }
  var bucket = total % this.numBuckets;
  return bucket;
};
//  var myHT = new HashTable(30)
//   console.log(myHT.hash('Becca')) -> will return a number between 0-29

// insert and update
HashTable.prototype.insert = function (key, value) {
  var index = this.hash(key);
  if (!this.buckets[index]) {
    this.buckets[index] = new HashNode(key, value);
  } else if (this.buckets[index].key === key) {
    this.buckets[index].value = value; //update  the first node
  } else {
    var currentNode = this.buckets[index];
    while (currentNode.next) {
      if (currentNode.next.key === key) {
        currentNode.next.value = value; //update next nodes except the first one
        return;
      }
      currentNode = currentNode.next;
    }
    currentNode.next = new HashNode(key, value);
  }
};

HashTable.prototype.get = function (key) {
  var index = this.hash(key);
  if (!this.buckets[index]) return null;
  else {
    var currentNode = this.buckets[index];
    while (currentNode) {
      if (currentNode.key === key) return currentNode.value;
      currentNode = currentNode.next;
    }
    return null;
  }
};

HashTable.prototype.retrieveAll = function () {
  var allNodes = [];
  for (var i = 0; i < this.numBuckets; i++) {
    var currentNode = this.buckets[i];

    /**
     * This loop will take us through every bucket in our hash table now inside of each bucket, there could be a chain of nodes, right?So we want to travel down through that chain of nodes. If it exists there, we will do this with a while loop.
     */
    while (currentNode) {
      allNodes.push(currentNode);
      currentNode = currentNode.next;
    }
  }
  return allNodes;
};

var myHT = new HashTable(30);

myHT.insert("Dean", "dean@gmail.com");
myHT.insert("Megan", "megan@gmail.com");
myHT.insert("Dane", "dane@yahoo.com");
myHT.insert("Dean", "deanmachine@gmail.com");
myHT.insert("Megan", "megansmith@gmail.com");
myHT.insert("Dane", "dane1010@outlook.com");
