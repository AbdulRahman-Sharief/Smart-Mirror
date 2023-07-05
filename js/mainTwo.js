const copyRight = document.querySelector('.starting-page .copy-rights');
const ownerLogo = document.querySelector('.starting-page .owner');


// form logic to add video to the json file
const gearIcon = document.querySelector('.starting-page .gear');
const formPage = document.querySelector('.starting-page .form');

// moving characters onload
let choosingCharacter;
const characterContainer = document.querySelector('.starting-page .characters');
const character = characterContainer.querySelector('.character img');
const femaleCharacter = characterContainer.querySelector('.female-character img');
movingFemaleCharacter(femaleCharacter)
movingMaleCharacter(character);

// starting the app
const startingPage = document.querySelector('.starting-page');
const wellcomePage = document.querySelector('.starting-page .wellcome');
const startPageBtn = document.querySelector('.starting-page .wellcome .option button');
const mainCatPage = document.querySelector('.starting-page .category');
// video variables

const video = document.querySelector('video');
const audio = document.querySelector('audio');
const playPauseBtn = document.querySelector(".play-pause-btn")
const theaterBtn = document.querySelector(".theater-btn")
const fullScreenBtn = document.querySelector(".full-screen-btn")
const miniPlayerBtn = document.querySelector(".mini-player-btn")
const muteBtn = document.querySelector(".mute-btn")
const captionsBtn = document.querySelector(".captions-btn")
const speedBtn = document.querySelector(".speed-btn")
const currentTimeElem = document.querySelector(".current-time")
const totalTimeElem = document.querySelector(".total-time")
const previewImg = document.querySelector(".preview-img")
const thumbnailImg = document.querySelector(".thumbnail-img")
const volumeSlider = document.querySelector(".volume-slider")
const videoContainer = document.querySelector(".video-container")
const timelineContainer = document.querySelector(".timeline-container")
//pages
const subCatPage = document.querySelector('.starting-page .sub-category');
const mealsPage = document.querySelector('.starting-page .meals');
const videoPage = document.querySelector('.starting-page .video-page');

let firstMenu = "";
let secMenu = "";
let thirdMenu = '';

