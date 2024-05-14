import Address from "./address";
import Customer from "./customer";

describe("Customer unit tests", () => {
  it("Should throw error when id is empty", () => {
    expect(() => {
      let customer = new Customer("", "John");
    }).toThrowError("Id is required");
  });

  it("Should throw error when name is empty", () => {
    expect(() => {
      let customer = new Customer("1212", "");
    }).toThrowError("Name is required");
  });

  it("Should change name", () => {
    const customer = new Customer("123", "John");
    customer.changeName("Jane");
    expect(customer.name).toBe("Jane");
  });

  it("Should activate customer", () => {
    const customer = new Customer("123", "Customer 1");
    const address = new Address("Street 1",123,"13330-250","São Paulo");
    customer.Address = address;
    customer.activate();    
    expect(customer.isActive()).toBe(true);
  });

});
