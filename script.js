// ========== Shared JavaScript Features ==========

// 1. Shopping Cart Management
let cartCount = 0
const cartItems = []

function addToCart(productId, productName, price) {
  cartCount++
  cartItems.push({ id: productId, name: productName, price: price })
  updateCartCount()

  // Animate the cart button
  const cartBtn = document.querySelector(".cart-btn")
  cartBtn.style.transform = "scale(1.2)"
  setTimeout(() => {
    cartBtn.style.transform = "scale(1)"
  }, 300)

  showNotification(`${productName} added to cart!`)
}

function updateCartCount() {
  const cartCountElement = document.querySelector(".cart-count")
  if (cartCountElement) {
    cartCountElement.textContent = cartCount
  }
}

function showCartNotification() {
  if (cartCount === 0) {
    alert("Your cart is empty. Start shopping!")
  } else {
    alert(
      `You have ${cartCount} items in your cart.\n\nItems:\n${cartItems.map((item) => `- ${item.name}: $${item.price}`).join("\n")}\n\nTotal: $${cartItems.reduce((sum, item) => sum + item.price, 0).toLocaleString()}`,
    )
  }
}

// 2. Notification System
function showNotification(message) {
  const notification = document.createElement("div")
  notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background-color: #1a1a1a;
        color: #f5f5f5;
        padding: 15px 25px;
        border-radius: 4px;
        font-size: 14px;
        z-index: 1000;
        animation: slideIn 0.3s ease-out;
        box-shadow: 0 10px 30px rgba(0,0,0,0.3);
    `
  notification.textContent = message
  document.body.appendChild(notification)

  setTimeout(() => {
    notification.style.animation = "slideOut 0.3s ease-out"
    setTimeout(() => notification.remove(), 300)
  }, 3000)
}

// 3. Social Media Click Handler
function handleSocialClick(event) {
  event.preventDefault()
  const platform = event.target.textContent
  showNotification(`Following ÉCLAT COUTURE on ${platform}!`)
}

// 4. Smooth Scroll to Section
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId)
  if (section) {
    section.scrollIntoView({ behavior: "smooth" })
  }
}

// 5. Initialize animations on page load
document.addEventListener("DOMContentLoaded", () => {
  // Add fade-in animation to elements
  const elements = document.querySelectorAll('[class*="section"], [class*="card"], .header')
  elements.forEach((element, index) => {
    element.style.opacity = "0"
    element.style.animation = `fadeIn 0.6s ease-out ${index * 0.1}s forwards`
  })
})

// 6. Keyboard Navigation
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    // Close any open modals or notifications if needed
    console.log("Escape key pressed")
  }
})

// CSS Animations (added dynamically)
const style = document.createElement("style")
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
    
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`
document.head.appendChild(style)

console.log(
  "%c✨ ÉCLAT COUTURE - Website Loaded Successfully ✨",
  "color: #d4af37; font-size: 16px; font-weight: bold;",
)
