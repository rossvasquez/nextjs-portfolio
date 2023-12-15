import tiden from '../../../public/websites/tiden.png'
import foundation from '../../../public/websites/foundation.png'
import mockUpIPHONE from '../../../public/websites/mockUpIPHONE.png'
import walletEval from '../../../public/websites/walletEval.png'
import zmariks from '../../../public/websites/zmariks.png'
import cateringOrderSystem from '../../../public/websites/cateringOrderSystem.png'
import psd from '../../../public/websites/psd.png'
import reactpress from '../../../public/websites/reactpress.png'
import portfolio_v1 from '../../../public/websites/portfolio_v1.png'
import portfolio_v2 from '../../../public/websites/portfolio_v2.png'
import reminder_app from '../../../public/websites/reminder_app.png'

export const projectInfo = [
    {
        "name": 'Tiden',
        "tagline": "OpenAI Web App",
        "description1": "A NextJS MVP that allows users to sign up and get meal plans based on their measurables by way of the OpenAI Completion API. Auth/Database created with Supabase/PostgreSQL. AWS Lambda function processing OpenAI feature.",
        "description2": 'Sign up for Tiden at no cost and get a meal plan generated for you by AI.',
        "description3": [],
        "with": ['Typescript', 'JavaScript', 'React', 'NextJS', 'TailwindCSS', 'Supabase', 'AWS Lambda', 'Netlify', 'OpenAI API', 'Midjourney', 'Photoshop', 'Lottie'],
        "image": tiden,
        "link": 'https://tiden-ai.netlify.app'
    },
    {
        "name": 'State Fairdle',
        "tagline": "Hackathon Entry",
        "description1": "My family has a daily addiction, Wordle. We also have an annual addiction, The Iowa State Fair. So naturally when a Supabase hackathon roles around, you build your own bespoke version of Wordle with Iowa State Fair words. React App built with Vite. Netlify function (Lambda) checks validity of guesses via Dictionary API, Postgre DB hosted on Supabase contains daily word and analytics.",
        "description2": 'While the State Fair has passed, head to the site and test the functionality with a random word.',
        "description3": [],
        "with": ['JavaScript', 'React', 'Vite', 'TailwindCSS', 'Supabase', 'Netlify', 'Serverless Functions', 'Dictionary API', 'Midjourney', 'Photoshop'],
        "image": mockUpIPHONE,
        "link": 'https://statefairdle.com',
    },
    {
        "name": 'Reminder App',
        "tagline": "YouTube Series",
        "description1": "Supabase has been an integral part of my advancement. It provides abstractions for Postgres, Auth, Storage, and more that allow you to get your hands dirty without being overwhelmed when transitioning from frontend to full stack. Since this tool helped me so much, I wanted to share the love so I built out what I believe is an extremely simple and readable full stack reminder app that I am currently recording a YouTube series for in order to help others learn.",
        "description2": 'Create an account and track some reminders!',
        "description3": [],
        "with": ['JavaScript', 'React', 'React Router', 'Vite', 'TailwindCSS', 'Supabase', 'Netlify'],
        "image": reminder_app,
        "link": 'https://quezyoutube.netlify.app/',
    },
    {
        "name": 'Cocktail Finder',
        "tagline": "React In WordPress",
        "description1": "My love for JavaScript doesn't touch the industry's love for WordPress. With this in mind I used a WP plugin called ReactPress to create a Cocktail Finder with React that is embedded into a WordPress page. The component is styled with TailwindCSS and a Cloudflare Worker is responsible for returning JSON from a Random Cocktail API.",
        "description2": 'Head to the site and refresh to generate new cocktails, cheers!',
        "description3": [],
        "with": ['JavaScript', 'React', 'Vite', 'TailwindCSS', 'WordPress', 'ReactPress', 'Cloudflare', 'Flywheel', 'LocalWP', 'Cocktail Recipe API'],
        "image": reactpress,
        "link": 'https://reactpressdemo.flywheelsites.com/cocktail-finder/'
    },
    {
        "name": 'Catering Order System',
        "tagline": "E-Commerce Web App",
        "description1": "The project that started it all. My first large project written in Vanilla HTML/CSS/JavaScript. This project uses no frontend libraries, pure DOM manipulation, localStorage, and loads of CSS. It uses a MapQuest API to authenticate delivery addresses and writes order data to Firebase. It was my attempt at solving a real world problem, we did caterings for University of Iowa Atheltics and EDU in high volume, all of which is still managed with pen and paper over the phone. Unfortunately, Toast Tab wouldn't give us write access unless the restaurant I worked at moved up payment tiers. I started this project at the end of my Salesforce studies for the Admin Exam, initially believeing I would use the Salesforce API as a Database. I ended up being drawn to web stacks and decided to learn a more traditional Backend/DB in Firebase.",
        "description2": 'Head to the site and place a mock order. Once the mock order is placed, you can see order history in the "Admin" area.',
        "description3": [],
        "with": ['HTML', 'CSS', 'JavaScript', 'Gulp', 'Firebase', 'Mapquest API'],
        "image": cateringOrderSystem,
        "link": 'https://catering-order-system-2ae86.web.app/'
    },
    {
        "name": 'Restaurant Site Redesign',
        "tagline": "Retaurant Website",
        "description1": "My take on what a redesign would look like for www.zmariks.com. The current site is a bit outdated and I wanted some more practice with Tailwind as well as improving an existing user experience. The current site is a bit confusing for modern use cases that were added after the fact.",
        "description2": 'Head to the site and check out the cool user flow for ordering on the homepage.',
        "description3": [],
        "with": ['React', 'Vite', 'TailwindCSS', 'Netlify', 'Google Maps API', 'Midjourney', 'Photoshop'],
        "image": zmariks,
        "link": 'https://zmariksredesign.netlify.app/'
    },
    {
        "name": 'Functioning Mockup',
        "tagline": "PSD to Website",
        "description1": "A technical evaluation where I was sent a PSD file and told to create a functioning site to match it. The site is fully responsive and follows the design of the mockup. With little guidance, I assumed the intent of certain parts of the mockup to make the site interactive.",
        "description2": 'Click here to view the mockup, then check out the site.',
        "description3": [],
        "with": ['Photoshop', 'JavaScript', 'React', 'Vite', 'TailwindCSS', 'Netlify', 'Photoshop'],
        "image": psd,
        "link": 'https://psdtowebpractice.netlify.app/'
    },
    {
        "name": 'Foundation Site',
        "tagline": "Progressive Web App",
        "description1": "A WebApp built for a foundation in memory of a late friend. Features serverless functions to do things like fetch Eventbrite and Printful data. Uses Supabase for things like Blog Posts and Auth for an Admin Dashboard.",
        "description2": 'Visit the site to check out what we have so far.',
        "description3": ['Site Password: mhf2023$'],
        "with": ['JavaScript', 'React', 'Vite', 'TailwindCSS', 'Supabase', 'Netlify', 'Serverless Functions', 'Eventbrite API', 'Printful API'],
        "image": foundation,
        "link": 'https://michaelhenterfoundation.org'
    },
    {
        "name": 'Previous Portfolio',
        "tagline": "Tailwind Parallax App",
        "description1": "My previous portfolio that where I built components with Tailwind and utilized Parallax for a cool landing effect.",
        "description2": 'Visit the site to check out my old vision.',
        "description3": [],
        "with": ['JavaScript', 'React', 'Vite', 'TailwindCSS', 'Netlify', 'Parallax'],
        "image": portfolio_v2,
        "link": 'https://trvportfolio-v2.netlify.app/'
    },
    {
        "name": 'MUI Portfolio',
        "tagline": "Create React App + MUI",
        "description1": "My original portfolio that I built to showcase my early learning in JavaScript. Built using MUI's component library.",
        "description2": 'Visit the site to check out my original work.',
        "description3": [],
        "with": ['JavaScript', 'React', 'MUI', 'CSS', 'Netlify'],
        "image": portfolio_v1,
        "link": 'https://trvportfolio-v1.netlify.app/'
    },
]