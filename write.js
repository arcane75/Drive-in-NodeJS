const fs = require('fs');

const testObj = {
    name: 'rakib',
    email: 'test@example.com',
    address: {
        city: 'New York',
        country: 'United States',
    }
}

const data = JSON.stringify(testObj);
fs.writeFile('./test.json', data, (err) => {
if(err){
    console.log(err)
} else {
    console.log('Successful')
}
})