function loadImages(){
    chrome.tabs.query({ active:true, currentWindow: true}, function(tabs){
        var id = tabs[0].id;
            chrome.tabs.executeScript(id, {file: "content_imgSrc.js"}, function(response){
                console.log(response[0].srcList.length);
                src_s = response[0].srcList;
                var img_div = document.getElementById('img_div');
                for(var j=0; j<src_s.length; j++){
                    let img = document.createElement("img");
                    img.src = src_s[j];
                    img_div.appendChild(img);
                }
            });
    });
}


loadImages();