// start button
const commands = [
    { command: 'breakfast', fn: 'Break-fast' },
    { command: 'dinner', fn: 'dinner' },
    { command: 'lunch', fn: 'lunch' },
    { command: 'lounge', fn: 'lunch' },
    { command: 'desert', fn: 'desert' },
    { command: 'ice cream', fn: 'Ice-Cream' },
    { command: 'beverage', fn: 'Beverages' },
    { command: 'pastries', fn: 'pastries' },
    { command: 'secrets', fn: 'secrets' },
    {
        command: 'back', fn: () => {
            backVoiceCommand()
        }
    },
    {
        command: 'beck', fn: () => {
            backVoiceCommand()
        }
    },
    {
        command: 'make', fn: () => {
            backVoiceCommand()
        }
    }
];
const commandsTwo = [
    { command: 'egypt', fn: 'Egypt' },
    { command: 'music', fn: 'Egypt' },
    { command: 'youtube', fn: 'Egypt' },
    { command: 'lebanon', fn: 'Lebanon' },
    { command: 'khaligi', fn: 'khaligi' },
    { command: 'indian', fn: 'Indian' },
    { command: 'La Liga', fn: 'khaligi' },
    { command: 'honey g', fn: 'khaligi' },
    { command: 'honey', fn: 'khaligi' },
    { command: 'TV', fn: 'khaligi' },
    { command: 'morocco', fn: 'Morocco' },
    { command: 'french', fn: 'French' },
    { command: 'italian', fn: 'Italian' },
    { command: 'turkey', fn: 'Turkey' },
    { command: 'turtle', fn: 'Turkey' },
    { command: 'spanish', fn: 'Spanish' },
    { command: 'asian', fn: 'Asian' },
    { command: 'cold', fn: 'Cold' },
    { command: 'gold', fn: 'Cold' },
    { command: 'call', fn: 'Cold' },
    { command: 'hot', fn: 'Hot' },
    { command: 'every', fn: 'Every' },
    {
        command: 'step', fn: () => {
            skipVoiceCommand();
        }
    },
    {
        command: 'stamp', fn: () => {
            skipVoiceCommand();
        }
    },
    {
        command: 'temp', fn: () => {
            skipVoiceCommand();
        }
    },
    {
        command: 'skip', fn: () => {
            skipVoiceCommand();
        }
    }
];
const commandThree = [
    { command: '1', fn: 'Meal One' },
    { command: 'one', fn: 'Meal One' },
    { command: 'One', fn: 'Meal One' },
    { command: '2', fn: 'Meal Two' },
    { command: 'two', fn: 'Meal Two' },
    { command: 'Two', fn: 'Meal Two' },
    { command: '3', fn: 'Meal Three' },
    { command: 'three', fn: 'Meal Three ' },
    { command: 'Three', fn: 'Meal Three' }
];
characterContainer.addEventListener('click', (e) => {
    // closing paged
    formPage.classList.remove('open');
    gearIcon.classList.add('close');
    copyRight.classList.add('close');
    ownerLogo.classList.add('close');
    closingPages(wellcomePage, mainCatPage);
    // speak('here you can choose the main category of the dish you are want')
    if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
        recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
        recognition.lang = 'en-US';
        recognition.onresult = function (event) {
            const command = event.results[0][0].transcript;
            console.log(`You said: ${command}`);
            //whenever you make voice command it will control the first menu
            if (firstMenu === '' ||
                command.includes('back') ||
                command.includes('Beck') ||
                command.includes('beck') ||
                command.includes('make')) {
                for (let i = 0; i < commands.length; i++) {
                    const { command: cmd, fn } = commands[i];
                    if (command.toLowerCase().includes(cmd)) {
                        if (typeof fn === 'function') {
                            fn();
                            firstMenu = '';
                            secMenu = '';
                            thirdMenu = '';
                        } else {
                            subcategoryPageFnVoice(fn);
                            mainCatContainer.click();
                            firstMenu = fn;
                        }
                    };
                }
            } else if (firstMenu !== '' && secMenu === '' ||
                command.includes('skip') ||
                command.includes('temp') ||
                command.includes('step')) {
                for (let i = 0; i < commandsTwo.length; i++) {
                    const { command: cmd, fn } = commandsTwo[i];
                    if (command.toLowerCase().includes(cmd)) {
                        if (typeof fn === 'function') {
                            fn();
                            secMenu = '';
                            thirdMenu = '';
                        } else {
                            countryMealsPageFnVoice(firstMenu, fn);
                            secMenu = fn;
                        }
                    };
                }
            } else if (secMenu !== '' && thirdMenu === '') {
                for (let i = 0; i < commandThree.length; i++) {
                    const { command: cmd, fn } = commandThree[i];
                    if (command.toLowerCase().includes(cmd)) {
                        if (typeof fn === 'function') {
                            fn();
                            thirdMenu = '';
                        } else {
                            mealsPageFnVoice(firstMenu, secMenu, fn);
                            thirdMenu = fn;
                        }
                    };
                }
            } else if (thirdMenu !== "" ||
                command.toLowerCase().includes('meals')) {
                if (command.includes('play')) {
                    togglePlay();
                    videoContainer.classList.remove("paused")
                } else if (command.includes('stop')) {
                    video.pause();
                    videoContainer.classList.add("paused");
                    audio.pause();
                } else if (command.includes('refresh')) {
                    window.location.reload();
                } else if (command.includes('mute')) {
                    toggleMute();
                } else if (command.includes('again')) {
                    video.currentTime = 0
                } else if (command.includes('say') ||
                    command.includes('see')) {
                    audio.play();
                } else if (command.includes('memes') ||
                    command.includes('meals') ||
                    command.includes('news') ||
                    command.includes('means')) {
                    closingPages(videoPage, mealsPage);
                    startingPage.classList.remove('video-page');
                    thirdMenu = "";
                    video.pause();
                }
            }
        };
        recognition.onend = function () {
            if (!isRecognitionStopped) { // restart recognition only if the flag is false
                recognition.start();
            }
            isRecognitionStopped = false; // reset the flag
        };
        recognition.start();
    } else {
        console.log('Web Speech API is not supported');
    }

    //check which character user have selected
    if (e.target.closest('.character')) {
        choosingCharacter = e.target.closest('.character').id;
    } else if (e.target.closest('.female-character')) {
        choosingCharacter = e.target.closest('.female-character').id;
    }

    // add character to the kind food page
    const characterContainerMainCatPage = document.querySelector('.starting-page .category .characters');
    addingCharacter(characterContainerMainCatPage);
});



