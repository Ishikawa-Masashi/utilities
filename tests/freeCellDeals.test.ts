import { describe, expect, it } from 'vitest';
import { deal_ms_fc_board } from '../src/freeCellDeals';

describe('FreeCellDeals', () => {
  it('freeCellDealsのテスト', () => {
    const dealCards = deal_ms_fc_board(1);

    // http://rosettacode.org/wiki/Deal_cards_for_FreeCell
    const game1 = [
      ': JD KD 2S 4C 3S 6D 6S',
      ': 2D KC KS 5C TD 8S 9C',
      ': 9H 9S 9D TS 4S 8D 2H',
      ': JC 5S QD QH TH QS 6H',
      ': 5D AD JS 4H 8H 6C',
      ': 7H QC AS AC 2C 3D',
      ': 7C KH AH 4D JH 8C',
      ': 5H 3H 3C 7S 7D TC',
      '',
    ];
    console.log(dealCards);
    expect(game1.join('\n')).toEqual(dealCards);
  });
});
