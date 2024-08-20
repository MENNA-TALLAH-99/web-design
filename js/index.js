// degree=prompt("inter your degree")
// if(degree ==90) console.log('a')
//     else if (degree < 90 & degree >80) console.log('b')
//     else if (degree < 80 & degree >70) console.log('c')
//     else if (degree < 70 & degree >60) console.log('d')
//     else if (degree <60 ) console.log('f')
//     else console.log('false')

// function loopfun(startnum, endnum, braknum, contniuenum)

// {


// if((startnum ==null || startnum=="") || (endnum==null || endnum=="") || (braknum==null || braknum=="")||(contniuenum==null||contniuenum==""))
//      console.log("please enter all parameters")

//     else{
    
//     for (let index = startnum; index <=endnum; index++){
    
//     if(index== contniuenum) continue;
    
//     else if (index == braknum) break;
    
//     console.log(index);
//     }
// }

// }


// loopfun(1,10,8,4)
// loopfun(4,20,15)


 var users =[]

function addUser(){
    var usersData ={
        name : prompt("inter name"),
        id :  prompt("inter id"),
        balance : prompt("inter balance"),
    }

    users.push(usersData)
}

addUser()
addUser()
addUser()

console.log(users)

function EditUserBalanceById(){
    var x=prompt("Enter id")
    var yyy=prompt("Enter newbalance")

    var index = users.findIndex(item => item.id == x);
    users[index].balance = yyy;


}

EditUserBalanceById()
console.log(users)




function deletUserById(){
    var x = prompt("Enter id You Want To Delete")
    var index = findIndex(item =>item.id == x)
    users.splice(index,1)
}
deletUserById()
console.log(users)