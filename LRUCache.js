/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
  this.capacity = capacity;
  this.cache = new Map();
  return this;
};

/**
* @param {number} key
* @return {number}
*/
LRUCache.prototype.get = function(key) {
  if(this.cache.has(key)) {
          const value = this.cache.get(key);
          this.cache.delete(key);
          this.cache.set(key, value);
  }

  return this.cache.has(key) ? this.cache.get(key) : -1;
};

/**
* @param {number} key
* @param {number} value
* @return {void}
*/
LRUCache.prototype.put = function(key, value) {
  this.cache.delete(key);
  this.cache.set(key, value);
  if(this.cache.size > this.capacity) {
      const iterator = this.cache.keys();
      const keyToDelete = iterator.next().value;
      this.cache.delete(keyToDelete);
  }
};

/**
* Your LRUCache object will be instantiated and called as such:
* var obj = new LRUCache(capacity)
* var param_1 = obj.get(key)
* obj.put(key,value)
*/
