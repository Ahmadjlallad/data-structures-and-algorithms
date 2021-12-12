# HashTables

- Hash tables allow the storage and retrieval of data in an average time of O(1). At its most basic level, a hash table data structure is just an array. Data is stored into this array at specific indices designated by a hash function. A hash function is a mapping between the set of input data and a set of integers.

## Challenge

- add
  - Arguments: key, value - Returns: nothing
    This method should hash the key, and add the key and value pair to the table, handling collisions as needed.
- get
  - Arguments: key - Returns: Value associated with that key in the table
    contains
- Arguments: key
  - Returns: Boolean, indicating if the key exists in the table already.
- hash
  - Arguments: key
    - Returns: Index in the collection for that key

## Challenge hashmap-repeated-word

- Arguments: string
  - Returns: string
    - Returns the first repeated word in the string.

## Approach & Efficiency

- Hash tables are a good choice for storing data that is not necessarily in order.
- Approach is to use a hash function to map the input data to an index in the array.
- Efficiency is to use a hash function that is fast and efficient.

## Approach & Efficiency hashmap-repeated-word

- Approach is to use a hash function to map the input data to an index in the array.
- Efficiency is to use a hash function that is fast and efficient.
- Big O notation is O(n) because we are iterating through the string once.
- Big O notation space complexity is O(n) because we are storing the string in an array.

## whiteboard hashmap-repeated-word

![hashmap-repeated-word](https://i.ibb.co/gz9N5td/31.png)

## API

- HashTable
  - add
  - get
  - contains
  - hash
