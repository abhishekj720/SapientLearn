function Factory(){
    this.createVehicle = function (type) {
        var vehicle;
    }

    function car(){
        this.noOfDoors = 4;
        this.noOfTyres = 4;
        this.window = 6;
        this.engineCC = 200 ;
    }

    function bike(){
        this.engineCC = 150 ;
        this.noOfTyres = 2;

    }
}

var v = new Factory();
v.createVehicle("car")