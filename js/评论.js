//向下取整
var  num=Math.floor(Math.random()*15)
//设置属性及属性值
document.querySelector("#avatar").setAttribute("src","./images/评论/"+num+".jpg")
var btn=document.querySelector("#btn")
btn.onclick=function(){
	var replyDivs=document.querySelectorAll("div.reply-item")
	var reply_div=document.createElement("div")
	reply_div.setAttribute("class","reply-item")
	var username=document.querySelector("#name").value
	var content=document.querySelector("#txt").value
	reply_div.innerHTML=`
	  <div class="user">
	    <div class="user-face">
	      <img src="./images/评论/${num}.jpg" alt="" />
	    </div>
	    <div class="user-name">${username}</div>
	    <p>${content}</p>
	  </div>
	  <div class="info">
	    <span>${showTime()}</span>
	    <span>1</span>
	    <span></span>
	    <span><a class="remove" href="#">删除</a></span>
	  </div>
	`
    // 插入到第一个评论之前
    if (replyDivs.length > 0) {
        replyDivs[0].parentNode.insertBefore(reply_div, replyDivs[0])
    } else {
        document.querySelector(".right").appendChild(reply_div)
    }
    
    document.querySelector("#name").value = ""
    document.querySelector("#txt").value = ""
    
    // 重新绑定所有删除按钮
    bindRemoveEvents()
}

function showTime() {
    var now = new Date()
    var year = now.getFullYear()
    var month = now.getMonth() + 1
    var date = now.getDate()
    var hour = now.getHours()
    var minute = now.getMinutes()
    if (hour < 10) hour = "0" + hour
    minute = minute < 10 ? `0${minute}` : minute
    return year + "-" + month + "-" + date + " " + hour + ":" + minute
}

// 绑定删除事件函数
function bindRemoveEvents() {
    var removes = document.querySelectorAll("a.remove")
    removes.forEach(function(removeBtn) {
        removeBtn.onclick = function(e) {
            e.preventDefault()
            // 找到要删除的reply-item元素
			//closest()选取最近的元素
            var replyItem = this.closest(".reply-item")
            if (replyItem) {
                replyItem.parentNode.removeChild(replyItem)
            }
        }
    })
}

// 初始绑定删除事件
bindRemoveEvents()

// 关闭通知功能
document.querySelector(".notice-item span").onclick = function() {
    this.parentNode.style.display = "none"
}