const videoDescription = document.querySelector('.starting-page .video-page .description');
const videoIngrediants = document.querySelector('.starting-page .video-page .ingrediants');
const videoTitle = document.querySelector('.starting-page .video-page .title');

// category page functionalty 
const mainCatContainer = document.querySelector('.starting-page .category .cards')

// getting data from server
// append main category to main category page
fetchingData()
    .then(data => {
        Object.keys(data['food_category']).forEach((item) => {
            let card = document.createElement('div');
            card.id = item;
            card.innerHTML = item;
            card.classList.add('card', 'flex-center', 'pointer')
            mainCatContainer.append(card);
        });
    })


//==================================

//onclick on one of them
mainCatContainer.addEventListener('click', (e) => {
    // build sub category page
    subcategoryPageFn(e);

})
// back button logic
// first page
window.addEventListener('click', (e) => {
    if (e.target.closest('.category .back-btn')) {
        location.reload()
    } else if (e.target.closest('.sub-category .back-btn')) {
        closingPages(subCatPage, mainCatPage)
    } else if (e.target.closest('.meals .back-btn')) {
        closingPages(mealsPage, subCatPage);
    } else if (e.target.closest('.video-page .back-btn')) {
        closingPages(videoPage, mealsPage);
        startingPage.classList.remove('video-page');
        video.pause();
        audio.pause();
    }
})


gearIcon.addEventListener('click', () => {
    formPage.classList.toggle('open');
})
//=============================================================================
//=============================================================================
// closing page funtion
function closingPages(firstPage, secPage) {
    firstPage.classList.add('close');
    secPage.classList.remove('close')
}





// text to voice function
function speak(text) {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(text);
    synth.speak(utterance);
}






// speech to text funtion

let recognition;
let isRecognitionStopped = false; // flag variable to keep track of whether recognition should be stopped
function voicCommands() {
    if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
        recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
        recognition.lang = 'en-US';
        recognition.onresult = function (event) {
            const command = event.results[0][0].transcript;
            console.log(`You said: ${command}`);
            //
        };
        recognition.onend = function () {
            if (!isRecognitionStopped) { // restart recognition only if the flag is false
                recognition.start();
            }
            isRecognitionStopped = false; // reset the flag
        };
        recognition.start();
    } else {
        console.log('Web Speech API is not supported');
    }
}






