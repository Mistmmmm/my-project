function $(elementId){
	return document.getElementById(elementId)
}
function checkUser(){
	var user=$("user").value
	var userId=$("user_prompt")
	userId.innerHTML=""
	if(user.length<4||user.length>16)
	{
		userId.innerHTML="错，4-16位"
		return false
	}
	for(var i=0;i<user.length;i++){
		if(!isNaN(user.charAt(i))){
			userId.innerHTML="不能数字"
			return false
		}
		userId.innerHTML="对了"
		return true
	}
}
function checkPwd(){
	var pwd=$("pwd").value
	var pwdId=$("pwd_prompt")
	pwdId.innerHTML=""
	if(pwd.length<4||pwd.length>10)
	{
		pwdId.innerHTML="错，4-10位"
		return false
	}
		return true
	}
	function checkRepwd(){
		var repwd=$("repwd").value
		var pwd=$("pwd").value
		var repwdId=$("repwd_prompt")
		repwdId.innerHTML=""
		if(pwd!=repwd)
		{
			repwdId.innerHTML="不一样"
			return false
		}
			repwdId.innerHTML="一样"
			return true
		}
		function checkEmail(){
			var email=$("email").value
			var emailId=$("email_prompt")
			email_prompt.innerHTML=""
			var index=email.indexOf("@",1)
			if(index==-1)
			{
				emailId.innerHTML="没有@"
				return false
			}
			if(email.indexOf(".",index)==-1){
				emailId.innerHTML="没有'.'"
				return false
			}
				emailId.innerHTML="对了"
				return true
			}
			function checkMobile(){
				var mobile=$("mobile").value
				var mobileId=$("mobile_prompt")
				mobileId.innerHTML=""
				if(mobile.charAt(0)!=1)
				{
					mobileId.innerHTML="第一位应为1"
					return false
				}
				if(mobile.length<11){
					mobileId.innerHTML="长度应为11位"
					return false
				}
				for(var i=0;i<11;i++){
					if(isNaN(mobile.charAt(i))){
						mobileId.innerHTML="不能有非数字"
						return false
					}
				}
					mobileId.innerHTML="对了"
					return true
				}