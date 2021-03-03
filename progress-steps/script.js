const progress = document.getElementById("progress")
const next = document.getElementById("next")
const prev = document.getElementById("prev")
const circles = document.querySelectorAll(".circle")

let activeCount = 1
let circlesLength = circles.length

next.addEventListener("click", function () {
  activeCount++
  if (activeCount > circlesLength) {
    activeCount = circlesLength
  }

  domUpdate()
})

prev.addEventListener("click", function () {
  activeCount--

  if (activeCount < 1) {
    activeCount = 1
  }

  domUpdate()
})

function domUpdate() {
  // circle activation
  circles.forEach((circle, idx) => {
    if (idx < activeCount) {
      circle.classList.add("activated")
    } else {
      circle.classList.remove("activated")
    }
  })

  // progress
  progress.style.width = ((activeCount - 1) / (circlesLength - 1)) * 100 + "%"

  // Prev and next button control
  if (activeCount === 1) {
    prev.disabled = true
  } else if (activeCount === circlesLength) {
    next.disabled = true
  } else {
    prev.disabled = false
    next.disabled = false
  }
}
