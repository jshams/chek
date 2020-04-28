const navbar = document.createElement("DIV")
navbar.classList.add("navbars")

addNavItem = (itemName, href) => {
    const navItem = document.createElement("A")
    navItem.innerHTML = itemName
    navItem.href = href
    navItem.classList.add("nav-item")
    navbar.appendChild(navItem)
}

const items = ["Home", "Contact", "Shipping info"]
const hrefs = ["index.html", "contact.html", "shipping.html"]

if (isMobile) {
    items[2] = "Shipping"
}

for (let i = 0; i < items.length; i++) {
    addNavItem(items[i], hrefs[i])
}

document.body.appendChild(navbar)

const products = ["All Products", "Surgical Mask", "Face Shield", "KN95 Mask", "Protection Gown", "Thermometer", "Goggles", "Gloves"]
const productHrefs = ["products.html", "products.html#item0", "products.html#item1", "products.html#item2", "products.html#item3", "products.html#item4", "products.html#item5", "products.html#item6"]

const dropdown = document.createElement("DIV")
dropdown.onclick = () => { clickDropdown() }
navbar.appendChild(dropdown)
dropdown.classList.add("nav-item")
const dropdownItems = document.createElement("DIV")
dropdownItems.classList.add("dropdown-items")


const createDropdown = () => {
    const dropdownLink = document.createElement("A")
    dropdownLink.innerHTML = "Products"
    dropdownLink.classList.add("dropdown-link")
    dropdown.appendChild(dropdownLink)
    createDropdownItems()
}

const createDropdownItems = () => {
    for (let i = 0; i < products.length; i++) {
        const dropdownItem = document.createElement("A")
        dropdownItem.classList.add("dropdown-item")
        dropdownItem.innerHTML = products[i]
        dropdownItem.href = productHrefs[i]
        dropdownItems.appendChild(dropdownItem)
    }
}


function clickDropdown() {
    if (dropdownItems.style.display == 'none') {
        openDropdown()
    }
    else {
        closeDropdown()
    }
}

function openDropdown() {
    dropdownItems.style.display = 'flex'
    dropdownItems.style.marginBottom = '0px'
}

function closeDropdown() {
    dropdownItems.style.display = 'none'
    dropdownItems.style.marginBottom = '-80px'
}
closeDropdown()
createDropdown()
dropdown.appendChild(dropdownItems)

if (isMobile) {
    const navItems = document.getElementsByClassName("nav-item")
    for (let i = 0; i < navItems.length; i++) {
        navItems[i].style.height = "34px"
        navItems[i].style.fontSize = "12px"
        navItems[i].style.paddingTop = "8px"

    }
}