const getDataFromSessionStorage = () => {
    const username = sessionStorage.getItem('username') ? sessionStorage.getItem('username') : "{username}"
    const date = sessionStorage.getItem('date') ? sessionStorage.getItem('date') : "{date}"
    return {username, date}
}

const displayDataInCertificate = () => {
    const dataObj = getDataFromSessionStorage()
    document.querySelector(".certificate-username").textContent = dataObj.username
    document.querySelector(".certificate-date").textContent = dataObj.date
}

displayDataInCertificate()

const printCertificate = async () => {
    const element = document.querySelector(".certificateContainer")
    const canvas = await html2canvas(element)
    const data = canvas.toDataURL('image/jpg')
    const link = document.createElement('a')
    if(typeof link.download === 'string'){
        link.href = data
        link.download = `${getDataFromSessionStorage().username} - HTML test on Quiz App.jpg`
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    }else{
        window.open(data)
    }
}

document.querySelector(".print-certificate").addEventListener("click", printCertificate)