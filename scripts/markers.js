let locations = [
    {
    name: 'MJ Cave',
    position: [47.517869, 19.036026],
    type: 'scuba',
    priority: 7,
    info:	'<h1>Moln&aacute;r J&aacute;nos Cave</h1>'+
			'<p>Holy shit you can cave dive under a city that is 500km '+
			'from the ocean&excl;&excl;&excl;&excl; <br>'+
			'<a href="https://mjcave.hu/en/">MJ Cave</a></p>'
    }, {
    name: 'Protec Tulum',
    position: [20.216557, -87.460052],
    type: 'instructor',
    priority: 8,
    info:	'<h1>Protec Tulum</h1>'+
            '<p>The best dive training in the world&excl;  <br>'+
            '<a href="http://www.protectulum.com/">Protec</a></p>'
    }, {
    name: 'Giraffe Manor',
    position: [-1.375528, 36.744634],
    type: 'vacation',
    priority: 3,
    info:	'<h1>Giraffe Manor</h1>'+
            '<p>Who doesn&apos;t want to eat breakfast with giraffes&quest;   <br>'+
            '<a href="https://www.thesafaricollection.com/properties/giraffe-manor/">Giraffe Manor</a></p>'
    }, {
	name: 'Aqua Windies Aruba',
	position: [12.544105, -70.057881],
	type: 'scuba',
    priority: 6,
	info:	'<h1>Aqua Windies</h1>'+
			'<p>Nice people, healthy reef, lots of wrecks.  <br>'+
			'<a href="https://www.aquawindies.com/">Aqua Windies</a></p>'
	}, {
	name: 'Truk Lagoon',
	position: [7.441719, 151.838932],
	type: 'scuba',
    priority: 6,
	info:	'<h1>Truk Lagoon</h1>'+
			'<p>More than 60 World War II Japanese war ships and aircraft '+
			'were sunk during Operation Hailstone in February of 1944 and '+
			'now rest peacefully on the floor of Truk Lagoon.  <br>'+
			'<a href="http://dive-truklagoon.com/">Truk Stop Dive Center</a></p>'
	}, {
	name: 'Rotorua',
	position: [-38.334558, 176.386299],
	type: 'activity',
    priority: 4,
	info:	'<h1>Rotorua</h1>'+
			'<p>Lots of interesting outdoor activities including hiking to '+
			'Kerosene Creek a natural waterfall and spring as well as a ' +
			'geothermal spa. <br>'+
			'<a href="https://www.newzealand.com/us/feature/kerosene-creek/">Kerosene Creek</a> <br>'+
			'<a href="https://www.newzealand.com/us/plan/business/hells-gate-geothermal-park-and-mud-bath-spa/">Hell&apos;s Gate Geothermal Reserve and Mud Spa</a></p>'
	}, {
	name: 'Jellyfish lake',
	position: [7.160996, 134.376042],
	type: 'activity',
    priority: 5,
	info:	'<h1>Jellyfish Lake Palau</h1>'+
			'<p>You can snorkel with thousands of harmless jellyfish. <br>'+
			'<img src="https://assets.atlasobscura.com/media/W1siZiIsInVwbG9hZHMvcGxhY2VfaW1hZ2VzLzEyMDBhYmU4NWExMTg3MGQ0Yl8xNDc2NjQxMTYwNl9mYjRiZWZhNDQyX28uanBnIl0sWyJwIiwidGh1bWIiLCIxMjAweD4iXSxbInAiLCJjb252ZXJ0IiwiLXF1YWxpdHkgODEgLWF1dG8tb3JpZW50Il1d/14766411606_fb4befa442_o.jpg" height="100"> <br>'+
			'<a href="https://www.atlasobscura.com/places/jellyfish-lake">Jellyfish Lake</a></p>'
	}, {
	name: 'Blue Lagoon',
	position: [63.880002, -22.449117],
	type: 'activity',
    priority: 6,
	info:	'<h1>Blue Lagoon</h1>'+
			'<p>Discover the waters of the Blue Lagoon. Journey through a '+
			'spa of the volcanic earth. Harmonize with nature. <br>'+
			'<a href="https://www.bluelagoon.com/">Blue Lagoon</a> <p>'
	}, {
	name: '4 Rivers Floating Lodge',
	position: [11.530631, 103.144652],
	type: 'vacation',
    priority: 3,
	info:	'<h1>4 Rivers Floating Lodge</h1>'+
			'<p>Eco-resort floating on the Tatai river in southern Cambodia.<br>'+
			'<a href="https://ecolodges.asia/">4 Rivers Floating Lodge</a> <p>'
	}, {
	name: 'Belize Diving Services',
	position: [17.745198, -88.025134],
	type: 'scuba',
    priority: 7,
	info:	'<h1>Belize Diving Services</h1>'+
			'<p>Only dive operator in Belize that supports tec diving.<br>'+
			'<a href="https://belizedivingservices.com/scuba-diving-training/cave/">Belize Diving Services</a> <p>'
	}, {
	name: 'Turneffe Island Resort',
	position: [17.177787, -87.900472],
	type: 'vacation',
    priority: 5,
	info:	'<h1>Turneffe Island Resort</h1>'+
			'<p>All inclusive island resort with fishing and scuba included packages.<br>'+
			'<a href="https://www.turnefferesort.com/">Turneffe Island Resort</a> <p>'
	}, {
		name: 'Tom Steiner',
		position: [36.034106, 14.262814],
		type: 'instructor',
		priority: 8,
		info:	'<h1>Tom Seteiner/Gozo Technical</h1>'+
				'<p>The best dive training in the world&excl;  <br>'+
				'<a href="https://www.gozotechnicaldiving.com/">Gozo Technical</a></p>'
	}, {
		name: 'La Cueva del Agua',
		position: [37.576017, -1.218154],
		type: 'cave',
		priority: 3,
		info:	'<h1>La Cueva del Agua</h1>'+
				'<p>La Cueva del Agua is one of the major caves of the Spanish mainland, and perhaps the only explored European cenote.  <br>'+
				'<a href="http://divingjaveatech.com/cave-diving/">Diving Javea Tech</a></p>'
	}
];