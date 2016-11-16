module.exports=function(link){

	if (link===undefined){
		throw "url or Id undefined";
		process.exit(1);
	}
	//console.log('Converting: '+ link);
	//sanitize form
	if (link.includes('docs.google.com/forms')){
		if (link.includes('/viewform')){
			return link;
		}else{
			return `${link}+/viewform`;
		}

	}else{
		if (
			link.includes('http://') ||
			link.includes('https://') ||
			link.includes('.')
		){
			throw "malformed url";
			process.exit(1);
		}else{
			return `https://docs.google.com/forms/d/e/${link}/viewform`;
		}
	}
};