//building subCategory Page
function subcategoryPageFn(e) {
    // check if the target the card
    if (e.target.closest('.card')) {
        //save the card inner html in the firstmenu variable
        firstMenu = e.target.innerHTML;
        // get the specific data
        let subCatJson;
        fetchingData()
            .then(data => {
                subCatJson = Object.keys(data['food_category'][`${e.target.innerHTML}`]);
                // container body
                subCatPage.innerHTML = `
                    <span class="back-btn">
                        <i class="fa-solid fa-arrow-left"></i>
                    </span>
                        <div class='title'>
                            <div class="page-title flex-center">
                                ${e.target.innerHTML}
                            </div>
                            <div class="cards flex-center"></div >
                                </div>
                                <div class="characters">
                            </div>
                            `;
                //adding character
                const characterContainerSubCatPage = subCatPage.querySelector(' .characters')
                addingCharacter(characterContainerSubCatPage);
                //====================================
                subCategoryPageCards(subCatJson, e);
            });
        //========================
        // showing new page
        closingPages(mainCatPage, subCatPage)
    };
}
//bulid sub category page's cards
function subCategoryPageCards(subCatJson, e) {
    // cards container
    const cards = subCatPage.querySelector('.cards');
    // cards with data
    subCatJson.forEach((item2) => {
        let card = document.createElement('div');
        card.classList.add('card', 'flex-center', 'pointer');
        card.id = item2;
        card.innerHTML = `
                                <p>${item2}</p>
                                <div class="flag-photo">
                                    <img src="" alt="">
                                </div>
                                <div class="meal-photo">
                                    <img src="" alt="">
                                </div>`
        cards.append(card);
    });

    //=================================
    // whenever choose the country

    const mealCountryCountainer = document.querySelector('.starting-page .sub-category .cards');
    mealCountryCountainer.addEventListener('click', (event) => {
        countryMealsPageFn(event, e || firstMenu);
    })
}


//build country meals page
function countryMealsPageFn(event, e, subCatJson) {
    if (event.target.closest('.card')) {

        const card = event.target.closest('.card');

        //save the card id || card.innerhtml in secmenu
        secMenu = card.id;
        //specific data from server
        let mealNumber;
        fetchingData()
            .then(data => {
                mealNumber = Object.keys(
                    data['food_category'][
                    `${firstMenu !== '' ? firstMenu : e.target.innerHTML}`][`${card.querySelector('p').innerHTML}`]['meals']
                );
                // create a meals page
                mealsPage.innerHTML = `
        <span class="back-btn">
                <i class="fa-solid fa-arrow-left"></i>
            </span>
            <div class="title flex-center">
                ${card.querySelector('p').innerHTML} ${(subCatPage.querySelector('.title .page-title').textContent).trim()} Meals
            </div>
                <div class="cards">
            </div>
            <div class="characters">
            </div>`;
                //adding character
                const mealsPageCharacter = mealsPage.querySelector('.characters');
                addingCharacter(mealsPageCharacter);
                // cards container for meals
                countryMealsCardFn(mealNumber, card);
            })
        // shuffle pages
        closingPages(subCatPage, mealsPage);
    }
};
// bulid card in country meals page
// Function to create meal cards for a given set of meals and add event listeners to them
function countryMealsCardFn(mealNumber, card) {
    // Get the container for meal cards
    const mealCards = mealsPage.querySelector('.cards');

    // Loop through each meal and create a corresponding card
    mealNumber.forEach((oneMeal) => {
        let mealCard = document.createElement('div');
        mealCard.classList.add('card', 'pointer', 'flex-center');
        mealCard.id = oneMeal;
        mealCard.innerHTML = `${oneMeal}`;
        mealCards.append(mealCard);

        // Add a click event listener to the card
        mealCard.addEventListener('click', (e) => {
            // Check if the click was on the card itself
            if (e.target.closest('.card')) {
                // Get the name of the clicked meal card
                let cardInner = e.target.innerHTML;
                thirdMenu = cardInner;
                let mealData;

                // Fetch data for the selected meal
                fetchingData()
                    .then(data => {
                        // Get the meal data for the selected meal and menu
                        mealData = data['food_category'][
                            `${firstMenu !== '' ? firstMenu : e.target.innerHTML}`][`${card.querySelector('p').innerHTML}`]['meals'][`${secMenu !== '' ? cardInner : secMenu}`];

                        // Change background color
                        startingPage.classList.add('video-page');

                        // Set the video source and details from the fetched meal data
                        video.src = mealData.location;
                        audio.src = mealData.audio;
                        audio.play();
                        videoTitle.innerHTML = mealData.title;
                        videoDescription.innerHTML = `
                            <h3>Description</h3>
                            ${mealData.description}`;

                        // Update the list of ingredients for the meal
                        if (!videoIngrediants.innerHTML.includes("<li>")) {
                            (mealData.Ingredients).forEach((oneItem) => {
                                let li = document.createElement('li');
                                li.innerHTML = oneItem;
                                videoIngrediants.append(li);
                            })
                            const characterVideoContainer = document.querySelector('.starting-page .video-page .characters');
                            addingCharacter(characterVideoContainer);
                        } else if (videoIngrediants.innerHTML.includes("<li>")) {
                            let childNodes = videoIngrediants.childNodes;
                            for (let i = childNodes.length - 1; i >= 0; i--) {
                                let childNode = childNodes[i];
                                if (childNode.nodeName === "LI") {
                                    videoIngrediants.removeChild(childNode);
                                }
                            }
                            (mealData.Ingredients).forEach((oneItem) => {
                                let li = document.createElement('li');
                                li.innerHTML = oneItem;
                                videoIngrediants.append(li);
                            })
                        }

                        // Move to the video page
                        closingPages(mealsPage, videoPage);
                    })
            }
        })
    })
};





