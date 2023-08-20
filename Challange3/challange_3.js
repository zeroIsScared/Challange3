// Your tasks:
// PART 1
// 1. Write an async function 'loadNPause' that recreates Challenge #2, this time
// using async/await (only the part where the promise is consumed, reuse the
// 'createImage' function from before)
// 2. Compare the two versions, think about the big differences, and see which one
// you like more
// 3. Don't forget to test the error handler, and to set the network speed to “Fast 3G”
// in the dev tools Network tab
// PART 2
// 1. Create an async function 'loadAll' that receives an array of image paths
// 'imgArr'
// 2. Use .map to loop over the array, to load all the images with the
// 'createImage' function (call the resulting array 'imgs')
// 3. Check out the 'imgs' array in the console! Is it like you expected?
// 4. Use a promise combinator function to actually get the images from the array 😉
// 5. Add the 'parallel' class to all the images (it has some CSS styles)
// Test data Part 2: ['img/img-1.jpg', 'img/img-2.jpg', 'img/img-
// 3.jpg']. To test, turn off the 'loadNPause' function

const loadImG = async (path) => {
    return new Promise((resolve, reject) => {
        const img = document.createElement('img');
        img.src = path;

        img.addEventListener('load', ()=>{
            containerImg.appendChild(img);
            resolve(img);
        });

        img.addEventListener('error', ()=> {
            reject(new Error(`The image failed to load!`));
        });
    });
};

const wait = async (seconds) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, seconds * 1000);
    });
};

// (async ()=>{
//     try {
//         const img = await loadImG('./img/img-3.jpg');
//         const pause = await  wait(2);       
//         img.style.display = 'none';
//         const img2 = await loadImG('./img/img-2.jpg');   
//         const pause2 = await wait(2);
//         img2.style.display ='none';
//     }catch(err) {
//         console.error(`!!!${err}`);
//     }

// })()



const imgArr = ['./img/img-1.jpg', './img/img-2.jpg', './img/img-3.jpg'];

const loadALL = async (imgArr)=>{
   const imgs = await Promise.all(imgArr.map((img) => loadImG(img)));
   console.log(imgs);
}


loadALL(imgArr)