let counter = 0;
function inception() {
  debugger;
  if (counter > 3) {
    return 'done!';
  }
  counter++;
  return inception();
}

inception();