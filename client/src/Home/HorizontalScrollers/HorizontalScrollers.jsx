import React from 'react';
import './HorizontalScrollers.css';

function HorizontalScrollers() {
  return (
    <div>
      <h2>Benefits of choosing us</h2>
      <div id='benefits-scroller-container'>
        <div id="benefits-scroller" className='horizontal-scroller'>
          <div className='benefit'>
            <h3>Benefit 1</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam faucibus sapien neque, et rutrum ex bibendum nec. 
              Mauris gravida ullamcorper eros, vel varius magna fermentum aliquam. In ornare nibh eget libero suscipit sodales sed et ante. 
              Vivamus iaculis dignissim magna at eleifend. Curabitur vel lorem sit amet ipsum ullamcorper pretium. Proin interdum purus at odio 
              scelerisque, quis elementum dolor dignissim. Phasellus rhoncus et orci ac rhoncus. Ut tellus enim, ullamcorper sed eleifend in, molestie 
              in nibh. Sed id feugiat odio. Etiam sodales egestas lectus ac egestas. Sed pulvinar nulla eu libero iaculis, quis pulvinar erat porta.</p>
          </div>
          <div className='benefit'>
            <h3>Benefit 2</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam faucibus sapien neque, et rutrum ex bibendum nec. 
              Mauris gravida ullamcorper eros, vel varius magna fermentum aliquam. In ornare nibh eget libero suscipit sodales sed et ante. 
              Vivamus iaculis dignissim magna at eleifend. Curabitur vel lorem sit amet ipsum ullamcorper pretium. Proin interdum purus at odio 
              scelerisque, quis elementum dolor dignissim. Phasellus rhoncus et orci ac rhoncus. Ut tellus enim, ullamcorper sed eleifend in, molestie 
              in nibh. Sed id feugiat odio. Etiam sodales egestas lectus ac egestas. Sed pulvinar nulla eu libero iaculis, quis pulvinar erat porta.</p>
          </div>
          <div className='benefit'>
            <h3>Benefit 3</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam faucibus sapien neque, et rutrum ex bibendum nec. 
              Mauris gravida ullamcorper eros, vel varius magna fermentum aliquam. In ornare nibh eget libero suscipit sodales sed et ante. 
              Vivamus iaculis dignissim magna at eleifend. Curabitur vel lorem sit amet ipsum ullamcorper pretium. Proin interdum purus at odio 
              scelerisque, quis elementum dolor dignissim. Phasellus rhoncus et orci ac rhoncus. Ut tellus enim, ullamcorper sed eleifend in, molestie 
              in nibh. Sed id feugiat odio. Etiam sodales egestas lectus ac egestas. Sed pulvinar nulla eu libero iaculis, quis pulvinar erat porta.</p>
          </div>
          <div className='benefit'>
            <h3>Benefit 4</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam faucibus sapien neque, et rutrum ex bibendum nec. 
              Mauris gravida ullamcorper eros, vel varius magna fermentum aliquam. In ornare nibh eget libero suscipit sodales sed et ante. 
              Vivamus iaculis dignissim magna at eleifend. Curabitur vel lorem sit amet ipsum ullamcorper pretium. Proin interdum purus at odio 
              scelerisque, quis elementum dolor dignissim. Phasellus rhoncus et orci ac rhoncus. Ut tellus enim, ullamcorper sed eleifend in, molestie 
              in nibh. Sed id feugiat odio. Etiam sodales egestas lectus ac egestas. Sed pulvinar nulla eu libero iaculis, quis pulvinar erat porta.</p>
          </div>
        </div>
      </div>
      <h2>News and Events</h2>
      <div id='news-scroller-container'>
        <div id="news-scroller" className='horizontal-scroller'>
          <div className='news'>
            <img src="placeholder-jpeg-name" alt="News" />
            <p>Description...</p>
            <p className='date'>Date</p>
          </div>
          <div className='news'>
            <img src="placeholder-jpeg-name" alt="News" />
            <p>Description...</p>
            <p className='date'>Date</p>
          </div>
          <div className='news'>
            <img src="placeholder-jpeg-name" alt="News" />
            <p>Description...</p>
            <p className='date'>Date</p>
          </div>
          <div className='news'>
            <img src="placeholder-jpeg-name" alt="News" />
            <p>Description...</p>
            <p className='date'>Date</p>
          </div>
          <div className='news'>
            <img src="placeholder-jpeg-name" alt="News" />
            <p>Description...</p>
            <p className='date'>Date</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HorizontalScrollers;
