# Binary Search Tree Sorter

Binary Search Tree (BSTree) Sorter is able to take a list of integers (>=0) or 
fractions (int/int) or a combination of the two. The list will be returned 
ascending (default) or descending based on the selection in the UI. Attempts to 
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
    - **Expected**: `0 1 3 6 7 8`
    - **Result**: `0 1 3 6 7 8`

 2. Attempt without integers return descending
    - **Initial**: `7 3 0 8 6 1`
    - **Expected**: `8 7 6 3 1 0`
    - **Result**: `8 7 6 3 1 0`

 3. Attempt with fractions
    - **Initial**: `1/2 3/4 3/2 5/8 4/9 7/16 5/32 1/8`
    - **Expected**: `1/8 5/32 7/16 4/9 1/2 5/8 3/4 3/2`
    - **Result**: `1/8 5/32 7/16 4/9 1/2 5/8 3/4 3/2`

 4. Attempt with mix of integers and fractions
    - **Initial**: `7 3 0 8 6 1 10/2 3/4 3/2 5/8 4/9 7/16 5/32 1/8`
    - **Expected**: `0 1/8 5/32 7/16 4/9 5/8 3/4 1 3/2 3 10/2 6 7 8`
    - **Result**: `0 1/8 5/32 7/16 4/9 5/8 3/4 1 3/2 3 10/2 6 7 8`

 5. Attempt with invalid fraction numerator
    - **Initial**: `1/2 a/2 3/2`
    - **Expected**: Error - `Invalid value: a/2`
    - **Result**: Error - `Invalid value: a/2`

 6. Attempt with invalid fraction denominator
    - **Initial**: `1/2 2/b 3/2`
    - **Expected**: Error - `Invalid value: 2/b.`
    - **Result**: Error - `Invalid value: 2/b.`

 7. Attempt with invalid characters
    - **Initial**: `7 3/4 & 9/4`
    - **Expected**: Error - `Invalid value: &`
    - **Result**: Error - `Invalid value: &`

 8. Attempt with decimals
    - **Initial**: `1/2 3 0.4`
    - **Expected**: Error - `Invalid value: 0.4.`
    - **Result**: Error - `Invalid value: 0.4.`


## UML Diagram
![UML Diagram](https://raw.githubusercontent.com/apipkin/TreeSorter/master/uml_diagram.png)


## Lessons learned
Working on this project proved to be a little more difficult as I added requirements. I added 
unit tests at the end of the project and needed to almost completely rewrite the BSTree and 
TreeNode because the requirements for invalid values. The invalid values needed to exit the 
`addValues()` method and I had not accounted for this in the original pass. 

I also found it unnecessary to have to decide between what type of sorting algorithm. Instead
I changed the GUI to allow for integers, fraction, or a mix of both. Doing this led to many 
other options that are listed in the _Possible Improvements_ section.

## Possible Improvements
I would really like to also include the decimals and infix expressions by combining the 
infix modules written in the first project. 