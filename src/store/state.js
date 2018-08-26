let defaultCity ='武安'
try{
	if(localStorage.city){
		defaultCity = localStorage.city
	}
} catch (e) {
}

export  default {
	city:defaultCity
}
