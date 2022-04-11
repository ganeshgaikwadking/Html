var a:number | string="Tushar";
 
var b:any;
 
function AcceptId(a:number|boolean){
    console.log(a);
}
function AcceptId2(a:any){
 
}
var emp={};
var colors=[];
AcceptId(true);

function Print(emp:IEmployee){
 
}
 
function Accept(emp:IEmployee){
console.log(emp);
}
 
interface IEmployee{
    firstName:string;
    lastName:string;
    empid:number;
    salary:number;
    isUser?:boolean;
}