const student={
    name:"aman",
    marks:95,
    prop:this,//global scope->window object
    getName:function(){
        console.log(this);
        return this.name;
    },
    getMarks:()=>{
       console.log(this);//parent scope->window object
        return this.marks;
    },
    
    getInfo1:function(){
        setTimeout(()=>{
            console.log(this);//student
        },2000);
    },
    getInfo2:function(){
        setTimeout(function (){
         console.log(this);//window
        },2000)
    }
}


//normal function:- this will always refer to calling object;
//arrow function:- this is lexically bound, meaning it inherits this from its parent scope.