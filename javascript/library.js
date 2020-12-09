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
        name: "Christmas Time is Here - Peter Kurtz",
        video: "https://www.youtube.com/embed/xw5DORLiowk"
    },
    {
        name: "What Child is This – The Togetherness Project",
        video: "https://www.youtube.com/embed/vK5FO4ecmlA"
    },
    {
        name: "Beethoven Sonata in G major, Movement 1 – The Togetherness Project",
        video: "https://www.youtube.com/embed/F7X-oNrshUU"
    },
    {
        name: "Blue Christmas – Kenny Godfrey",
        video: "https://www.youtube.com/embed/nF2jJcf7cP4"
    },
    {
        name: "Away in a Manger – RJ, Nick, & Ashley",
        video: "https://www.youtube.com/embed/r0GoLmAe43I"
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