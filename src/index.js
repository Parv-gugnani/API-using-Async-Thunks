import React from "react";
import "./index.css";
import { createRoot } from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store";

const el = document.getElementById("root");
const root = createRoot(el);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

/*
Sure! Imagine you have a magical toy box, and inside it, you have a lot of toy cars. 
You also have a special toy that can make these cars go super fast, but it takes a bit of time to set up.

Now, async thunk functions are like your magical toy. 
They help your program do things that take time, like talking to the internet to get information. 
Just like setting up your special toy takes a little time, 
async thunk functions help your program do its job without getting stuck or waiting.

So, when you want to fetch some information from the internet, you use async thunk functions. 
They make sure your program can keep doing other things while 
it waits for the internet to send back the information you asked for. 
It's like playing with your other toys while your special toy gets ready to make your cars go super fast.

In simple words, async thunk functions help your computer do tasks that take time without 
getting bored or stuck, just like your magical toy helps your cars go super fast without you waiting too long.
 */
