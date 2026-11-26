// Single source of truth for the business: used by the homepage and the receptionist.
// Sourced from kathysdogtraining.com.au (Home, About, Dog Behaviour Training, Dog Aggression
// Training, Workshops, Shop, Contact) and Google Maps (230 reviews, all five stars), Nov 2026.
// Kathy publishes no consultation fees: she confirms the fee when she confirms the session.

export const shop = {
  name: "Kathy's Dog Training",
  fullName: "Kathy's Dog Training & Behaviour Consulting",
  owner: "Kathy Kopellis McLeod",
  area: "Perth",
  phoneDisplay: "0452 273 188",
  phone: "61452273188",
  officeDisplay: "(08) 9345 5277",
  email: "kathy@kathysdogtraining.com.au",
  instagram: "https://www.instagram.com/dogbehaviourperth",
  facebook: "https://www.facebook.com/KathysDogTraining",
  website: "https://kathysdogtraining.com.au",
  rating: 5.0,
  reviewCount: 230,
  years: "25+",
};

/** Who can take a booking: Kathy is the only consultant (see schedule.pools). */
export type Pool = "kathy";

export type Service = {
  id: string;
  name: string;
  minutes: number;
  pool: Pool;
  short: string;
  text: string;
  where: string;
  /** The free phone chat needs no dog details beyond a line. */
  free: boolean;
};

// How long each appointment takes is a placeholder until Kathy confirms it.
export const services: Service[] = [
  {
    id: "call",
    name: "Free 10-minute phone chat",
    minutes: 10,
    pool: "kathy",
    short: "Tell Kathy what's going on and she'll recommend the right session.",
    text: "A free 10-minute call with Kathy to talk through your dog's behaviour and work out the best next step.",
    where: "Kathy calls you",
    free: true,
  },
  {
    id: "with-my-dogs",
    name: "Session with Kathy's dogs",
    minutes: 90,
    pool: "kathy",
    short: "For dogs that react to other dogs. You come to Kathy and work with her calm, experienced dogs.",
    text: "For reactivity and aggression towards other dogs. You come to Kathy, and your dog meets her dogs one at a time in a safe, controlled setting. Unlike any other consultation in WA.",
    where: "At Kathy's, Perth (address sent with your confirmation)",
    free: false,
  },
  {
    id: "home",
    name: "Home behaviour session",
    minutes: 90,
    pool: "kathy",
    short: "Kathy comes to you for separation anxiety, fear, aggression to people or dogs fighting at home.",
    text: "Kathy visits your home for separation anxiety, fearful behaviour, aggression towards people (including visitors and your own family), dogs in the same household that fight, and compulsive behaviours.",
    where: "Your home, Perth",
    free: false,
  },
];

export const serviceNames = services.map((s) => s.name);
export const serviceByName = (name: string) => services.find((s) => s.name === name);

export const issues = [
  { title: "Reactive to other dogs", text: "Barking, lunging and growling on walks. Your dog learns calm with Kathy's dogs, step by step." },
  { title: "Aggression", text: "Towards other dogs, visitors or the family. Safe strategies for everyone, without force." },
  { title: "Separation anxiety", text: "Distress when left alone, often with neighbours hearing it. Kathy helps your dog cope in their own company." },
  { title: "Fear", text: "Of strangers, men, children, noises or objects. Behaviour modification to help your dog feel safe." },
  { title: "Dogs that fight at home", text: "Two dogs in one household that clash. Acting early keeps everyone safer." },
  { title: "Compulsive behaviours", text: "Tail chasing, licking, light and shadow chasing, fly snapping. The sooner the better." },
];

// What clients say again and again in 230 five-star reviews, and what the website promises
export const promises = [
  { title: `${shop.years} years' experience`, text: "A certified dog behaviour consultant, called on by vets, vet behaviourists and other trainers with their own dogs." },
  { title: "No force, no harsh tools", text: "Positive, dog and people-friendly methods. Food is used strategically, or not at all if you prefer." },
  { title: "Her dogs do the teaching", text: "Kathy's calm, experienced dogs help reactive dogs learn that other dogs are safe." },
  { title: "No judgement", text: "Kathy never belittles you or your dog. You'll leave confident, with a plan that fits your dog." },
];

export const products = [
  { name: "Reactive Rover® online program", price: "", text: "Kathy's techniques for reactive dogs, online, at your own pace." },
  { name: "Resource Pack Special", price: "$70", text: "Four of Kathy's books and her audio CD together." },
  { name: "Watch My Manners", price: "$34.45", text: "Kathy's book on the language of dogs." },
  { name: "How to Introduce Your Dog to Your Baby", price: "$29.45", text: "Getting ready for a new arrival." },
  { name: "10 Top Tips to a Happier Dog (audio CD)", price: "$27.45", text: "" },
  { name: "105 Great Ideas to Having a Well Behaved Dog", price: "$15.45", text: "" },
  { name: "Dominance & Dogs Dos and Don'ts", price: "$5.95", text: "Booklet." },
  { name: "Chilkat® semi-slip collar", price: "$44", text: "" },
];

export const faqs = [
  { q: "How much is a session?", a: "Kathy tailors each session to your dog, so she confirms the fee when she confirms your booking. Clients often mention her reasonable prices in their reviews." },
  { q: "Do I need to bring anything?", a: "Your dog on a lead, a few treats they love, and any questions. Kathy explains everything as you go." },
  { q: "My dog is aggressive. Is it safe?", a: "Yes. For dog-to-dog issues, Kathy introduces your dog to her own dogs one at a time in a controlled setting. For aggression towards people, she comes to your home." },
  { q: "Do you run classes or workshops?", a: "Kathy runs small workshops and seminars around Perth through the year, and private workshops for your own group. Follow her socials for the next dates." },
  { q: "Where are you based?", a: "Perth. Sessions with Kathy's dogs are at her place, and home sessions are anywhere around Perth." },
];

export const reviews = [
  {
    name: "Rachel Van Lier",
    tag: "Chili, after an attack",
    text: "Being able to introduce so many of Kathy's dogs to Chili in a safe, controlled environment was invaluable in rebuilding her confidence. Most importantly, it gave us the confidence to see that Chili was never the problem.",
  },
  {
    name: "Hilda Brogden",
    tag: "Dogue de Bordeaux",
    text: "In the past 18 months we have worked with trainers for obedience, a behaviourist, and have tried medication and all sorts of things. Then we went to see Kathy.",
  },
  {
    name: "Monique Parsons",
    tag: "Chloe & Pebbles",
    text: "We were nervous going in, however Kathy instilled confidence in us and not once made us feel like we have neglected our dog's behaviours. Such simple changes have created happier dogs and owners.",
  },
  {
    name: "Faith Karlsson",
    tag: "Scud",
    text: "What a privilege it is to be able to introduce my dog to so many of Kathy's lovely huskies. No longer do I avoid dogs and spend the walk in a half panic attack.",
  },
];

export const smsLink = (text?: string) => `sms:+${shop.phone}${text ? `?&body=${encodeURIComponent(text)}` : ""}`;
export const telLink = `tel:+${shop.phone}`;
