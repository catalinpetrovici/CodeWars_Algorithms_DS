// Beginner Series #2 Clock

// Clock shows h hours, m minutes and s seconds after midnight.

// Your task is to write a function which returns the time since midnight in milliseconds.

// Example:
// h = 0
// m = 1
// s = 1

// result = 61000
// Input constraints:

// 0 <= h <= 23
// 0 <= m <= 59
// 0 <= s <= 59

function past(h, m, s) {
  if (!check(h, 'hours') || !check(m, 'minutes') || !check(s, 'seconds'))
    return;

  const hrToms = h * 60 * 60 * 1000;
  const mToms = m * 60 * 1000;
  const sToms = s * 1000;
  return hrToms + mToms + sToms;
}

function check(a, b) {
  if (0 <= a && a <= 23 && b === 'hours') return true;
  if (0 <= a && a <= 59 && (b === 'minutes' || b === 'seconds')) return true;
}

console.log(past(0, 1, 1));
