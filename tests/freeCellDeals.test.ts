import { deal_ms_fc_board } from '../src/freeCellDeals';

describe('FreeCellDeals', () => {
  it('freeCellDealsのテスト', () => {
    // const transpose = <T>(matrix: T[][]) => {
    //   const [row] = matrix;
    //   return row.map((value, column) => matrix.map((row) => row[column]));
    // };
    // const transpose = (matrix: string) => {
    //   const [row] = Array.from(matrix);
    //   return Array.from(row).map((value, column) =>
    //   Array.from(matrix).map((row) => row[column])
    //   );
    // };

    const dealCards = deal_ms_fc_board(1);

    // http://rosettacode.org/wiki/Deal_cards_for_FreeCell
    const game1 = [
      'JD 2D 9H JC 5D 7H 7C 5H',
      'KD KC 9S 5S AD QC KH 3H',
      '2S KS 9D QD JS AS AH 3C',
      '4C 5C TS QH 4H AC 4D 7S',
      '3S TD 4S TH 8H 2C JH 7D',
      '6D 8S 8D QS 6C 3D 8C TC',
      '6S 9C 2H 6H',
    ];

    expect(game1).toEqual(dealCards);
  });
});
