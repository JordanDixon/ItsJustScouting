var counter1 = new CountUp("counter1", 0, 2305981, 0, 1, {  
  useEasing: true,
  useGrouping: true,
  separator: ',',
  decimal: '.',
  prefix: '',
  suffix: '',
});

var counter2 = new CountUp("counter2", 0, 2101994, 0, 1, {  
  useEasing: true,
  useGrouping: true,
  separator: ',',
  decimal: '.',
  prefix: '',
  suffix: '',
});

var counter3 = new CountUp("counter3", 0, 2080024, 0, 1, {  
  useEasing: true,
  useGrouping: true,
  separator: ',',
  decimal: '.',
  prefix: '',
  suffix: '',
});

var waypoint1 = new Waypoint({
  element: document.getElementById('waypoint1'),
  handler: function(direction) {

    if (direction == "up") {
      counter1.reset();
    } else {
      counter1.start();
    }

  },
  offset: '50%'
});

var waypoint2 = new Waypoint({
  element: document.getElementById('waypoint2'),
  handler: function(direction) {

    if (direction == "up") {
      counter2.reset();
    } else {
      counter2.start();
    }

  },
  offset: '50%'
});

var waypoint3 = new Waypoint({
  element: document.getElementById('waypoint3'),
  handler: function(direction) {

    if (direction == "up") {
      counter3.reset();
    } else {
      counter3.start();
    }

  },
  offset: '50%'
});
