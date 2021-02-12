let videoList = [
    {
        name: "frosty the snowman bryant",
        video: "https://www.youtube.com/embed/Wwjd2PyafN8"
    },
    {
        name: "25 days of christmas intro",
        video: "https://www.youtube.com/embed/VgRQsiia-C0"
    },
    {
        name: "project 1",
        video: "https://www.youtube.com/embed/aXjRoaMLKC8"
    },
    {
        name: "project 2",
        video: "https://www.youtube.com/embed/VRSDXqOASdU"
    },
    {
        name: "christmas Time is Here - Peter Kurtz",
        video: "https://www.youtube.com/embed/xw5DORLiowk"
    },
    {
        name: "what Child is This – The Togetherness Project",
        video: "https://www.youtube.com/embed/vK5FO4ecmlA"
    },
    {
        name: "beethoven Sonata in G major, Movement 1 – The Togetherness Project",
        video: "https://www.youtube.com/embed/F7X-oNrshUU"
    },
    {
        name: "blue Christmas – Kenny Godfrey",
        video: "https://www.youtube.com/embed/nF2jJcf7cP4"
    },
    {
        name: "away in a Manger – RJ, Nick, & Ashley",
        video: "https://www.youtube.com/embed/r0GoLmAe43I"
    },
    {
        name: "for now - josh",
        video: "https://www.youtube.com/embed/7w8hiwZJuG0"
    },
    {
        name: "singing Carols – W/ the Tyler Family!",
        video: "https://www.youtube.com/embed/nsodgPnTLvw"
    },
    {
        name: "sadie - Have Yourself A Merry Little Christmas",
        video: "https://www.youtube.com/embed/Zpkd1_OEIA4"
    },
    {
        name: "O Come, O Come Emmanual – Devin",
        video: "https://www.youtube.com/embed/23s3rYCLYqQ"
    },
    {
        name: "Away in a Manger – Alyssa",
        video: "https://www.youtube.com/embed/bNEQn6Gz1Wg"
    },
    {
        name: "Brad Greer",
        video: "https://www.youtube.com/embed/iTX-_zz009Y"
    }, 
    {
        name: "Alexah - I Heard The Bells On Christmas Day", 
        video: "https://www.youtube.com/embed/KiZZsxvzNjY"
    },
    {
        name: "Sabrina and Peter - God Rest Ye Merry Gentlemen", 
        video: "https://www.youtube.com/embed/do-qXdLrdCI"
    },
    {
        name: "BYU Resonance - The First Noel",
        video: "https://www.youtube.com/embed/VqWoWFJ98LU"
    }, 
    {
        name: "Mary Did You Know? - Kyler and Amber", 
        video: "https://www.youtube.com/embed/coc2kwqBuAI"
    }, 
    {
        name: "Micah on the viola", 
        video: "https://www.youtube.com/embed/_ZYxV_F2mXE"
    }, 
    {
        name: "Christmas Melodies – Nate and Emmy", 
        video: "https://www.youtube.com/embed/EsI5lltlczk"
    }, 
    {
        name: "Where are you Christmas? – Performed by Rylee", 
        video: "https://www.youtube.com/embed/3hlonXcIA0Y"
    }, 
    {
        name: "silent Night – Allison", 
        video: "https://www.youtube.com/embed/WspEd5u_o_A"
    }, 
    {
        name: "Hallelujah – Yvonne", 
        video: "https://www.youtube.com/embed/XudxjzoRwII"
    }, 
    {
        name: "Can't Help Falling in Love Cover – Boston & Brooklyn", 
        video: "https://www.youtube.com/embed/24bZMnkrTH8"
    }

];

function MakeList(list) 
{
    let element = document.getElementById("div-item");
    element.innerHTML = "";
    for (let i = 0; i < list.length; ++i)
    {
        let x = document.createElement("iframe");
        x.src = list[i].video;
        x.width = "400";
        x.height = "300";
        x.style.margin = "10px 30px";
        x.allowFullscreen = "allowfullscreen";
        element.appendChild(x);
    }
}
function SearchFilter(val) {
    let newArray = [];
    for (let i = 0; i < videoList.length; ++i)
    {
        if (videoList[i].name.search(val) != -1){newArray.push(videoList[i]);}
    }
    MakeList(newArray);
}