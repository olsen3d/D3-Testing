const join = (a, b, c) => {
  console.log(`${a}_${b}_${c}`)
}

const curriedJoin = curry(join)

function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) return fn.apply(this, args)
    else return curried.bind(this, ...args)
  }
}

curriedJoin(1)(2)(3)
