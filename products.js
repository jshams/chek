const ITEMS = document.getElementById("items")
const DATA = [{ 'imgs': ['items/item1/img1.png', 'items/item1/img2.jpg', 'items/item1/img3.jpg', 'items/item1/img4.jpeg', 'items/item1/img5.jpg'], 'Name': ' Disposable 3 Ply Surgical Mask', 'descriptions': ['Pieces per box: 50', 'Boxes per carton: 40', 'Masks per carton: 2000'] }, { 'imgs': ['items/item2/img1.jpeg', 'items/item2/img2.jpg', 'items/item2/img3.jpeg', 'items/item2/img4.png', 'items/item2/img5.jpeg'], 'Name': ' Face Shields', 'descriptions': ['Pieces per box: Each face shield in own individual poly bag', 'Bags per carton: 200', 'Face shields per carton: 200'] }, { 'imgs': ['items/item3/img1.jpg', 'items/item3/img2.jpg', 'items/item3/img3.jpg', 'items/item3/img4.jpg', 'items/item3/img5.jpg', 'items/item3/img6.jpg'], 'Name': ' KN95 Face Mask', 'descriptions': ['Pieces per box: 10', 'Boxes per carton: 200', 'Masks per carton: 2000', ''] }, { 'imgs': ['items/item4/img1.jpg', 'items/item4/img2.jpeg', 'items/item4/img3.jpeg', 'items/item4/img4.jpeg', 'items/item4/img5.jpg'], 'Name': ' Protection Gowns', 'descriptions': ['Pieces per box: Each protective gown is in its own individual poly bag', 'Bags per carton: 50', 'Gowns per carton: 50', ''] }, { 'imgs': ['items/item5/img1.jpeg', 'items/item5/img2.jpeg', 'items/item5/img3.jpeg'], 'Name': ' Thermometer', 'descriptions': ['Pieces per Box: Each thermometer in own individual box', 'Boxes per carton: 60', 'Thermometers per carton: 60', ''] }, { 'imgs': ['items/item6/img1.jpg', 'items/item6/img2.jpg', 'items/item6/img3.jpeg', 'items/item6/img4.jpeg'], 'Name': ' Protection Goggles', 'descriptions': ['Pieces per box: Each pair of goggles is in its own individual poly bag', 'Bags per carton: 200', 'Goggles per carton: 200', ''] }, { 'imgs': ['items/item7/img1.jpg', 'items/item7/img2.jpg', 'items/item7/img3.jpeg', 'items/item7/img4.jpg'], 'Name': ' Protective gloves', 'descriptions': ['Pieces per box: 100 gloves per box', 'Boxes per carton: 10', 'Gloves per carton: 1000', ''] }]

var isMobile = false; //initiate as false
// device detection
if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) {
    isMobile = true;
}

if (isMobile) {
    const body = document.getElementsByTagName("BODY")[0]
    body.style.fontSize = "8px"
    ITEMS.style.display = "block"
}

class Item {
    constructor(name, imageAddresses, descriptions) {
        this.name = name
        this.imageAddresses = imageAddresses
        this.descriptions = descriptions
        this.images = []
        this.imageShow = 0
        // create a container to store this item
        this.itemContainer = document.createElement("DIV");
        // create a container for images and buttons
        this.imageBtnContainer = document.createElement("DIV")
        this.imageBtnContainer.classList.add("imgs-btns")
        // create a container to store the images and buttons
        this.imageContainer = document.createElement("DIV")
        this.imageContainer.classList.add("images")
        this.itemContainer.appendChild(this.imageBtnContainer)
        this.addLeftButton()
        this.addImages()
        this.addRightButton()
        this.addName()
        this.addDescriptions()
        this.addBuyBtn()
        // add item classname to item container
        this.itemContainer.classList.add("item")
        // add the item container to items container
        ITEMS.appendChild(this.itemContainer)
    }

