const { response } = require('express')
const express = require('express')
const app = express ()


const document = `<html>
<head>

<title>
Antonius Respati

</title>


</head>
<body>
<h1>
What did the janitor say when he jumped out of the closet

</h1>
<p>
Supplies! 
</p>

<h2><p>
Okay im sorry that was bad
</p></h2>
</body>

</html>`



app.get('/', (req, res)=> {
    res.send(document)
})


const port = process.env.PORT || 3000
app.listen(port, ()=> console.log(`listening on ${port}`))