//funtion to move the character
function movingMaleCharacter(character) {
    let arr = ['01', '02', '03', '04', '05', '07', '08'];
    let num = 0;
    setInterval(() => {
        num++;
        if (num === arr.length - 1) {
            num = 0;
        }
        character.src = `./images/chracter/MC-${arr[num]}.png`
    }, 200)
};

//funtion to move the character
function movingFemaleCharacter(character) {
    let arr = ['01', '02', '03', '04', '05', '07', '08', '09', '10', '11', '12'];
    let num = 0;
    setInterval(() => {
        num++;
        if (num === arr.length - 1) {
            num = 0;
        }
        character.src = `./images/female character/FC-${arr[num]}.png`
    }, 100)
};






//function creating main subCatPage by voice command
function subcategoryPageFnVoice(command) {
    // get the specific data
    let subCatJson;
    fetchingData()
        .then(data => {
            subCatJson = Object.keys(data['food_category'][`${command}`]);

            // container body
            subCatPage.innerHTML = `
                <span class="back-btn">
                            <i class="fa-solid fa-arrow-left"></i>
                        </span>
                        <div class='title'>
                            <div class="page-title flex-center">
                                ${command}
                            </div>
                                <div class="cards flex-center"></div >
                                </div>
                                <div class="characters">
                            </div>`;
            //adding character
            const characterContainerSubCatPage = subCatPage.querySelector(' .characters')
            addingCharacter(characterContainerSubCatPage);
            //====================================
            subCategoryPageCards(subCatJson);
        })

    //========================
    // showing new page
    closingPages(mainCatPage, subCatPage);
    // =========================
}
//
function countryMealsPageFnVoice(commandOne, commandTwo) {
    let mealNumber;
    fetchingData()
        .then(data => {
            //specific data from server
            mealNumber = Object.keys(data['food_category'][`${commandOne}`][`${commandTwo}`]['meals']);
            // create a meals page
            mealsPage.innerHTML = `
        <span class="back-btn">
        <i class="fa-solid fa-arrow-left"></i>
        </span>
    <div class="title flex-center">
    ${commandTwo} ${(subCatPage.querySelector('.title .page-title').textContent).trim()} Meals
        </div>
        <div class="cards">
        </div>
        <div class="characters">
                </div>`
            //adding character
            const mealsPageCharacter = mealsPage.querySelector('.characters');
            addingCharacter(mealsPageCharacter);
            //===========================
            //cards container for meals
            countryMealsCardFn(mealNumber);
        })
    // shuffle pages
    closingPages(subCatPage, mealsPage);
}

