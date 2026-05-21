/* eslint-disable react-refresh/only-export-components */
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import PageMeta from "../PageMeta.jsx";
import QuoteActions from "./QuoteActions.jsx";

/*
Make sure these keys EXACTLY match your route links:
<Link to="/explore/quotes" />
<Link to="/explore/facts" />
*/

export const ENDPOINTS = {
    motivation: "https://api-motivation.vercel.app/api/mood/",
    jokes: "https://jokes-api-steel.vercel.app/api/jokes",
    calm: "https://api-motivation.vercel.app/api/mood",
    facts: "https://fun-facts-quote-api.vercel.app/api/funFacts"
};

const FAVORITES_STORAGE_KEY = "dailyNuggetFavorites";

const randomQuotes = [
  { text: "A steady day can still become a turning point.", author: "The Daily Nugget" },
  { text: "Begin before the perfect mood arrives.", author: "The Daily Nugget" },
  { text: "Small choices are quiet architects.", author: "The Daily Nugget" },
  { text: "The next right step is enough light for now.", author: "The Daily Nugget" },
  { text: "Progress often looks ordinary while it is happening.", author: "The Daily Nugget" },
  { text: "Your attention is one of the few things the day cannot take without permission.", author: "The Daily Nugget" },
  { text: "A calm mind makes room for better decisions.", author: "The Daily Nugget" },
  { text: "You can respect the size of a challenge without surrendering to it.", author: "The Daily Nugget" },
  { text: "Consistency is confidence with a schedule.", author: "The Daily Nugget" },
  { text: "The habit you repeat becomes the story you believe.", author: "The Daily Nugget" },
  { text: "A little discipline now can make tomorrow feel kinder.", author: "The Daily Nugget" },
  { text: "You do not need a dramatic reset to make a better choice.", author: "The Daily Nugget" },
  { text: "Energy follows action more often than action follows energy.", author: "The Daily Nugget" },
  { text: "One honest effort is a strong place to restart.", author: "The Daily Nugget" },
  { text: "Your future is built in minutes that seem too small to matter.", author: "The Daily Nugget" },
  { text: "The quiet work still counts.", author: "The Daily Nugget" },
  { text: "A rough morning does not get to vote on the whole day.", author: "The Daily Nugget" },
  { text: "What you practice under pressure becomes easier in peace.", author: "The Daily Nugget" },
  { text: "Choose the action that makes self-respect easier tonight.", author: "The Daily Nugget" },
  { text: "A good direction matters more than a perfect pace.", author: "The Daily Nugget" },
  { text: "A goal becomes real when it survives an inconvenient day.", author: "The Daily Nugget" },
  { text: "Start simple, stay honest, and keep moving.", author: "The Daily Nugget" },
  { text: "The day changes when you stop waiting for permission to begin.", author: "The Daily Nugget" },
  { text: "You are allowed to build slowly and still build well.", author: "The Daily Nugget" },
];

/*const funFacts = [
  { text: "Honey never spoils when it is stored properly.", author: null },
  { text: "Bananas are berries, but strawberries are not true botanical berries.", author: null },
  { text: "Octopuses have three hearts.", author: null },
  { text: "A group of flamingos is called a flamboyance.", author: null },
  { text: "The shortest war in recorded history lasted less than an hour.", author: null },
  { text: "Sharks are older than trees in Earth's history.", author: null },
  { text: "The Eiffel Tower can grow taller in hot weather because metal expands.", author: null },
  { text: "Wombat droppings are cube-shaped.", author: null },
  { text: "A day on Venus is longer than a year on Venus.", author: null },
  { text: "The human nose can detect a huge range of different scent molecules.", author: null },
  { text: "Some turtles can breathe through specialized tissue near their tails.", author: null },
  { text: "The first oranges were not necessarily orange; many early varieties were greenish.", author: null },
  { text: "Sound travels faster in water than it does in air.", author: null },
  { text: "Lightning can heat the air around it to temperatures hotter than the surface of the sun.", author: null },
  { text: "The word alphabet comes from the first two Greek letters: alpha and beta.", author: null },
  { text: "A cloud can weigh more than a million pounds because of the water droplets inside it.", author: null },
  { text: "Butterflies taste with sensors on their feet.", author: null },
  { text: "The moon is slowly moving away from Earth by a small amount each year.", author: null },
  { text: "Some metals are so reactive they can burn when exposed to water.", author: null },
  { text: "The Pacific Ocean is larger than all of Earth's land area combined.", author: null },
  { text: "A single strand of spider silk can be stronger than steel by weight.", author: null },
  { text: "The heart of a blue whale is roughly the size of a small car.", author: null },
  { text: "There are more possible chess games than atoms in the observable universe.", author: null },
  { text: "Glass is not a liquid at room temperature; it is an amorphous solid.", author: null },
];*/

