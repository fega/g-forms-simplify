/**
 * It's check if "link param" is a complete google drive form url or ID
 * @param  {formUrl-ID} link formUrl or ID
 * @return {formUrl}      formUrl
 */
module.exports=function(link){

	if (link==false){
		throw "url or Id undefined";
	}
	
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
			link.includes('.') ||
			link.includes('/')
		){
			throw "malformed url";
		}else{
			return `https://docs.google.com/forms/d/e/${link}/viewform`;
		}
	}
};
