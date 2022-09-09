import 'https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js';

document.getElementById('scroll_tracker').animate(
    { transform: ['scaleX(0)', 'scaleX(1)']},
    { duration: 5000, // Totally arbitrary!
      fill: 'both',
      timeline: new ScrollTimeline({
          scrollOffsets: [
              new CSSUnitValue(0, 'px'),
              new CSSUnitValue(100, 'px')
          ]
      })
    });