// meals video pages
function mealsPageFnVoice(commandOne, commandTwo, commandThree) {
    let mealData
    fetchingData()
        .then(data => {
            mealData = data['food_category'][`${commandOne}`][`${commandTwo}`][`meals`][`${commandThree}`];
            startingPage.classList.add('video-page');


            // get the data from src
            video.src = mealData.location;
            // audio data
            audio.src = mealData.audio;
            audio.play();
            videoTitle.innerHTML = mealData.title;
            videoDescription.innerHTML = `
    <h3>Description</h3>
    ${mealData.description}`;
            if (!videoIngrediants.innerHTML.includes("<li>")) {
                (mealData.Ingredients).forEach((oneItem) => {
                    let li = document.createElement('li');
                    li.innerHTML = oneItem;
                    videoIngrediants.append(li);
                })
                //adding character
                const characterVideoContainer = document.querySelector('.starting-page .video-page .characters');
                addingCharacter(characterVideoContainer);
            } else if (videoIngrediants.innerHTML.includes("<li>")) {
                let childNodes = videoIngrediants.childNodes;
                for (let i = childNodes.length - 1; i >= 0; i--) {
                    let childNode = childNodes[i];
                    if (childNode.nodeName === "LI") {
                        videoIngrediants.removeChild(childNode);
                    }
                }
                (mealData.Ingredients).forEach((oneItem) => {
                    let li = document.createElement('li');
                    li.innerHTML = oneItem;
                    videoIngrediants.append(li);
                })
            }
        });
    // moving between pages
    closingPages(mealsPage, videoPage);
}

//========================================================

document.addEventListener("keydown", e => {
    const tagName = document.activeElement.tagName.toLowerCase()

    if (tagName === "input") return

    switch (e.key.toLowerCase()) {
        // case " ":
        //     if (tagName === "button") return
        // case "k":
        //     togglePlay()
        //     break
        // case "f":
        //     toggleFullScreenMode()
        //     break
        // case "t":
        //     toggleTheaterMode()
        //     break
        // case "i":
        //     toggleMiniPlayerMode()
        //     break
        // case "m":
        //     toggleMute()
        //     break
        // case "arrowleft":
        // case "j":
        //     skip(-5)
        //     break
        // case "arrowright":
        // case "l":
        //     skip(5)
        //     break
        // case "c":
        //     toggleCaptions()
        //     break
    }
})

// Timeline
timelineContainer.addEventListener("mousemove", handleTimelineUpdate)
timelineContainer.addEventListener("mousedown", toggleScrubbing)
document.addEventListener("mouseup", e => {
    if (isScrubbing) toggleScrubbing(e)
})
document.addEventListener("mousemove", e => {
    if (isScrubbing) handleTimelineUpdate(e)
})

let isScrubbing = false
let wasPaused
function toggleScrubbing(e) {
    const rect = timelineContainer.getBoundingClientRect()
    const percent = Math.min(Math.max(0, e.x - rect.x), rect.width) / rect.width
    isScrubbing = (e.buttons & 1) === 1
    videoContainer.classList.toggle("scrubbing", isScrubbing)
    if (isScrubbing) {
        wasPaused = video.paused
        video.pause()
    } else {
        video.currentTime = percent * video.duration
        if (!wasPaused) video.play()
    }

    handleTimelineUpdate(e)
}

function handleTimelineUpdate(e) {
    const rect = timelineContainer.getBoundingClientRect()
    const percent = Math.min(Math.max(0, e.x - rect.x), rect.width) / rect.width
    // const previewImgNumber = Math.max(
    //     1,
    //     Math.floor((percent * video.duration) / 10)
    // )
    // const previewImgSrc = `assets / previewImgs / preview${previewImgNumber}.jpg`
    // previewImg.src = previewImgSrc
    // timelineContainer.style.setProperty("--preview-position", percent)

    if (isScrubbing) {
        e.preventDefault()
        // thumbnailImg.src = previewImgSrc
        timelineContainer.style.setProperty("--progress-position", percent)
    }
}

// Playback Speed
speedBtn.addEventListener("click", changePlaybackSpeed)

function changePlaybackSpeed() {
    let newPlaybackRate = video.playbackRate + 0.25
    if (newPlaybackRate > 2) newPlaybackRate = 0.25
    video.playbackRate = newPlaybackRate
    speedBtn.textContent = `${newPlaybackRate} x`
}

// Captions
const captions = video.textTracks[0]
// captions.mode = "hidden"

