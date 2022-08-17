export default function randomGoblin() {
  let numberHole = Math.round(Math.random() * 15);
  let currentNumber;
  const goblin = document.querySelector('.goblin');
  const holes = document.getElementsByClassName('hole');
  for (let i = 0; i < holes.length; i += 1) {
    if (holes[i].classList.contains('goblin')) {
      currentNumber = i;
    }
  }
  if (currentNumber === numberHole) {
    numberHole = Math.round(Math.random() * 15);
  }
  if (goblin != null) {
    goblin.classList.remove('goblin');
    holes[numberHole].classList.add('goblin');
  }
  return numberHole;
}
