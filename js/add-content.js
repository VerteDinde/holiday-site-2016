var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 18) {
  greeting = "Time to have a sleepy night in..."
} else if (hourNow > 12) {
  greeting = "Made dinner yet?"
} else if (hourNow > 0) {
  greeting = "Sun's up, let's hit it."
} else {
  greeting = "WHADDUP BIRD"
}
document.write(greeting);
