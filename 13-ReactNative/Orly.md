

function isValidPalindrome(s: string): boolean {
  const cleanString = s.toLowerCase().replace(/[^a-z0-9]/g, '');
  
  if (cleanString.length === 0) {
    return true; 
  }
  
  let left = 0;
  let right = cleanString.length - 1;
  
  while (left < right) {
    if (cleanString[left] !== cleanString[right]) {
      return false;
    }
    left++;
    right--;
  }
  
  return true;
}

console.log(isValidPalindrome("A man, a plan, a canal: Panama")); true

console.log(isValidPalindrome("race a car")); false

console.log(isValidPalindrome("No 'x' in Nixon")); true

console.log(isValidPalindrome("Was it a car or a cat I saw")); true

console.log(isValidPalindrome("hello)); false