    addName() {
        // create an h2 title element with classname item-title
        const titleEl = document.createElement("H2")
        titleEl.innerHTML = this.name
        titleEl.classList.add("item-title")
        // put the h2 element in the item container
        this.itemContainer.appendChild(titleEl)
    }

    addImage(photoNum, imgSrc) {
        // create image element with src and class
        const imgEl = document.createElement("IMG")
        imgEl.src = imgSrc
        imgEl.classList.add("image")
        // if not the first image hide it
        if (photoNum != 0) {
            imgEl.classList.add("hide")
        }
        this.images.push(imgEl)
        this.imageContainer.appendChild(imgEl)
    }

    addImages() {
        for (let i = 0; i < this.imageAddresses.length; i++) {
            this.addImage(i, this.imageAddresses[i])
        }
        // put the image element in the item container
        this.imageBtnContainer.appendChild(this.imageContainer)
    }

    nextImg(reverse = false) {
        this.images[this.imageShow].classList.add("hide")
        if (!reverse) {
            this.imageShow += 1
            this.imageShow %= this.images.length
        }
        else {
            this.imageShow -= 1
            if (this.imageShow == -1) {
                this.imageShow = this.images.length - 1
            }
        }
        this.images[this.imageShow].classList.remove("hide")
    }

    addDescriptions() {
        // create a container to store descriptions
        const descriptionsContainer = document.createElement("DIV")
        descriptionsContainer.classList.add("descriptions")

        // add all descriptions to this container as p elements
        for (let i = 0; i < this.descriptions.length; i++) {
            const descEl = document.createElement("P")
            descEl.innerHTML = this.descriptions[i]
            descEl.classList.add("description")
            descriptionsContainer.appendChild(descEl)
        }
        // add all the descriptions in the item container
        this.itemContainer.appendChild(descriptionsContainer)
    }

    addLeftButton() {
        const leftBtn = document.createElement("BUTTON")
        leftBtn.innerHTML = "<"
        leftBtn.classList.add("left-btn")
        leftBtn.onclick = () => (this.nextImg(true))
        this.imageBtnContainer.appendChild(leftBtn)
    }

    addRightButton() {
        const rightBtn = document.createElement("BUTTON")
        rightBtn.innerHTML = ">"
        rightBtn.classList.add("right-btn")
        rightBtn.onclick = () => (this.nextImg())
        this.imageBtnContainer.appendChild(rightBtn)
    }

    addBuyBtn() {
        const buyBtn = document.createElement("A")
        buyBtn.innerHTML = "contact"
        buyBtn.href = "mailto:email@email.com"
        buyBtn.classList.add("buy-btn")
        this.itemContainer.appendChild(buyBtn)
    }
}

let itemsArr = []

const createItems = () => {
    for (let i = 0; i < DATA.length; i++) {
        const currentItem = DATA[i]
        const name = currentItem.Name
        const imageAddresses = currentItem.imgs
        const descriptions = currentItem.descriptions
        const item = new Item(name, imageAddresses, descriptions)
        itemsArr.push(item)
    }
}

const addIdsToItems = () => {
    for (let i = 0; i < itemsArr.length; i++) {
        itemsArr[i].itemContainer.id = "item" + i.toString()
    }
}

createItems()
addIdsToItems()

if (isMobile) {
    const imgElems = document.getElementsByClassName("images")
    for (let i = 0; i < imgElems.length; i++) {
        imgElems[i].style.height = "150px"
    }
    const itemElems = document.getElementsByClassName("item")
    for (let i = 0; i < itemElems.length; i++) {
        itemElems[i].style.width = "80%"
        itemElems[i].style.padding = "5%"
        itemElems[i].style.marginLeft = "5%"
    }

    // make the back button smaller
    // const backBtn = document.getElementById("back")
    // backBtn.style.width = "70px"
    // // backBtn.style.width = "0px;"
    // backBtn.style.padding = "6px"
    // backBtn.style.height = "20px"
}