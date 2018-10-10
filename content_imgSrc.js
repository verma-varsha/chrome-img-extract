var res = {};
console.log("getImages se hai yeh");
var img_tags = document.getElementsByTagName('img');
var srcList = [];
for(var i=0; i<img_tags.length; i++){
    srcList.push(img_tags[i].src);
}
console.log(srcList);

res.srcList = srcList;
res;