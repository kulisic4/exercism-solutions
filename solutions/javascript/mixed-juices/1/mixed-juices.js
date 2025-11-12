// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
  switch (name) {
    case 'Pure Strawberry Joy':
      return 0.5
      break;
    case 'Energizer':
    case 'Green Garden':
      return 1.5
      break;
    case 'Tropical Island':
      return 3
      break;
    case 'All or Nothing':
      return 5
      break;
    default:
      return 2.5;
  }
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
  //broj iseckanih limeta
    let limesCut = 0;  
  
  //sve dok ima wedgeova i ima limeta
  while (wedgesNeeded > 0 && limes.length > 0) {
    //uzmi prvu limetu
      const lime = limes.shift();
    //odredi koliko wedgeova daje ta limeta;
    let wedgesFromThisLime;
    switch (lime) {
    case 'small':
      wedgesFromThisLime = 6;
      break;
    case 'medium':
      wedgesFromThisLime = 8;
      break;
    case 'large':
      wedgesFromThisLime = 10;
      break;
  }
//oduzmi wedgeove koji su iseceni
    wedgesNeeded -= wedgesFromThisLime;
    //povecaj broj limeta
    limesCut++;
  }
  //vrati rezultat
  return limesCut;
}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
  do {
    //uzimam i uklanjam prvu porudzbinu iz liste
    const order = orders.shift();
    //proveravam koliko vremena je potrebno za pravljenje soka
    const time = timeToMixJuice(order);
    //oduzimam to vreme i vracam koliko je vremena ostalo
    timeLeft -= time;
  } while (timeLeft > 0 && orders.length >0); //proverava ima li vremena i porudzbina
  //vracam neodradjene porudzbine
  return orders;
}
