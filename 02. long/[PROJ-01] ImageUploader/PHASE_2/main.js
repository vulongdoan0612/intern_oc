const tabs = document.querySelectorAll('.tab-item')
const panes = document.querySelectorAll('.tab-pane')

const tabActive = document.querySelector('.tab-item.active')
const line = document.querySelector('.line')


line.style.left = tabActive.offsetLeft + 'px' 
line.style.width = tabActive.offsetWidth + 'px' 

tabs.forEach((tab, index) => {
    
    const pane = panes [index]

    tab.onclick = function () {

        document.querySelector('.tab-item.active').classList.remove('active') 
        this.classList.add('active') 

        document.querySelector('.tab-pane.active').classList.remove('active')
        pane.classList.add('active')

        line.style.left = this.offsetLeft + 'px' 
        line.style.width = this.offsetWidth + 'px' 
    }
})





const previewVideo = () => {
    alert("Chức năng upload Video được được phát triển")
}









