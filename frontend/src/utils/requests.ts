//LINK NO HEROKU: https://sds3-viniciusog.herokuapp.com
//LINK LOCAL: http://localhost:8080

//AQUI TEMOS O SEGUINTE: a nossa constante BASE_URL verificará se existe a variável do NETLIFY:
//REACT_APP_BACKEND_URL, 
//caso exista, irá usar ela, se não existir, usará localhost.

//REACT_APP é o NETLIFY, BACKEND_URL é uma das variáveis definidas no NETLIFY
export const BASE_URL = process.env.REACT_APP_BACKEND_URL ?? "http://localhost:8080"