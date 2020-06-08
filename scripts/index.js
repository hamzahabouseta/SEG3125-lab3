var products = [
	{
		name: "Banana",
        vegetarian: true,
		glutenFree: true,
        organic: false,
        vegetable:false,
        fruit:true,
		condiments:false,
        price: 1.99,
        //img from https://i7.pngguru.com/preview/947/615/656/banana-food-fruit-clip-art-bananas-png-clipart-image.jpg
        img: "./img/banana.png",
        dairy:false,
        cookingProducts:false,
        beverages:false
	},
	{
		name: "Salt",
		vegetarian: true,
		glutenFree: true,
        organic: false,
        vegetable:false,
        fruit:false,
		condiments:true,
        price: 2.50,
        //img from https://dtgxwmigmg3gc.cloudfront.net/imagery/assets/derivations/icon/512/512/true/eyJpZCI6IjY0Njk3NTRjNzA5OGEwMmU5OGU4OWIzNGI4Mzg3NjU5Iiwic3RvcmFnZSI6InB1YmxpY19zdG9yZSJ9?signature=82b4115fa6226f6b993b98f4cf488d536314180fc382714faa8a5cb32963fee1
        img: "./img/salt.png",
        dairy:false,
        cookingProducts:true,
        beverages:false
	},
	{
		name: "Apple",
		vegetarian: true,
		glutenFree: true,
        organic: false,
        vegetable:false,
        fruit:true,
		condiments:false,
        price: 3.00,
        //img from https://lh3.googleusercontent.com/proxy/vRkS480YWTEDaYCiRMZKeziKu5KMNClxSJeNYvZ1ikB6c1Cj3Srx5bvfKSUO7uv6TnAWIWX2UF0MCHVHht2OkhvlYW4O3-lJ_GvTwX8JovjwzIelv3VuOeJcF513
        img: "./img/apple.png",
        dairy:false,
        cookingProducts:false,
        beverages:false
	},
	{
		name: "Peach",
		vegetarian: true,
		glutenFree: true,
        organic: true,
        vegetable:false,
        fruit:false,
		condiments:false,
        price: 3.99,
        //img from https://pluspng.com/img-png/peach-png-transparent-peach-png-image-41707-599.png
        img: "./img/peach.png",
        dairy:false,
        cookingProducts:false,
        beverages:false
	},
	{
		name: "Bread",
		vegetarian: false,
		glutenFree: false,
        organic: false,
        vegetable:false,
        fruit:false,
		condiments:false,
        price: 2.99,
        //img-from https://toppng.com/uploads/preview/bread-png-11553940616svvqb1ptly.png
        img: "./img/bread.png",
        dairy:false,
        cookingProducts:false,
        beverages:false
	},
	{
		name: "Chicken Nuggets",
		vegetarian: false,
		glutenFree: false,
        organic: false,
        vegetable:false,
        fruit:false,
		condiments:false,
        price: 6.99,
        //img from https://dylzm7u8zqclv.cloudfront.net/2019/03/24/23/21/23/20959a35-7bdb-4984-8da1-8a11072e098a/555.png
        img: "./img/nuggets.png",
        dairy:false,
        cookingProducts:false,
        beverages:false
	},
	{
		name: "Apple juice",
		vegetarian: true,
		glutenFree: true,
        organic: true,
        vegetable:false,
		fruit:false,
		condiments:false,
        price: 1.99,
        //img from https://toppng.com/uploads/preview/minute-maid-apple-juice-11563194190k9i1yo3kuf.png
        img: "./img/applejuice.png",
        dairy:false,
        cookingProducts:false,
        beverages:true
	},
	{
		name: "Eggplant",
		vegetarian: true,
		glutenFree: true,
        organic: true,
        vegetable:true,
		fruit:false,
		condiments:false,
        price: 2.50,
        //img from https://www.pngfind.com/pngs/m/28-285465_eggplant-png-picture-aubergine-in-english-transparent-png.png
        img: "./img/eggplant.png",
        dairy:false,
        cookingProducts:false,
        beverages:false
	},
	{
		name: "Potatoes",
		vegetarian: true,
        glutenFree: true,
        vegetable:true,
        fruit:false,
        organic: false,
		condiments:false,
        price: 4.80,
        //img from https://lh3.googleusercontent.com/proxy/8dD4VlAfSpYbHyfyf2_D7rLh-Qx2Zl-08s55vQOlzFTozey2Ef2UqfYP9SHa4iPV-scFL9MBl7v7epIJx_KXaGtOj_cvwuQrTjktU8GEnXrdwUpnmAUWCPFs1Gnt7PkgduCE6EI
        img: "./img/potatoe.png",
        dairy:false,
        cookingProducts:false,
        beverages:false
        
	},
	{
		name: "Ketchup",
		vegetarian: true,
        glutenFree: true,
        vegetable:false,
        fruit:false,
        organic: false,
        price: 2.50,
        //img from https://www.clipartmax.com/png/middle/100-1007409_ketchup-png-file-heinz-ketchup-38-oz.png
        img: "./img/ketchup.png",
        dairy:false,
		cookingProducts:false,
		condiments:true,
        beverages:false
    },
    {
		name: "Mustard",
		vegetarian: true,
        glutenFree: true,
        vegetable:false,
        fruit:false,
        organic: false,
		condiments:true,
        price: 1.95,
        //img from https://www.pikpng.com/pngl/m/187-1875616_yellow-mustard-heinz-yellow-mustard-clipart.png
        img: "./img/mustard.png",
        dairy:false,
        cookingProducts:false,
        beverages:false
    },
    {
		name: "Milk",
		vegetarian: false,
        glutenFree: true,
        vegetable:false,
        fruit:false,
        organic: false,
		condiments:false,
        price: 4.20,
        //img from https://lh3.googleusercontent.com/proxy/Rqp2FC7S0pt0NJ4iG6qVZGZbA2IbVl8K3Ym2dE6qikXFS6QU8zfhFAN1GutclksFyN9el9TQpeKyEBqxsBwHPvSRScmkyV7jM3_vVviMHG0DxNrNKL9o-OCEqqZIF8t3HGra-LR5vTd8Zufrmg2_CBiIHg
        img: "./img/milk.png",
        dairy:true,
        cookingProducts:false,
        beverages:true
    },
    {
		name: "Cheese Strings",
		vegetarian: false,
        glutenFree: true,
        vegetable:false,
        fruit:false,
		organic: false,
		condiments:false,
        price: 2.50,
        //img from https://blackdiamond.ca/wp-content/uploads/2019/06/Cheestrings_16_PACKS_MARBLE.png
        img: "./img/cheese.png",
        dairy:true,
        cookingProducts:false,
        beverages:false
	},
];



