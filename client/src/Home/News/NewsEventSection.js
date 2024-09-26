import React, { useState, useEffect } from 'react';
import './NewsEventSection.css';
import image1 from '../../Images/Logo.png';
import image2 from '../../Images/Logo.png';
import image3 from '../../Images/Logo.png';
import axios from 'axios';

const NewsEventsSection = () => {
    const [currentNewsEvent, setCurrentNewsEvent] = useState(0);
    const [newsEvents, setNewsEvents] = useState([]);
    const [loading, setLoading] = useState(true);

    // Static placeholder news items
    const staticNews = [
        {
            image: image1,
            description: 'Static Description 1',
            date: 'Static Date 1',
            url: '#'
        },
        {
            image: image2,
            description: 'Static Description 2',
            date: 'Static Date 2',
            url: '#'
        },
        {
            image: image3,
            description: 'Static Description 3',
            date: 'Static Date 3',
            url: '#'
        },
    ];

    // Fetch news from API
    useEffect(() => {
        async function fetchNews() {
            try {
                const response = await axios.get('https://newsapi.org/v2/everything?q=cybersecurity&apiKey=32f25bb7a24341a497442d15aae954a3'); // Replace with your news API endpoint
                const newsData = response.data.articles.map((article) => ({
                    image: article.urlToImage || image1, // Fallback to default image if none exists
                    description: article.title,
                    date: new Date(article.publishedAt).toLocaleDateString(),
                    url: article.url,
                }));
                setNewsEvents([...newsData, ...staticNews]); // Merge fetched news with static news
                setLoading(false);
            } catch (error) {
                console.error('Error fetching news:', error);
                setNewsEvents(staticNews); // Fallback to static news on error
                setLoading(false);
            }
        }

        fetchNews();
    }, []);

    // Handle automatic sliding
    useEffect(() => {
        const timer = setTimeout(() => {
            handleNextNewsEvent();
        }, 3000); // Change slides every 3 seconds
        return () => clearTimeout(timer);
    }, [currentNewsEvent, newsEvents]); // Re-run when the current news or list changes

    const handlePrevNewsEvent = () => {
        setCurrentNewsEvent(
            (currentNewsEvent - 1 + newsEvents.length) % newsEvents.length
        );
    };

    const handleNextNewsEvent = () => {
        setCurrentNewsEvent((currentNewsEvent + 1) % newsEvents.length);
    };

    if (loading) {
        return <p>Loading news...</p>;
    }

    return (
        <section className="news-events">
            <h2>News & Events</h2>
            <div className="news-event-container">
                <button onClick={handlePrevNewsEvent}>&#8249;</button>
                <div className="news-event-card">
                    <div className="content-box">
                        <img 
                            src={newsEvents[currentNewsEvent]?.image} 
                            alt="News/Event" 
                        />
                        <p id="description">{newsEvents[currentNewsEvent]?.description}</p>
                        <p id="date">{newsEvents[currentNewsEvent]?.date}</p>
                        <a href={newsEvents[currentNewsEvent]?.url} target="_blank" rel="noopener noreferrer">
                            Read more
                        </a>
                    </div>
                </div>
                <button onClick={handleNextNewsEvent}>&#8250;</button>
            </div>
        </section>
    );
};

export default NewsEventsSection;





// old code

// import React, { useState, useEffect } from 'react';
// import './NewsEventSection.css';
// import image1 from '../../Images/Logo.png';
// import image2 from '../../Images/Logo.png';
// import image3 from '../../Images/Logo.png';

// const NewsEventsSection = () => {
//     const [currentNewsEvent, setCurrentNewsEvent] = useState(0);

//     const newsEvents = [
//         {
//             image: image1,
//             description: 'Description1',
//             date: 'Date1',
//         },
//         {
//             image: image2,
//             description: 'Description2',
//             date: 'Date2',
//         },
//         {
//             image: image3,
//             description: 'Description3',
//             date: 'Date3',
//         },
//     ];

//     // Handle automatic sliding
//     useEffect(() => {
//         const timer = setTimeout(() => {
//             handleNextNewsEvent();
//         }, 3000); // Change slides every 3000 milliseconds (3 seconds)
//         return () => clearTimeout(timer); // Clean up the timer
//     }, ); // Dependencies for useEffect

//     const handlePrevNewsEvent = () => {
//         setCurrentNewsEvent(
//             (currentNewsEvent - 1 + newsEvents.length) % newsEvents.length
//         );
//     };

//     const handleNextNewsEvent = () => {
//         setCurrentNewsEvent((currentNewsEvent + 1) % newsEvents.length);
//     };

//     return (
//         <section className="news-events">
//             <h2>News & Event</h2>
//             <div className="news-event-container">
//                 <button onClick={handlePrevNewsEvent}>&#8249;</button>
//                 <div className="news-event-card">
//                     <div className="content-box">
//                         <img src={newsEvents[currentNewsEvent].image} alt="News/Event" />
//                         <p id="description">{newsEvents[currentNewsEvent].description}</p>
//                         <p id="date">{newsEvents[currentNewsEvent].date}</p>
//                     </div>
//                 </div>
//                 <button onClick={handleNextNewsEvent}>&#8250;</button>
//             </div>
//         </section>
//     );
// };

// export default NewsEventsSection;
