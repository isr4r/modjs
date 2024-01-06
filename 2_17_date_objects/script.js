let x;
let d = new Date();

// Date methods

x = d.toString();
console.log(x);

x = d.getTime();
console.log(x);

x = d.valueOf();
console.log(x);

x = d.getFullYear();
console.log(x);

x = d.getMonth();
console.log(x);

x = d.getMonth() + 1;
console.log(x);

x = d.getDate();
console.log(x);

x = d.getDay();
console.log(x);

x = d.getHours();
console.log(x);

x = d.getMinutes();
console.log(x);

x = d.getSeconds();
console.log(x);

x = d.getMilliseconds();
console.log(x);

x = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
console.log(x);
// Intl.DateTimeFormat API (locale specific)
x = Intl.DateTimeFormat('en-US').format(d);
console.log(x);

x = Intl.DateTimeFormat('en-GB').format(d);
console.log(x);

x = Intl.DateTimeFormat('default').format(d);
console.log(x);

x = Intl.DateTimeFormat('default', { month: 'long' }).format(d);
console.log(x);

x = d.toLocaleString('default', { month: 'short' });
console.log(x);

x = d.toLocaleString('default', {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
  timeZone: 'America/New_York',
});

console.log(x);