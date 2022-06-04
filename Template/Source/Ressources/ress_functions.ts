namespace Spiegel_VN {

  // *** RANDOMIZER ***
  export function func_RandomNumberRange( // random nr zw 0-10. macht
    min: number = 0,
    max: number = 10
  ): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
