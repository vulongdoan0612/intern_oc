function onPageLoading() {
    "use strict";
    console.log('live page');

    //const vInpImg = document.getElementById('inp-image');
    //var vDivShowImg = document.getElementById('div-show-img');

    // get img cách 1
    // vInpImg.addEventListener("change", function () {
    //     if (vInpImg.files) {
    //         const files = vInpImg.files[0];
    //         const fileReader = new FileReader();
    //         fileReader.readAsDataURL(files);
    //         fileReader.addEventListener("load", function () {
    //             vDivShowImg.style.display = "block";
    //             vDivShowImg.innerHTML += '<img src="' + this.result + '" />';
    //         });
    //     }
    // });


}

// get img src cách 2
let count = 0

function previewFiles1(input) {
    //console.log('Click');
    const preview = document.getElementById('div-show-img');
    const vCancel = document.getElementById('btn-cancel');
    const { files } = input
    vCancel.style.display = 'block';

    Array.from(files).forEach(file => {
        const reader = new FileReader()

        reader.onload = e => {
            const img = document.createElement('img')

            img.src = e.target.result
            // img.width = 200
            // img.height = 200
            //img.alt = `file-${++count}`

            preview.appendChild(img);
            vCancel.addEventListener('click', function () {
                vCancel.style.display = 'none';
                //console.log('cancel');
                preview.innerHTML = '';
                img.src = '';

            })
        }
        reader.readAsDataURL(file)
    })
}

function previewFiles2(input) {
    //console.log('Click');
    const preview = document.getElementById('div-show-img');
    const vCancel = document.getElementById('btn-cancel');
    const { files } = input
    vCancel.style.display = 'block';

    Array.from(files).forEach(file => {
        const reader = new FileReader()
        reader.onload = e => {
            const img = document.createElement('img')

            img.src = e.target.result
            // img.width = 200
            // img.height = 200
            // img.alt = `file-${++count}`

            preview.appendChild(img);
            vCancel.addEventListener('click', function () {
                vCancel.style.display = 'none';
                //console.log('cancel');
                preview.innerHTML = '';
                img.src = '';
            })
        }

        reader.readAsDataURL(file)
    })
}



