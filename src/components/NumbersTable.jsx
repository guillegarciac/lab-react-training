import React from 'react'

export default function NumbersTable({limit}) {
  //Array.from creates a new array. We are passing in an object with two properties: length (set to the value of limit, in this case 12) and a callback function.
  //The callback takes two arguments: the current element being processed (which we don't need, so we use _ to ignore it), and the index of that element in the array. 
  //The function returns the value of i + 1, which is used to populate the numbers array with a sequence of numbers from 1 to limit.
  const numbers = Array.from({ length: limit }, (_, i) => i + 1);
  return (
    <div className="number-list">
    {numbers.map((number) => (
      <div key={number} className={`number-box ${number % 2 === 0 ? 'even' : 'odd'}`}>
        {number}
      </div>
    ))}
  </div>
  )
}
