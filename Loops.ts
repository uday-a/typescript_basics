const userNames: Array<string> = ["uday", "visu", "chinky"]
const printNames = (users: Array<string>) => {
  users.forEach((item: string) => {
    console.log("This is " + item);
  })
}

// printNames(userNames);

type UserType = {
  name: string,
  age: number,
  location: string
}

const usersArray2: Array<UserType> = [
  { name: 'uday', age: 22, location: 'my' },
  { name: 'Vesu', age: 11, location: "in" }
]


usersArray2.forEach((anything: UserType) => {
  console.log(anything);
})
