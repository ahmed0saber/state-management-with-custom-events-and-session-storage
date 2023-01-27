const btn = document.querySelector(".btn")

const increaseCounter = () => {
    const count = parseInt(get("count", 0))
    update('count', count + 1)
}

btn.addEventListener("click", increaseCounter)