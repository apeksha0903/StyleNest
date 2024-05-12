// let item={
//     item_image: 'images/1.jpg',
//     rating:{
//         stars: 4.5,
//         views: 1400,
//     },
//     company_name: " Carlton London",
//     item_name:"Rhodium-Plated cz Floral studs",
//     current_price: 606,
//     original_price: 1045,
//     discount: 42,
// }
function displayItemsOnHomePage()
{
    let itemsContainerElement=document.querySelector('.items-container');
    if(!itemsContainerElement)
        return;
    let innerHtml='';
items.forEach(item => {
    innerHtml+=` <div class="item-container">
    <img  class="item-image" src="${item.image}"alt="item image">
    <div class="rating">
        ${item.rating.stars} ⭐| ${item.rating.count}
    </div>
    <div class="company-name">
       ${item.company}
    </div>
    <div class="item-name">${item.item_name}</div>
    <div class="price">
        <span class="current-price">Rs ${item.current_price}</span>
        <span class="original-price">Rs ${item.original_price}</span>
        <span class="discount">(${item. discount_percentage}% off)</span>
    </div>
    <button class="add-to-bag" onclick="addToBag(${item.id})">Add to bag</button>

</div>`
});
itemsContainerElement.innerHTML=innerHtml;
}

let bag;
let bagItemstr= localStorage.getItem('bag');
bag =bagItemstr? JSON.parse(bagItemstr):[];
displayItemsOnHomePage();
displaybagIcon();
function addToBag(itemId)
{
    bag.push(itemId);
    localStorage.setItem('bag',JSON.stringify(bag));
    displaybagIcon();
}
function displaybagIcon()
{
    let itemsBag= document.querySelector('.item-bag-count');
    if(bag.length>0)
    {
        itemsBag.style.visibility='visible';
        itemsBag.innerHTML=bag.length;
    }
    else
    {
        itemsBag.style.visibility='hidden';
    }
    
}