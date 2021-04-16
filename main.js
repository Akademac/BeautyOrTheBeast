//preloader
let preloader_h1 = document.querySelector('#preloader_h1');
let preloader_div = document.querySelector('.preloader_div');

setTimeout(() => {
    preloader_h1.style.display = 'block';
}, 4000);

setTimeout(() => {
    preloader_div.style.backgroundColor = 'black';
}, 6000);

//choices

let choices_div = document.querySelector('.choices_div');


setTimeout(() => {
    preloader_div.classList.add('preloader_div_go');
    choices_div.classList.add('choices_div_go');
}, 7000);

setTimeout(() => {
    preloader_div.style.display = 'none';
    choices_div.style.display = 'block';
}, 9000);



//slider 

let slider = document.querySelector('.slider');
let beauty_choice = document.querySelector('.beauty_choice');

let beauty_wrapper = document.querySelector('.beauty_wrapper');
let beast_wrapper = document.querySelector('.beast_wrapper');

//=========
    //    Not working on Firefoks, solve that
//=========

let clientwidth =document.documentElement.clientWidth - 10;
let justOnce = true;

slider.addEventListener('drag', e => {
    // e.dataTransfer.setData('Text', this.id);

    slider.style.left = e.clientX + 'px';
    beauty_choice.style.width = e.clientX + 'px';
    
    if(e.clientX < 10 && e.clientX != 0 && beast_main_bool == true) {
        beast_main_bool = false;
        beast_wrapper.style.display = 'block';
        beauty_wrapper.style.display = 'none';
        choices_div.style.display = 'none';
        beast_functions();
    }
    if(e.clientX > clientwidth && e.clientX != 0) {
        beauty_wrapper.style.display = 'block';
        beast_wrapper.style.display = 'none';
        choices_div.style.display = 'none';
        if(justOnce == true) {
            beauty_functions();
        }
    }
});

slider.addEventListener('touchmove', e => {

    slider.style.left = e.touches[0].clientX + 'px';
    beauty_choice.style.width = e.touches[0].clientX + 'px';
    if(e.touches[0].clientX < 10 && e.touches[0].clientX != 0 && beast_main_bool == true) {
        beast_main_bool = false;
        beast_wrapper.style.display = 'block';
        beauty_wrapper.style.display = 'none';
        choices_div.style.display = 'none';
        beast_functions();
    }

    if(e.touches[0].clientX > clientwidth && e.touches[0].clientX != 0) {
        beauty_wrapper.style.display = 'block';
        beast_wrapper.style.display = 'none';
        choices_div.style.display = 'none';
    }
})

//beast 

let beast_main_div = document.querySelector('.beast_main_div');
let beast_main_divs = document.querySelectorAll('.beast_main_divs');

let beast_main_arr = [];
let beast_main_interval;
let beast_main_x = 0;

let beast_second_div = document.querySelector('.second_div_txt');
let beast_sd_img = document.querySelector('#beast_sd_img');
let beast_sd_imgs = document.querySelector('.beast_sd_imgs');
let beast_sd_first = document.querySelector('.beast_sd_first');
let beast_td_top = document.querySelector('.beast_td_top');
let beast_td_tops_layer = document.querySelectorAll('.beast_td_tops_layer');
let beast_td_c_left = document.querySelector('.beast_td_c_left');
let beast_overlay_video = document.querySelector('.beast_overlay_video');
let beast_video = document.querySelector('#beast_video');
let txt_over_video = document.querySelector('#txt_over_video');
let overlay_final_h2 = document.querySelector('.overlay_final_h2');
let beast_final = document.querySelector('#beast_final');
let beast_tracker = document.querySelector('#beast_tracker');
let beast_fifth_txt = document.querySelector('.beast_fifth_txt');
let beast_fifth_div = document.querySelector('.beast_fifth_div');
let fifth_div_scroll = document.querySelector('#fifth_div_scroll');

let beast_sd_interval;
let beast_sd_x = 1;
let beast_main_bool = true;
let beast_sd_bool = true;
let beast_td_bool = true;
let type_x = true;
let type_i = 0;

beast_main_divs.forEach(e => {
    beast_main_arr.push(e);
});

