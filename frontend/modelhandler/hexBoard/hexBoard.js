class HexBoard {
    nodes;
    pointSizeSmall;
    pointSizeLarge;
    selectedNode = null;
    constructor(points, pointSizeSmall, pointSizeLarge) {
        this.pointSizeLarge = pointSizeLarge;
        this.pointSizeSmall = pointSizeSmall;
        this.nodes = new Array();
        for(let count = 0; count < points.length; count++){
            this.nodes.push(new Node(points[count], pointSizeSmall, pointSizeLarge, count));
        }
        //Set Neightbours
        this.nodes[0].neighbours = new Array(this.nodes[2], this.nodes[3]);
        this.nodes[1].neighbours = new Array(this.nodes[2], this.nodes[5]);
        this.nodes[2].neighbours = new Array(this.nodes[0], this.nodes[1], this.nodes[3], this.nodes[5], this.nodes[6]);
        this.nodes[3].neighbours = new Array(this.nodes[0], this.nodes[2], this.nodes[4], this.nodes[6], this.nodes[7]);
        this.nodes[4].neighbours = new Array(this.nodes[3], this.nodes[7]);
        this.nodes[5].neighbours = new Array(this.nodes[1], this.nodes[2], this.nodes[6], this.nodes[8], this.nodes[9]);
        this.nodes[6].neighbours = new Array(this.nodes[2], this.nodes[3], this.nodes[5], this.nodes[7], this.nodes[9],this.nodes[10]);
        this.nodes[7].neighbours = new Array(this.nodes[3], this.nodes[4], this.nodes[6], this.nodes[10], this.nodes[11]);
        this.nodes[8].neighbours = new Array(this.nodes[5], this.nodes[9]);
        this.nodes[9].neighbours = new Array(this.nodes[5], this.nodes[6], this.nodes[8], this.nodes[10], this.nodes[12]);
        this.nodes[10].neighbours = new Array(this.nodes[6], this.nodes[7], this.nodes[9], this.nodes[11], this.nodes[12]);
        this.nodes[11].neighbours = new Array(this.nodes[7], this.nodes[10]);
        this.nodes[12].neighbours = new Array(this.nodes[9], this.nodes[10]);
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
    constructor(coordinate, pointSizeSmall, pointSizeLarge, index){
        this.pointSizeLarge = pointSizeLarge;
        this.pointSizeSmall = pointSizeSmall;
        this.coordinate = coordinate;
        this.index = index;
        this.status = "unselected";
        this.activated = "false";
    }
}