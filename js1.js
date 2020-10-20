class Date {
    constructor(_day , _month,_year) {
        this.day=_day;
        this.month=_month;
        this.year=_year;
        // const abcd=1;
        // this.priMethod=function (){
        //     console.log(abcd1);
        //     return(abcd1);
        // }
        // let date=new Date( ke,10,2020);
        // date.priMethod();
    }

    getDay(){
        return this.day;
    }
    getMonth(){
        return this.month;
    }
    getYear(){
        return this.year;
    }
    setDay(_day){
        this.day=_day;
    }
    setMonth(_month){
        this.month=_month;
    }
    setYear(_year){
        this.year=_year;
    }
}
let date=new Date(2,2,2007);
let day1=date.day;
let day=date.getDay();
let month=date.getMonth();
let year=date.getYear();
console.log(day+"/"+month+"/"+year);
date.setDay(10);
date.setMonth(10);
date.setYear(2020);

console.log(date.day+"/"+date.month+"/"+date.year);
