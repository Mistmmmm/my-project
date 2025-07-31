$(function() {
	//饮月轮播
	var currentIndex = 0 //声明并初始化当前显示项的索引，索引从0开始
	var DEMO //声明定时器变量，相当于setTimeout  
	//用于存储setTimeout返回的ID，后面可通过此变量删除定时器
	var cueerntID = 0 //声明并获取当前鼠标所指的对象的ID，初始化为0，作为默认值
	var pictureID = 0 //从按钮ID(即currentID)中提取对应的图片编号(即ID)，使按钮可以控制相对应的图片
	$("#ifocus_piclist li").eq(0).show() //显示第一张图片，确保轮播图初始化时显示第一张图
	autoScroll() //调用自定义函数
	$("#ifocus_btn li").hover(
		//鼠标悬浮在按钮上时的事件
		function() {
			stopScroll() //悬浮时调用停止滚动函数
			$("#ifocus_btn li").removeClass("current") //删除所有的li的current类
			$(this).addClass("current") //指哪个给哪个加current类
			var currentID = $(this).attr("id") || ""; // 安全获取ID
			var pictureID = currentID.match(/\d{2}$/g) ? currentID.match(/\d{2}$/g)[0] :
				currentID.match(
					/\d$/g) ? currentID.match(/\d$/g)[0] : "0";
			//currentID=$(this).attr("id")//将所指的按钮的id赋给currentID   //attr()获取设置对象属性
			//pictureID = currentID.match(/\d+/g) ? currentID.match(/\d+/g).join('') : '';
			//提取currentID的最后一个字符，并赋给pictureID   //即指到哪个图片就将提取好的索引赋给指到的图片
			//substring()看书p303页上
			$("#ifocus_piclist li").eq(pictureID).fadeIn(
				"slow") //选取所有的轮播图，鼠标指到哪个图片(即pictureID)哪个图片就淡入
			$("#ifocus_piclist li").not($("#ifocus_piclist li")[pictureID]).hide()
			//not()排除特定元素，括号中参数：1.匹配选择器；2.DOM元素；3.jQuery对象；4.函数function(){}
			//排除目前所指的图片，排除后将剩下的图片全部隐藏
			// $("#ifocus_tx li").hide()//隐藏全部的文字
			// $("#ifocus_tx li").eq(pictureID).show()//显示当前所指的图片所对应的文字
		}
		//鼠标离开时的事件
		,
		function() {
			// cueerntID=$(this).attr("id")//将所指的按钮的id赋给currentID
			var currentID = $(this).attr("id") || ""; // 安全获取ID
			var pictureID = currentID.match(/\d{2}$/g) ? currentID.match(/\d{2}$/g)[0] :
				currentID.match(
					/\d$/g) ? currentID.match(/\d$/g)[0] : "0";
			// pictureID = currentID.match(/\d+/g) ? currentID.match(/\d+/g).join('') : '';
			// 这会提取所有数字，如"p11a22"会得到"1122"
			// pictureID=cueerntID.substring(cueerntID.length-1)
			//提取currentID的最后一个字符，并赋给pictureID   //即指到哪个图片就将提取好的索引赋给指到的图片
			//substring()看书p303页上
			currentIndex = pictureID //将目前的pictureID(即目前图片位置，记录当前图片位置)赋给currentIndex
			//从当前图片位置继续自动轮播
			autoScroll() //调用自动轮播    //鼠标离开后继续自动轮播
		})
	//自定义自动滚动函数
	function autoScroll() {
		$("#ifocus_btn li:last").removeClass("current") //删除最后一个按钮的current类
		$("#ifocus_tx li:last").hide() //隐藏字的最后一个
		$("#ifocus_btn li").eq(currentIndex).addClass("current") //给当前索引按钮添加一个current类样式
		$("#ifocus_btn li").eq(currentIndex - 1).removeClass("current") //删除前一个按钮的current类样式
		//$("#ifocus_tx li ").eq(currentIndex).show()//显示当前索引的字，
		//$("#ifocus_tx li").eq(currentIndex-1).hide()//隐藏前一个字
		$("#ifocus_piclist li").eq(currentIndex).fadeIn("slow") //淡入当前索引的图片
		$("#ifocus_piclist li").eq(currentIndex - 1).hide() //隐藏前一个图片
		currentIndex++ //一直更新索引
		currentIndex = currentIndex >= 6 ? 0 : currentIndex //如果当前索引大于等于6，则回到索引为0的图片(即第一张)
		DEMO = setTimeout(autoScroll, 2000) //两秒后再次执行autoScroll，实现自动轮播
	}
	function stopScroll() {
		clearTimeout(DEMO)
	}
	
	
	
	//万敌轮播
	var wcurrentIndex = 0 //声明并初始化当前显示项的索引，索引从0开始
	var wDEMO //声明定时器变量，相当于setTimeout  
	//用于存储setTimeout返回的ID，后面可通过此变量删除定时器
	var wcueerntID = 0 //声明并获取当前鼠标所指的对象的ID，初始化为0，作为默认值
	var wpictureID = 0 //从按钮ID(即wcurrentID)中提取对应的图片编号(即ID)，使按钮可以控制相对应的图片
	$("#wifocus_piclist li").eq(0).show() //显示第一张图片，确保轮播图初始化时显示第一张图
	wautoScroll() //调用自定义函数
	$("#wifocus_btn li").hover(
		//鼠标悬浮在按钮上时的事件
		function() {
			wstopScroll() //悬浮时调用停止滚动函数
			$("#wifocus_btn li").removeClass("wcurrent") //删除所有的li的wcurrent类
			$(this).addClass("wcurrent") //指哪个给哪个加wcurrent类
			var wcurrentID = $(this).attr("id") || ""; // 安全获取ID
			// 提取字符串末尾的所有数字
			const match = wcurrentID.match(/\d+$/);
			const wpictureID = match ? match[0] : "0";
			// var wpictureID = wcurrentID.match(/\d{2}$/g) ? wcurrentID.match(/\d{2}$/g)[0] :
			// 	wcurrentID
			// 	.match(
			// 		/\d$/g) ? wcurrentID.match(/\d$/g)[0] : "0";
			//wcurrentID=$(this).attr("id")//将所指的按钮的id赋给wcurrentID   //attr()获取设置对象属性
			//wpictureID = wcurrentID.match(/\d+/g) ? wcurrentID.match(/\d+/g).join('') : '';
			//提取wcurrentID的最后一个字符，并赋给wpictureID   //即指到哪个图片就将提取好的索引赋给指到的图片
			//substring()看书p303页上
			$("#wifocus_piclist li").eq(wpictureID).fadeIn("slow") 
	
			//选取所有的轮播图，鼠标指到哪个图片(即wpictureID)哪个图片就淡入
			$("#wifocus_piclist li").not($("#wifocus_piclist li")[wpictureID]).hide()
			//not()排除特定元素，括号中参数：1.匹配选择器；2.DOM元素；3.jQuery对象；4.函数function(){}
			//排除目前所指的图片，排除后将剩下的图片全部隐藏
			// $("#wifocus_tx li").hide()//隐藏全部的文字
			// $("#wifocus_tx li").eq(wpictureID).show()//显示当前所指的图片所对应的文字
		}
		//鼠标离开时的事件
		,
		function() {
			// wcueerntID=$(this).attr("id")//将所指的按钮的id赋给wcurrentID
			var wcurrentID = $(this).attr("id") || ""; // 安全获取ID
			var wpictureID = wcurrentID.match(/\d{2}$/g) ? wcurrentID.match(/\d{2}$/g)[0] :
				wcurrentID
				.match(
					/\d$/g) ? wcurrentID.match(/\d$/g)[0] : "0";
			// wpictureID = wcurrentID.match(/\d+/g) ? wcurrentID.match(/\d+/g).join('') : '';
			// 这会提取所有数字，如"p11a22"会得到"1122"
			// wpictureID=wcueerntID.substring(wcueerntID.length-1)
			//提取wcurrentID的最后一个字符，并赋给wpictureID   //即指到哪个图片就将提取好的索引赋给指到的图片
			//substring()看书p303页上
			wcurrentIndex = wpictureID //将目前的wpictureID(即目前图片位置，记录当前图片位置)赋给wcurrentIndex
			//从当前图片位置继续自动轮播
			wautoScroll() //调用自动轮播    //鼠标离开后继续自动轮播
		})
	//自定义自动滚动函数
	function wautoScroll() {
		$("#wifocus_btn li:last").removeClass("wcurrent") //删除最后一个按钮的wcurrent类
		$("#wifocus_tx li:last").hide() //隐藏字的最后一个
		$("#wifocus_btn li").eq(wcurrentIndex).addClass("wcurrent") //给当前索引按钮添加一个wcurrent类样式
		$("#wifocus_btn li").eq(wcurrentIndex - 1).removeClass("wcurrent") //删除前一个按钮的wcurrent类样式
		//$("#wifocus_tx li ").eq(wcurrentIndex).show()//显示当前索引的字，
		//$("#wifocus_tx li").eq(wcurrentIndex-1).hide()//隐藏前一个字
		$("#wifocus_piclist li").eq(wcurrentIndex).fadeIn("slow") //淡入当前索引的图片
		$("#wifocus_piclist li").eq(wcurrentIndex - 1).hide() //隐藏前一个图片
		wcurrentIndex++ //一直更新索引
		wcurrentIndex = wcurrentIndex >= 6 ? 0 : wcurrentIndex //如果当前索引大于等于6，则回到索引为0的图片(即第一张)
		wDEMO = setTimeout(wautoScroll, 2000) //两秒后再次执行wautoScroll，实现自动轮播
	}
	function wstopScroll() {
		clearTimeout(wDEMO)
	}
	
	
	//黄泉轮播
	var hcurrentIndex = 0 //声明并初始化当前显示项的索引，索引从0开始
	var hDEMO //声明定时器变量，相当于setTimeout  
	//用于存储setTimeout返回的ID，后面可通过此变量删除定时器
	var hcueerntID = 0 //声明并获取当前鼠标所指的对象的ID，初始化为0，作为默认值
	var hpictureID = 0 //从按钮ID(即hcurrentID)中提取对应的图片编号(即ID)，使按钮可以控制相对应的图片
	$("#hifocus_piclist li").eq(0).show() //显示第一张图片，确保轮播图初始化时显示第一张图
	hautoScroll() //调用自定义函数
	$("#hifocus_btn li").hover(
		//鼠标悬浮在按钮上时的事件
		function() {
			hstopScroll() //悬浮时调用停止滚动函数
			$("#hifocus_btn li").removeClass("hcurrent") //删除所有的li的wcurrent类
			$(this).addClass("hcurrent") //指哪个给哪个加wcurrent类
			var hcurrentID = $(this).attr("id") || ""; // 安全获取ID
			// 提取字符串末尾的所有数字
			const match = hcurrentID.match(/\d+$/);
			const hpictureID = match ? match[0] : "0";
			// var hpictureID = hcurrentID.match(/\d{2}$/g) ? hcurrentID.match(/\d{2}$/g)[0] :
			// 	hcurrentID
			// 	.match(
			// 		/\d$/g) ? hcurrentID.match(/\d$/g)[0] : "0";
			//hcurrentID=$(this).attr("id")//将所指的按钮的id赋给hcurrentID   //attr()获取设置对象属性
			//hpictureID = hcurrentID.match(/\d+/g) ? hcurrentID.match(/\d+/g).join('') : '';
			//提取hcurrentID的最后一个字符，并赋给hpictureID   //即指到哪个图片就将提取好的索引赋给指到的图片
			//substring()看书p303页上
			$("#hifocus_piclist li").eq(hpictureID).fadeIn("slow") 
	
			//选取所有的轮播图，鼠标指到哪个图片(即hpictureID)哪个图片就淡入
			$("#hifocus_piclist li").not($("#hifocus_piclist li")[hpictureID]).hide()
			//not()排除特定元素，括号中参数：1.匹配选择器；2.DOM元素；3.jQuery对象；4.函数function(){}
			//排除目前所指的图片，排除后将剩下的图片全部隐藏
			// $("#hifocus_tx li").hide()//隐藏全部的文字
			// $("#hifocus_tx li").eq(hpictureID).show()//显示当前所指的图片所对应的文字
		}
		//鼠标离开时的事件
		,
		function() {
			// hcueerntID=$(this).attr("id")//将所指的按钮的id赋给hcurrentID
			var wcurrentID = $(this).attr("id") || ""; // 安全获取ID
			var hpictureID = hcurrentID.match(/\d{2}$/g) ? hcurrentID.match(/\d{2}$/g)[0] :
				hcurrentID
				.match(
					/\d$/g) ? hcurrentID.match(/\d$/g)[0] : "0";
			// hpictureID = hcurrentID.match(/\d+/g) ? hcurrentID.match(/\d+/g).join('') : '';
			// 这会提取所有数字，如"p11a22"会得到"1122"
			// hpictureID=hcueerntID.substring(wcueerntID.length-1)
		    //提取hcurrentID的最后一个字符，并赋给hpictureID   //即指到哪个图片就将提取好的索引赋给指到的图片
			//substring()看书p303页上
			wcurrentIndex = wpictureID //将目前的hpictureID(即目前图片位置，记录当前图片位置)赋给wcurrentIndex
			//从当前图片位置继续自动轮播
			hautoScroll() //调用自动轮播    //鼠标离开后继续自动轮播
		})
	//自定义自动滚动函数
	function hautoScroll() {
		$("#hifocus_btn li:last").removeClass("wcurrent") //删除最后一个按钮的hcurrent类
		$("#hifocus_tx li:last").hide() //隐藏字的最后一个
		$("#hifocus_btn li").eq(hcurrentIndex).addClass("hcurrent") //给当前索引按钮添加一个hcurrent类样式
		$("#hifocus_btn li").eq(hcurrentIndex - 1).removeClass("hcurrent") //删除前一个按钮的hcurrent类样式
		//$("#hifocus_tx li ").eq(hcurrentIndex).show()//显示当前索引的字，
		//$("#hifocus_tx li").eq(hcurrentIndex-1).hide()//隐藏前一个字
		$("#hifocus_piclist li").eq(hcurrentIndex).fadeIn("slow") //淡入当前索引的图片
		$("#hifocus_piclist li").eq(hcurrentIndex - 1).hide() //隐藏前一个图片
		hcurrentIndex++ //一直更新索引
		hcurrentIndex = hcurrentIndex >= 6 ? 0 : hcurrentIndex //如果当前索引大于等于6，则回到索引为0的图片(即第一张)
		hDEMO = setTimeout(hautoScroll, 2000) //两秒后再次执行hautoScroll，实现自动轮播
	}
	function hstopScroll() {
		clearTimeout(wDEMO)
	}
	
	
	//乱破轮播
	var lcurrentIndex = 0 //声明并初始化当前显示项的索引，索引从0开始
	var lDEMO //声明定时器变量，相当于setTimeout  
	//用于存储setTimeout返回的ID，后面可通过此变量删除定时器
	var lcueerntID = 0 //声明并获取当前鼠标所指的对象的ID，初始化为0，作为默认值
	var lpictureID = 0 //从按钮ID(即lcurrentID)中提取对应的图片编号(即ID)，使按钮可以控制相对应的图片
	$("#lifocus_piclist li").eq(0).show() //显示第一张图片，确保轮播图初始化时显示第一张图
	lautoScroll() //调用自定义函数
	$("#lifocus_btn li").hover(
		//鼠标悬浮在按钮上时的事件
		function() {
			lstopScroll() //悬浮时调用停止滚动函数
			$("#lifocus_btn li").removeClass("lcurrent") //删除所有的li的lcurrent类
			$(this).addClass("lcurrent") //指哪个给哪个加lcurrent类
			var lcurrentID = $(this).attr("id") || ""; // 安全获取ID
			var lpictureID = lcurrentID.match(/\d{2}$/g) ? lcurrentID.match(/\d{2}$/g)[0] :
				lcurrentID
				.match(
					/\d$/g) ? lcurrentID.match(/\d$/g)[0] : "0";
			//lcurrentID=$(this).attr("id")//将所指的按钮的id赋给lcurrentID   //attr()获取设置对象属性
			//lpictureID = lcurrentID.match(/\d+/g) ? lcurrentID.match(/\d+/g).join('') : '';
			//提取lcurrentID的最后一个字符，并赋给lpictureID   //即指到哪个图片就将提取好的索引赋给指到的图片
			//substring()看书p303页上
			$("#lifocus_piclist li").eq(lpictureID).fadeIn(
				"slow") //选取所有的轮播图，鼠标指到哪个图片(即hpictureID)哪个图片就淡入
			$("#lifocus_piclist li").not($("#lifocus_piclist li")[lpictureID]).hide()
			//not()排除特定元素，括号中参数：1.匹配选择器；2.DOM元素；3.jQuery对象；4.函数function(){}
			//排除目前所指的图片，排除后将剩下的图片全部隐藏
			// $("#lifocus_tx li").hide()//隐藏全部的文字
			// $("#lifocus_tx li").eq(lpictureID).show()//显示当前所指的图片所对应的文字
		}
		//鼠标离开时的事件
		,
		function() {
			// lcueerntID=$(this).attr("id")//将所指的按钮的id赋给hcurrentID
			var lcurrentID = $(this).attr("id") || ""; // 安全获取ID
			var lpictureID = lcurrentID.match(/\d{2}$/g) ? lcurrentID.match(/\d{2}$/g)[0] :
				lcurrentID
				.match(
					/\d$/g) ? lcurrentID.match(/\d$/g)[0] : "0";
			// lpictureID = lcurrentID.match(/\d+/g) ? lcurrentID.match(/\d+/g).join('') : '';
			// 这会提取所有数字，如"p11a22"会得到"1122"
			// lpictureID=hcueerntID.substring(lcueerntID.length-1)
			//提取lcurrentID的最后一个字符，并赋给lpictureID   //即指到哪个图片就将提取好的索引赋给指到的图片
			//substring()看书p303页上
			lcurrentIndex = lpictureID //将目前的lpictureID(即目前图片位置，记录当前图片位置)赋给lcurrentIndex
			//从当前图片位置继续自动轮播
			lautoScroll() //调用自动轮播    //鼠标离开后继续自动轮播
		})
	//自定义自动滚动函数
	function lautoScroll() {
		$("#lifocus_btn li:last").removeClass("lcurrent") //删除最后一个按钮的lcurrent类
		$("#lifocus_tx li:last").hide() //隐藏字的最后一个
		$("#lifocus_btn li").eq(lcurrentIndex).addClass("lcurrent") //给当前索引按钮添加一个lcurrent类样式
		$("#lifocus_btn li").eq(lcurrentIndex - 1).removeClass("lcurrent") //删除前一个按钮的lcurrent类样式
		//$("#lifocus_tx li ").eq(lcurrentIndex).show()//显示当前索引的字，
		//$("#lifocus_tx li").eq(lcurrentIndex-1).hide()//隐藏前一个字
		$("#lifocus_piclist li").eq(lcurrentIndex).fadeIn("slow") //淡入当前索引的图片
		$("#lifocus_piclist li").eq(lcurrentIndex - 1).hide() //隐藏前一个图片
		lcurrentIndex++ //一直更新索引
		lcurrentIndex = lcurrentIndex >= 6 ? 0 : lcurrentIndex //如果当前索引大于等于6，则回到索引为0的图片(即第一张)
		lDEMO = setTimeout(lautoScroll, 2000) //两秒后再次执行lautoScroll，实现自动轮播
	}
	function lstopScroll() {
		clearTimeout(lDEMO)
	}



	//花火轮播
	var huacurrentIndex = 0 //声明并初始化当前显示项的索引，索引从0开始
	var huaDEMO //声明定时器变量，相当于setTimeout  
	//用于存储setTimeout返回的ID，后面可通过此变量删除定时器
	var huacueerntID = 0 //声明并获取当前鼠标所指的对象的ID，初始化为0，作为默认值
	var huapictureID = 0 //从按钮ID(即huacurrentID)中提取对应的图片编号(即ID)，使按钮可以控制相对应的图片
	$("#huaifocus_piclist li").eq(0).show() //显示第一张图片，确保轮播图初始化时显示第一张图
	huaautoScroll() //调用自定义函数
	$("#huaifocus_btn li").hover(
		//鼠标悬浮在按钮上时的事件
		function() {
			huastopScroll() //悬浮时调用停止滚动函数
			$("#huaifocus_btn li").removeClass("huacurrent") //删除所有的li的huacurrent类
			$(this).addClass("huacurrent") //指哪个给哪个加huacurrent类
			var huacurrentID = $(this).attr("id") || ""; // 安全获取ID
			var huapictureID = huacurrentID.match(/\d{2}$/g) ? huacurrentID.match(/\d{2}$/g)[
					0] : huacurrentID
				.match(
					/\d$/g) ? huacurrentID.match(/\d$/g)[0] : "0";
			//huacurrentID=$(this).attr("id")//将所指的按钮的id赋给huacurrentID   //attr()获取设置对象属性
			//huapictureID = lcurrentID.match(/\d+/g) ? huacurrentID.match(/\d+/g).join('') : '';
			//提取huacurrentID的最后一个字符，并赋给huapictureID   //即指到哪个图片就将提取好的索引赋给指到的图片
			//substring()看书p303页上
			$("#huaifocus_piclist li").eq(huapictureID).fadeIn(
				"slow") //选取所有的轮播图，鼠标指到哪个图片(即huapictureID)哪个图片就淡入
			$("#huaifocus_piclist li").not($("#huaifocus_piclist li")[huapictureID]).hide()
			//not()排除特定元素，括号中参数：1.匹配选择器；2.DOM元素；3.jQuery对象；4.函数function(){}
			//排除目前所指的图片，排除后将剩下的图片全部隐藏
			// $("#huaifocus_tx li").hide()//隐藏全部的文字
			// $("#huaifocus_tx li").eq(huapictureID).show()//显示当前所指的图片所对应的文字
		}
		//鼠标离开时的事件
		,
		function() {
			// huacueerntID=$(this).attr("id")//将所指的按钮的id赋给huacurrentID
			var huacurrentID = $(this).attr("id") || ""; // 安全获取ID
			var huapictureID = huacurrentID.match(/\d{2}$/g) ? huacurrentID.match(/\d{2}$/g)[
					0] : huacurrentID
				.match(
					/\d$/g) ? huacurrentID.match(/\d$/g)[0] : "0";
			// huapictureID = huacurrentID.match(/\d+/g) ? huacurrentID.match(/\d+/g).join('') : '';
			// 这会提取所有数字，如"p11a22"会得到"1122"
			// huapictureID=hcueerntID.substring(huacueerntID.length-1)
			//提取huacurrentID的最后一个字符，并赋给huapictureID   //即指到哪个图片就将提取好的索引赋给指到的图片
			//substring()看书p303页上
			huacurrentIndex = huapictureID //将目前的huapictureID(即目前图片位置，记录当前图片位置)赋给huacurrentIndex
			//从当前图片位置继续自动轮播
			huaautoScroll() //调用自动轮播    //鼠标离开后继续自动轮播
		})
	//自定义自动滚动函数
	function huaautoScroll() {
		$("#huaifocus_btn li:last").removeClass("huacurrent") //删除最后一个按钮的huacurrent类
		$("#huaifocus_tx li:last").hide() //隐藏字的最后一个
		$("#huaifocus_btn li").eq(huacurrentIndex).addClass("huacurrent") //给当前索引按钮添加一个huacurrent类样式
		$("#huaifocus_btn li").eq(huacurrentIndex - 1).removeClass(
			"huacurrent") //删除前一个按钮的huacurrent类样式
		//$("#huaifocus_tx li ").eq(huacurrentIndex).show()//显示当前索引的字，
		//$("#huaifocus_tx li").eq(huacurrentIndex-1).hide()//隐藏前一个字
		$("#huaifocus_piclist li").eq(huacurrentIndex).fadeIn("slow") //淡入当前索引的图片
		$("#huaifocus_piclist li").eq(huacurrentIndex - 1).hide() //隐藏前一个图片
		huacurrentIndex++ //一直更新索引
		huacurrentIndex = huacurrentIndex >= 6 ? 0 : huacurrentIndex //如果当前索引大于等于6，则回到索引为0的图片(即第一张)
		huaDEMO = setTimeout(huaautoScroll, 2000) //两秒后再次执行huaautoScroll，实现自动轮播
	}
	function huastopScroll() {
		clearTimeout(huaDEMO)
	}
})