function multiplesOf3and5(number) {
    let multiples = [];
    for (let i = 0; i < number; i++){
      let div3 = parseInt(i / 3);
      let div5 = parseInt(i / 5);
      if (i === div3*3 || i === div5*5){
        multiples.push(i)
      }
    }
    const sumValues = multiples.reduce((a,b)=>a+b);
  return sumValues;
}
