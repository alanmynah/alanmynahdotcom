---
title: Create a neat RSVP card with pure CSS
date: 2020-10-04T13:41:00.000Z
---

Create a responsive RSVP card with just HTML and CSS

<!-- more -->

![GIF of RSVP card](https://thepracticaldev.s3.amazonaws.com/i/2twcm93y5nw196fdbkc2.gif)

I've been one of the lucky few who had a preview of [@KevinJPowell](https://twitter.com/KevinJPowell)'s [responsive web developer bootcamp on Scrimba](https://scrimba.com/g/gresponsive). I cannot recommend it highly enough, as watching the course helped me immensely in writing this post!

With this post, you will learn how to create an RSVP card, with just CSS and HTML, for any occasion!

Also, I have to admit that I've been a massive Scrimba fan for a very long time and always keep telling everyone I meet at every meetup how great it is!

Naturally, if you fancy playing with my code, [there is a playground](https://scrimba.com/c/cR4b8JuQ).

If English is not your native language, like me, and you have never encountered RSVP cards before, RSVP is French for _Répondez s'il vous plaît_, meaning "Please respond" and is used widely in the UK, US, Canada, etc. as invitations to weddings and other formal occasions.

# Start with simple HTML

Let's start with HTML representation of the card and have separate `div`s for card's front and back.

```html
<html>
	<head>
		<link rel="stylesheet" href="index.css" />
	</head>
	<body>
		<div class="container">
			<div class="card">
				<div class="front">
					<h1>Front</h1>
				</div>

				<div class="back">
					<h1>Back</h1>
				</div>
			</div>
		</div>
	</body>
</html>
```

![Image of rendered code above](https://thepracticaldev.s3.amazonaws.com/i/wuxsasguli1hmnb6yy8v.png)

Let's now add some basic CSS to prepare a container for where the card is going to be. We can use relative % units to make sure that everything is centred.

```css
body {
	background: #b6d4df;
}

.container {
	position: absolute;
	background: none;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
}
```

![Image of rendered code above](https://thepracticaldev.s3.amazonaws.com/i/o9y2dqpexebpjui2aef9.png)

Let's now add the card.

Percentage values are that of the parent container. So when we use width and height of 100% on `.card` class, it will take the same size as `.container` class.

```css
body {
	background: #b6d4df;
}

.container {
	position: absolute;
	width: 60%;
	height: 60%;
	background: none;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
}

.card {
	position: relative;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
}
```

And we can now also add styles for each face of the card.

```css
.front,
.back {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	text-align: center;
	border-radius: 15px;
	overflow: hidden;
	background: #fafafa;
	color: #333;
}
```

![Image of rendered code above](https://thepracticaldev.s3.amazonaws.com/i/ytcfwuepzgk5q5r7l9zb.png)

Well, the card is there, but we see the back of it. That's because `back` is rendered later, so it's covering `front`. To show `front`, I need to add `backface-visibility: hidden;` to both sides and now just need to rotate it.

```css
.front,
.back {
	/* the rest of CSS */
	backface-visibility: hidden;
}

.back {
	transform: rotateY(180deg);
}
```

![Image of rendered code above](https://thepracticaldev.s3.amazonaws.com/i/39r4t7sma2n7filbsah0.png)

That's much better. Let's try to make it flip around when we hover over the card.

```css
.card:hover {
	transform: rotateY(180deg);
}
```

![Image of rendered code above](https://thepracticaldev.s3.amazonaws.com/i/bqarrh9q35gldeujkkb1.png)

We're getting there, but it's not what we quite wanted. The magic CSS line to flip the card is `transform-style: preserve-3d;`. I'm also going to add `transition: all 0.8s ease;` to `.card` to make the animation transition look more natural.

```css
.card {
	position: relative;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	transform-style: preserve-3d;
	transition: all 0.8s ease;
}
```

to give the transition a slightly more polished look, let's add `perspective: 1000px;`.

```css
.container {
	perspective: 1000px;
	position: absolute;
	width: 60%;
	height: 60%;
	background: none;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
}
```

![GIF of rendered code above](https://thepracticaldev.s3.amazonaws.com/i/8zshrdpu43tcbyukxzai.gif)

Let's spruce up the wording, to make this design as close to real-life as we can, so you can reuse it for your own party!

And I'll add some fonts, while we're here.

```html
<html>
	<head>
		<link rel="stylesheet" href="index.css" />
		<link href="https://fonts.googleapis.com/css?family=Tangerine&display=swap" rel="stylesheet" />
		<link href="https://fonts.googleapis.com/css?family=Playfair+Display&display=swap" rel="stylesheet" />
	</head>
	<body>
		<div class="container">
			<div class="card">
				<div class="front">
					<h1>Your Invitation to Celebrate With Us</h1>
					<p>Please turn the card to reply</p>
				</div>

				<div class="back">
					<h1>RSVP</h1>
					<p>We would be thrilled for you to celebrate with us.</p>
					<button>Yes, I'd love to come</button>
					<button>Unfortunately, I'm busy</button>
				</div>
			</div>
		</div>
	</body>
</html>
```

![Image of rendered code above](https://thepracticaldev.s3.amazonaws.com/i/zpq93wjv9iph4ec2fqoi.png)
![Image of rendered code above](https://thepracticaldev.s3.amazonaws.com/i/dfm96dt0fd2zofdraj77.png)

# Responsive typography

Having good effects is nice, but if the text looks bland, the card just won't cut it.

Normally, there are two most common issues with CSS. Being able to react to changing requirements with minimum changes and maintaining `px` values everywhere. :D

This is when `rem` comes to the rescue.

A rem is the font-size value to your root element, i.e `<html>` element.

By default, it's not written, but it's as if:

```css
html {
	font-size: 16px;
}
```

That means that when we set `font-size: 1rem;` it's the same as `font-size: 16px;`. So if we want to scale things out, we change one value and everything follows suit.

Let's see what that would look like with our card.

```css
h1 {
	font-family: 'Tangerine', cursive;
	font-weight: bold;
	font-size: 1.8rem;
	text-align: center;
}

.front h1 {
	padding: 3rem;
}

.back h1 {
	padding: 2rem;
}

p {
	font-family: 'Playfair Display', serif;
	padding: 1.8rem;
	font-size: 1rem;
	font-weight: normal;
	text-align: center;
}

button {
	padding: 1rem;
	font-size: 0.75rem;
}
```

![Image of rendered code above](https://thepracticaldev.s3.amazonaws.com/i/2z0tu5bbhyqqa04ss3kk.png)
![Image of rendered code above](https://thepracticaldev.s3.amazonaws.com/i/s8rw5h9bodltsbpxyg4v.png)

A nice touch would be to add some colour to the button when it's hovered over.

```css
button:hover {
	cursor: pointer;
	background-color: lightgray;
}
```

![Image of rendered code above](https://thepracticaldev.s3.amazonaws.com/i/2twcm93y5nw196fdbkc2.gif)

But hey, when the window is resized, it destroys the look of the card. Doesn't look that great.

![Image of rendered code above](https://thepracticaldev.s3.amazonaws.com/i/i2yrz9xshlkz9tfar3sx.png)

![Image of rendered code above](https://thepracticaldev.s3.amazonaws.com/i/9vn4szoe3b98jaz26lpd.png)

To fix it, we can use `min-` `max-` prefixes on `width` and `height`.

```css
container {
	perspective: 1000px;
	position: absolute;
	width: 60%;
	max-width: 30rem;
	min-width: 25rem;
	height: 60%;
	min-height: 17rem;
	max-height: 20rem;
	background: none;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
}
```

![Image of rendered code above](https://thepracticaldev.s3.amazonaws.com/i/tvx04wyfhdw7hq38vqkv.png)

And that's it! Hope you enjoyed the article! Feel free to comment and if you want to have a chat, reach out on Twitter.

Special thanks to [@perborgen](https://twitter.com/perborgen) for inspiring this post ;)
