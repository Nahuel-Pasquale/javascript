// const funcionSync = () => {
//   console.log('Soy una funcion sincrona')
// }


// const funcionAsync = async () => {
//   console.log('Soy una funcion asincrona')
// }

// funcionSync()
// funcionAsync()



// ejemplo de implementacion de promesas

const promesaOk = new Promise( (resolve, reject) => {
  setTimeout(() => {
    resolve('Hola mundo, soy la primera promesa Ok')
  }, 2000);
});

// console.log(promesaOk)

// promesaOk
//   .then(res => {
//     console.log(res)
//   })
//   .catch(err => {
//     console.log(err)
//   });

// const promesaErr = new Promise( (resolve, reject) => {
//   setTimeout(() => {
//     reject('Soy un error, una promesa fallida')
//   }, 2000);
// });

// console.log(promesaErr)

// promesaErr
//   .then(res => {
//     console.log(res)
//   })
//   .catch(err => {
//     console.log(err)
//   });


// const promesaTryCatch = new Promise((resolve, reject) => {
//   try {
//     setTimeout(() => {
//       resolve('Hola mundo, soy la primera promesa Ok')
//     }, 2000);
//   } catch (error) {
//     reject(error)
//   }
// })

// promesaTryCatch
//   .then(res => {
//     console.log(res)
//   })
//   .catch(err => {
//     console.log(err)
//   });

// fetch(URL)
// .then()
// .catch()

const url = 'https://pokeapi.co/api/v2/pokemon'

// const promesaFetchPokemon = new Promise((resolve, reject) => {
//   fetch(url)
//     .then(res => {
//       console.log('RES ==> ', res);
//       res.json()
//         .then(data => {
//           console.log('DATA ==>', data.results)
//           resolve(data.results);
//         })
//     })
//     .catch(err => reject(err))
// })

// const promesaFetchPokemon = new Promise((resolve, reject) => {
//   fetch(url)
//     .then(res => res.json())
//     .then(data => resolve(data.result))
//     .catch(err => reject(err))
// });

// const promesaFetchPokemon = new Promise(r => fetch(url).then(res => res.json()).then(data => r(data.results)))

console.log(fetch(url).then(res => res.json()).then(data => (data.results)))

