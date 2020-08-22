function checkForSpam(message) {
  message = message.toLowerCase();
  if (message.split(' ')) {
    return message.includes('sale') || message.includes('spam');
  }
}

console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
