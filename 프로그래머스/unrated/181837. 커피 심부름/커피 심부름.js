const solution = (order) => order.map(v => v.includes("americano") ? 4500 : v.includes("cafelatte") ? 5000 : 4500).reduce((acc, cur) => acc+cur)