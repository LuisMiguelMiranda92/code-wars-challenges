// Every now and then people in the office moves teams or departments. 
// Depending what people are doing with their time they can become more or less boring. Time to assess the current team.

// You will be provided with an object(staff) containing the staff names as keys, and the department they work in as values.

// Each department has a different boredom assessment score, as follows:

// accounts = 1
// finance = 2
// canteen = 10
// regulation = 3
// trading = 6
// change = 6
// IS = 8
// retail = 5
// cleaning = 4
// pissing about = 25

// Depending on the cumulative score of the team, return the appropriate sentiment:

// <=80: 'kill me now'
// < 100 & > 80: 'i can handle this'
// 100 or over: 'party time!!'

// The Office I - Outed
// The Office III - Broken Photocopier
// The Office IV - Find a Meeting Room
// The Office V - Find a Chair

//my solution
function boredom(staff){
    // how bored are you ??
    let teamScore = 0
    for(let i in staff){
        if(staff[i] === 'accounts'){
            teamScore += 1
        } else if(staff[i] === 'finance'){
            teamScore += 2
        } else if(staff[i] === 'canteen'){
            teamScore += 10
        } else if(staff[i] === 'regulation'){
            teamScore += 3
        } else if(staff[i] === 'trading'){
            teamScore += 6
        } else if(staff[i] === 'change'){
            teamScore += 6
        } else if(staff[i] === 'IS'){
            teamScore += 8
        } else if(staff[i] === 'retail'){
            teamScore += 5
        } else if(staff[i] === 'cleaning'){
            teamScore += 4
        } else if(staff[i] === 'pissing about'){
            teamScore += 25
        }
    }
    if(teamScore <= 80){
        return 'kill me now'
    } else if(teamScore > 80 && teamScore < 100){
        return 'i can handle this'
    } if(teamScore >= 100){
        return 'party time!!'
    }
  }