# james-davies-coregaming-tech-test
Created by James Davies

## Technology Choices
#### TypeScript:
I chose to use TypeScript as it is
an open source language that
simplifies JavaScript making it easier to read and debug.
The typed nature of TypeScript helps developers avoid bugs that are regularly caused in JavaScript.
It also provides the choice of compilation style between ES5 and ES6 - I chose ES5 so that I would not need to worry about browser support.

#### WebPacker:
I chose to use WebPacker to bundle my resources as this reduces the packet size being sent to the server and thus decreases the load time. This particular software is good because it provides the choice for hot module replacement, allowing you to see changes as they get compiled.

#### GreenSock:
GreenSock is an animation library that has an excellent Tween functionality that works seemlessly with the PIXI framework.

#### TexturePacker:
This is an incredible software that packs all your images into spritesheets.
It is free to use (to a point) and connects easily to PIXI.

## Instructions
Ensure Docker Desktop is running.

Open a Command Prompt with admin rights and run
"docker run -it --rm --name engine -p 8888:8888 coregaming/simple-slot-api"

In the terminal run
"npm install"

While that is loading open a browser and navigate to
"http://localhost:3000"

In the terminal run
"npm start"

