

let Block = document.querySelector('html');

let BlockHeadFirst = document.querySelector('.Head__banner_all_head');
let headerAll = document.querySelector('.Head');
let menuCatalog = document.querySelectorAll("#menu_catalog");
let menuCatalogItems = document.querySelectorAll("#menu_catalog_items");
let menuLists = document.querySelectorAll('.Head__listHead__menu-items');

menuCatalog[0].addEventListener("click", function(){
	if(menuCatalogItems[0].style.display === ''){
		menuCatalogItems[0].style.display = 'block';

	}else{
		menuCatalogItems[0].style.display = '';
	}
})

menuCatalog[1].addEventListener("click", function(){
	if(menuCatalogItems[1].style.display === ''){
		menuCatalogItems[1].style.display = 'block';
		return
	}else{
		menuCatalogItems[1].style.display = '';
		return
		
	}
})




menuLists.forEach(function(list){
	if(list !== menuLists[0] && list !== menuLists[1]){
		list.addEventListener("click", function(){
			menuCatalogItems[0].style.display='';
			menuCatalogItems[1].style.display='';
		})
	}
	list.addEventListener("click", function(){
		if(list === menuLists[0]){
			menuCatalogItems[1].style.display = '';
			regions.style.display = '';
		}
		if(list === menuLists[1]){
			menuCatalogItems[0].style.display = '';
			regions.style.display = '';
		}else{

		}
	})
})

let regionMenu = document.querySelector("#region_menu");
let regions = document.querySelector("#regions");

regionMenu.addEventListener("click", function(){
	if(regions.style.display === ''){
		regions.style.display = 'block';
		menuCatalogItems[0].style.display = '';
		menuCatalogItems[1].style.display = '';
	}else{
		regions.style.display = '';
	}
})


let regionsMyself = document.querySelectorAll("#region_myself");
regionsMyself.forEach(function(item){
	item.addEventListener("click", function(){
		regionMenu.textContent =item.textContent ;	
		regions.style.display = '';
	})
})

let language = document.querySelector("#language");
let masLang = document.querySelectorAll(".Head__menuHead__menu_language-item");
language.addEventListener("click",function(){
	masLang.forEach(function(item){
		if(item.classList[2] !== 'Head__menuHead__menu_language-disabled'){
			item.classList.add("Head__menuHead__menu_language-disabled")
		}else{
			item.classList.remove("Head__menuHead__menu_language-disabled")
		}
	})
})

let pageCont = document.querySelector('#content');
let pageFot = document.querySelector('#footer');

pageFot.addEventListener('click' , function(){
	menuCatalogItems[1].style.display = '';
	regions.style.display = '';
	menuCatalogItems[0].style.display = '';
})

pageCont.addEventListener('click' , function(){
	menuCatalogItems[1].style.display = '';
	regions.style.display = '';
	menuCatalogItems[0].style.display = '';
})

