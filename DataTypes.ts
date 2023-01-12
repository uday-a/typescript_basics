// string
// boolean
// numbers
// Array
// Object

//undefined 
//null
//function
//bigint

const myName: string = "Uday";
const sampleFunction = (myNameInp: string, myAge: number) => { //parameter
  console.log("My Name is " + myNameInp + " and my age " + myAge);
}
sampleFunction(myName, 22)// argument



type CustomUserType = {
  name: string,
  age: number,
  isActive: boolean,
  location: string
}

const userUday: {
  name: string,
  age: number,
  isActive: boolean,
  location: string
} = {
  name: 'uday',
  age: 30,
  isActive: true,
  location: 'My'
}

const userVisu: CustomUserType = {
  name: 'Vesu',
  age: 21,
  isActive: true,
  location: 'In'
}

const userAnkita: CustomUserType = {
  name: 'Ankita',
  age: 28,
  isActive: false,
  location: 'My'
}

const getUserDetails = (location: string, userObj1: CustomUserType, userObj2: CustomUserType) => {
  console.log(location);

}

getUserDetails("Malaysia", userAnkita, userUday,)