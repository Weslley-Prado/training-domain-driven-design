import Order from "./order";
import OrderItem from "./order_item";

describe("Order unit tests", () => {
  it("Should throw error when id is empty", () => {
    expect(()=>{
      let order = new Order("","1212", [])
      console.log(order)

    }).toThrow("Id is required");
  });

  it("Should throw error when id is empty", () => {
    expect(()=>{
      let order = new Order("123","1212", [])
      console.log(order)

    }).toThrow("Item qtd must be greater zero");
  });

  it("Should calculate total", () => {
    const item = new OrderItem("11", "item 1", 1000);
    const order = new Order("c1","c1",[item]);
    const total = order.total();
    expect(total).toBe(1000);
  });  


  it("Should calculate total", () => {
    const item = new OrderItem("11", "item 1", 1000);
    const item2 = new OrderItem("12", "item 2", 1000);

    const order2 = new Order("c1","c1",[item, item2]);
    const total = order2.total();
    expect(total).toBe(2000);
  });  
});