// captionsBtn.addEventListener("click", toggleCaptions)

// function toggleCaptions() {
//     const isHidden = captions.mode === "hidden"
//     captions.mode = isHidden ? "showing" : "hidden"
//     videoContainer.classList.toggle("captions", isHidden)
// }

// Duration
video.addEventListener("loadeddata", () => {
    totalTimeElem.textContent = formatDuration(video.duration)
})

video.addEventListener("timeupdate", () => {
    currentTimeElem.textContent = formatDuration(video.currentTime)
    const percent = video.currentTime / video.duration
    timelineContainer.style.setProperty("--progress-position", percent)
})

const leadingZeroFormatter = new Intl.NumberFormat(undefined, {
    minimumIntegerDigits: 2,
})
function formatDuration(time) {
    const seconds = Math.floor(time % 60)
    const minutes = Math.floor(time / 60) % 60
    const hours = Math.floor(time / 3600)
    if (hours === 0) {
        return `${minutes}:${leadingZeroFormatter.format(seconds)} `
    } else {
        return `${hours}:${leadingZeroFormatter.format(
            minutes
        )
            }:${leadingZeroFormatter.format(seconds)} `
    }
}

function skip(duration) {
    video.currentTime += duration
}

// Volume
muteBtn.addEventListener("click", toggleMute)
volumeSlider.addEventListener("input", e => {
    video.volume = e.target.value
    video.muted = e.target.value === 0
})

function toggleMute() {
    video.muted = !video.muted
}

video.addEventListener("volumechange", () => {
    volumeSlider.value = video.volume
    let volumeLevel
    if (video.muted || video.volume === 0) {
        volumeSlider.value = 0
        volumeLevel = "muted"
    } else if (video.volume >= 0.5) {
        volumeLevel = "high"
    } else {
        volumeLevel = "low"
    }

    videoContainer.dataset.volumeLevel = volumeLevel
})

// View Modes
theaterBtn.addEventListener("click", toggleTheaterMode)
fullScreenBtn.addEventListener("click", toggleFullScreenMode)
// miniPlayerBtn.addEventListener("click", toggleMiniPlayerMode)

function toggleTheaterMode() {
    videoContainer.classList.toggle("theater")
}

function toggleFullScreenMode() {
    if (document.fullscreenElement == null) {
        videoContainer.requestFullscreen()
    } else {
        document.exitFullscreen()
    }
}

// function toggleMiniPlayerMode() {
//     if (videoContainer.classList.contains("mini-player")) {
//         document.exitPictureInPicture()
//     } else {
//         video.requestPictureInPicture()
//     }
// }

// document.addEventListener("fullscreenchange", () => {
//     videoContainer.classList.toggle("full-screen", document.fullscreenElement);
// })

// video.addEventListener("enterpictureinpicture", () => {
//     videoContainer.classList.add("mini-player")
// })

// video.addEventListener("leavepictureinpicture", () => {
//     videoContainer.classList.remove("mini-player")
// })

// Play/Pause
playPauseBtn.addEventListener("click", togglePlay)
video.addEventListener("click", togglePlay)

function togglePlay() {
    video.paused ? video.play() : video.pause()
}

video.addEventListener("play", () => {
    videoContainer.classList.remove("paused")
})

video.addEventListener("pause", () => {
    videoContainer.classList.add("paused")
})
//=======================================
//function to fetch data from json server
function fetchingData() {
    return fetch('../db/db.json')
        .then(res => res.json())
        .then(data => {
            return data
        })
}
//===================================
function addingCharacter(characterContainer) {
    if (choosingCharacter === 'male') {
        characterContainer.innerHTML = `
                    <div class="character" id="male">
                                    <img src="./images/chracter/MC-01.png" alt="">
                                </div>`;
        movingMaleCharacter(characterContainer.querySelector('.character>img'));
    } else if (choosingCharacter == 'female') {
        characterContainer.innerHTML = `
                        <div class="female-character pointer" id="female">
                        <img src="./images/female character/FC-01.png" alt="">
                        </div>`
        movingFemaleCharacter(characterContainer.querySelector('.female-character>img'));
    }
}
//===================================
//when user say back
function backVoiceCommand() {
    closingPages(subCatPage, mainCatPage);
    mealsPage.classList.add('close');
    videoPage.classList.add('close');
    startingPage.classList.remove('video-page');
    video.pause();
    audio.pause();
}
//===================================
//when user say skip
function skipVoiceCommand() {
    closingPages(mealsPage, subCatPage);
    videoPage.classList.add('close');
    startingPage.classList.remove('video-page');
    video.pause();
    audio.pause();
}
//===================================


