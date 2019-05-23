var express = require('express')
const fs = require('fs')
const path = require('path')
var router = express.Router()

router.get('/books', function (req, res) {
    res.json(getAllBooks());
})

router.get('/book/:book', function (req, res) {
    res.json(getBook(req.params["book"]))
})

router.get('/author/:author', function (req, res) {
    res.json(getAuthorBooks(req.params["author"]))
})

function getAllBooks(){
    let rawdata = fs.readFileSync(path.join(__dirname, 'books.json'));  
    let books = JSON.parse(rawdata);
    return books;
}

function getBook(book){
    let books = getAllBooks();

    for(let i =0; i < books.length; i++){
        if(book == books[i]["title"])
        return books[i];
    }

    return {}
}

function getAuthorBooks(author){
    let books = [];
    let allBooks = getAllBooks();

    for(let i =0; i < allBooks.length; i++){
        if(author == allBooks[i]["author"])
            books.push(allBooks[i]);
    }

    return books;
}

module.exports = router