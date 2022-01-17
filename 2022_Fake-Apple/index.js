const appleList = [
    {
        type: 'iPhone',
        name: 'iPhone 12',
        price: 18900,
        mainImg: './img/iphone11-select-2019-family.png',
        colorList: [
            { name: '紅色', color: '#ff0000', img: './img/iphone-red.png' },
            { name: '黃色', color: '#ffff00', img: './img/iphone-yellow.png' },
            { name: '黑色', color: '#000000', img: './img/iphone-black.png' },
        ],
        spec: [
            {
                name: '儲存裝置',
                specDetails: [
                    {
                        name: '64GB',
                        fit: 0
                    },
                    {
                        name: '128GB',
                        fit: 5000
                    },
                ]
            },
            {
                name: '連線能力',
                specDetails: [
                    {
                        name: 'Wi-Fi',
                        fit: 0
                    },
                    {
                        name: 'Wi-Fi + 行動網路',
                        fit: 4300
                    },
                ]
            },
        ]
    },
    {
        type: 'iPhone',
        name: 'iPhone 87',
        price: 18900,
        mainImg: './img/iphone11-select-2019-family.png',
        colorList: [
            { name: '紅色', color: '#ff0000', img: './img/iphone-red.png' },
            { name: '黑色', color: '#000000', img: './img/iphone-black.png' },
        ],
        spec: [
            {
                name: '儲存裝置',
                specDetails: [
                    {
                        name: '64GB',
                        fit: 0
                    },
                    {
                        name: '128GB',
                        fit: 5000
                    },
                ]
            },
            {
                name: '連線能力',
                specDetails: [
                    {
                        name: 'Wi-Fi',
                        fit: 0
                    },
                    {
                        name: 'Wi-Fi + 行動網路',
                        fit: 4300
                    },
                ]
            },
            {
                name: '優饗方案',
                specDetails: [
                    {
                        name: 'Eat',
                        fit: 0
                    },
                    {
                        name: 'Eat + Drink',
                        fit: 4300
                    },
                ]
            },
        ]
    }
]

//DOM
const navbar = document.querySelector('.nav-bar')
const productType = document.querySelector('.product-type')
const priceTop = document.querySelector('.price-top')
const productName = document.querySelector('.product-name')
const productImg = document.querySelector('.product-img')

const colorAreaControlBtn = document.querySelector('[aria-controls="panelsStayOpen-color"]')
const colorArea = document.querySelector('.color-area')

const accordionBox = document.querySelector('.accordion')

//window.onload
window.onload = function() {
    showNavbar()
    selectProduct(appleList[0])
}

//function
function showNavbar() {
    const productList = appleList.map(x => x.name)
    productList.forEach((item, index) => {
        const li = document.createElement('li')

        const a = document.createElement('a')
        a.innerText = item
        a.href = `#${item}`
        a.classList.add('btn', 'btn-dark', 'product')
        a.onclick = function() {
            selectProduct(appleList[index])
        }

        li.appendChild(a)
        navbar.appendChild(li)
    })
}

