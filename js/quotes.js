const quotes = [
  {
    quote: "A man travels the world over in search of what he needs and returns home to find it. ",
    author: "George Moore",
  },
  {
    quote: "Only I can change my life. No one can do it for me.",
    author: "Carol Burnett",
  },
  {
    quote: "When we were children, we used to think that when we were grown-up we would no longer be vulnerable. But to grow up is to accept vulnerability... To be alive is to be vulnerable.",
    author: "Madeleine L'Engle",
  },
  {
    quote: "We are born charming, fresh and spontaneous and must be civilized before we are fit to participate in society.",
    author: "Judith Martin",
  },
  {
    quote: "True life is lived when tiny changes occur.",
    author: "Leo Tolstoy",
  },
  {
    quote: "Breathe. Let go. And remind yourself that this very moment is the only one you know you have for sure.",
    author: "Oprah Winfrey",
  },
  {
    quote: "Create a definite plan for carrying out your desire and begin at once, whether you are ready or not, to put this plan into action.",
    author: "Napoleon Hill",
  },
  {
    quote: "Respect your efforts, respect yourself. Self-respect leads to self-discipline. When you have both firmly under your belt, that's real power.",
    author: "Clint Eastwood",
  },
  {
    quote: "You need chaos in your soul to give birth to a dancing star.",
    author: "Friedrich Nietzsche",
  },
  {
    quote: "Having once decided to achieve a certain task, achieve it at all costs of tedium and distaste. The gain in self-confidence of having accomplished a tiresome labor is immense.",
    author: "Arnold Bennett",
  },
  {
    quote: "He who can, does. He who cannot, teaches.",
    author: "George Bernard Shaw",
  },
  {
    quote: "He who has never hoped can never despair.",
    author: "George Bernard Shaw",
  },
  {
    quote: "You're alive. Do something. The directive in life, the moral imperative was so uncomplicated. It could be expressed in single words, not complete sentences. It sounded like this: Look. Listen. Choose. Act.",
    author: "Barbara Hall",
  },
  {
    quote: "Nothing great in the world has been accomplished without passion.",
    author: "Georg Wilhelm",
  },
  {
    quote: "Most of the important things in the world have been accomplished by people who have kept on trying when there seemed to be no hope at all.",
    author: "Dale Carnegie",
  },
  {
    quote: "Twenty years from now you will be more disappointed by the things you didn't do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover.",
    author: "Mark Twain",
  },
  {
    quote: "No man is good enough to govern another man without that other's consent.",
    author: "Abraham Lincoln",
  },
  {
    quote: "I'd rather be hated for who I am than be loved for who I'm not.",
    author: "Kurt Cobain",
  },
  {
    quote: "I know of no more encouraging fact than the unquestioned ability of a man to elevate his life by conscious endeavor.",
    author: "Henry David Thoreau",
  },
  {
    quote: "A friend should bear his friend's infirmities.",
    author: "William Shakespeare",
  },
  {
    quote: "Those who create are rare; those who cannot are numerous. Therefore, the latter are stronger.",
    author: "Gabriel Coco Chanel",
  },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;