interface User {
    name: string
    age: number
    email: string
    address?: {
      city: string
      country: string
    }
  }
  
  const alex: User = {
    name: 'Mango',
    age: 32,
    email: 'alex@gmale.com',
    address: {
      city: 'New York',
      country: 'USA',
    },
  }
  
  const john: User = {
    name: 'Mango',
    age: 30,
    email: 'john@gmail.com',
  }