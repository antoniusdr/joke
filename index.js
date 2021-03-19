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
Why do comedians love !false?

</h1>
<p>
It's funny because it's true.
</p>
</body>

</html>`



app.get('/', (req, res)=> {
    res.send(document)
})


const port = 3000
app.listen(port, ()=> console.log(`listening on ${port}`))