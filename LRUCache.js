
var LRUCache = function(capacity) {
  this.capacity = capacity;
  this.cache = new Map();
  return this;
};

LRUCache.prototype.get = function(key) {
  if(this.cache.has(key)) {
          const value = this.cache.get(key);
          this.cache.delete(key);
          this.cache.set(key, value);
  }

  return this.cache.has(key) ? this.cache.get(key) : -1;
};

LRUCache.prototype.put = function(key, value) {
  this.cache.delete(key);
  this.cache.set(key, value);
  if(this.cache.size > this.capacity) {
      const iterator = this.cache.keys();
      const keyToDelete = iterator.next().value;
      this.cache.delete(keyToDelete);
  }
};
