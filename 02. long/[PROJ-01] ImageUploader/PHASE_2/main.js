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




const preview = document.getElementById('img-preview')
const fileInput = document.getElementById("img-input")

const previewImg = (input) => {
    const { files } = input

    Array.from(files).forEach(file => {
    const reader = new FileReader()

    reader.onload = e => {
        const img = document.createElement('img')
        img.src = e.target.result
        img.alt = file.name
        preview.appendChild(img)
    }
    reader.readAsDataURL(file)
    })

    const feedback = document.getElementById('feedback')
    feedback.textContent = `${fileInput.files.length} files uploaded successfully!`


    const clearBtn = document.getElementById('clearBtn')
    clearBtn.innerHTML = `Delete`

    clearBtn.addEventListener("click", function() {
        preview.innerHTML=""
        feedback.textContent = ""
        clearBtn.innerHTML = ""
    })
}



function previewVideo() {
    alert("Chức năng upload Video được được phát triển")
}









