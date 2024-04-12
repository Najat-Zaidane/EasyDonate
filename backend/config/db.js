
module.exports =  {
   HOST : 'localhost', 
   USER : 'root',
   PASSWORD : '',
   DB  : 'donSang',
   dialect : 'mysql',

   pool :  {
    max: 5, // the maximum connection 
    min: 0, // the minimum connection 
    acquire : 3000,
    idle : 10000    
   }

}
