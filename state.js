const listen = (state, callback) => {
    document.addEventListener(state, (value) => callback(value.detail.data))
}

const update = (state, data) => {
    document.dispatchEvent(new CustomEvent(state, {
        detail: { data }
    }))
    sessionStorage.setItem(state, data)
}

const get = (state, defaultValue) => {
    const storedData = sessionStorage.getItem(state)
    if (storedData) {
        return storedData
    }
    return defaultValue
}