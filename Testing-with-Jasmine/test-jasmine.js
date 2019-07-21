var earth = {
  isround: true,
  positionFromSun: 3,
  density: 5.5
};

describe("Earth", function() {
  it("is round", function() {
    expect(earth.isround).toEqual(true);
  });
  it("third from Sun", function() {
    expect(earth.positionFromSun).toEqual(3);
  });
  it("density", function() {
    expect(earth.density).toEqual(5.5);
  });
});
