function scuberGreetingForFeet(length) {
  let result
  if (length <= 400) {
    result = 'This one is on me!'
  }
  else if (length > 400 && length < 2000) {
    result = 'That will be twenty bucks.'
  }
  else if (length > 2000 && length < 2500) {
    result = 'I will gladly take your thirty bucks.'
  }
  else {
    result = 'No can do.'
  }
  return result
}

function ternaryCheckCity(NYC) {
  let result
  if (NYC) { 
    result = 'Ok, sounds good.' 
  }
  else { 
    result = 'No go.' 
  }
  return result
}

function switchOnCharmFromTip(generous) {
  let result
  if (generous) {
    result = 'Thank you so much.'
  }
  else if (not) {
    result = 'Thank you.'
  }
  else {
    result = 'Bye.'
  }
  return result
}