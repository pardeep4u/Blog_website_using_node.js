//var colors = require('colors');
const arrayData = [
    {
        blog: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis ',
        author: 'Pardeep kumar',
    }
]
/*arrayTitle.forEach( (el,i) => {
    console.log(`Item at index${i}`.red);
    console.log(`${el.author} \n${el.blog}`.blue);
} );

Commented code is for testing purpose */
/*function add_item(auth,context) {
    

    arrayData.push({
        blog : context,
        author: auth
    });
}

function showData(){
    arrayData.forEach( (el,i) => {
        console.log(`Item at index${i}`);
        console.log(`${el.author} \n${el.blog}`);
    } );
}*/


exports.showArray =  () => {
    return arrayData;
};


exports.add_item = (auth,context) => {
    arrayData.push({
        blog : context,
        author: auth
    });
};



    

    

