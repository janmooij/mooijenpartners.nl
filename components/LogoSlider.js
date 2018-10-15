import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);


export default () => (
  <div className="logos">
    <AutoPlaySwipeableViews>
    <div className="logos__item">
      <img width="160" src="/static/afm.png" alt="AFM"/>
    </div>
    <div className="logos__item">
      <img src="/static/raia.png" alt="RAIA"/>
    </div>
    <div className="logos__item">
      <svg xmlns="http://www.w3.org/2000/svg" width="241" height="64" viewBox="0 0 241 64">
        <defs>
          <path id="a" d="M13.49 4.069l33.237 24.053L5.652 10.491c-4.36 5.545-5.903 12.956-3.674 21.124l45.461-.001L7.94 43.627c4.319 5.847 10.332 10.854 17.18 14.43l23.332-22.654-11.734 27.081c3.676.914 7.442 1.408 11.196 1.408 20.161 0 32.346-14.2 27.216-31.717C70.003 14.66 49.502.458 29.344.458c-6.105 0-11.472 1.311-15.854 3.611"/>
          <radialGradient id="b" cx="59.605%" cy="38.74%" r="67.717%" fx="59.605%" fy="38.74%" gradientTransform="matrix(.84199 0 0 .86985 .094 .05)">
            <stop offset="0%" stopColor="#FFE153"/>
            <stop offset="100%" stopColor="#F08B1D"/>
          </radialGradient>
        </defs>
        <g fill="none" fillRule="evenodd">
          <g fill="#333">
            <path d="M100.989 15.278l-8.309 13.24h-.08v-13.24h-7.517v29.425H92.6V31.978h.081l8.031 12.725h8.788L99.12 29.95l9.742-14.673zM111.928 20.287h6.6v-5.009h-6.6v5.009zm0 24.416h6.6V22.635h-6.6v22.068zM123.781 15.278v29.425h7.196V33.49h8.55v-6.601h-8.55v-5.01h8.869v-6.601zM144.42 20.287h6.602v-5.009h-6.602v5.009zm0 24.416h6.602V22.635h-6.602v22.068zM163.39 38.102h3.218c5.607 0 7.197-3.898 7.197-8.073 0-1.67-.358-3.777-1.429-5.447-.877-1.312-2.388-2.704-5.728-2.704h-3.259v16.224zm-7.518-22.824h9.742c3.302 0 9.187 0 13.002 5.486 2.03 2.785 2.706 5.925 2.706 9.147 0 8.032-3.977 14.791-15.15 14.791h-10.3V15.278z"/>
          </g>
          <g transform="translate(-1)">
            <mask id="c" fill="#fff">
              <use xlinkHref="#a"/>
            </mask>
            <path fill="url(#b)" d="M13.49 4.069l33.237 24.053L5.652 10.491c-4.36 5.545-5.903 12.956-3.674 21.124l45.461-.001L7.94 43.627c4.319 5.847 10.332 10.854 17.18 14.43l23.332-22.654-11.734 27.081c3.676.914 7.442 1.408 11.196 1.408 20.161 0 32.346-14.2 27.216-31.717C70.003 14.66 49.502.458 29.344.458c-6.105 0-11.472 1.311-15.854 3.611" mask="url(#c)"/>
          </g>
        </g>
      </svg>
    </div>
    </AutoPlaySwipeableViews>
  </div>
)
