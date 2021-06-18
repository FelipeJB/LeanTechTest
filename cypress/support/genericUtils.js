export class utils {

  getRandom(from, to) { 
    return Math.floor(Math.random() * (to - from + 1) + from);
  }

}

export const genericUtils = new utils();