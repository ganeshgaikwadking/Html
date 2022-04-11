var prd = ["mobile","laptop","Charger","tv","fan"]

for (let i = 0; i < prd.length; i++)
{
    console.log(prd[i]);
    prd.sort();
    prd.reverse();
    prd.slice(1,5);
}