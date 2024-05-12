let bagItemObjects;
function onLoad()
{
    loadBag();
    displayBagItems();
    displayBagSummary();
}
onLoad();

function displayBagSummary()
{
    let bagSummaryElement= document.querySelector('.bag-summary');
    let totalItems=bagItemObjects.length;
    let totalMRP=0;
    let totaldiscount=0;
    let finalPayment=0;

    bagItemObjects.forEach(bagItem=>{
        totalMRP+=bagItem.original_price;
        totaldiscount+=bagItem.original_price-bagItem.current_price;
    })
    finalPayment=totalMRP-totaldiscount+99;
    bagSummaryElement.innerHTML=`
        <div class="bag-details-container">
        <div class="price-header">PRICE DETAILS (${totalItems} Items) </div>
        <div class="price-item">
        <span class="price-item-tag">Total MRP</span>
        <span class="price-item-value">₹ ${totalMRP}</span>
        </div>
        <div class="price-item">
        <span class="price-item-tag">Discount on MRP</span>
        <span class="price-item-value priceDetail-base-discount">-₹ ${totaldiscount}</span>
        </div>
        <div class="price-item">
        <span class="price-item-tag">Convenience Fee</span>
        <span class="price-item-value">₹ 99</span>
        </div>
        <hr>
        <div class="price-footer">
        <span class="price-item-tag">Total Amount</span>
        <span class="price-item-value">₹ ${finalPayment}</span>
        </div>
    </div>
    <button class="btn-place-order" onclick="alert('Order Placed');">
        <div class="css-xjhrni">PLACE ORDER</div>
    </button>`
}
function loadBag()
{
    console.log(bag);
    bagItemObjects=bag.map(itemId=>{
        for (let i=0;i<items.length;i++)
        {
            if(itemId == items[i].id)
            {
                return items[i];
            }
        }
    });
    console.log(bagItemObjects);
}
function displayBagItems()
{
    let innerHtml='';
    let containerElement= document.querySelector('.bag-items-container');
    bagItemObjects.forEach(bag => {
        innerHtml+=generateItemHTML(bag);
    });
    containerElement.innerHTML=innerHtml;
}
function generateItemHTML(item)
{
    return `  <div class="bag-item-container">
    <div class="item-left-part">
      <img class="bag-item-img" src="../${item.image}">
    </div>
    <div class="item-right-part">
      <div class="company">${item.company}</div>
      <div class="item-name">${item.item_name}</div>
      <div class="price-container">
        <span class="current-price">${item.current_price}</span>
        <span class="original-price">${item.original_price}</span>
        <span class="discount-percentage">(${item.discount_percentage}% OFF)</span>
      </div>
      <div class="return-period">
        <span class="return-period-days">${item.return_period} days</span> return available
      </div>
      <div class="delivery-details">
        Delivery by
        <span class="delivery-details-days">${item.delivery_date}</span>
      </div>
    </div>

    <div class="remove-from-cart" onclick="removefromBag(${item.id})">X</div>
  </div>
    `
}
function removefromBag(itemId){
    bag=bag.filter(bagItemId=> bagItemId!= itemId);
    localStorage.setItem('bag',JSON.stringify(bag));
    loadBag();
    displaybagIcon();
    displayBagItems();
    displayBagSummary();
}
