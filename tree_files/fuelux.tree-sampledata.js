var DataSourceTree = function(options) {
	this._data 	= options.data;
	this._delay = options.delay;
}

DataSourceTree.prototype.data = function(options, callback) {
	var self = this;
	var $data = null;

	if(!("name" in options) && !("type" in options)){
		$data = this._data;//the root tree
		callback({ data: $data });
		return;
	}
	else if("type" in options && options.type == "folder") {
		if("additionalParameters" in options && "children" in options.additionalParameters)
			$data = options.additionalParameters.children;
		else $data = {}//no data
	}
	
	if($data != null)//this setTimeout is only for mimicking some random delay
		setTimeout(function(){callback({ data: $data });} , parseInt(Math.random() * 500) + 200);

	//we have used static data here
	//but you can retrieve your data dynamically from a server using ajax call
	//checkout examples/treeview.html and examples/treeview.js for more info
};

var tree_data = {
	'for-sale' : {name: 'For Sale', type: 'folder'}	,
	'vehicles' : {name: 'Vehicles', type: 'folder'}	,
	'rentals' : {name: 'Rentals', type: 'folder'}	,
	'real-estate' : {name: 'Real Estate', type: 'folder'}	,
	'pets' : {name: 'Pets', type: 'folder'}	,
	'tickets' : {name: 'Tickets', type: 'item'}	,
	'services' : {name: 'Services', type: 'item'}	,
	'personals' : {name: 'Personals', type: 'item'}
}
tree_data['for-sale']['additionalParameters'] = {
	'children' : {
		'appliances' : {name: 'Appliances', type: 'item'},
		'arts-crafts' : {name: 'Arts & Crafts', type: 'item'},
		'clothing' : {name: 'Clothing', type: 'item'},
		'computers' : {name: 'Computers', type: 'item'},
		'jewelry' : {name: 'Jewelry', type: 'item'},
		'office-business' : {name: 'Office & Business', type: 'item'},
		'sports-fitness' : {name: 'Sports & Fitness', type: 'item'}
	}
}
tree_data['vehicles']['additionalParameters'] = {
	'children' : {
		'cars' : {name: 'Cars', type: 'folder'},
		'motorcycles' : {name: 'Motorcycles', type: 'item'},
		'boats' : {name: 'Boats', type: 'item'}
	}
}
tree_data['vehicles']['additionalParameters']['children']['cars']['additionalParameters'] = {
	'children' : {
		'classics' : {name: 'Classics', type: 'item'},
		'convertibles' : {name: 'Convertibles', type: 'item'},
		'coupes' : {name: 'Coupes', type: 'item'},
		'hatchbacks' : {name: 'Hatchbacks', type: 'item'},
		'hybrids' : {name: 'Hybrids', type: 'item'},
		'suvs' : {name: 'SUVs', type: 'item'},
		'sedans' : {name: 'Sedans', type: 'item'},
		'trucks' : {name: 'Trucks', type: 'item'}
	}
}

tree_data['rentals']['additionalParameters'] = {
	'children' : {
		'apartments-rentals' : {name: 'Apartments', type: 'item'},
		'office-space-rentals' : {name: 'Office Space', type: 'item'},
		'vacation-rentals' : {name: 'Vacation Rentals', type: 'item'}
	}
}
tree_data['real-estate']['additionalParameters'] = {
	'children' : {
		'apartments' : {name: 'Apartments', type: 'item'},
		'villas' : {name: 'Villas', type: 'item'},
		'plots' : {name: 'Plots', type: 'item'}
	}
}
tree_data['pets']['additionalParameters'] = {
	'children' : {
		'cats' : {name: 'Cats', type: 'item'},
		'dogs' : {name: 'Dogs', type: 'item'},
		'horses' : {name: 'Horses', type: 'item'},
		'reptiles' : {name: 'Reptiles', type: 'item'}
	}
}

var treeDataSource = new DataSourceTree({data: tree_data});











var tree_data_2 = {
	'pictures'  : {name: '小明(2)',      type: 'folder',    'icon-class':''     }	,
	'music'     : {name: '黑珍珠(2)',         type: 'folder',    'icon-class':''  }	, 
	'readme'    : {name: '黑子', type: 'item'},
	'manual'    : {name: '萝莉', type: 'item'}
}
tree_data_2['music']['additionalParameters'] = {
	'children' : [
		{name: '李磊', type: 'item'},
		{name: '韩梅梅', type: 'item'}
	 
	]
}
 
tree_data_2['pictures']['additionalParameters'] = {
	'children' : {
		'wallpapers' : {name: '小花(1)', type: 'folder', 'icon-class':'pink'},
		'camera' : {name: '小白(2)', type: 'folder', 'icon-class':'pink'}
	}
}
tree_data_2['pictures']['additionalParameters']['children']['wallpapers']['additionalParameters'] = {
	'children' : [
		{name: '小李', type: 'item'}
	 
	]
}
tree_data_2['pictures']['additionalParameters']['children']['camera']['additionalParameters'] = {
	'children' : [
		{name: ' 瑜伽', type: 'item'},
		{name: ' 钉钉', type: 'item'}
	 
	]
}

 
var treeDataSource2 = new DataSourceTree({data: tree_data_2});