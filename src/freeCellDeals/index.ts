class MSRand {
  public constructor(private seed: number) {}

  public setSeed(seed: number) {
    this.seed = seed;
  }

  public getSeed() {
    return this.seed;
  }
  rand() {
    this.setSeed((this.getSeed() * 214013 + 2531011) & 0x7fffffff);
    return (this.getSeed() >> 16) & 0x7fff;
  }
  max_rand(mymax: number) {
    return this.rand() % mymax;
  }
  shuffle(deck: number[]) {
    if (deck.length) {
      let i = deck.length;
      while (--i) {
        const j = this.max_rand(i + 1);
        const tmp = deck[i];
        deck[i] = deck[j];
        deck[j] = tmp;
      }
    }
    return deck;
  }
}

/*
 * Microsoft Windows Freecell / Freecell Pro boards generation.
 *
 * See:
 *
 * - http://rosettacode.org/wiki/Deal_cards_for_FreeCell
 *
 * - http://www.solitairelaboratory.com/mshuffle.txt
 *
 * Under MIT/X11 Licence.
 *
 * */

export function deal_ms_fc_board(seed: number) {
  const randomizer = new MSRand(seed);
  const num_cols = 8;

  const _perl_range = function (start: number, end: number) {
    const ret = [];

    for (let i = start; i <= end; i++) {
      ret.push(i);
    }

    return ret;
  };

  const columns = _perl_range(0, num_cols - 1).map(() => [] as number[]);
  let deck = _perl_range(0, 4 * 13 - 1);

  randomizer.shuffle(deck);

  deck = deck.reverse();

  for (let i = 0; i < 52; i++) {
    columns[i % num_cols].push(deck[i]);
  }

  const render_card = (card: number) => {
    const suit = card % 4;
    const rank = Math.floor(card / 4);

    return 'A23456789TJQK'.charAt(rank) + 'CDHS'.charAt(suit);
  };

  const render_column = (col: number[]) => {
    return ': ' + col.map(render_card).join(' ') + '\n';
  };

  return columns.map(render_column).join('');
}
