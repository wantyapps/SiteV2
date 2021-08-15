exports.tellJoke = () => {
	const jokes = ["Two guys are busted stealing a calender. The both got 6 months", "Who knows about math and science and is always close by? An engi-near!", "What is a cat's favorite website? Reddot.com", "Why did the woman fall into the well? She couldn't see that well.", "Why didn't the chicken cross the road? Because It was eggshausted."];
	let randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
	return randomJoke;
}

exports.usage = () => {
	return 'Action usage: (options: joke, usage)'; // TODO: Add usage string
}