import Order from "./order";

describe("Order unit tests", () => {
  it("Should throw error when id is empty", () => {
    expect(()=>{
      let order = new Order("","1212", [])
      console.log(order)

    }).toThrowError("Id is required");
  });
});
