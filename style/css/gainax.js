// function modifyThumbnail(thumbnail,index, thumbnails)
// {
//     let images = document.querySelectorAll(".item");
//     let thumbnailList = document.querySelector(".listThumbnails");

//     thumbnail.addEventListener("click", function(){
//             for(let i=0;i<images.length;i++)
//                 images[i].style.zIndex=2;
//             images[index].style.zIndex=5; 
//             console.log(index);
//             thumbnailList.appendChild(thumbnail);
//             thumbnails = document.querySelectorAll(".itemT");
//     });
// }


window.onload = function () {
    // let images = document.querySelectorAll(".item");
    let thumbnailList = document.querySelector(".listThumbnails");
    // let imageList=document.querySelector(".list");

    let buttonUp = document.querySelector(".up");

    let buttonDown = document.querySelector(".down");
    let loading = document.querySelector(".loading");
    let timer = document.querySelector(".timer");


    buttonDown.addEventListener("click", function () {
        let thumbnails = document.querySelectorAll(".itemT");
        thumbnails[0].classList.add('out');
        loading.classList.add('start');
        timer.classList.add('start');
        setTimeout(() => {
            thumbnails[0].classList.remove('out');

            let imageList = document.querySelector(".list");
            let images = document.querySelectorAll(".item");
            let template = document.querySelectorAll(".template");
            images[0].classList.add('start');
            imageList.appendChild(images[0]);
            let thumbnailList = document.querySelector(".listThumbnails");
            thumbnailList.appendChild(thumbnails[0]);
            thumbnails[0].classList.add('in');

            setTimeout(() => {
                images[0].classList.remove('start');
                template[0].classList.add('start');
                setTimeout(() => {
                    template[0].classList.remove('start');
                }, 1000)
            }, 1000);
            setTimeout(() => {
                loading.classList.remove('start');
                timer.classList.remove('start');
                thumbnails[0].classList.remove('in');
                for (let i = 0; i < thumbnails.length; i++)
                    thumbnails[i].style.transform = 'translateX(-15vh)';
                thumbnails[1].style.transform = 'translateX(-10vh)';
            }, 2000);
        }, 1000);
    });

    buttonUp.addEventListener("click", function () {
        let thumbnails = document.querySelectorAll(".itemT");
        let length = thumbnails.length;
        let imageList = document.querySelector(".list");
        let images = document.querySelectorAll(".item");
        let template = document.querySelectorAll(".template");

        thumbnails[0].style.transform = 'translateX(-15vh)';
        thumbnails[length - 1].classList.add("out");
        template[length - 1].classList.add("out");
        loading.classList.add('startReverse');
        timer.classList.add('startReverse');

        setTimeout(() => {
            thumbnails[length - 1].classList.remove("out");
            template[length - 1].classList.remove("out");
            let thumbnailList = document.querySelector(".listThumbnails");


            for (let i = 0; i < length - 1; i++)
                thumbnailList.appendChild(thumbnails[i]);
            thumbnails[length - 1].classList.add("shortIn");
            images[length - 1].classList.add("out");
            setTimeout(() => {
                for (let i = 0; i < length - 1; i++)
                    imageList.appendChild(images[i]);
                thumbnails[length - 1].classList.remove("shortIn");
                images[length - 1].classList.remove("out");
                loading.classList.remove('startReverse');
                timer.classList.remove('startReverse');
                for (let i = 0; i < thumbnails.length; i++)
                    thumbnails[i].style.transform = 'translateX(-15vh)';
                thumbnails[length - 1].style.transform = 'translateX(-10vh)';
            }, 1000);
        }, 1000)

    });



    let thumbnailButtons = document.querySelectorAll(".thumbnailButton");


    thumbnailButtons.forEach((button, index) => {

        button.addEventListener("click", function () {
            let thumbnails = document.querySelectorAll(".itemT");
            let thumbnailList = document.querySelector(".listThumbnails");
            let imageList = document.querySelector(".list");
            let images = document.querySelectorAll(".item");
            thumbnails[0].style.transform = 'translateX(-15vh)';
            for (let i = 0; i < index; i++) {
                thumbnailList.appendChild(thumbnails[i]);
                imageList.appendChild(images[i]);
            }
            setTimeout(() => { thumbnails[index].style.transform = 'translateX(-10vh)'; });

        });

        button.addEventListener('mouseover', function () {
                let thumbnails = document.querySelectorAll(".itemT");
                thumbnails[index].style.transform = 'translateX(0vh)';
                button.style.transform = 'translateX(0vh)';
        });

        button.addEventListener('mouseout', function () {
            if (index != 0) {
                let thumbnails = document.querySelectorAll(".itemT");
                thumbnails[index].style.transform = 'translateX(-15vh)';
                button.style.transform = 'translateX(-15vh)';
            }
            else
            {
                
                let thumbnails = document.querySelectorAll(".itemT");
                thumbnails[index].style.transform = 'translateX(-10vh)';
                button.style.transform = 'translateX(-10vh)';
            }
        });
    });







};