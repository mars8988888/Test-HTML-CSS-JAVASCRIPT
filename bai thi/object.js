function hocsinh( name, _class, age){
    this.Name = name;
    this.Class = _class;
    this.Age = age;
    this.full_info = function(){
        return (this.Name + " " + this.Class + " " + this.Age);
    }
}

var hocsinh1 = new hocsinh("nguyen van anh", "12A2", "17");
var hocsinh2 = new hocsinh("nguyen van van", "12A4", "18");
var full = hocsinh2.Class;

alert(full);