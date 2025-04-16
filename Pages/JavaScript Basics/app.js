var obtnMarksEnglish = ('Enter your English Marks');
var obtnMarksUrdu = ('Enter your Urdu Marks');
var obtnMarksIslamiat = ('Enter your Islamiat Marks');
var obtnMarksPakStudies = ('Enter your Pakistan Studies Marks');
var obtnMarksMathematics = ('Enter your Mathematics Marks');

var English = +prompt (obtnMarksEnglish)

if ( English <= 100){

}


else {
    console.log('Wrong Value Enterered')
}

var Urdu = +prompt (obtnMarksUrdu)

if ( Urdu <= 100){

}


else {
    console.log('Wrong Value Enterered')
}



var Islamiat = +prompt (obtnMarksIslamiat)

if ( Islamiat <= 100){

}


else {
    console.log('Wrong Value Enterered')
}


var PakStudies = +prompt (obtnMarksPakStudies)

if ( PakStudies <= 100){

}


else {
    console.log('Wrong Value Enterered')
}



var Mathematics = +prompt (obtnMarksMathematics)


if ( Mathematics <= 100){

}


else {
    console.log('Wrong Value Enterered')
}


var totalMarksObtained  = sum = English + Urdu + Islamiat + PakStudies + Mathematics

var per = ((totalMarksObtained/500) * 100 )

console.log( per + '%')


if ( totalMarksObtained <= 500){

if ( per <=100 && per >=90 ) {
    console.log( "50% Off on your education" )
}
 else if ( per < 90 && per >=70) {
    console.log( "30% Off on your education" )
 }

 else if ( per < 80 && per >=60) {
    console.log( "20% Off on your education" )
 }

else if ( per < 60 ) {
    console.log( "You are not eligible" )
 }

}

else {
    console.log('You have entered wrong marks' )
}
 