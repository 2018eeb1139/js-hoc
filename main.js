const companies=[
    {name:"Company One",category:"Finanace",start:1981,end:2012},
    {name:"Company Two",category:"Retail",start:1985,end:2014},
    {name:"Company Three",category:"Auto",start:1991,end:2002},
    {name:"Company Four",category:"Retail",start:1988,end:2001},
    {name:"Company Five",category:"Technology",start:1985,end:2006},
    {name:"Company Six",category:"Finanace",start:1992,end:2005},
    {name:"Company Seven",category:"Auto",start:1999,end:2003},
    {name:"Company Eight",category:"Technology",start:2002,end:2017},
    {name:"Company Nine",category:"Finanace",start:2003,end:2015},
    {name:"Company Ten",category:"Retail",start:2000,end:2011},
]

const ages=[33,12,20,16,5,21,14,23,45,32,12,11,64,78,90];

// for (let i = 0; i < companies.length; i++) {
//     console.log(companies[i])
// }


// forEach
companies.forEach(function(company){
    console.log(company)
    console.log(company.name)
})

//filter
const canDrink=ages.filter(age=>age>=21);

console.log(canDrink)

const retailCompanies=companies.filter(company=>company.category==='Retail');
console.log(retailCompanies)

const eightiesCompanies=companies.filter(company=>(company.start>=1980 && company.start<1990))
console.log(eightiesCompanies)

const lastedTenYears=companies.filter(company=>(company.end-company.start>=10));
console.log(lastedTenYears)

//map

const testMap=companies.map(company=>`${company.name} [${company.start}-${company.end}]`);
console.log(testMap)

const ageMap=ages.map(age=>Math.sqrt(age)).map(age=>age*2);
console.log(ageMap)

//sort

const sortCompanies=companies.sort((a,b)=>(a.start>b.start?1:-1)) 
console.log(sortCompanies)

const sortAges=ages.sort((a,b)=>a-b)
console.log(sortAges)

//reduces

const ageSum=ages.reduce((total,age)=>total+age,0)
console.log(ageSum)

const totalYears=companies.reduce((total,company)=>total+(company.end-company.start),0)
console.log(totalYears)

//combined methods

const combined=ages
    .map(age=>age*2)
    .filter(age=>age>=40)
    .sort((a,b)=>a-b)
    .reduce((a,b)=>a+b)

console.log(combined)