let isInViewport = e =>  {
    let rect = e.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

let txt =  `Marine pollution is a combination of chemicals and trash, 
most of which comes from land sources and is washed or blown into the ocean.
 This pollution results in damage to the environment,
 to the health of all organisms, and to economic structures worldwide.`;


let typing = () => {
    if(type_i < txt.length) {
        txt_over_video.innerHTML += txt.charAt(type_i);
        type_i++;
        setTimeout(typing, 50); 
    }
    type_x = false;
};

let beast_functions = () => {
    beast_main_interval = setInterval(() => {
        if(beast_main_x < beast_main_arr.length) {
            beast_main_arr[beast_main_x].classList.add('beast_main_active');
            beast_main_x++;
        }
    }, 400);

    document.addEventListener('scroll', e => {
        if(isInViewport(beast_sd_img) == true) {
            beast_sd_first.classList.add('beast_sd_first_go');
            if(beast_sd_bool == true) {
                beast_sd_interval = setInterval(() => {
                    beast_sd_img.src = `Images/extinct_animals/animal_${beast_sd_x}.jpg`;
                    beast_sd_x++;
                    if(beast_sd_x > 10) {
                        beast_sd_x = 10;
                        beast_sd_imgs.classList.add('beast_sd_imgs_go');
                    }
                }, 1000)
            }
        beast_sd_bool = false;
        }

        if(isInViewport(beast_td_top) == true) {
            if(beast_td_bool == true) {
                beast_td_tops_layer.forEach(e => {
                    e.classList.add('beast_td_tops_layer_go');
                })
            }
        beast_td_bool = false;
        }

        if(isInViewport(beast_td_c_left) == true) {
            beast_td_c_left.style.background = "url('Images/deforestation/beast_centar_left_2.png')";
            beast_td_c_left.style.backgroundPosition = 'center';
            beast_td_c_left.style.backgroundSize = 'contain';
            beast_td_c_left.style.backgroundRepeat = 'no-repeat';
        }

        if(isInViewport(txt_over_video) == true) {
            beast_video.play();
            if(type_x == true) {
                typing();
            }
        }

        if(isInViewport(fifth_div_scroll) == true) {
            beast_fifth_txt.classList.add('beast_fifth_txt_go');
        } 

        if(isInViewport(overlay_final_h2) == true) {
            beast_final.play();
            overlay_final_h2.classList.add('overlay_final_h2_go');
        }

    })
};

//beast buttons

let beast_btn = document.querySelectorAll('.beast_btn');

beast_btn.forEach(e => {
    e.addEventListener('click', ee => {
		let link = ee.target.dataset.beastbtn;
        
        if(link == 1) {
            window.open('https://en.wikipedia.org/wiki/Poaching')
        }
        else if(link == 2) {
                window.open('https://en.wikipedia.org/wiki/Deforestation')
        }
        else if(link == 3) {
            window.open('https://en.wikipedia.org/wiki/Marine_pollution')
        }
        else if(link == 4) {
            window.open('https://en.wikipedia.org/wiki/Air_pollution')
        }
    })
})



// beast_wrapper.addEventListener('mousemove', e => {
//     beast_tracker.style.left = e.clientX + 'px';
//     beast_tracker.style.top = e.clientY + 'px';
// });

//beauty

let beauty_main_video = document.querySelector('#beauty_main_video');
let beauty_main_h1 = document.querySelector('#beauty_main_h1');
let beauty_main_bool = true;
let beauty_main_div = document.querySelector('.beauty_main_div');
let beauty_main_line = document.querySelector('.beauty_main_line');
let beauty_main_txt = document.querySelector('.beauty_main_txt');
let beauty_main_x = 0;
let beauty_main_y = 100;

let beauty_functions = () => {
    justOnce = false;
    beauty_main_video.play();
    console.log('Beauty Page!');
    document.addEventListener('wheel', e => {
        beauty_main_h1.innerHTML = "Earth";

        if(e.deltaY == 100) {
            beauty_main_x = beauty_main_x + 1;
            beauty_main_line.style.height = beauty_main_x + 'rem';
        }
        if(beauty_main_x > 20) {
            beauty_main_y = beauty_main_y - 5;
            beauty_main_txt.style.top = beauty_main_y + 'rem';
            if(e.deltaY == 100) {
                beauty_main_x = beauty_main_x - 1;
                beauty_main_line.style.height = beauty_main_x + 'rem';
            }
            
        }
        console.log(e.deltaY);
    })
};



