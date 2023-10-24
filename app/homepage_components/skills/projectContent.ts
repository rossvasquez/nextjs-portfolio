import tiden from '../../../public/websites/tiden.png'
import foundation from '../../../public/websites/foundation.png'
import mockUpIPHONE from '../../../public/websites/mockUpIPHONE.png'
import walletEval from '../../../public/websites/walletEval.png'
import zmariks from '../../../public/websites/zmariks.png'
import cateringOrderSystem from '../../../public/websites/cateringOrderSystem.png'

export const projectInfo = [
    {
        "name": 'Tiden',
        "tagline": "OpenAI Web App",
        "description": "A NextJS MVP that allows users to sign up and get meal/workout plans based on their measurables by way of the OpenAI Completion API. Auth/Database created with Supabase/PostgreSQL. AWS Lambda function processing OpenAI feature.",
        "with": ['Typescript', 'JavaScript', 'React', 'NextJS', 'TailwindCSS', 'Supabase', 'AWS', 'Netlify', 'API'],
        "image": tiden,
        "link": 'https://tiden-ai.netlify.app',
        "emoji":'💪'
    },
    {
        "name": 'State Fairdle',
        "tagline": "Hackathon Entry",
        "description": "My family has a daily addiction, Wordle. We also have an annual addiction, The Iowa State Fair. So naturally when a Supabase hackathon roles around, you build your own bespoke version of Wordle with Iowa State Fair words. React App built with Vite. Netlify function (Lambda) checks validity of guesses via Dictionary API, Postgre DB hosted on Supabase contains daily word and analytics.",
        "with": ['JavaScript', 'React', 'Vite', 'TailwindCSS', 'Supabase', 'Netlify'],
        "image": mockUpIPHONE,
        "link": 'https://statefairdle.com',
        "emoji":'👨🏻‍🌾'
    },
    {
        "name": 'Cocktail Finder',
        "tagline": "React In WordPress",
        "description": "My love for JavaScript doesn't touch the industry's love for WordPress. With this in mind I used a WP plugin called ReactPress to create a Cocktail Finder with React that is embedded into a WordPress page. The component is styled with TailwindCSS and a Cloudflare Worker is responsible for returning JSON from a Random Cocktail API.",
        "with": ['JavaScript', 'React', 'Vite', 'TailwindCSS', 'WordPress', 'ReactPress', 'Cloudflare', 'Flywheel', 'LocalWP', 'API'],
        "image": tiden,
        "link": 'https://reactpressdemo.flywheelsites.com/cocktail-finder/',
        "emoji":'🍸'
    },
    {
        "name": 'Catering Order System',
        "tagline": "E-Commerce Web App",
        "description": "The project that started it all. My first large project written in Vanilla HTML/CSS/JavaScript. This project uses no front-end libraries, pure DOM manipulation, LocalStorage, and loads of CSS. It uses a MapQuest API to help get delivery addresses and writes data to Firebase. It was my attempt at solving a real world problem, we were a college town hit that constantly did caterings for U of Iowa Atheltics and EDU Departments, all of this is still managed with pen and paper over the phone and email. Unfortunately, Toast Tab wouldn't give us write access unless the restaurant I worked at moved up on payment tiers. I started this project at the end of my Salesforce studies for the Admin Exam, initially believeing I would use the Salesforce API as a Database. I ended up being sucked to the allure of web stacks and instead just learned how to use Firebase.",
        "with": ['HTML', 'CSS', 'JavaScript', 'Gulp', 'Firebase', 'API'],
        "image": cateringOrderSystem,
        "link": 'https://catering-order-system-2ae86.web.app/',
        "emoji":'🍝'
    },
    {
        "name": 'Restaurant Site Redesign',
        "tagline": "Retaurant Website",
        "description": "My take on what a redesign would look like for www.zmariks.com as the current site is a bit outdated.",
        "with": ['React', 'Vite', 'TailwindCSS', 'Netlify', 'API'],
        "image": zmariks,
        "link": 'https://zmariksredesign.netlify.app/',
        "emoji":'🍝'
    },
    {
        "name": 'Functioning Mockup',
        "tagline": "PSD to Website",
        "description": "A technical evaluation where I was sent a PSD file and told to create a functioning site to match it. Site is fully responsive and looks the exact same.",
        "with": ['Photoshop', 'JavaScript', 'React', 'Vite', 'TailwindCSS', 'Netlify'],
        "image": tiden,
        "link": 'https://psdtowebpractice.netlify.app/',
        "emoji":'🍝'
    },
    {
        "name": 'Mobile Wallet',
        "tagline": "Vue MVP",
        "description": "A technical evaluation where I was tasked with creating a Mobile Coupon Wallet MVP over four days. We were asked to use Vue, specifically Nuxt3. I used Supabase as a DB (PostgreSQL) and for Auth.",
        "with": ['JavaScript', 'Vue3', 'Nuxt3', 'TailwindCSS', 'Supabase', 'Netlify'],
        "image": walletEval,
        "link": 'https://nuxtwallet.netlify.app/',
        "emoji":'💵'
    },
    {
        "name": 'Foundation Site',
        "tagline": "Progressive Web App",
        "description": "A WebApp built for a foundation in memory of a late friend. Features serverless functions to do things like fetch Eventbrite and Printful data. Uses Supabase for things like Blog Posts and Auth for an Admin Dashboard.",
        "with": ['JavaScript', 'React', 'Vite', 'TailwindCSS', 'Supabase', 'Netlify', 'API'],
        "image": foundation,
        "link": 'https://michaelhenterfoundation.org',
        "emoji":'🤍'
    },
]