const selectBtnOne = document.querySelector(".main-meal-filter .select-btn");
const selectBtnTwo = document.querySelector(" .sub-cat-filter .select-btn");

const mainMealContainer = document.querySelector('.main-meal-filter .list-items');
const subCatContainer = document.querySelector('.sub-cat-filter .list-items');


// Function to toggle list visibility when select button is clicked
function openList(btn) {
    btn.addEventListener("click", () => {
        btn.classList.toggle('open')
    })
}

// Attach click listeners to select buttons
openList(selectBtnOne);
openList(selectBtnTwo);

let firstOp, secOp;
// Function to handle toggling of checkbox items and state changes in filter containers
function checkItems(container, name) {
    container.addEventListener('click', (e) => {
        if (e.target.closest(`.${name} .list-items .item`)) {
            // remove checked items
            (Array.from(container.querySelectorAll(`.${name} .list-items .item`))).forEach((item) => {
                item.classList.remove('checked')
            })
            // check the items
            let item = e.target.closest(`.${name} .list-items .item`);
            item.classList.add("checked");

            // to choose the first drop menu specific
            if (container === mainMealContainer) {
                // save the checked one in a var
                firstOp = item.querySelector('.item-text').innerHTML;
                console.log(firstOp);
                fetchingData()
                    .then(data => {
                        let subCatArr = Object.keys(data['food_category'][`${firstOp}`]);
                        const listItemsContainer = document.querySelector('.sub-cat-filter .list-items');
                        //clear all the text context to add the new list
                        listItemsContainer.innerHTML = "";
                        subCatArr.forEach((one) => {
                            let li = document.createElement('li');
                            li.classList.add('item');
                            li.innerHTML = `
                            <span class="checkbox ">
                                    <i class="fa-solid fa-check check-icon"></i>
                                </span>
                                <span class="item-text ">${one}</span>
                            `;
                            listItemsContainer.append(li);
                        });
                    })
            }
            // to choose the sec drop menu specific
            if (container === subCatContainer) {
                secOp = item.querySelector('.item-text').innerHTML;
                //======================================

                let form = document.querySelector('.starting-page .form form');
                let submitBtn = document.querySelector('.form form .submit-btn');
                form.addEventListener('submit', (e) => {
                    // stop submittin from taking actions
                    e.preventDefault();
                    // get thr form's data
                    let formData = new FormData(form);
                    let data = Object.fromEntries(formData);
                    let mealName = data['meal-name'];
                    // create the new meal
                    const tryItBaby = {
                        food_category: {
                            [firstOp]: {
                                [secOp]: {
                                    meals: {
                                        [mealName]: {
                                            location: `${data.location}`,
                                            title: data.title,
                                            audio: "",
                                            Ingredients: [`${data.Ingredients}`],
                                            description: `${data.description}`
                                        }
                                    }
                                }
                            }
                        }
                    }

                    // console it to the browser
                    console.log(tryItBaby);

                    // add to the json file
                    fetch('/api/update-db', {
                        method: 'PATCH',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(tryItBaby)
                    })
                        .then(response => response.json())
                        .then(data => console.log(data))
                        .catch(error => console.error(error));
                })
            }
        }
    });
}
checkItems(mainMealContainer, 'main-meal-filter');
checkItems(subCatContainer, 'sub-cat-filter');