const affirmations = [
  { text: "I can take one steady step today.", author: "The Daily Nugget" },
  { text: "I am allowed to grow at a human pace.", author: "The Daily Nugget" },
  { text: "I can be kind to myself while still expecting effort.", author: "The Daily Nugget" },
  { text: "I do not need a perfect day to make a good choice.", author: "The Daily Nugget" },
  { text: "I am building trust with myself through small actions.", author: "The Daily Nugget" },
  { text: "I can pause before I react.", author: "The Daily Nugget" },
  { text: "I am capable of returning to what matters.", author: "The Daily Nugget" },
  { text: "I can do difficult things without rushing myself.", author: "The Daily Nugget" },
  { text: "My effort matters, even when results take time.", author: "The Daily Nugget" },
  { text: "I can choose progress over perfection.", author: "The Daily Nugget" },
  { text: "I am not behind; I am still becoming.", author: "The Daily Nugget" },
  { text: "I can protect my peace and still show up fully.", author: "The Daily Nugget" },
  { text: "I am learning how to support myself better.", author: "The Daily Nugget" },
  { text: "I can start again without shame.", author: "The Daily Nugget" },
  { text: "I have handled hard moments before, and I can handle this one.", author: "The Daily Nugget" },
  { text: "I can be proud of effort that no one else sees.", author: "The Daily Nugget" },
  { text: "I am worthy of patience while I improve.", author: "The Daily Nugget" },
  { text: "I can make today lighter by choosing one clear next step.", author: "The Daily Nugget" },
  { text: "I am more than one mistake, mood, or moment.", author: "The Daily Nugget" },
  { text: "I can trust myself to keep learning.", author: "The Daily Nugget" },
  { text: "I do not have to prove everything today.", author: "The Daily Nugget" },
  { text: "I can bring calm energy into the next thing I do.", author: "The Daily Nugget" },
  { text: "I am allowed to rest without quitting on myself.", author: "The Daily Nugget" },
  { text: "I can choose a better thought and a better action.", author: "The Daily Nugget" },
];

