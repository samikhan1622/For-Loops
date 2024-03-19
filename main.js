"use strict";
// (For Loop)
const std = ["hamza", "arham", "okasha"];
for (let i = -10; i < 1; i++) {
    console.log(i);
    console.log(std[i]);
}
let array = ["a", "b", "c", "d", "e"];
for (let index = 0; index <= 5; index++) {
    console.log(array);
}
//        (Nested, For Loop)
for (let i = 0; i < 3; i++) {
    console.log("parent loop", i);
    break;
    for (let j = 0; j < 4; j++) {
        console.log("child loop", i);
    }
}
let videos = ["video1", "video2", "video3", "video4",];
console.log(videos.length);
for (let i = 0; i < videos.length; i++) {
    console.log([i]);
}
//  (Objects)
let video1 = {
    title: "video1",
    description: "video 1 description",
    Image: "http//image2com"
};
const video2 = [
    { title: "video1",
        description: "video 1 description",
        Image: "http//image.com" },
    { title: "video2",
        description: "video 2 description",
        Image: "http//image.com" },
];
for (let i = 0; i < video2.length; i++)
    console.log(video2[1]);
// //JSON (For, data transfer)
let video = [
    {
        title: "video1",
        description: "video 1 description",
        Image: "http//image.com",
        views: 10000
    },
    {
        title: "video1",
        description: "video 2 description",
        Image: "http//image.com",
        views: 10000
    },
    {
        title: "video1",
        description: "video 3 description",
        Image: "http//image.com",
        views: 10000
    },
    {
        title: "video1",
        description: "video 4 description",
        Image: "http//image.com",
        views: 10000
    },
    {
        title: "video1",
        description: "video 5 description",
        Image: "http//image.com",
        views: 10000
    },
    {
        title: "video1",
        description: "video 6 description",
        Image: "http//image.com",
        views: 10000
    },
    {
        title: "video1",
        description: "video 7 description",
        Image: "http//image.com",
        views: 10000
    },
    {
        title: "video1",
        description: "video 8 description",
        Image: "http//image.com",
        views: 10000
    },
    {
        title: "video1",
        description: "video 9 description",
        Image: "http//image.com",
        views: 10000
    },
    {
        title: "video1",
        description: "video 10 description",
        Image: "http//image.com",
        views: 10000
    },
];
for (let i = 0; i < video.length; i++) {
    console.log(video[5].Image);
    break;
}
