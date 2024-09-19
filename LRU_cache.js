function LRUCache(strArr) {
    let cache = [];
    let cacheSize = 5; // The cache can hold a maximum of 5 elements

    for (let i = 0; i < strArr.length; i++) {
        let char = strArr[i];

        // If the character is already in the cache, remove it from its current position
        if (cache.includes(char)) {
            cache.splice(cache.indexOf(char), 1);
        }

        // Add the character to the cache (front of the list)
        cache.push(char);

        // If the cache exceeds the maximum size, remove the least recently used element (front of the list)
        if (cache.length > cacheSize) {
            cache.shift();
        }
    }

    // Join the cache elements with a hyphen and return the result
    return cache.join('-');
}

// Example usage:
console.log(LRUCache(["A", "B", "A", "C", "A", "B"]));  // Output: "C-A-B"

