//读取日记
function getHistory(){
	var length=localStorage.length;
	var table=document.getElementById("history");
	table.innerHTML="";
	for(var i=0;i<length;i++){
		var key=localStorage.key[i];
		var date=new Date();
		date.setTime(key);
		var time=date.toLocaleString();
		var content=localStorage.getItem(key);
		console.log(date);
		var row=table.insertRow(i);
		row.insertCell(0).innerHTML=i+1;
		row.insertCell(1).innerHTML=content;
		row.insertCell(2).innerHTML=time;
		row.insertCell(3).innerHTML='<button onclick="clearOne('+key+')">删除</button>'
	}
}
//保存日记
function save(){
	var content=document.getElementById("note").value;
	//console.log(content);
	var today=new Date();
	var key=today.getTime();
	localStorage.setItem(key,content);
	alert("日记保存成功");
	document.getElementById("note").value="";
	getHistory();
}
function clearAll(){
	localStorage.clear();
	alert("日记已清空");
	getHistory();
}
function clearOne(key){
	localStorage.removeItem(key);
	alert("本条日记删除成功");
	getHistory();
}