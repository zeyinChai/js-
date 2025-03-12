new Promise((resolve, reject) => resolve("123"))
  .then((res) => {
    console.log(res)
    return 'abc'
  })
  .then((res2) => console.log(res2));
