const counter = document.querySelector(".counter")
const currentCount = get("count", 0)

const updateCounter = (count) => {
    counter.textContent = count
}
updateCounter(currentCount)

listen("count", (count) => {
    updateCounter(count)
})