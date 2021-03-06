// function Loadjson(file,callback)
// {
// 	var xhr = new XMLHttpRequest();
// 	xhr.overrideMimeType("application/json")
// 	xhr.open("GET",file,true);
// 	xhr.onreadystatechange = function()
// 	{
// 		if(xhr.readyState === 4 && xhr.status == "200")
// 		{
// 			callback(xhr.responseText);
// 		}
// 	};
//   xhr.send(null);
//  }
//  Loadjson("data.json",function(text){
//  	var data = JSON.parse(text);
//     	console.log(data);
//     	basics(data.details);
//     	careerinfo(data.career);
//     	education(data.education); 
//     	skillset(data.skills);
//     	achievement(data.achievements);
//     	 })
function loadjson(file){
	return new Promise((resolve,reject)=>{
		return fetch(file).then(response=>{
			if(response.ok){
				resolve(response.json());
			}
			else
			{
				reject(new Error('error'));
			}

		})
	})
}
var newfile=loadjson("data.json");
newfile.then(data=>{
     	console.log(data);
     	basics(data.details);
     	careerinfo(data.career);
    	education(data.education); 
     	skillset(data.skills);
		achievements(data.achievements);	
})
var left = document.querySelector(".left")
 function basics(det)
 {
 		var img = document.createElement("img")
 		img.src = det.image;
 		left.appendChild(img);
 		var name1 = document.createElement("h3")
 		name1.textContent = det.name;
 		left.appendChild(name1);
 		var phoneno = document.createElement("h3")
 		phoneno.textContent = det.phoneno;
 		left.appendChild(phoneno);
 		var emailid = document.createElement("a")
 		emailid.href = "mailto:pavithra30061998@gmail.com";
 		emailid.textContent = det.emailid;
 		left.appendChild(emailid);
 		var address = document.createElement("h2")
 		address.textContent = "Address";
 		left.appendChild(address);
 		var hrz = document.createElement("hr");
 		left.appendChild(hrz);
 		var addressdetails = document.createElement("h3")
 		addressdetails.textContent = det.address;
 		left.appendChild(addressdetails);
 }
 var right = document.querySelector(".right");
 function careerinfo (ca)
 {
 		    var career = document.createElement("p");
 		 	career.textContent = "careerobject";
 		 	right.appendChild(career);
 		 	var hr = document.createElement("hr");
 		 	right.appendChild(hr);
 		 	var career1 = document.createElement("p")
 		 	career1.textContent = ca.info;
 		 	right.appendChild(career1);
 }
 function education(edu)
 {
 	var ed = document.createElement("h1");
 	ed.textContent = "education qualification";
 	right.appendChild(ed);
 	var hr = document.createElement("hr");
 	right.appendChild(hr);
 	var table1 = document.createElement("table");
 	table1.border="1";
 	right.appendChild(table1);
 	tabledata="";
 	for(i=0;i<edu.length;i++){
 		tabledata+="<tr><td>"+edu[i].qualification+"</td><td>"+edu[i].institute+"</td><td>"+edu[i].year+"</td><td>"+edu[i].percentage+"</td></tr>";
 		}
 		table1.innerHTML=tabledata;
 }
function skillset(skill)
{
	var sk = document.createElement("h1");
	sk.textContent = "technical skills";
	right.appendChild(sk);
	var hr = document.createElement("hr");
	right.appendChild(hr);
	for(i=0;i<skill.length;i++){
		var s = document.createElement("h3");
		s.textContent = skill[i].title;
		right.appendChild(s);
		var ul = document.createElement("ul");
		var li = document.createElement("li");
		li.textContent = skill[i].info;
		ul.appendChild(li);
		right.appendChild(ul);
	}
}
	function achievements(achi){
	var ac = document.createElement("h3");
	ac.textContent = "achievements";
	right.appendChild(ac);
	var hr = document.createElement("hr");
	right.appendChild(hr);
	for(i=0;i<achi.length;i++){
		var sa =document.createElement("h3");
		sa.textContent=achi[i].title;
		right.appendChild(sa);
		var d=document.createElement("ul");
		var l=document.createElement("li");
		l.textContent=achi[i].information;
		d.appendChild(l)
		right.appendChild(l);
	}
}
function openpage(){
	window.open("resume1.html","_self",true)
}
		

