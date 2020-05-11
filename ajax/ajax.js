/*
* @Author: WRBH
* @Date:   2020-05-11 16:40:20
* @Last Modified by:   WRBH
* @Last Modified time: 2020-05-11 19:31:02
*/
var $ = {
    ajax:function(options){
        var xhr = null,
            url = options.url,
            method = options.method || 'get',
            async = typeof(options.async) === "undefined"?true:options.async,
            data = options.data || null,
            params = '',
            callback = options.success,
            error = options.error;
            if(data){
                for(var i in data){
                    params += i + '=' + data[i] + '&';
                }
                params = params.replace(/&$/,'');
            }
            if(method === "get"){
                url += '?'+params;
            }
        if (typeof XMLHttpRequest != 'undefined') {
                xhr = new XMLHttpRequest();
        }else if(typeof ActiveXObject != 'undefined'){
            var xhrArr = ['Microsoft.XMLHTTP','MSXML2.XMLHTTP.6.0',
            'MSXML2.XMLHTTP.5.0','MSXML2.XMLHTTP.4.0',
            'MSXML2.XMLHTTP.3.0','MSXML2.XMLHTTP.2.0'],
            len = xhrArr.length;
            for(var i = 0;i<len;i++){
                try{
                    xhr = new ActiveXObject(xhrArr[i]);
                    break;
                }
                catch(ex){}
            }
        }else{
            throw new Error('No XHR object availabel.');
        }
        xhr.onreadystatechange = function(){
            if(xhr.readyState === 4){
                if((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304){
                    callback && callback(JSON.parse(xhr.responseText));
                }else{
                    error && error();
                }
            }
        }

        xhr.open(method,url,async);
        xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        xhr.send(params);

    }
}

$.ajax({
    url:"http://127.0.0.1/demo/register.php",
    method:"get",
    async:false,
    data:{username:'hxy610939654',pwd:'123123321'},
    success:function(){

    },
    error:function(){

    }
})