//this code is inspired by https://www.javascripttutorial.net/javascript-dom/javascript-checkbox/
function getSelectedCheckboxValues(name) {
    const checkboxes = document.querySelectorAll(`input[name="${name}"]:checked`);
    let values = [];
    checkboxes.forEach((checkbox) => {
        values.push(checkbox.value);
    });
    return values;
}

const searchBtn = document.querySelector('#search');
searchBtn.addEventListener('click', (event) => {
    listDiv = document.getElementById("productChoices");
    listDiv.innerHTML = "";
    let preferences = getSelectedCheckboxValues('preference');
    let categories = getSelectedCheckboxValues('categorization');
    let productList = getProducts(preferences, categories);
    populateListProduct(productList);
});

const addToCartBtn = document.querySelector('#addCart');
addToCartBtn.addEventListener('click', (event) => { //["Broccoli", "Milk", "Peaches"]
    listDiv = document.getElementById("cart");
    listDiv.innerHTML = "";
    let productsToCartNames = getSelectedCheckboxValues('product');
    let productsToCart = getCartItems(productsToCartNames);
    // console.log(productsToCart);
    let cart = populateCart(productsToCart);
});

function getCartItems(productsToCart){
    let listOfProducts = [] 
    for(product in products){
        let name = products[product].name
        if(productsToCart.indexOf(name) >= 0){
            listOfProducts.push(products[product]);
        }
    }
    return listOfProducts;
}

function populateCart(productList){
    productList.sort((a, b) => (a.price > b.price) ? 1 : -1)
    var listDiv = document.getElementById("cart");
    let totalPrice = 0
    for(product in productList){
        let productName = productList[product].name;
        let productPrice = productList[product].price;
        totalPrice += productPrice;

        let label = document.createElement('label')
		label.htmlFor = productName;
		label.appendChild(document.createTextNode(productName));
        listDiv.appendChild(label);
        
        listDiv.appendChild(document.createElement("br"));
    }
    let priceLabel = document.createElement('p')
    priceLabel.innerHTML = "Total Price: $" + totalPrice

    listDiv.appendChild(priceLabel);
}

function populateListProduct(productList){
    productList.sort((a, b) => (a.price > b.price) ? 1 : -1)
    var listDiv = document.getElementById("productChoices");
    for(product in productList){
        let productName = productList[product].name;
        let productPrice = productList[product].price;
        let productImg = productList[product].img;

        let checkbox = document.createElement("input");
		checkbox.type = "checkbox";
		checkbox.name = "product"; 
        checkbox.value = productName;
        listDiv.appendChild(checkbox)

        let img = document.createElement("img");
        img.src = productImg;
        img.width = 100;
        img.height = 100;
        listDiv.appendChild(img);

        let label = document.createElement('label')
        label.htmlFor = productName;
		label.appendChild(document.createTextNode(productName  + ": $" + productPrice));
        listDiv.appendChild(label);
        
        listDiv.appendChild(document.createElement("br"));
        listDiv.appendChild(document.createElement("br"));
    }
}




function getProducts(preferences, categories) { 
    let productsList = []

    for(product in products){
        let toAdd = true;
        if(categories[0] == "noAdditional"){
           toAdd = true;
        }else{
            if(products[product][categories[0]] == true){
                toAdd = true;
            }else{
                toAdd = false
            }
        }
        for(preference in preferences){     
            if(products[product][preferences[preference]] == false){
                toAdd = false
            }     
        }
        if(toAdd){
            productsList.push(products[product])
        }
    }
    return productsList;
};