// Palindrome Checker
// Return true if the given string is a palindrome. Otherwise, return false.
// A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.
// Note: You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and
// turn everything into the same case (lower or upper case) in order to check for palindromes.
// We'll pass strings with varying formats, such as racecar, RaceCar, and race CAR among others.
// We'll also pass strings with special symbols, such as 2A3*3a2, 2A3 3a2, and 2_A3*3#A2.



function palindrome(str) {
  const filteredStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
  const reverseFilteredStr = filteredStr.split('').reverse().join('')

  if(filteredStr === reverseFilteredStr){
    return true
  }
  return false
}

palindrome("e-)y   e")



// -------------------------------------------------------------------------------------------------------



// Roman Numeral Converter
// Convert the given number into a roman numeral.

//  Roman numerals	Arabic numerals
//  M	              1000
//  CM	            900
//  D	              500
//  CD	            400
//  C	              100
//  XC	            90
//  L	              50
//  XL	            40
//  X	              10
//  IX	            9
//  V	              5
//  IV	            4
//  I	              1

// All roman numerals answers should be provided in upper-case.



function convertToRoman(num) {
    const numeralArr = [['M',1000],['CM',900],['D',500],['CD',400],['C',100],['XC',90],['L',50],['XL',40],['X',10],['IX',9],['V',5],['IV',4],['I',1]]

    let sum = 0
    let str =''
    for(let i=0; i<numeralArr.length; i++){
      if(sum<num){
        if(num>=numeralArr[i][1]){
          if((sum+3*numeralArr[i][1])<=num){
            sum+= 3*numeralArr[i][1]
            str+= numeralArr[i][0] + numeralArr[i][0] + numeralArr[i][0]
            } 
          if((sum+2*numeralArr[i][1])<=num){
            sum+= 2*numeralArr[i][1]
            str+= numeralArr[i][0] + numeralArr[i][0]
            } 
          if(sum+numeralArr[i][1] <=num) {
              sum+= numeralArr[i][1]
              str+= numeralArr[i][0]
            }
        }
      }
    }
 return str
}

console.log(convertToRoman(500))



// -------------------------------------------------------------------------------------------------------



// Caesars Cipher
// One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. 
// In a shift cipher the meanings of the letters are shifted by some set amount.

// A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.

// Write a function which takes a ROT13 encoded string as input and returns a decoded string.

// All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.



function rot13(str) {
  const cipher = {
  "A": "N",
  "B": "O",
  "C": "P",
  "D": "Q",
  "E": "R",
  "F": "S",
  "G": "T",
  "H": "U",
  "I": "V",
  "J": "W",
  "K": "X",
  "L": "Y",
  "M": "Z",
  "N": "A",
  "O": "B",
  "P": "C",
  "Q": "D",
  "R": "E",
  "S": "F",
  "T": "G",
  "U": "H",
  "V": "I",
  "W": "J",
  "X": "K",
  "Y": "L",
  "Z": "M"
}
let newStr = ""

for(const char of str){
  if(cipher[char]){
    newStr+= cipher[char]
  } else {
    newStr+= char
  }
}
return newStr
}

rot13("SERR PBQR PNZC")



// -------------------------------------------------------------------------------------------------------



// Telephone Number Validator
// Return true if the passed string looks like a valid US phone number.

// The user may fill out the form field any way they choose as long as it has the format of a valid US number. 
// The following are examples of valid formats for US numbers (refer to the tests below for other variants):

//  555-555-5555
//  (555)555-5555
//  (555) 555-5555
//  555 555 5555
//  5555555555
//  1 555 555 5555
//  For this challenge you will be presented with a string such as 800-692-7753 or 8oo-six427676;laskdjf. 
//  Your job is to validate or reject the US phone number based on any combination of the formats provided above. 
//  The area code is required. If the country code is provided, you must confirm that the country code is 1. 
//  Return true if the string is a valid US phone number; otherwise return false.



function telephoneCheck(str) {
  const regex = /^1?\s?((\(\d{3}\))|(\d{3}))\s?-?\d{3}(\s|-)?\d{4}$/

  return regex.test(str)
}

telephoneCheck("(555) 555-5555")



// -------------------------------------------------------------------------------------------------------



// Cash Register
// Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), 
// payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

// cid is a 2D array listing available currency.

// The checkCashRegister() function should always return an object with a status key and a change key.

// Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

// Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

// Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, 
// sorted in highest to lowest order, as the value of the change key.

// Currency Unit	Amount
// Penny	$0.01 (PENNY)
// Nickel	$0.05 (NICKEL)
// Dime	$0.1 (DIME)
// Quarter	$0.25 (QUARTER)
// Dollar	$1 (ONE)
// Five Dollars	$5 (FIVE)
// Ten Dollars	$10 (TEN)
// Twenty Dollars	$20 (TWENTY)
// One-hundred Dollars	$100 (ONE HUNDRED)
// See below for an example of a cash-in-drawer array:

// [
//   ["PENNY", 1.01],
//   ["NICKEL", 2.05],
//   ["DIME", 3.1],
//   ["QUARTER", 4.25],
//   ["ONE", 90],
//   ["FIVE", 55],
//   ["TEN", 20],
//   ["TWENTY", 60],
//   ["ONE HUNDRED", 100]
// ]



function checkCashRegister(price, cash, cid) {
  let mid = 0
  cid.forEach(el=>mid+=el[1])
  mid*=100

  const currency = {
    'ONE HUNDRED': 100,
    'TWENTY': 20,
    'TEN': 10,
    'FIVE': 5,
    'ONE': 1,
    'QUARTER': 0.25,
    'DIME': 0.1,
    'NICKEL': 0.05,
    'PENNY': 0.01
  }
  let change = cash*100-price*100
  let count = 0

  const solution = { 
    status: 'OPEN',
    change: []
  }

for(let i = cid.length-1; i>=0; i--){
      
      let unit = currency[cid[i][0]]*100
      let value = cid[i][1]*100
      let innerArr = []
      let amountOf = 0
      
      while(count+unit<=change
       && 0<value){
        count+= unit
        amountOf += unit
        value-= unit
      }
      if(amountOf>0){
      innerArr = [cid[i][0], amountOf/100]
      console.log(innerArr)
      solution.change.push(innerArr)
      }
}

  if(count<change){
    return {status: "INSUFFICIENT_FUNDS", change: []}
  }

  if(count === change && mid === change){
    return {status: "CLOSED", change: [...cid]}
  }

  return solution
}

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])



// -------------------------------------------------------------------------------------------------------



// Find the Symmetric Difference
// The mathematical term symmetric difference (△ or ⊕) of two sets is the set of elements which are in either of the two sets but not in both. 
// For example, for sets A = {1, 2, 3} and B = {2, 3, 4}, A △ B = {1, 4}.

// Symmetric difference is a binary operation, which means it operates on only two elements. 
// So to evaluate an expression involving symmetric differences among three elements (A △ B △ C), you must complete one operation at a time. 
// Thus, for sets A and B above, and C = {2, 3}, A △ B △ C = (A △ B) △ C = {1, 4} △ {2, 3} = {1, 2, 3, 4}.

//Create a function that takes two or more arrays and returns an array of their symmetric difference. 
// The returned array must contain only unique values (no duplicates).



function sym(...args) {
  const input = [...args]

  const symDiff = (arr1, arr2) => {
    const solution = []

    arr1.forEach(arr1El => {
      if (!arr2.includes(arr1El) && !solution.includes(arr1El)) {
        solution.push(arr1El)
    }})
    
    arr2.forEach(arr2El => {
      if (!arr1.includes(arr2El) && !solution.includes(arr2El)) {
        solution.push(arr2El)
    }})

    return solution
  }

  return input.reduce(symDiff)
}

sym([1, 2, 3], [5, 2, 1, 4])



// -------------------------------------------------------------------------------------------------------



// Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery. 
// Update the current existing inventory item quantities (in arr1). 
// If an item cannot be found, add the new item and quantity into the inventory array. 
// The returned inventory array should be in alphabetical order by item.



function updateInventory(arr1, arr2) {
    arr2.forEach(arr2Item => {
        arr1.forEach(arr1Item => {
            if (arr1Item[1] === arr2Item[1]) {
                arr1Item[0]+= arr2Item[0]
            }
        })
        if (arr1.every(arr1El => !arr1El.includes(arr2Item[1]))){
            arr1.push(arr2Item)
        }
    })
  return arr1.sort((a,b) => a[1] < b[1] ? -1 : 1)
}  

// Example inventory lists
const curInv = [[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]]

const newInv = [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]

updateInventory(curInv, newInv)