const presidentQuotes = [
  { text: "Honesty is the first chapter in the book of wisdom.", author: "Thomas Jefferson" },
  { text: "The harder the conflict, the greater the triumph.", author: "George Washington" },
  { text: "The only thing we have to fear is fear itself.", author: "Franklin D. Roosevelt" },
  { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
  { text: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt" },
  { text: "Ask not what your country can do for you; ask what you can do for your country.", author: "John F. Kennedy" },
  { text: "It is better to offer no excuse than a bad one.", author: "George Washington" },
  { text: "Perseverance and spirit have done wonders in all ages.", author: "George Washington" },
  { text: "Liberty, when it begins to take root, is a plant of rapid growth.", author: "George Washington" },
  { text: "Associate with men of good quality if you esteem your own reputation.", author: "George Washington" },
  { text: "Truth will ultimately prevail where there is pains to bring it to light.", author: "George Washington" },
  { text: "Determine never to be idle.", author: "Thomas Jefferson" },
  { text: "I like the dreams of the future better than the history of the past.", author: "Thomas Jefferson" },
  { text: "When angry, count ten before you speak; if very angry, count a hundred.", author: "Thomas Jefferson" },
  { text: "Whenever you do a thing, act as if all the world were watching.", author: "Thomas Jefferson" },
  { text: "Never spend your money before you have it.", author: "Thomas Jefferson" },
  { text: "Try and fail, but do not fail to try.", author: "John Quincy Adams" },
  { text: "Patience and perseverance have a magical effect before which difficulties disappear.", author: "John Quincy Adams" },
  { text: "Courage and perseverance have a magical talisman, before which difficulties disappear.", author: "John Quincy Adams" },
  { text: "If your actions inspire others to dream more, learn more, do more, and become more, you are a leader.", author: "John Quincy Adams" },
  { text: "Always vote for principle, though you may vote alone.", author: "John Quincy Adams" },
  { text: "Leave nothing for tomorrow which can be done today.", author: "Abraham Lincoln" },
  { text: "The best way to predict your future is to create it.", author: "Abraham Lincoln" },
  { text: "I walk slowly, but I never walk backward.", author: "Abraham Lincoln" },
  { text: "Whatever you are, be a good one.", author: "Abraham Lincoln" },
  { text: "Most folks are as happy as they make up their minds to be.", author: "Abraham Lincoln" },
  { text: "Give me six hours to chop down a tree and I will spend the first four sharpening the axe.", author: "Abraham Lincoln" },
  { text: "I do the very best I know how, the very best I can.", author: "Abraham Lincoln" },
  { text: "It often requires more courage to dare to do right than to fear to do wrong.", author: "Abraham Lincoln" },
  { text: "You cannot escape the responsibility of tomorrow by evading it today.", author: "Abraham Lincoln" },
  { text: "Far and away the best prize that life offers is the chance to work hard at work worth doing.", author: "Theodore Roosevelt" },
  { text: "Keep your eyes on the stars, and your feet on the ground.", author: "Theodore Roosevelt" },
  { text: "No one cares how much you know, until they know how much you care.", author: "Theodore Roosevelt" },
  { text: "The most important single ingredient in the formula of success is knowing how to get along with people.", author: "Theodore Roosevelt" },
  { text: "Nobody cares how much you know until they know how much you care.", author: "Theodore Roosevelt" },
  { text: "Speak softly and carry a big stick; you will go far.", author: "Theodore Roosevelt" },
  { text: "Comparison is the thief of joy.", author: "Theodore Roosevelt" },
  { text: "A vote is like a rifle; its usefulness depends upon the character of the user.", author: "Theodore Roosevelt" },
  { text: "The truth is found when men are free to pursue it.", author: "Franklin D. Roosevelt" },
  { text: "Happiness lies in the joy of achievement and the thrill of creative effort.", author: "Franklin D. Roosevelt" },
  { text: "The only limit to our realization of tomorrow will be our doubts of today.", author: "Franklin D. Roosevelt" },
  { text: "Rules are not necessarily sacred, principles are.", author: "Franklin D. Roosevelt" },
  { text: "Men are not prisoners of fate, but only prisoners of their own minds.", author: "Franklin D. Roosevelt" },
  { text: "We cannot always build the future for our youth, but we can build our youth for the future.", author: "Franklin D. Roosevelt" },
  { text: "Accomplishment will prove to be a journey, not a destination.", author: "Dwight D. Eisenhower" },
  { text: "Plans are nothing; planning is everything.", author: "Dwight D. Eisenhower" },
  { text: "Leadership is the art of getting someone else to do something you want done because he wants to do it.", author: "Dwight D. Eisenhower" },
  { text: "Efforts and courage are not enough without purpose and direction.", author: "John F. Kennedy" },
  { text: "One person can make a difference, and everyone should try.", author: "John F. Kennedy" },
  { text: "Leadership and learning are indispensable to each other.", author: "John F. Kennedy" },
];

const loveQuotes = [
  { text: "Love looks not with the eyes, but with the mind.", author: "William Shakespeare" },
  { text: "Love all, trust a few, do wrong to none.", author: "William Shakespeare" },
  { text: "The course of true love never did run smooth.", author: "William Shakespeare" },
  { text: "They do not love that do not show their love.", author: "William Shakespeare" },
  { text: "Love sought is good, but given unsought is better.", author: "William Shakespeare" },
  { text: "Doubt thou the stars are fire, but never doubt I love.", author: "William Shakespeare" },
  { text: "My bounty is as boundless as the sea, my love as deep.", author: "William Shakespeare" },
  { text: "Speak low, if you speak love.", author: "William Shakespeare" },
  { text: "Love is a smoke made with the fume of sighs.", author: "William Shakespeare" },
  { text: "Let me not to the marriage of true minds admit impediments.", author: "William Shakespeare" },
  { text: "Life without love is like a tree without blossoms or fruit.", author: "Kahlil Gibran" },
  { text: "Love gives naught but itself and takes naught but from itself.", author: "Kahlil Gibran" },
  { text: "Love possesses not nor would it be possessed.", author: "Kahlil Gibran" },
  { text: "Love one another, but make not a bond of love.", author: "Kahlil Gibran" },
  { text: "Ever has it been that love knows not its own depth until the hour of separation.", author: "Kahlil Gibran" },
  { text: "Let there be spaces in your togetherness.", author: "Kahlil Gibran" },
  { text: "To love another person is to see the face of God.", author: "Victor Hugo" },
  { text: "The greatest happiness of life is the conviction that we are loved.", author: "Victor Hugo" },
  { text: "Life is the flower for which love is the honey.", author: "Victor Hugo" },
  { text: "To love or have loved, that is enough.", author: "Victor Hugo" },
  { text: "There is always some madness in love.", author: "Friedrich Nietzsche" },
  { text: "Love is not consolation. It is light.", author: "Friedrich Nietzsche" },
  { text: "We love life, not because we are used to living but because we are used to loving.", author: "Friedrich Nietzsche" },
  { text: "The heart has its reasons which reason knows not.", author: "Blaise Pascal" },
  { text: "Love is the poetry of the senses.", author: "Honoré de Balzac" },
  { text: "True love is eternal, infinite, and always like itself.", author: "Honoré de Balzac" },
  { text: "A loving heart is the truest wisdom.", author: "Charles Dickens" },
  { text: "No one is useless in this world who lightens the burdens of another.", author: "Charles Dickens" },
  { text: "Have a heart that never hardens, and a temper that never tires.", author: "Charles Dickens" },
  { text: "There is nothing half so sweet in life as love's young dream.", author: "Thomas Moore" },
  { text: "Friendship is love without his wings.", author: "Lord Byron" },
  { text: "Love will find a way through paths where wolves fear to prey.", author: "Lord Byron" },
  { text: "She walks in beauty, like the night.", author: "Lord Byron" },
  { text: "Who, being loved, is poor?", author: "Oscar Wilde" },
  { text: "Keep love in your heart.", author: "Oscar Wilde" },
  { text: "A flower cannot blossom without sunshine, and man cannot live without love.", author: "Max Müller" },
  { text: "Many waters cannot quench love, neither can the floods drown it.", author: "Song of Solomon" },
  { text: "Let all that you do be done in love.", author: "1 Corinthians" },
  { text: "There is no fear in love; but perfect love casteth out fear.", author: "1 John" },
  { text: "Above all things have fervent charity among yourselves.", author: "1 Peter" },
  { text: "Love is the master key that opens the gates of happiness.", author: "Oliver Wendell Holmes Sr." },
  { text: "The sound of a kiss is not so loud as that of a cannon, but its echo lasts a great deal longer.", author: "Oliver Wendell Holmes Sr." },
  { text: "Love is enough.", author: "William Morris" },
  { text: "If you wish to be loved, love.", author: "Seneca" },
  { text: "Love comforteth like sunshine after rain.", author: "William Shakespeare" },
  { text: "There is no remedy for love but to love more.", author: "Henry David Thoreau" },
  { text: "Love must be as much a light as it is a flame.", author: "Henry David Thoreau" },
  { text: "The only reward of virtue is virtue; the only way to have a friend is to be one.", author: "Ralph Waldo Emerson" },
  { text: "The ornament of a house is the friends who frequent it.", author: "Ralph Waldo Emerson" },
  { text: "All mankind love a lover.", author: "Ralph Waldo Emerson" },
];

const chickENuggetQuotes = [
  { text: "Tiny steps still leave footprints.", author: "Chick E. Nugget" },
  { text: "You do not need to be golden every day. Crispy enough counts.", author: "Chick E. Nugget" },
  { text: "A little courage before breakfast can change the whole menu.", author: "Chick E. Nugget" },
  { text: "Do the next good thing. Then do the next one after that.", author: "Chick E. Nugget" },
  { text: "Your spark does not have to be loud to be real.", author: "Chick E. Nugget" },
  { text: "Every day has a nugget in it. Some days make you dig.", author: "Chick E. Nugget" },
  { text: "Small wins are still wins. Stack them like dipping cups.", author: "Chick E. Nugget" },
  { text: "You can be tender and still be tough enough for the day.", author: "Chick E. Nugget" },
  { text: "Progress is not always crispy. Sometimes it is just warm.", author: "Chick E. Nugget" },
  { text: "Start where you are, even if where you are is the corner of the tray.", author: "Chick E. Nugget" },
  { text: "Your best effort today can be smaller than yesterday and still matter.", author: "Chick E. Nugget" },
  { text: "Confidence is built one brave bite at a time.", author: "Chick E. Nugget" },
  { text: "Do not wait for perfect seasoning to begin.", author: "Chick E. Nugget" },
  { text: "Rest is part of the recipe.", author: "Chick E. Nugget" },
  { text: "You are allowed to be a work in progress and still be proud.", author: "Chick E. Nugget" },
  { text: "A setback is not the end of the basket.", author: "Chick E. Nugget" },
  { text: "The dip is temporary. The nugget remains.", author: "Chick E. Nugget" },
  { text: "Keep showing up. That is how ordinary days become momentum.", author: "Chick E. Nugget" },
  { text: "Even a tiny crunch can echo.", author: "Chick E. Nugget" },
  { text: "You do not need applause to be improving.", author: "Chick E. Nugget" },
  { text: "If today feels heavy, carry just the next five minutes.", author: "Chick E. Nugget" },
  { text: "Being kind to yourself is not quitting. It is refueling.", author: "Chick E. Nugget" },
  { text: "Every brave choice adds flavor.", author: "Chick E. Nugget" },
  { text: "You are more than the crumbs from a rough day.", author: "Chick E. Nugget" },
  { text: "Some dreams need patience before they get crispy.", author: "Chick E. Nugget" },
  { text: "Protect your peace like it is the last sauce packet.", author: "Chick E. Nugget" },
  { text: "You can wobble and still move forward.", author: "Chick E. Nugget" },
  { text: "A little discipline now makes tomorrow taste better.", author: "Chick E. Nugget" },
  { text: "Do not shrink your dream to fit someone else's plate.", author: "Chick E. Nugget" },
  { text: "The first step is often the crunchiest.", author: "Chick E. Nugget" },
  { text: "You are not behind. You are still cooking.", author: "Chick E. Nugget" },
  { text: "Your pace counts, even when it is quiet.", author: "Chick E. Nugget" },
  { text: "Let today be simple: one task, one breath, one nugget.", author: "Chick E. Nugget" },
  { text: "A good day can start with a small decision.", author: "Chick E. Nugget" },
  { text: "You do not have to feel ready to begin.", author: "Chick E. Nugget" },
  { text: "The version of you trying today deserves respect.", author: "Chick E. Nugget" },
  { text: "Turn the lesson into seasoning.", author: "Chick E. Nugget" },
  { text: "When motivation runs low, let routine carry the tray.", author: "Chick E. Nugget" },
  { text: "One honest effort is better than ten perfect excuses.", author: "Chick E. Nugget" },
  { text: "Be the kind of golden that comes from patience.", author: "Chick E. Nugget" },
  { text: "Not every win is loud. Some just sit warmly in your chest.", author: "Chick E. Nugget" },
  { text: "You can reset without starting from zero.", author: "Chick E. Nugget" },
  { text: "The day is not ruined. It is still available.", author: "Chick E. Nugget" },
  { text: "Your future self is cheering for this tiny choice.", author: "Chick E. Nugget" },
  { text: "Stay crispy in spirit, soft where it matters.", author: "Chick E. Nugget" },
  { text: "A little hope can season a whole week.", author: "Chick E. Nugget" },
  { text: "You are allowed to grow without announcing it.", author: "Chick E. Nugget" },
  { text: "Small courage before doubt gets loud.", author: "Chick E. Nugget" },
  { text: "Finish the next bite before judging the whole meal.", author: "Chick E. Nugget" },
  { text: "Every day gives you one fresh nugget to find.", author: "Chick E. Nugget" },
];

const entrepreneurQuotes = [
  { text: "The secret of getting ahead is getting started.", author: "Mark Twain" },
  { text: "Well done is better than well said.", author: "Benjamin Franklin" },
  { text: "An investment in knowledge pays the best interest.", author: "Benjamin Franklin" },
  { text: "Energy and persistence conquer all things.", author: "Benjamin Franklin" },
  { text: "Diligence is the mother of good luck.", author: "Benjamin Franklin" },
  { text: "Lost time is never found again.", author: "Benjamin Franklin" },
  { text: "Beware of little expenses; a small leak will sink a great ship.", author: "Benjamin Franklin" },
  { text: "He that can have patience can have what he will.", author: "Benjamin Franklin" },
  { text: "Without continual growth and progress, such words as improvement, achievement, and success have no meaning.", author: "Benjamin Franklin" },
  { text: "Tell me and I forget. Teach me and I remember. Involve me and I learn.", author: "Benjamin Franklin" },
  { text: "I find out what the world needs. Then I go ahead and try to invent it.", author: "Thomas Edison" },
  { text: "Genius is one percent inspiration and ninety-nine percent perspiration.", author: "Thomas Edison" },
  { text: "There is no substitute for hard work.", author: "Thomas Edison" },
  { text: "Opportunity is missed by most people because it is dressed in overalls and looks like work.", author: "Thomas Edison" },
  { text: "I have not failed. I've just found ten thousand ways that won't work.", author: "Thomas Edison" },
  { text: "Your worth consists in what you are and not in what you have.", author: "Thomas Edison" },
  { text: "Everything comes to him who hustles while he waits.", author: "Thomas Edison" },
  { text: "Vision without execution is hallucination.", author: "Thomas Edison" },
  { text: "If we did all the things we are capable of, we would astound ourselves.", author: "Thomas Edison" },
  { text: "The value of an idea lies in the using of it.", author: "Thomas Edison" },
  { text: "Whether you think you can, or you think you can't, you're right.", author: "Henry Ford" },
  { text: "Failure is simply the opportunity to begin again, this time more intelligently.", author: "Henry Ford" },
  { text: "Quality means doing it right when no one is looking.", author: "Henry Ford" },
  { text: "Coming together is a beginning; keeping together is progress; working together is success.", author: "Henry Ford" },
  { text: "Obstacles are those frightful things you see when you take your eyes off your goal.", author: "Henry Ford" },
  { text: "You can't build a reputation on what you are going to do.", author: "Henry Ford" },
  { text: "Don't find fault, find a remedy.", author: "Henry Ford" },
  { text: "Nothing is particularly hard if you divide it into small jobs.", author: "Henry Ford" },
  { text: "If everyone is moving forward together, then success takes care of itself.", author: "Henry Ford" },
  { text: "The air is full of ideas. They are knocking you in the head all the time.", author: "Henry Ford" },
  { text: "Do your duty and a little more and the future will take care of itself.", author: "Andrew Carnegie" },
  { text: "No person will make a great business who wants to do it all himself.", author: "Andrew Carnegie" },
  { text: "Concentration is my motto: first honesty, then industry, then concentration.", author: "Andrew Carnegie" },
  { text: "The men who have succeeded are men who have chosen one line and stuck to it.", author: "Andrew Carnegie" },
  { text: "The average person puts only twenty-five percent of his energy into his work.", author: "Andrew Carnegie" },
  { text: "There is little success where there is little laughter.", author: "Andrew Carnegie" },
  { text: "You cannot push anyone up the ladder unless he is willing to climb.", author: "Andrew Carnegie" },
  { text: "The best way to make your dreams come true is to wake up.", author: "Paul Valéry" },
  { text: "Excellence is to do a common thing in an uncommon way.", author: "Booker T. Washington" },
  { text: "Do not wait to strike till the iron is hot; make it hot by striking.", author: "William Butler Yeats" },
  { text: "The man who moves a mountain begins by carrying away small stones.", author: "Confucius" },
  { text: "Choose a job you love, and you will never have to work a day in your life.", author: "Confucius" },
  { text: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius" },
  { text: "The superior man acts before he speaks, and afterwards speaks according to his action.", author: "Confucius" },
  { text: "Success depends upon previous preparation.", author: "Confucius" },
  { text: "To see what is right and not do it is want of courage.", author: "Confucius" },
  { text: "He who will not economize will have to agonize.", author: "Confucius" },
  { text: "The journey of a thousand miles begins with one step.", author: "Lao Tzu" },
  { text: "Great acts are made up of small deeds.", author: "Lao Tzu" },
  { text: "Success is to be measured not so much by the position one has reached as by the obstacles overcome.", author: "Booker T. Washington" },
];

const wisdomQuotes = [
  { text: "A clear mind is easier to trust than a loud mood.", author: "The Daily Nugget" },
  { text: "The right choice often feels smaller than the problem.", author: "The Daily Nugget" },
  { text: "Patience is not delay; it is care with timing.", author: "The Daily Nugget" },
  { text: "Listen long enough for the lesson to finish speaking.", author: "The Daily Nugget" },
  { text: "A wiser day begins when you stop arguing with what already happened.", author: "The Daily Nugget" },
  { text: "Do not confuse urgency with importance.", author: "The Daily Nugget" },
  { text: "The answer gets quieter when pride gets louder.", author: "The Daily Nugget" },
  { text: "Good judgment grows from honest review, not perfect memory.", author: "The Daily Nugget" },
  { text: "A useful mistake is one you let teach you.", author: "The Daily Nugget" },
  { text: "Wisdom often starts as the pause before a reaction.", author: "The Daily Nugget" },
  { text: "Protect the habits that protect your peace.", author: "The Daily Nugget" },
  { text: "The easiest answer is not always the kindest one.", author: "The Daily Nugget" },
  { text: "You can be right and still need to be gentle.", author: "The Daily Nugget" },
  { text: "Notice what keeps repeating; it may be asking for attention.", author: "The Daily Nugget" },
  { text: "A better question can change the whole room.", author: "The Daily Nugget" },
  { text: "You do not have to answer every moment at full volume.", author: "The Daily Nugget" },
  { text: "Choose what still makes sense after you calm down.", author: "The Daily Nugget" },
  { text: "The lesson is easier to carry when you put down the shame.", author: "The Daily Nugget" },
  { text: "Not every open door deserves your energy.", author: "The Daily Nugget" },
  { text: "A boundary is wisdom with a backbone.", author: "The Daily Nugget" },
  { text: "The future listens closely to what you repeat today.", author: "The Daily Nugget" },
  { text: "Clarity likes quiet, space, and honest questions.", author: "The Daily Nugget" },
  { text: "If the pattern is expensive, the lesson is valuable.", author: "The Daily Nugget" },
  { text: "A wise reset is still progress.", author: "The Daily Nugget" },
];

export const LOCAL_CATEGORIES = {
  quotes: {
    title: "Random Quotes",
    description: "Explore random quotes from The Daily Nugget.",
    items: randomQuotes,
  },
  /*facts: {
    title: "Fun Facts",
    description: "Quick curiosity hits and bite-sized facts from The Daily Nugget.",
    items: funFacts,
  },*/
  affirmations: {
    title: "Affirmations",
    description: "Simple affirmations for confidence, calm, and daily self-trust.",
    items: affirmations,
  },
  presidents: {
    title: "President Quotes",
    description: "Leadership, responsibility, courage, and civic-minded quotes from U.S. presidents.",
    items: presidentQuotes,
  },
  love: {
    title: "Love Quotes",
    description: "Quotes about kindness, relationships, friendship, care, and emotional courage.",
    items: loveQuotes,
  },
  "chick-e-nugget-quotes": {
    title: "Chick E. Nugget Quotes",
    description: "Original motivational nuggets written for The Daily Nugget and Chick E. Nugget fans.",
    items: chickENuggetQuotes,
  },
  entrepreneurs: {
    title: "Entrepreneur Quotes",
    description: "Business-minded quotes for builders, creators, founders, side hustlers, and people starting from zero.",
    items: entrepreneurQuotes,
  },
  wisdom: {
    title: "Wisdom Quotes",
    description: "Clear reminders for better choices, calm perspective, and everyday judgment.",
    items: wisdomQuotes,
  },
  favorites: {
    title: "Favorite Quotes",
    description: "Revisit the nuggets you saved from around the site.",
    items: [],
  },
};

export const CATEGORY_CONTENT = {
  quotes: {
    intro: [
      "Random quotes are useful when you want a quick reset without choosing a specific mood first. This page brings together short thoughts that can work as journal starters, conversation prompts, morning reminders, or a quick pause during a busy day.",
      "The Daily Nugget treats each quote as a small practical signal rather than a decoration. Read one, ask what it is pointing toward, and use it to choose a small next action.",
    ],
    faq: [
      {
        question: "What makes a random quote useful?",
        answer: "A useful quote gives you a fresh angle quickly. It does not have to solve the whole problem; it only needs to help you notice one better next step.",
      },
      {
        question: "How often should I read these quotes?",
        answer: "A daily rhythm works best. One quote with a little reflection usually does more than scrolling through dozens without pausing.",
      },
    ],
  },
  motivation: {
    intro: [
      "Motivational quotes are for the moments when starting feels heavier than the work itself. They help turn a broad goal into something smaller, clearer, and easier to begin.",
      "This category is built around effort, discipline, courage, and follow-through. Use it when you need a nudge to begin, continue, or return after falling out of rhythm.",
    ],
    faq: [
      {
        question: "Can motivation actually help build habits?",
        answer: "Motivation helps most when it is paired with a small behavior. Use the feeling as a spark, then let routine carry the rest.",
      },
      {
        question: "What should I do when motivation fades?",
        answer: "Lower the size of the task. A short action done consistently is more powerful than a perfect plan you never start.",
      },
    ],
  },
  affirmations: {
    intro: [
      "Affirmations are short reminders that help shape how you speak to yourself. They work best when they are believable, specific, and tied to the kind of person you are trying to become.",
      "Use this page when you need steadiness, confidence, or a calmer internal voice. The goal is not pretending everything is perfect; it is practicing a better way to meet the day.",
    ],
    faq: [
      {
        question: "Do affirmations have to feel true immediately?",
        answer: "No. A good affirmation should feel possible, not fake. It can point toward the mindset you are practicing.",
      },
      {
        question: "When is the best time to use affirmations?",
        answer: "They are especially helpful in the morning, before a difficult task, or after a stressful moment when your self-talk needs a reset.",
      },
    ],
  },
  jokes: {
    intro: [
      "Jokes give the site some breathing room. A quick laugh can break tension, reset your mood, and make the day feel a little less stiff.",
      "This page is intentionally light. Use it when you want a small mood lift between deeper quotes, games, or daily motivation.",
    ],
    faq: [
      {
        question: "Why include jokes on a motivational site?",
        answer: "Motivation is easier to return to when the experience feels enjoyable. Humor keeps the site from becoming too heavy.",
      },
      {
        question: "Are these jokes meant to be family-friendly?",
        answer: "The goal is to keep the humor broadly approachable and easy to share.",
      },
    ],
  },
  facts: {
    intro: [
      "Fun facts are quick curiosity sparks. They give visitors something interesting to learn in a small amount of time, which fits the Daily Nugget idea of useful bite-sized content.",
      "This category works well when you want a mental refresh that is not strictly motivational. Curiosity can be its own kind of momentum.",
    ],
    faq: [
      {
        question: "Why do fun facts belong beside quotes?",
        answer: "Both are small pieces of content that can shift attention. Quotes spark reflection; facts spark curiosity.",
      },
      {
        question: "Can fun facts help with daily habits?",
        answer: "Yes. They make returning to the site feel rewarding, which can support the habit of checking in each day.",
      },
    ],
  },
  calm: {
    intro: [
      "Calm quotes are for slowing down when the day feels loud. They are meant to create a little space between what is happening and how you respond.",
      "Use this category for grounding, reflection, and gentler motivation. Not every useful quote needs to push; some help by helping you soften your grip.",
    ],
    faq: [
      {
        question: "Are calm quotes the same as affirmations?",
        answer: "They overlap, but calm quotes focus more on slowing down and creating perspective. Affirmations focus more on self-belief and inner language.",
      },
      {
        question: "How should I use this category during stress?",
        answer: "Pick one quote, breathe slowly, and ask what response would protect your peace without avoiding responsibility.",
      },
    ],
  },
  presidents: {
    intro: [
      "President quotes bring together ideas about leadership, responsibility, service, courage, and decision-making. The best presidential quotes endure because they speak beyond politics and into character.",
      "This page focuses on quotes that can be used for reflection, school projects, speeches, leadership lessons, and daily motivation. Read them as prompts for how people act when the stakes are high.",
    ],
    faq: [
      {
        question: "Why read president quotes?",
        answer: "They often compress lessons about public responsibility, pressure, and long-term thinking into memorable lines.",
      },
      {
        question: "Are these quotes only political?",
        answer: "No. The emphasis here is on leadership, perseverance, learning, duty, and personal character.",
      },
    ],
  },
  love: {
    intro: [
      "Love quotes help put language around care, friendship, devotion, longing, and kindness. They can be romantic, but they can also speak to family, patience, forgiveness, and the courage to stay open-hearted.",
      "This category is best used slowly. A strong love quote is not just pretty; it helps you notice what kind of care you want to practice.",
    ],
    faq: [
      {
        question: "Are love quotes only for romance?",
        answer: "No. Many love quotes apply to friendship, family, compassion, and the everyday work of caring well.",
      },
      {
        question: "How do I choose the right love quote?",
        answer: "Choose the one that sounds like something you would genuinely mean. The most effective quote feels personal, not just polished.",
      },
    ],
  },
  "chick-e-nugget-quotes": {
    intro: [
      "Chick E. Nugget Quotes are original Daily Nugget lines written for the site mascot. This is the most unique category on the site because the voice, tone, and phrasing belong to The Daily Nugget brand.",
      "These nuggets are meant to be playful but still useful. They turn everyday motivation into small, friendly reminders about courage, consistency, patience, and self-respect.",
    ],
    faq: [
      {
        question: "Who is Chick E. Nugget?",
        answer: "Chick E. Nugget is The Daily Nugget mascot: a friendly character used to make daily encouragement feel more memorable and approachable.",
      },
      {
        question: "Are these quotes original?",
        answer: "Yes. The Chick E. Nugget quotes are written specifically for The Daily Nugget and are intended to give the site a distinct voice.",
      },
    ],
  },
  entrepreneurs: {
    intro: [
      "Entrepreneur quotes are for builders, creators, founders, side hustlers, and anyone trying to turn an idea into something real. They focus on action, patience, problem-solving, and learning from imperfect attempts.",
      "This page is not just about business success. It is about the mindset of starting, testing, improving, and staying useful to the people you serve.",
    ],
    faq: [
      {
        question: "Are entrepreneur quotes only for business owners?",
        answer: "No. They also help students, creators, freelancers, and anyone building something that requires initiative.",
      },
      {
        question: "What is the best way to use this page?",
        answer: "Pick one quote, connect it to one project, and decide one specific action you can take today.",
      },
    ],
  },
  wisdom: {
    intro: [
      "Wisdom quotes are for the moments when you need perspective more than pressure. They help slow the day down enough to notice what matters, what can wait, and what deserves a better response.",
      "This category focuses on judgment, patience, self-awareness, boundaries, and the quiet choices that shape a steadier life.",
    ],
    faq: [
      {
        question: "What makes a quote wise?",
        answer: "A wise quote does more than sound clever. It helps you see a situation more clearly and choose with more patience, honesty, or care.",
      },
      {
        question: "When should I read wisdom quotes?",
        answer: "They are useful before a decision, after a stressful moment, or anytime you want a calmer lens on what is happening.",
      },
    ],
  },
  favorites: {
    intro: [
      "Favorite quotes are the nuggets you wanted to keep close. This page gathers your saved lines in one place so you can return to them without hunting through every category again.",
      "For now, favorites are stored on this browser. Once favorites move into Firestore, this category can follow your account across devices.",
    ],
    faq: [
      {
        question: "How do I add a favorite quote?",
        answer: "Open any quote category, choose a quote you want to keep, and press Favorite on the quote card or quote page.",
      },
      {
        question: "Why did my favorites disappear on another device?",
        answer: "Favorites currently use local browser storage. Account-synced favorites can be added later with Firestore.",
      },
    ],
  },
};

function getFavoriteQuotes() {
  try {
    const savedFavorites = JSON.parse(localStorage.getItem(FAVORITES_STORAGE_KEY)) || {};

    return Object.entries(savedFavorites)
      .map(([favoriteKey, favorite]) => ({
        id: favoriteKey,
        text: favorite.text,
        author: favorite.author,
        sourceCategoryKey: favorite.categoryKey,
        sourceQuoteId: favorite.quoteId,
      }))
      .sort((a, b) => a.id.localeCompare(b.id));
  } catch {
    return [];
  }
}

/* 
Normalize everything into:
{ id, text, author }
So the UI never has to care about API differences
*/
export function normalize(categoryKey, data) {
  switch (categoryKey) {
    case "quotes": {
      const list = data.randomQuotes ?? [];
      return list.map((x) => ({
        id: x.id,
        text: x.q,
        author: x.a,
      }));
    }

    case "facts": {
      return (Array.isArray(data) ? data : []).map((x) => ({
        id: x.id,
        text: x.fact,
        author: null,
      }));
    }

    case "motivation": {
        const list = data.motivate ?? [];
        return list.map((x) => ({
            id: x.id,
            text: x.q,
            author: null,
      }));
    }

    case "calm": {
        const list = data.calm ?? [];
        return list.map((x) => ({
            id: x.id,
            text: x.q,
            author: null,
      }));
    }

    case "affirmations": {
      return (Array.isArray(data) ? data : []).map((x) => ({
        id: x.id,
        text: x.affirmation,
        author: null,
      }));
    }

    case "jokes": {
      return (Array.isArray(data) ? data : []).map((x) => ({
        id: x.id,
        text: x.j,
        author: x.p,
      }));
    }

    default:
      return [];
  }
}

export default function ExploreCategory() {
  const { categoryKey } = useParams();
  const localCategory = LOCAL_CATEGORIES[categoryKey];

  const [items, setItems] = useState(localCategory?.items || []);
  const [loading, setLoading] = useState(!localCategory);
  const [error, setError] = useState("");

  useEffect(() => {
    if (categoryKey === "favorites") {
      setItems(getFavoriteQuotes());
      setError("");
      setLoading(false);
      return;
    }

    const local = LOCAL_CATEGORIES[categoryKey];

    if (local) {
      setItems(local.items);
      setError("");
      setLoading(false);
      return;
    }

    console.log("categoryKey:", categoryKey);
    console.log("endpoint:", ENDPOINTS[categoryKey]);
    const url = ENDPOINTS[categoryKey];

    if (!url) {
      setError("Unknown category.");
      setLoading(false);
      return;
    }

    let cancelled = false;

    async function loadData() {
      setLoading(true);
      setError("");

      try {
        const response = await fetch(url, {
          method: "GET",
        });
        if (!response.ok) throw new Error("Network error");

        const data = await response.json();
        const normalized = normalize(categoryKey, data);

        if (!cancelled) setItems(normalized);
      } catch {
        if (!cancelled) setError("Failed to load category.");
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    loadData();

    return () => {
      cancelled = true;
    };
  }, [categoryKey]);

  const pageTitle = localCategory?.title || categoryKey;
  const pageDescription = localCategory?.description || `Explore ${categoryKey} from The Daily Nugget.`;
  const categoryContent = CATEGORY_CONTENT[categoryKey] || CATEGORY_CONTENT.quotes;

  return (
    <div className="bg-blackburn-gray min-vh-100">
      <PageMeta
        title={pageTitle}
        description={pageDescription}
        path={`/explore/${categoryKey}`}
      />
      <div className="container category-page-content text-gold">

        {/* Header */}
        <div className="category-page-header">
          <h2>{pageTitle}</h2>
          <p className="text-white">{pageDescription}</p>
        </div>

        <div className="category-page-intro">
          {categoryContent.intro.map((paragraph) => (
            <p className="text-white" key={paragraph}>
              {paragraph}
            </p>
          ))}
        </div>

        {/* Loading */}
        {loading && <p className="text-white">Loading...</p>}

        {/* Error */}
        {error && <p className="text-danger">{error}</p>}

        {/* Grid */}
        {!loading && !error && (
          <div className="row gy-3">
            {items.map((item, index) => {
              const quoteCategoryKey = item.sourceCategoryKey || categoryKey;
              const quoteId = item.sourceQuoteId ?? item.id ?? index;

              return (
                <div
                  key={item.id ?? `${categoryKey}-${index}`}
                  className="col-12 col-md-6 col-xl-4"
                >
                  <div className="category-quote-card p-3 shadow-inset bg-blackburn-dark-yellow rounded-4">
                    <Link
                      className="category-quote-link"
                      to={`/explore/${quoteCategoryKey}/${quoteId}`}
                      aria-label={`Open quote page for ${item.text}`}
                    >
                      <p className="category-quote-text text-white mb-2">{item.text}</p>
                      {item.author && (
                        <small className="category-quote-author text-gold">— {item.author}</small>
                      )}
                    </Link>
                    <QuoteActions
                      categoryKey={quoteCategoryKey}
                      quote={item}
                      quoteId={quoteId}
                      compact
                    />
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {!loading && !error && items.length === 0 && (
          <div className="category-empty-state">
            <p className="text-white mb-0">No favorite quotes yet. Tap Favorite on any quote to build this category.</p>
          </div>
        )}

        <div className="category-page-faq">
          <h3 className="h4 mb-3">Frequently asked questions</h3>
          <div className="row gy-3">
            {categoryContent.faq.map((item) => (
              <div className="col-12 col-lg-6" key={item.question}>
                <div className="category-faq-card p-3 shadow-inset bg-blackburn-dark-yellow rounded-4 h-100">
                  <h4 className="h5">{item.question}</h4>
                  <p className="text-white mb-0">{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
