let btnToCatalog = document.querySelector(".Head__listHead__menu-items_label");

btnToCatalog.addEventListener('dblclick', function(){
	location.href='../catalog/index.html'
})


let Block = document.querySelector('html');

let bottomLine = document.querySelector('.popularBlock__bottom-line')
let bottomLineActive = document.querySelector('.popularBlock__bottom-line-active')

/*bottomLine.addEventListener('mousemove', function(){
	//bottomLineActive.addEventListener('mouseover', function(){
		let ger = event.clientX;
		
		bottomLineActive.style.marginLeft= ger/20 + '%';
		if(bottomLineActive.style.marginLeft.slice(0,2) < 12  || bottomLineActive.style.marginLeft.slice(0,2) < 13 || bottomLineActive.style.marginLeft.slice(0,2) < 14){
			bottomLineActive.style.marginLeft = '';
		}
	//})
	

	if(ger >= 618){
		bottomLineActive.style.marginLeft= 580+ 'px';
	}
	if(ger <= 265){
		bottomLineActive.style.marginLeft= '';
	}
})*/


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

/*
BlockHeadFirst.addEventListener('click' , function(){
		menuCatalogItems[1].style.display = '';
		regions.style.display = '';
		menuCatalogItems[0].style.display = '';
})*/
	



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

let pageBasketCont = document.querySelector('#content');
let pageBasketFot = document.querySelector('#footer');

pageBasketFot.addEventListener('click' , function(){
	menuCatalogItems[1].style.display = '';
	regions.style.display = '';
	menuCatalogItems[0].style.display = '';
})

pageBasketCont.addEventListener('click' , function(){
	menuCatalogItems[1].style.display = '';
	regions.style.display = '';
	menuCatalogItems[0].style.display = '';
})


/*calculator*/
const checkBox = document.querySelectorAll('.container-content__block-options__property-check-box');
const circleBox = document.querySelectorAll('.container-content__block-options__property-check-box-circle');

for(let i = 0 ; i<checkBox.length ; i++){
	checkBox[i].addEventListener('click', function(){
		if(checkBox[i].style.animation === '' || checkBox[i].style.animation === '0.5s ease 0s 1 normal forwards running disCheck'){
			checkBox[i].style.animation = '0.5s activeCheck forwards';
			circleBox[i].style.animation = '0.5s activeCircle forwards';
		}else{
			checkBox[i].style.animation = '0.5s disCheck forwards';
			circleBox[i].style.animation = '0.5s disCircle forwards';
		}
	})
}

let btnToBasket = document.querySelector('.container-content__block-info__detail__btn');

btnToBasket.addEventListener('click',function(){
	location.href="../pageBasket/Корзина.html"
})