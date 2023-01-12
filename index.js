const { Observable } = require("rxjs");
const { map } = require("rxjs/operators");

const users = {
  data: [
    {
      status: "active",
      age: 20,
    },
    {
      status: "inactive",
      age: 25,
    },
    {
      status: "inactive",
      age: 30,
    },
    {
      status: "active",
      age: 35,
    },
    {
      status: "active",
      age: 40,
    },
    {
      status: "inactive",
      age: 45,
    },
    {
      status: "active",
      age: 50,
    },
    {
      status: "active",
      age: 55,
    },
  ],
};

const observable = new Observable((subscriber) => {
  subscriber.next(users);
}).pipe(
  map((value) => {
    console.log("1) got data from observable ", value);
    return value.data;
  }),
  map((value) => {
    console.log("2) got data from observable ", value);
    return value.filter((user) => user.status === "active");
  }),
  map((value) => {
    console.log("3) got data from observable ", value);
    return value.reduce((sum, user) => (sum += user.age), 0);
  })
);

const observer = {
  next: (value) => {
    console.log("Observer got a value of " + value);
  },
  error: (error) => {
    console.log("Obervaer got an error of ", error);
  },
  complete: () => {
    console.log("Obervaer got a complete notification");
  },
};

observable.subscribe(observer);