function selectProduct(product) {
    resetApple()

    productType.innerText = product.type
    productName.innerText = `購買${product.name}`

    productImg.src = product.mainImg

    priceTop.innerText = '$0'

    // color
    product.colorList.forEach((item) => {
        const div = document.createElement('div')
        div.classList.add('col-6', 'mb-3')

        const btn = document.createElement('button')
        btn.classList.add('btn', 'color-btn', 'w-100')
        btn.setAttribute('selected', 'false')
        btn.onclick = function() {
            colorArea.querySelectorAll('.btn').forEach(b => {
                b.setAttribute('selected', 'false')
            })
            btn.setAttribute('selected', 'true')
            productImg.src = item.img
            colorAreaControlBtn.innerText = item.name
            colorAreaControlBtn.click()
        }

        const btnDiv = document.createElement('div')
        btnDiv.classList.add('py-4', 'd-flex', 'flex-column', 'justify-content-center', 'align-items-center')

        const i = document.createElement('i')
        i.classList.add('fas', 'fa-circle')
        i.style.color = item.color
        const span = document.createElement('span')
        span.classList.add('color-name')
        span.innerText = item.name

        btnDiv.appendChild(i)
        btnDiv.appendChild(span)
        btn.appendChild(btnDiv)
        div.appendChild(btn)
        colorArea.appendChild(div)
    })
    
    //spec
    product.spec.forEach((item) => {
        const accordionItem = document.createElement('div')
        accordionItem.classList.add('accordion-item')

        const accordionTitle = document.createElement('h2')
        accordionTitle.classList.add('accordion-header')
        const accordionBtn = document.createElement('button')
        accordionBtn.innerText = `{{${item.name}}}`
        accordionBtn.classList.add('accordion-button')
        accordionBtn.setAttribute('type', 'button')
        accordionBtn.setAttribute('data-bs-toggle', 'collapse')
        accordionBtn.setAttribute('data-bs-target', `#panelsStayOpen-${item.name}`)
        accordionBtn.setAttribute('aria-expanded', 'true')
        accordionBtn.setAttribute('aria-controls', `#panelsStayOpen-${item.name}`)

        accordionTitle.appendChild(accordionBtn)

        const accordionContent = document.createElement('div')
        accordionContent.setAttribute('id', `panelsStayOpen-${item.name}`)
        accordionContent.classList.add('accordion-collapse', 'collapse', 'show')

        const accordionBody = document.createElement('div')
        accordionBody.classList.add('accordion-body')
        
        const h5 = document.createElement('h5')
        const strong = document.createElement('strong')
        strong.innerText = item.name

        h5.appendChild(strong)

        const specDiv = document.createElement('div')
        specDiv.classList.add('row')

        item.specDetails.forEach((specItem) => {
            const div = document.createElement('div')
            div.classList.add('col-6', 'mb-3')
    
            const btn = document.createElement('button')
            btn.classList.add('btn', 'color-btn', 'w-100')
            btn.setAttribute('selected', 'false')
            btn.setAttribute('fit', specItem.fit)
            btn.onclick = function() {
                //console.log(specItem.name)
                specDiv.querySelectorAll('.btn').forEach(b => {
                    b.setAttribute('selected', 'false')
                })
                btn.setAttribute('selected', 'true')
                specDiv.setAttribute('use-fit', specItem.fit)
                showPrice(product)
                accordionBtn.innerText = specItem.name
                accordionBtn.click()
            }
    
            const btnDiv = document.createElement('div')
            btnDiv.classList.add('py-4', 'd-flex', 'flex-column', 'justify-content-center', 'align-items-center')
    
            const p = document.createElement('p')
            p.classList.add('spec-val', 'm-0')
            p.innerText = specItem.name
            const span = document.createElement('span')
            span.classList.add('fit')
            span.innerText = `NT$${product.price + specItem.fit}起`

            btnDiv.appendChild(p)
            btnDiv.appendChild(span)
            btn.appendChild(btnDiv)
            div.appendChild(btn)
            specDiv.appendChild(div)
        })

        accordionBody.appendChild(h5)
        accordionBody.appendChild(specDiv)

        accordionContent.appendChild(accordionBody)

        accordionItem.appendChild(accordionTitle)
        accordionItem.appendChild(accordionContent)

        accordionBox.appendChild(accordionItem)
    })
}

function showPrice(product) {
    const selectedFits = Array.from(document.querySelectorAll('[fit][selected="true"]'))
    const money = selectedFits.length > 0 ? selectedFits.map(x => parseInt(x.getAttributeNode('fit').value)).reduce((a, b) => a + b) : 0

    showPriceTags(money, product)

    priceTop.innerText = `$${product.price + money}`
}

function showPriceTags(money ,product) {
    const priceTags = document.querySelectorAll('[fit]')
    priceTags.forEach(tag => {
        const fit = parseInt(tag.getAttributeNode('fit').value)
        if (tag.parentNode.parentNode.getAttributeNode('use-fit') != null) {
            const useFit = parseInt(tag.parentNode.parentNode.getAttributeNode('use-fit').value)
            if (fit <= useFit) {
                tag.querySelector('span').innerText = `NT$${product.price + money + fit - useFit}起`
            } else {
                tag.querySelector('span').innerText = `NT$${product.price + money + fit}起`
            }
        } else {
            tag.querySelector('span').innerText = `NT$${product.price + money + fit}起`
        }
    })
}

function resetApple() {
    colorArea.innerHTML = ''

    const removeItem = accordionBox.querySelectorAll('.accordion-item')
    console.log(removeItem)
    if(removeItem.length > 1) {
        for(let i = 1; i < removeItem.length; i++) { 
            accordionBox.removeChild(accordionBox.children[1])
        }
    }
}