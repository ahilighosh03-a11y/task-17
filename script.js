const divideNumbers=(a,b)=>
{
    return new Promise((resolve,reject) =>{
        if(b==0){
            reject("Error:Division by zero is not allowed.");
        }
        else{
            resolve(a/b);
        }
    });
};
const testcases=[
    {
        num1:10, num2:2
    },
    {
        num1:19, num2:0
    },
    {
        num1:15, num2:3
    },
    {
        num1:20, num2:4
    },
    {
        num1:50, num2:0
    }
];
const outputDiv= document.getElementById("output");
testcases.forEach((test,index)=> {
    const exampleDiv =document.createElement("div");
    exampleDiv.className ="example";
    const title=document.createElement("p");
    title.textContent=`Example ${index + 1}`;
    exampleDiv.appendChild(title);
    const list= document.createElement("ul");
    const actionItem =document.createElement("li");
    actionItem.textContent=`Dividing ${test.num1} by ${test.num2}...`;
    list.appendChild(actionItem);
    const resultItem=document.createElement("li");
    divideNumbers(test.num1, test.num2)
    .then((result)=>
    {
        resultItem.textContent=`Result: ${result}`;
    })
    .catch((error) =>
    {
        resultItem.textContent=error;
    })
    .finally(()=>
    {
        list.appendChild(resultItem);
        exampleDiv.appendChild(list);
        outputDiv.appendChild(exampleDiv);
    });

});
