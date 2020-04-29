/*
* @Author: WRBH
* @Date:   2020-04-29 10:45:51
* @Last Modified by:   WRBH
* @Last Modified time: 2020-04-29 12:56:27
*/
var regexp = {
    // Username may only contain alphanumeric characters or single hyphens, and cannot begin or end with a hyphen.
    'Username':/^([a-zA-Z0-9])\w+([a-zA-Z0-9])$/g,
    //Password:8-16 characters long with any combination of characters but no space
    'Password':/^\S{8,16}$/,
    //match HTML tag
    'HTMLTags':{
    'tag1':/<\/?[a-zA-Z]+(\s+[a-zA-Z]+=".*")*>/g,
    'tag2':/<[^>]+>/g,
    'tag3':/<(?:[^"'>]|(["'])[^"']*\1)*>/g
    },
    //Email
    // abc@yahoo.com.cn
    // abc_1@yahoo.com.cn
    // abc_1.com@yahoo.com.cn
    'Email':/^(?:\w+\.)*\w+@(?:\w+\.)+[a-z]{2,4}$/i,
    //URL address
    'URL':/^(https?:\/\/)?[^:\/]+(:\d+)?(\/.*)?&/
};

//Eliminate leading and trailing spaces
function trimLeft(str){
    return str.replace(/^\s+/,'');
}
function trimRight(str){
    return str.replace(/\s+$/,'');
}
fucntion trim(str){
    return str.replace(/^\s+/,'').replace(/\s+$/,'');
}

//to camel case
var str = "background-color",
    pattern = /-(a-z)/gi;
function toCamelCase(str){
    return str.replace(pattern,function(all,letter){
        return letter.toUpperCase();
    })
}

