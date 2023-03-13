test('return an object', () => {
  const dat = [{
    '2022-09-24': {
      CHINA: 742,
      'Other Countries': 172,
      'UNITED STATES': 147,
    },
  }];
  const data = dat.map((dat, val) => {
    const sdata = Object.entries(dat);
    const total = Object.values(sdata[0][1]).reduce((acc, val) => acc + val, 0);
    const obj = {
      date: sdata[0][0],
      ...sdata[0][1],
      total,
      id: val,
    };
    return obj;
  });
  expect(data).toEqual([{
    date: '2022-09-24', CHINA: 742, 'Other Countries': 172, 'UNITED STATES': 147, id: 0, total: 1061,
  }]);
});
