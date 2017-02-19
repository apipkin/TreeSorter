# Binary Search Tree Sorter

Binary Search Tree (BSTree) Sorter is able to take a list of integers (>=0) or 
fractions (int/int) or a combination of the two. The list will be returned 
ascending (default) or decending based on the selection in the UI. Attempts to 
sort something other than an integer or a fraction will result in an error. 

## Getting Started

**Clone the repository**<br>
`git clone git@github.com:apipkin/TreeSorter.git`

**Change into the directory**<br>
`cd TreeSorter`

**Install important packages**<br>
`npm install`

**Start the server**<br>
`npm start`


## Testing

### Unit Tests
 - *test* `npm test`
 - *test coverage* `npm run test:cover`
 - *test coverage in browser* `test:cover:browser`

### Test Plan

 1. Attempt without integers
    - **Initial**: `7 3 0 8 6 1`
    - **Expected**: ``
    - **Result**: ``

 2. Attempt with fractions
    - **Initial**: `1/2 3/4 3/2 5/8 4/9 7/16 5/32 1/8`
    - **Expected**: ``
    - **Result**: ``

 3. Attempt with mix of integers and fractions
    - **Initial**: `7 3 0 8 6 1 10/2 3/4 3/2 5/8 4/9 7/16 5/32 1/8`
    - **Expected**: ``
    - **Result**: ``

 4. Attempt with invalid fraction numerator
    - **Initial**: `1/2 a/2 3/2`
    - **Expected**: Error - `Invalid value.`
    - **Result**: Error - `Invalid value.`

 5. Attempt with invalid fraction denominator
    - **Initial**: `1/2 2/b 3/2`
    - **Expected**: Error - `Invalid value.`
    - **Result**: Error - `Invalid value.`

 6. Attempt with invalid characters
    - **Initial**: `7 3/4 & 9/4`
    - **Expected**: Error - `Invalid value.`
    - **Result**: Error - `Invalid value.`

 7. Attempt with decimals
    - **Initial**: `1/2 3 0.4`
    - **Expected**: Error - `Invalid value.`
    - **Result**: Error - `Invalid value.`


## UML Diagram
![UML Diagram]()


## Lessons learned


## Possible Improvements
