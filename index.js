function scuberGreetingForFeet(someValue) {
  //this is where we can use conditionals given our argument, someValue
  //don't forget to return whatever the result is!
  if (someValue<400) {
    return 'This one is on me!';
  }
  if (someValue > 2000 && someValue < 2500) {
    return 'I will gladly take your thirty bucks.';
  }
  else if (someValue >= 2500) {
      return 'No can do.';
  }

}

describe('index.js', function () {
  describe('scuberGreetingForFeet()', function () {
    it('gives customers a free sample if the ride is less than or equal to 400 feet', function () {
      expect(scuberGreetingForFeet(199)).to.equal('This one is on me!');
    });
function ternaryCheckCity (city) {
  let answer = city == "NYC" ? "Ok, sounds good." : "No go.";
   return answer;  
   }


function switchOnCharmFromTip () {
  switch 
}


