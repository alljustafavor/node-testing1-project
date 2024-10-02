const utils = require('./index')

describe('[Exercise 1] trimProperties', () => {
  const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' };
  const expected = { foo: 'foo', bar: 'bar', baz: 'baz' };
  const actual = utils.trimProperties(input);

  test('[1] returns an object with the properties trimmed', () => {
    expect(actual).toEqual(expected);
  });
  test('[2] returns a copy, leaving the original object intact', () => {
    expect(actual).toEqual(expected)
    expect(input).toBe(input);
  });
})

describe('[Exercise 2] trimPropertiesMutation', () => {
  const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' };
  const expected = { foo: 'foo', bar: 'bar', baz: 'baz' };
  const actual = utils.trimPropertiesMutation(input);

  test('[3] returns an object with the properties trimmed', () => {
    expect(actual).toEqual(expected);
  });
  test('[4] the object returned is the exact same one we passed in', () => {
    expect(actual).toEqual(expected);
    expect(input).toBe(actual)
  });
})

describe('[Exercise 3] findLargestInteger', () => {
  test('[5] returns the largest number in an array of objects { integer: 2 }', () => {
    const input = [{ integer: 1 }, { integer: 2 }, { integer: 3 }, { integer: 4 }, { integer: 5 }];
    const expected = { integer: 5 };
    const actual = utils.findLargestInteger(input);
    expect(actual).toEqual(expected)
  })
})

  describe('[Exercise 4] Counter', () => {
  let counter
  beforeEach(() => {
    counter = new utils.Counter(3) // each test must start with a fresh couter
  })
  test('[6] the FIRST CALL of counter.countDown returns the initial count', () => {
    const expected = 3
    expect(counter.countDown()).toEqual(expected)
  })
  test('[7] the SECOND CALL of counter.countDown returns the initial count minus one', () => {
    const expected = 2
    expect(counter.countDown()).toEqual(3);
    expect(counter.countDown()).toEqual(expected)
  })
  test('[8] the count eventually reaches zero but does not go below zero', () => {
    const expected = 0;
    expect(counter.countDown()).toEqual(3);
    expect(counter.countDown()).toEqual(2);
    expect(counter.countDown()).toEqual(1);
    expect(counter.countDown()).toEqual(0);
    expect(counter.countDown()).toBeGreaterThanOrEqual(expected);
  })
})

describe('[Exercise 5] Seasons', () => {
  let seasons
  beforeEach(() => {
    seasons = new utils.Seasons() // each test must start with fresh seasons
  })
  test('[9] the FIRST call of seasons.next returns "summer"', () => {
    expect(seasons.next()).toEqual("summer")
  })
  test('[10] the SECOND call of seasons.next returns "fall"', () => {
    expect(seasons.next()).toEqual("summer")
    expect(seasons.next()).toEqual("fall")
  })
  test('[11] the THIRD call of seasons.next returns "winter"', () => {
    expect(seasons.next()).toEqual("summer")
    expect(seasons.next()).toEqual("fall")
    expect(seasons.next()).toEqual("winter")
  })
  test('[12] the FOURTH call of seasons.next returns "spring"', () => {
    expect(seasons.next()).toEqual("summer")
    expect(seasons.next()).toEqual("fall")
    expect(seasons.next()).toEqual("winter")
    expect(seasons.next()).toEqual("spring")
  })
  test('[13] the FIFTH call of seasons.next returns again "summer"', () => {
    expect(seasons.next()).toEqual("summer")
    expect(seasons.next()).toEqual("fall")
    expect(seasons.next()).toEqual("winter")
    expect(seasons.next()).toEqual("spring")
    expect(seasons.next()).toEqual("summer")
  })
  test('[14] the 40th call of seasons.next returns "spring"', () => {
    let result;
    for (let i = 0; i < 40; i++) {
      result = seasons.next();
    }

    expect(result).toEqual("spring");
  })
})

describe('[Exercise 6] Car', () => {
  let focus
  beforeEach(() => {
    focus = new utils.Car('focus', 20, 30) // each test must start with a fresh car
  })
  test('[15] driving the car returns the updated odometer', () => {
    expect(focus.drive(10)).toEqual(10);
    expect(focus.drive(15)).toEqual(25);
  })
  test('[16] driving the car uses gas', () => {
    expect(focus.drive(60)).toEqual(60)
    expect(focus.tank).toEqual(18)
  })
  test('[17] refueling allows to keep driving', () => {
    expect(focus.drive(600)).toEqual(600);
    expect(focus.tank).toEqual(0);
    expect(focus.drive(1)).toEqual(600);
    expect(focus.refuel(20)).toEqual(20);
    expect(focus.drive(300)).toEqual(900);
    expect(focus.tank).toEqual(10);
  })
  test('[18] adding fuel to a full tank has no effect', () => {
    expect(focus.refuel(20)).toEqual(20);
    expect(focus.tank).toEqual(20);
  })
})

describe('[Exercise 7] isEvenNumberAsync', () => { 
  test('[19] resolves true if passed an even number', async () => {
    const evenNum = await utils.isEvenNumberAsync(42);
    expect(evenNum).toEqual(true);
  })
  test('[20] resolves false if passed an odd number', async () => {
    const oddNum = await utils.isEvenNumberAsync(37);
    expect(oddNum).toEqual(false)
  })
})
