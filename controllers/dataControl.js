const Book = require("../models/models.js");

export function dataControl (data) {
    let res = {};
    let isOk = true;
    const book = new Book(data);
    if(!book.isbn){
        res.isbn = "The ISBN number cannot be empty";
        isOk = false;
    }
    if(!checkIsbn(book.isbn)){
        res.isbn = "ISBN is not correct";
        isOk = false;
    }
    if(book.title.length === 0){
        res.title = "The title cannot be empty";
        isOk = false;
    }
    if(book.title.length > 200){
        res.title = "The title is too long";
        isOk = false;
    }
    if(book.author.length === 0){
        res.author = "The book needs an author";
        isOk = false;
    }
    if(book.author.length > 150){
        res.author = "The author's name is too long";
        isOk = false;
    }
    if(book.overview.length > 1500){
        res.overview = "The overview is too long";
        isOk = false;
    }
    if(!checkImageExt){
        res.picture = "You must enter a valid image url";
    }
    return {
        isOk : this.isOk,
        res : this.res,
    };
};

function checkImageExt(link){
    var text = link.slice(-3);
    if(text !== "JPG" || text !== "PNG" || text !== "GIF" || text !== "SVP")
        return false;
    else
        return true;
};


function checkIsbn (isbn){

}

