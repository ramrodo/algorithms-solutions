function integers() {
  let counter = 0;

  for (let i = 1; i <= 100; i++) {
    if (i % 5 !== 0 && i.toString().includes("5")) {
      console.log("First:", i);
      counter += 1;
    }

    if (i % 5 === 0 && !i.toString().includes("5")) {
      console.log("Second:", i);
      counter += 1;
    }
  }

  console.log(counter)
}

integers();
