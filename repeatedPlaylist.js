//hare and tortoise algorithm

class Song {
  name;
  nextSong;
  
  constructor(name) {
    this.name = name;
  }
  
  isInRepeatingPlaylist() {
    let slowPointer = this;
    let fastPointer = this;
    
    while (fastPointer !== null && fastPointer.nextSong !== null) {
      slowPointer = slowPointer.nextSong; //this is the slow pointer
      fastPointer = fastPointer.nextSong.nextSong; // fast pointer to catch slow pointer by moving two steps ahead
      
      if (slowPointer === fastPointer) {
        return true;
      }
    }
    
    return false;
  }
}

let first = new Song("Hello");
let second = new Song("Eye of the tiger");

first.nextSong = second;
second.nextSong = first;

console.log(first.isInRepeatingPlaylist()); // Output: true
