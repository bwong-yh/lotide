const { assertEqual, head } = require("../head");

assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([false]), false);
assertEqual(head([true]), false);
assertEqual(head([]), "Hello");
