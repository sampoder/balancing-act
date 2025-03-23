# 😵‍💫 Balancing act

TLDR: interactive art piece about everyday things that stress us (students) out.  I built this for [DESINV 23](https://classes.berkeley.edu/content/2025-spring-desinv-23-1-lec-1), a class on creative programming & electronics at UC Berkeley.

Submit an emoji representing what you are stressed about [here](https://airtable.com/appILZk0gunMZ1J1i/pagYvgyAensDCj8mv/form).

## Showcase / description of finished piece

As students, we've got a lot going on in our lives and that can be difficult to manage / balance. Sometimes I feel like I'm going to explode! Each "emoji bubble" represents something that causes a viewer stress. As time progresses, more bubbles spawn on the canvas. They begin to fall and the viewers can attempt to hit the bubbles and push them away (represents completing a task). However, over time, the bubbles become too much too handle for the viewers.

_[insert video]_ 

Everyone lives a different life and different things stress different people out. I made a form for others to submit emojis representing what they're stressed about - that way the art changes based on its viewers! I liked emojis because they're universally understood and only somewhat personal. People may not feel comfortable sharing their whole life story but an emoji is something that many people can relate to.

From time to time, an emoji ball may also get stuck inside of a human figure. This ~bug~ feature represents how we can internalise stress and bottle it up inside ourselves.

I choose to style humans as stick figures because it anonymised people - giving the freedom to act as they would like to without the worry of being judged by the others around them. Using emojis had a similar goal - they're relatable and not too personal.

## The process

This piece started as an attempt to depict the busy world we live in but through silhouettes (inspired by [Apple's iPod advertisements](https://en.wikipedia.org/wiki/IPod_advertising#Silhouette_style)).

I consider a couple of ways I could use this concept: what if I filmed a timelapse on campus with the effect? What if it was some sort of game like dodgeball? I liked these ideas but I was struggling to tell a story with them. I talked to Jeff (another student in the class) and we started to develop a little bit of a story off of the timelapse idea about how busy our lives are. That was in the back of my mind as a I continued working through the week.

The first thing I built was pose tracking using ml5.js and p5.js (based on this example from [ml5.js](https://docs.ml5js.org/#/reference/bodypose)). It was neat to have something that was working! The next thing I tried was building pose tracking inside of a physics engine. That's how I created this:

https://github.com/user-attachments/assets/e4cd2f45-d6de-4523-a57f-c4242af3d922

To me it looked like someone internally collapsing! For the physics engine, I used something called [p5play](https://p5play.org/index.html) which integrates with p5.js. Once I had this physics engine, I tried a couple of concepts and landed on this idea of falling balls. Which each represented something that I was stressed about:

However, I was struggling to think of things that were universally stressful (apparently I was really stressed about abacuses?). That's where I had the idea of allowing viewers to submit what was stressing them to the piece. At this point I was running out of time before demos so hacked together an Airtable form that I could then pull from through a wrapped of the Airtable API I've previously used.

## Reflection

I'm really proud of this piece! Specifically, I proud of the story telling that I included in my presentation. That was something I had really felt was lacking with my previous piece. That's also why I asked Jeff at Heron Arts - I was really inspired by the story he told through his previous piece.

I appreciated that my story was relevant to my audience; I guess being similar to that audience helped with that? It was also interesting that I didn't really know what that story was going into building the piece but over time, the story slowly developed. It was as developing as I was getting increasingly stressed - ironic.

There are still things I'd like to improve as you can imagine:

* Optimising the piece for a larger audience. When I presented my piece, I noticed that it really only worked for three to five people. If I wanted to put it in a gallery / present it publicly, it'd have to be flexible based on the group size. I think that something that'd help with this is getting a wide angle webcam and positioning the webcam further away from the viewers.

* Building more opportunities for viewers to interact with the piece, what if you could pop the bubbles for example? It'd be nice if there was some sort of collaborative goal for all of the viewers. 

* Randomising the shapes / colours more to make the piece feel more natural and less stale. Over time, the piece begins to look the same and I think it'd be nice if there was a bit more variety in its visuals.

All that said, I'm really happy with this piece and looking forward to bulding more art pieces! Thank you to everyone who talked to me about the project and helped guide me through building this piece :D

## Sources

Thanks to these sources for helping me:

* https://docs.ml5js.org/#/reference/bodypose
* https://p5play.org/learn/
