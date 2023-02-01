var express = require('express');
var router = express.Router();





router.get('/movies', (req, res) => {
    fetch ('https://api.themoviedb.org/3/discover/movie/?api_key=e5edb3314b490ab559c107e652e204fe')
    .then(response => response.json())
    .then(data => {       
        console.log(data);
        res.json(data);

    
});
})

module.exports = router;







