module.exports=function(link){

	if (link===undefined){
		console.log('--form parameter empty');
		process.exit(1);
	}
	console.log('Converting: '+ link);
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
			console.log('It doesn\'t looks as a google form URL or id');
			process.exit(1);
		}else{
			return `https://docs.google.com/forms/d/e/${link}/viewform`;
		}
	}
};
