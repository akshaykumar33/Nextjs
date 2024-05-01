### [Next.js] ( fullstack framework )
It is an open-source js Framework tha is built on top of React .It is designed to make it easier to create server-rendered react applications with a focus on developer productivity,performance,and SEO.Next.js provides a set of tools and conventions that simplify various aspects of buildinga web applications.
## features
 *SSR*(Server-site rendering):
=>Next.js Allows you to render the server side before ending them to client.This can improve page load times and SEO,as search engines can easily index the content.

*SSG*(Static site generation):
=>Next.js also supports SSG,where you can pr-render pages at build time.This approach is great for content heavy websits anc can offer even better performance and SEO benefits.

*API routes*
=>It offers a built-in API route feature that allows you to create serverless API endpoints within  your Next.js project,making it eay to handle backend logic.

# Routing
=>It is like giving directions to a website.When you type a web address(URL) into your browser,routing tells the website which page or thing to show you.It's like a map that guides the website to the right place when you click a link or enter a web address.So,routing helps the website know what to display based on what you're looking for .

# Link
=>It is a component provided by Next.js that allows you to create links to navigate between pages in your application.
=>It's primarily used for declerative,client-side navigtion.When you click on linke created with Link,It prevents the defaut browser full-page refresh and fetches the new page content on client side,resulting in faster and smoother user experience.
=>it's typically used in your component's JSX code to create clickable links that lead to other pages within your Nextjs application.

# useRouter()
=>It is a hook provided by Next.js that allows you to access the router object and its properties within your component.
=>It provides programmatic control over the router and allows you to naviagte to different pages or perform other routing-related actions in rsponse to user interactions or events within your component.
=>It's useful when you need to handle navigation or acess route-specific information directly in your component logic.

# Dynamic Routes
=>It refer to a feature that allows you to create web pages with variable or dynamic parts in the URL.
=>Instead of defining individual routes for every possible URL,you can create a single route pattern that matches a variety of dynamic values.
=>This is extremely useful when you have pages that share a common structure but differ based on specific information in URL.

# Catch-All Routes
=>The [...foldername] notation indicates that you are usinga catch-all routes ,which allows you to capture multipe URl segments and treat them as a dynamic array of values.
=>This is useful when you want to create dynamic routes that can handle varying numbers of URL segments

//By default all components are server component

# Layout
=>It is like a blueprint that helps you make all the pages of your website look the same.
=>It's a way to put common things,header footer,and other stuff that appears on every page,in one place.
=>This makes it easy to keep a similar look on all your web pages.So ,a layout is a ahndy tool that lets you keep things tidy and consistent on your website.
# metaData title and description
=>it can be changed in Root layout and is similar to title of html
## fetch Data
*client side* is same as react and hooks
*server side* in this we dint's require state setting and all but rather make your component async and function async as well

## For backend 
=>use api folder and rest same but pages as route.js

# Middleware(s)
=>They are functions or pieces of code that run in between a user's request to a web page and the server's response.They help you process and modify therequest or response,adding extra functionality to your web application.

# Material Tailwind