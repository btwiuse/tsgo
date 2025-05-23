//// [tests/cases/compiler/inferenceAndSelfReferentialConstraint.ts] ////

//// [inferenceAndSelfReferentialConstraint.ts]
// @strict

// Repro from #29520

type Test<K extends keyof any> = {
  [P in K | "foo"]: P extends "foo" ? true : () => any
}

function test<T extends Test<keyof T>>(arg: T) {
  return arg;
}

const res1 = test({
  foo: true,
  bar() {
  }
});

const res2 = test({
  foo: true,
  bar: function () {
  }
});

const res3 = test({
  foo: true,
  bar: () => {
  }
});


//// [inferenceAndSelfReferentialConstraint.js]
function test(arg) {
    return arg;
}
const res1 = test({
    foo: true,
    bar() {
    }
});
const res2 = test({
    foo: true,
    bar: function () {
    }
});
const res3 = test({
    foo: true,
    bar: () => {
    }
});
