const assertEqual = (actual, expected) => {
  let msg = ""

  if (actual === expected) {
    msg = `${actual} === ${expected}`
  } else {
    msg = `${actual} !== ${expected}`
  }

  console.log(msg)
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);