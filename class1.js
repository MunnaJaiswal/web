function characteristics(
    name="NCIT",
    age=5,
    education,
    experience,
    ...otherDetails
){
    console.log(
        `name=${name},age=${age},education=${education}, experience=${experience},otherDetails=${otherDetails}`
    );
}

characteristics(
    "Sam",
    19,
    [10,12,16],
    [
        {og:"NCIT",year:2},
        {og:"CF",year:1},
    ],
    "married",
    "kathmandu",
    12,
    "gita"
)

let values={
    name:"shyam",
    year:2015,
    semester:third,
    photos:["url1","url2","url3"]
};

characteristics(values);
console.log("\n",JSON.stringify(values)); 
