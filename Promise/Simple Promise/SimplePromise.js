// ! ### Basic

function divide(a, b) {
  return new Promise(function (resolve, reject) {
    if (b === 0) {
      reject(new Error(`You cannot divide by 0 `));
      return;
    }
    resolve(a / b);
  });
}

// prettier-ignore
// divide(10, 2)
// .then(function (result) {console.log(`Division Success: ${result}`);})
// .catch(function (error) {console.log(`There was an error with the division!`);console.log(error);});

// prettier-ignore
// divide(10, 0)
// .then(function (result) {console.log(`Division Success: ${result}`);})
// .catch(function (error) {console.log(`There was an error with the division!`);console.log(error);});

//###############################################################################

// ! ### 2 Example

function wait(ms) {
  return new Promise(function (resolve, reject) {
      if(ms <= 0){
          reject(new Error ('Cannot wait 0 seconds or less than 0'))
          return;
      }
    setTimeout(function () {
      resolve();
    }, ms);
  });
}

// prettier-ignore
// wait(-1000)
// .then(function () {  console.log('We have waited 1 second!');})
// .then(function () {  console.log('We have waited 1 second!');})
// .catch(function (error) {  console.log(`There was an error: ${error.message}`);});

//###############################################################################

function connectToDatabase (config){
    return new Promise(function(resolve,reject){
        const connection = mysql.createConnection(config);

        connection.connect(function(err){
            if(err) {
                reject(err);
                return;
            }
            resolve(connection);
        })
    })
}

connectToDatabase({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'chatroom',
})
  .then(function (conn) {
    console.log(`Connection successful`);
    conn.end();
  })
  .catch(function (err) {
    console.log(`There was an error connection to the DB`);
    console.log(err.message);
  });
