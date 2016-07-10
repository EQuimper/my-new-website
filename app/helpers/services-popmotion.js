import Ember from 'ember';
import motion from 'ember-popmotion';

export function servicesPopmotion(motion/*, hash*/) {
  const divs = document.querySelectorAll('div');
  const moveRight = motion.tween({
      duration: 700,
      ease: motion.easing.modify(motion.easing.backOut, 2),
      values: {
          x: 350
      }
  });

  const boundTweens = Array.prototype.map.call(divs, (div) => moveRight.on(div));

  motion.stagger(boundTweens, {
      ease: motion.easing.easeOut,
      interval: 200,
      flip: Infinity
  }).start();
}

export default Ember.Helper.helper(servicesPopmotion);
