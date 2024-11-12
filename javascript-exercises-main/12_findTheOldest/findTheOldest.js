const findTheOldest = function(people) {

    let currentYear = new Date().getFullYear();
    let sorted = people.sort((a,b)=>{
        const last = (a.yearOfDeath || currentYear)-a.yearOfBirth;
        const next = (b.yearOfDeath || currentYear)-b.yearOfBirth;
        return last>next? -1:1;
    })

    return sorted[0];
}

// Do not edit below this line
module.exports = findTheOldest;
