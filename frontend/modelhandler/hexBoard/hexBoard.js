class HexBoard {
    nodes;
    pointSizeSmall;
    pointSizeLarge;
    selectedNode = null;

    names = ["Endurance", "Spirit", "Air", "Earth", "Unity", "Sun", "Wildcard", "Moon", "Singularity", "Fire", "Water", "Blood", "Change"];

    formTriangles(){
        //Go over each node
        for(let nodeIndex = 0; nodeIndex < this.nodes.length; nodeIndex++){
            //if I am not a middle link
            if(this.nodes[nodeIndex].links.length == 1){
                //If my middle linked nodes linked node my neighbours, add them to my linked nodes
                if(this.nodes[this.nodes[nodeIndex].links[0]].links.length == 2){
                    if(this.nodes[nodeIndex].neighbours.includes(this.nodes[this.nodes[nodeIndex].links[0]].links[0])){
                        this.nodes[nodeIndex].links.push(this.nodes[this.nodes[nodeIndex].links[0]].links[0]);
                    }
                    if(this.nodes[nodeIndex].neighbours.includes(this.nodes[this.nodes[nodeIndex].links[0]].links[1])){
                        this.nodes[nodeIndex].links.push(this.nodes[this.nodes[nodeIndex].links[0]].links[1]);
                    }
                }
            }
        }
    }

    constructor(points, pointSizeSmall, pointSizeLarge) {
        this.pointSizeLarge = pointSizeLarge;
        this.pointSizeSmall = pointSizeSmall;
        this.nodes = new Array();
        for(let count = 0; count < points.length; count++){
            this.nodes.push(new Node(points[count], pointSizeSmall, pointSizeLarge, count, this.names[count]));
        }
        //Set Neightbours
        this.nodes[0].neighbours = new Array(2, 3);
        this.nodes[1].neighbours = new Array(2, 5);
        this.nodes[2].neighbours = new Array(0, 1, 3, 5, 6);
        this.nodes[3].neighbours = new Array(0, 2, 4, 6, 7);
        this.nodes[4].neighbours = new Array(3, 7);
        this.nodes[5].neighbours = new Array(1, 2, 6, 8, 9);
        this.nodes[6].neighbours = new Array(2, 3, 5, 7, 9, 10);
        this.nodes[7].neighbours = new Array(3, 4, 6, 10, 11);
        this.nodes[8].neighbours = new Array(5, 9);
        this.nodes[9].neighbours = new Array(5, 6, 8, 10, 12);
        this.nodes[10].neighbours = new Array(6, 7, 9, 11, 12);
        this.nodes[11].neighbours = new Array(7, 10);
        this.nodes[12].neighbours = new Array(9, 10);
    }
}

class Node {
    coordinate;
    neighbours;
    links = new Array();
    status;
    hovered;
    activated;
    name;
    pointSizeSmall;
    pointSizeLarge;
    index;
    constructor(coordinate, pointSizeSmall, pointSizeLarge, index, name){
        this.pointSizeLarge = pointSizeLarge;
        this.pointSizeSmall = pointSizeSmall;
        this.coordinate = coordinate;
        this.index = index;
        this.status = "unselected";
        this.activated = "false";
        this.name = name;
    }
}
