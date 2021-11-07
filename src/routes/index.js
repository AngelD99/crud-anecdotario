const { Router } = require('express');
const admin = require('firebase-admin');
const router = Router();

var serviceAccount = require('../../crud-anecdotario-firebase-adminsdk-ksj5a-3ff8af002b.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://crud-anecdotario-default-rtdb.firebaseio.com/'
});

const db = admin.database();

router.get("/", (req, res) => {
    res.send("jala")
});

router.post("/new-anecdote",(req,res) => {
    console.log(req.body);
    db.ref('anecdotes').push(req.body);
});

router.post("/new-user", (req, res) => {
    console.log(req.body);
    db.ref("users").push(req.body);
})

module.exports = router;