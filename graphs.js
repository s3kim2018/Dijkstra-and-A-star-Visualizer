/* @arthor: Brian Kim 
Javascript Driver for Graph Visualization. **/
var heading = document.querySelector(".board .menugrid h2");
var small = document.querySelector(".board #small");
var medium = document.querySelector(".board #med");
var board = document.querySelector(".board");
var menugrid = document.querySelector(".board .menugrid");
var needreset = false; 
var nodes = new Map();
var idmap = new Map();
var generated;
var startingnode;
var endingnode;


var main = function() {
    heading.style.paddingTop = "70px";
    small.style.marginTop = "60px";
    medium.style.marginTop = "60px";
    board.style.background = 'url("img/bridges.png")';
    small.addEventListener("click", generatesmall);
    medium.addEventListener("click", generatemedium);
    checkdisplay(); 
}

function checkdisplay() {
    var x = window.matchMedia("(max-width: 940px)")
    changedisplay(x); 
    setTimeout(checkdisplay, 1000);
}

function changedisplay(x) {
    if (x.matches) { // If media query matches
        board.style.opacity = 0; 
        document.querySelector(".menucontainer").style.opacity = 0; 
        document.querySelector(".phoneannounce").innerHTML = "Sorry, Animations arn't optimized for small devices. <br> Switch to a laptop for the best experience.";
    } else {
        board.style.opacity = 1; 
        document.querySelector(".menucontainer").style.opacity = 1; 
        document.querySelector(".phoneannounce").innerHTML = "";

    }
}
     

var generatemedium = function() {
    clear();
    generated = "medium";
    board.style.display = "flex"; 
    board.style.flexWrap = "wrap";
    board.style.alignContent = "flex-start";
    for (let j = 0; j < 60; j++) {
        for (let i = 0; i < 100; i++) {
            var sq = document.createElement("sq");   // Create a <button> element
            sq.id = i.toString() + "-" + j.toString(); 
            sq.classList.add("square");
            sq.style.width = "10px";
            sq.style.height = "10px";
            sq.style.margin = '0'; 
            sq.style.padding = '0';
            sq.style.backgroundColor = "white";
            sq.style.outline = "solid #87CEFA 0.3px";
            board.appendChild(sq);
            let node = null;
            let up = j - 1; 
            let right = i + 1; 
            let left = i - 1; 
            let down = j + 1; 
            if (i == 0 && j == 0) {
                node = new Graph(i.toString() + "-" + j.toString(), [right.toString() + "-" + j.toString(), i.toString() + "-" + down.toString(), right.toString() + "-" + down.toString()], 1);
            } else if (i == 0 && j == 59) {
                node = new Graph(i.toString() + "-" + j.toString(), [i.toString() + "-" + up.toString(), right.toString() + "-" + j.toString(), right.toString() + "-" + up.toString()], 1);
            } else if (i == 99 && j == 0) {
                node = new Graph(i.toString() + "-" + j.toString(), [i.toString() + "-" + down.toString(), left.toString() + "-" + j.toString(), left.toString() + "-" + down.toString()], 1);
            } else if (i == 99 && j == 59) {
                node = new Graph(i.toString() + "-" + j.toString(), [i.toString() + "-" + up.toString(), left.toString() + "-" + j.toString(), left.toString() + "-" + up.toString()], 1);
            } else if (i == 0) {
                node = new Graph(i.toString() + "-" + j.toString(), [i.toString() + "-" + up.toString(), right.toString() + "-" + j.toString(), i.toString() + "-" + down.toString(), right.toString() + "-" + up.toString(), right.toString() + "-" + down.toString()], 1);
            } else if (i == 99) {
                node = new Graph(i.toString() + "-" + j.toString(), [i.toString() + "-" + up.toString(), i.toString() + "-" + down.toString(), left.toString() + "-" + j.toString(), left.toString() + "-" + up.toString(), left.toString() + "-" + down.toString()], 1);
            } else if (j == 0) {
                node = new Graph(i.toString() + "-" + j.toString(), [right.toString() + "-" + j.toString(), i.toString() + "-" + down.toString(), left.toString() + "-" + j.toString(), left.toString() + "-" + down.toString(), right.toString() + "-" + down.toString()], 1);
            } else if (j == 59) {
                node = new Graph(i.toString() + "-" + j.toString(), [i.toString() + "-" + up.toString(), right.toString() + "-" + j.toString(), left.toString() + "-" + j.toString(),  right.toString() + "-" + up.toString(), left.toString() + "-" + up.toString()], 1);
            } else {
                node = new Graph(i.toString() + "-" + j.toString(), [i.toString() + "-" + up.toString(), right.toString() + "-" + j.toString(), i.toString() + "-" + down.toString(), left.toString() + "-" + j.toString(), right.toString() + "-" + up.toString(), right.toString() + "-" + down.toString(), left.toString() + "-" + up.toString(), left.toString() + "-" + down.toString()], 1);
            }
            nodes.set(i.toString() + "-" + j.toString(), node);
            let element = document.getElementById(i.toString() + "-" + j.toString());
            idmap.set(element, node);
            mark = 1; 
            document.querySelector("h3").innerHTML = "Select Starting Node";
            element.addEventListener("click", function() {clickevent(i.toString() + "-" + j.toString()) });
        }
    }
    board.style.border = "solid #87CEFA 1px";
}

var generatesmall = function() {
    clear(); 
    generated = "small";
    board.style.display = "flex"; 
    board.style.flexWrap = "wrap";
    board.style.justifyContent = "flex-end";
    for (let j = 0; j < 30; j++) {
        for (let i = 0; i < 50; i++) {
            var sq = document.createElement("sq");   // Create a <button> element
            sq.id = i.toString() + "-" + j.toString(); 
            sq.classList.add("square");
            sq.style.width = "20px";
            sq.style.height = "20px";
            sq.style.margin = '0'; 
            sq.style.padding = '0';
            sq.style.backgroundColor = "white";
            sq.style.outline = "solid #87CEFA 0.3px";
            board.appendChild(sq);
            let node = null;
            let up = j - 1; 
            let right = i + 1; 
            let left = i - 1; 
            let down = j + 1; 
            if (i == 0 && j == 0) {
                node = new Graph(i.toString() + "-" + j.toString(), [right.toString() + "-" + j.toString(), i.toString() + "-" + down.toString(), right.toString() + "-" + down.toString()], 1);
            } else if (i == 0 && j == 29) {
                node = new Graph(i.toString() + "-" + j.toString(), [i.toString() + "-" + up.toString(), right.toString() + "-" + j.toString(), right.toString() + "-" + up.toString()], 1);
            } else if (i == 49 && j == 0) {
                node = new Graph(i.toString() + "-" + j.toString(), [i.toString() + "-" + down.toString(), left.toString() + "-" + j.toString(), left.toString() + "-" + down.toString()], 1);
            } else if (i == 49 && j == 29) {
                node = new Graph(i.toString() + "-" + j.toString(), [i.toString() + "-" + up.toString(), left.toString() + "-" + j.toString(), left.toString() + "-" + up.toString()], 1);
            } else if (i == 0) {
                node = new Graph(i.toString() + "-" + j.toString(), [i.toString() + "-" + up.toString(), right.toString() + "-" + j.toString(), i.toString() + "-" + down.toString(), right.toString() + "-" + up.toString(), right.toString() + "-" + down.toString()], 1);
            } else if (i == 49) {
                node = new Graph(i.toString() + "-" + j.toString(), [i.toString() + "-" + up.toString(), i.toString() + "-" + down.toString(), left.toString() + "-" + j.toString(), left.toString() + "-" + up.toString(), left.toString() + "-" + down.toString()], 1);
            } else if (j == 0) {
                node = new Graph(i.toString() + "-" + j.toString(), [right.toString() + "-" + j.toString(), i.toString() + "-" + down.toString(), left.toString() + "-" + j.toString(), left.toString() + "-" + down.toString(), right.toString() + "-" + down.toString()], 1);
            } else if (j == 29) {
                node = new Graph(i.toString() + "-" + j.toString(), [i.toString() + "-" + up.toString(), right.toString() + "-" + j.toString(), left.toString() + "-" + j.toString(),  right.toString() + "-" + up.toString(), left.toString() + "-" + up.toString()], 1);
            } else {
                node = new Graph(i.toString() + "-" + j.toString(), [i.toString() + "-" + up.toString(), right.toString() + "-" + j.toString(), i.toString() + "-" + down.toString(), left.toString() + "-" + j.toString(), right.toString() + "-" + up.toString(), right.toString() + "-" + down.toString(), left.toString() + "-" + up.toString(), left.toString() + "-" + down.toString()], 1);
            }
            nodes.set(i.toString() + "-" + j.toString(), node);
            let element = document.getElementById(i.toString() + "-" + j.toString());
            idmap.set(element, node);
            mark = 1; 
            document.querySelector("h3").innerHTML = "Select Starting Node";
            element.addEventListener("click", function() {clickevent(i.toString() + "-" + j.toString()) });
        }
    }
    board.style.border = "solid #87CEFA 1px";
}


var mark; 
var clickevent = function(id) {
    console.log(id);
    var elem = document.getElementById(id);
    if (mark == 1) {
        elem.style.backgroundColor = "lightgreen";
        startingnode = nodes.get(id);
        document.querySelector("h3").innerHTML = "Select Ending Node";
        mark++; 
    } else if (mark == 2) {
        if (startingnode == nodes.get(id)) {
            return;
        } else {
            elem.style.backgroundColor = "brown";
            endingnode = nodes.get(id);
            document.querySelector("h3").innerHTML = '<span id = "c1">Draw Walls </span> (Drag)   <span id = "c2">Add Weights</span> (Left Click)';
            document.querySelector("#c1").style.color = "grey"; 
            document.querySelector("#c2").style.color = "brown"; 
            removelisteners(); 
            addwalllisteners();
            var style1 = document.createElement("style");
            var style2 = document.createElement("style");

            style1.appendChild(
                document.createTextNode(".dropdown:hover .dropdown-content { display: block; }")
            );
            style2.appendChild(
                document.createTextNode(".dropdown:hover .dropbtn { cursor: pointer; color: #303030; }")
            );
            document.querySelector("head").appendChild(style1);
            document.querySelector("head").appendChild(style2);

            document.querySelector(".dropbtn").innerHTML = "Algorithms ▽"
                
            document.querySelector(".menucontainer .dropdown .dropdown-content #dfs").addEventListener("click", function() {
                if (needreset == false) {
                    document.querySelector(".dropbtn").innerHTML = "Depth First Search ▽";
                    document.querySelector(".runbutton").innerHTML = "Run Algorithm";
                    var button = document.querySelector(".menucontainer .runbutton");
                    var old_element = button
                    var new_element = old_element.cloneNode(true);
                    old_element.parentNode.replaceChild(new_element, old_element);                
                    document.querySelector(".runbutton").addEventListener("click", function() {
                        run("dfs");
                    });
                }
            });
            document.querySelector(".menucontainer .dropdown .dropdown-content #bfs").addEventListener("click", function() {
                if (needreset == false) {
                    document.querySelector(".dropbtn").innerHTML = "Breadth First Search ▽";
                    document.querySelector(".runbutton").innerHTML = "Run Algorithm";
                    var button = document.querySelector(".menucontainer .runbutton");
                    var old_element = button
                    var new_element = old_element.cloneNode(true);
                    old_element.parentNode.replaceChild(new_element, old_element);
                    document.querySelector(".runbutton").addEventListener("click", function() {
                        run("bfs");
                    });
                }
            });
            document.querySelector(".menucontainer .dropdown .dropdown-content #dijkstra").addEventListener("click", function() {
                if (needreset == false) {
                    document.querySelector(".dropbtn").innerHTML = "Dijkstras ▽";
                    document.querySelector(".runbutton").innerHTML = "Run Algorithm";
                    var button = document.querySelector(".menucontainer .runbutton");
                    var old_element = button
                    var new_element = old_element.cloneNode(true);
                    old_element.parentNode.replaceChild(new_element, old_element);
                    document.querySelector(".runbutton").addEventListener("click", function() {
                        run("dijkstras");
                    });
                }
            });
            document.querySelector(".menucontainer .dropdown .dropdown-content #astar").addEventListener("click", function() {
                if (needreset == false) {
                    document.querySelector(".dropbtn").innerHTML = "A-Star ▽";
                    document.querySelector(".runbutton").innerHTML = "Run Algorithm!";
                    var button = document.querySelector(".menucontainer .runbutton");
                    var old_element = button
                    var new_element = old_element.cloneNode(true);
                    old_element.parentNode.replaceChild(new_element, old_element);
                    document.querySelector(".runbutton").addEventListener("click", function() {
                        run("astar");
                    });
                }
            });
            document.querySelector(".menucontainer .dropdown .dropdown-content #kruskal").addEventListener("click", function() {
                if (needreset == false) {
                    document.querySelector(".dropbtn").innerHTML = "Kruskal MST ▽";
                    document.querySelector(".runbutton").innerHTML = "Run Algorithm!";
                    var button = document.querySelector(".menucontainer .runbutton");
                    var old_element = button
                    var new_element = old_element.cloneNode(true);
                    old_element.parentNode.replaceChild(new_element, old_element);
                    document.querySelector(".runbutton").addEventListener("click", function() {
                        run("kruskal");
                    });
                }
            });
            mark = 0;
        }
    }
}

var removelisteners = function() {
    var squares = document.getElementsByClassName("square");
    for (let i = 0; i < squares.length; i++) {
        var old_element = squares[i];
        var new_element = old_element.cloneNode(true);
        var pastnode = idmap.get(old_element);
        idmap.delete(old_element);
        idmap.set(new_element, pastnode);
        old_element.parentNode.replaceChild(new_element, old_element);
    }
}



var addwalllisteners = function() { 
    var squares = document.getElementsByClassName("square");
    for (let i = 0; i < squares.length; i++) {
        let elem = squares[i];

        elem.addEventListener("mousedown", function(event) {
            if (event.button == 0) {
                drawwalls(elem, 1);
            }
        });
        elem.addEventListener("mousemove", function() {
            drawwalls(elem, 2);
        });
        elem.addEventListener("mouseup", function() {
            drawwalls(elem, 3);
        });
        elem.addEventListener("touchstart", function(event) {
            if (event.button == 0) {
                drawwalls(elem, 1);
            }
        });
        elem.addEventListener("touchmove", function() {
            drawwalls(elem, 2);
        });
        elem.addEventListener("touchstart", function() {
            drawwalls(elem, 3);
        });
        elem.addEventListener("contextmenu", function(){
            addweights(elem);
        });
    }
}

var dragging = false; 
var drawwalls = function(elem, state) {
    var node = idmap.get(elem);
    if (state == 1) {
        if (node != startingnode && node != endingnode) {
            dragging = true; 
            nodes.visited = true; 
            nodes.delete(elem.id);
            idmap.delete(elem);
            nodes.set(elem.id, node)
            idmap.set(elem, node);
            elem.style.backgroundColor = "grey";
        }
    } else if (state == 2) {
        if (dragging == false) {
            return;
        } else {
            if (node != startingnode && node != endingnode) {
                node.visited = true; 
                elem.style.backgroundColor = "grey";
                nodes.delete(elem.id);
                idmap.delete(elem);
                nodes.set(elem.id, node)
                idmap.set(elem, node);
            }
        }
    } else if (state == 3) {
        if (dragging == false) {
            return;
        } else {
            dragging = false;
            if (node != startingnode && node != endingnode) {
                node.visited = true; 
                elem.style.backgroundColor = "grey";
                nodes.delete(elem.id);
                idmap.delete(elem);
                nodes.set(elem.id, node)
                idmap.set(elem, node);
            }
        }
    }
}

var addweights = function(elem) {
    var node = idmap.get(elem);
    if (node != startingnode && node != endingnode) {
        node.weight = 5;
        elem.style.backgroundColor = "pink";
        nodes.delete(elem.id);
        idmap.delete(elem);
        nodes.set(elem.id, node)
        idmap.set(elem, node);
    }

}

var clear = function() {
    heading.style.margin = "0";
    small.style.margin = "0";
    medium.style.margin = "0";

    small.removeEventListener("click", generatesmall);
    medium.removeEventListener("click", generatemedium);

    board.style.removeProperty("background");
    board.style.backgroundColor = "white"; 
    heading.innerHTML = "";
    small.innerHTML = "";
    medium.innerHTML = "";
    small.classList.remove("button");
    medium.classList.remove("button");
    menugrid.style.width = "0px"; 
    menugrid.style.height = "0px"; 
    menugrid.style.margin = "0";


}

function run(type) {
    if (type == "dfs") {
        needreset = true; 
        endingnode.visited = false; 
        removelisteners();
        var button = document.querySelector(".menucontainer .runbutton");
        var old_element = button
        var new_element = old_element.cloneNode(true);
        old_element.parentNode.replaceChild(new_element, old_element);
        dfs(startingnode);
        animdfs(); 
    } else if (type == "dijkstras") {
        needreset = true; 
        removelisteners(); 
        var button = document.querySelector(".menucontainer .runbutton");
        var old_element = button
        var new_element = old_element.cloneNode(true);
        old_element.parentNode.replaceChild(new_element, old_element);
        dijkstra(startingnode);
        animdijkstra(); 
    } else if (type == "bfs") {
        needreset = true; 
        removelisteners(); 
        var button = document.querySelector(".menucontainer .runbutton");
        var old_element = button
        var new_element = old_element.cloneNode(true);
        old_element.parentNode.replaceChild(new_element, old_element);
        bfs(startingnode);
        animbfs();
    } else if (type == "astar") {
        needreset = true; 
        var button = document.querySelector(".menucontainer .runbutton");
        var old_element = button
        var new_element = old_element.cloneNode(true);
        old_element.parentNode.replaceChild(new_element, old_element);
        astar(startingnode);
        animateastar(); 
    } else if (type == "kruskal") {
        needreset = true; 
        var button = document.querySelector(".menucontainer .runbutton");
        var old_element = button
        var new_element = old_element.cloneNode(true);
        old_element.parentNode.replaceChild(new_element, old_element);
        var krusk = new MSTgraph(); 
        krusk.kruskalMST(); 
        kruskalanimate(); 
    }
}

function resetbutton() {
    var button = document.querySelector(".menucontainer .runbutton");
    var old_element = button
    var new_element = old_element.cloneNode(true);
    old_element.parentNode.replaceChild(new_element, old_element);
    button = document.querySelector(".menucontainer .runbutton");
    document.querySelector(".menucontainer .runbutton").innerHTML = "Reset Board";
    if (generated == "small") {
        button.addEventListener("click", resetboardsmall);
    } else if (generated == "medium") {
        button.addEventListener("click", resetboardmedium);
    }
}

function resetboardsmall() {
    for (let j = 0; j < 30; j++) {
        for (let i = 0; i < 50; i++) {
            let id = i.toString() + "-" + j.toString();
            nodes.get(id).visited = false; 
            nodes.get(id).weight = 1; 
            var node = document.getElementById(id);
            if (node.style.boxShadow == "rgb(255, 204, 153) 0px 0px 5px 1.5px inset") {
                node.style.boxShadow = "none";
            } 
            if (node.style.backgroundColor == "gold" || node.style.backgroundColor == "pink") {
                node.style.backgroundColor = "white";
            }
            if (node.style.backgroundColor == "grey") {
                node.style.backgroundColor = "white";
            }
        }
    }
    animate = [];  
    var button = document.querySelector(".menucontainer .runbutton");
    var old_element = button
    var new_element = old_element.cloneNode(true);
    old_element.parentNode.replaceChild(new_element, old_element);
    document.querySelector(".menucontainer .runbutton").innerHTML = "";
    addwalllisteners(); 
    record = true;
    coloryellow = false;  
    astarmap = new Map(); 
    needreset = false; 
}

function resetboardmedium() { 
    for (let j = 0; j < 60; j++) {
        for (let i = 0; i < 100; i++) {
            let id = i.toString() + "-" + j.toString();
            nodes.get(id).visited = false; 
            nodes.get(id).weight = 1; 
            var node = document.getElementById(id);
            if (node.style.boxShadow == "rgb(255, 204, 153) 0px 0px 5px 1.5px inset") {
                node.style.boxShadow = "none";
            } 
            if (node.style.backgroundColor == "gold" || node.style.backgroundColor == "pink") {
                node.style.backgroundColor = "white";
            }
            if (node.style.backgroundColor == "grey") {
                node.style.backgroundColor = "white";
            }
        }
    }
    animate = [];  
    var button = document.querySelector(".menucontainer .runbutton");
    var old_element = button
    var new_element = old_element.cloneNode(true);
    old_element.parentNode.replaceChild(new_element, old_element);
    document.querySelector(".menucontainer .runbutton").innerHTML = "";
    addwalllisteners(); 
    record = true;
    coloryellow = false;
    astarmap = new Map();   
    needreset = false; 
}


var animate = [];
var coloryellow = false; 
var record = true;
async function dfs(node) {
    if (node === endingnode) {
        coloryellow = true; 
        record = false; 
        return;
    }
    node.visited = true; 
    if (node != startingnode && record == true) {
        animate.push(node);
    }
    for (let i = 0; i < node.edges.length; i++) {
        let id = node.edges[i];
        var nextnode = nodes.get(id);
        if (nextnode.visited == false) {
            dfs(nextnode);
        }
    }
}

function bfs(node) {
    var queue = new Array(); 
    queue.push(node); 
    while (queue.length > 0) {
        var node = queue.shift();
        if (node.visited == false) {
            if (node != startingnode && node != endingnode) {
                animate.push(node);
            }
            if (node == endingnode) {
                break;
            } 
            node.visited = true; 
            
            for (let i = 0; i < node.edges.length; i++) {
                let id = node.edges[i];
                var nextnode = nodes.get(id);
                queue.push(nextnode)
            }
            
        }
    }

}

var shortestpath = new Map(); 
function dijkstra(node) {
    var queue = new Array();
    queue.push(node);
    if (generated == "small") {
        for (let j = 0; j < 30; j++) {
            for (let i = 0; i < 50; i++) {
                let id = i.toString() + "-" + j.toString();
                shortestpath.set(id, [Number.MAX_SAFE_INTEGER, ""]);
            }
        }
    } else if (generated == "medium") {
        for (let j = 0; j < 60; j++) {
            for (let i = 0; i < 100; i++) {
                let id = i.toString() + "-" + j.toString();
                shortestpath.set(id, [Number.MAX_SAFE_INTEGER, ""]);
            }
        }
    }
    shortestpath.delete(startingnode.val);
    shortestpath.set(startingnode.val, [1, startingnode.val]);
    while (queue.length > 0) {
        var node = queue.shift();
        if (node.visited == false) {
            if (node == endingnode) {
                record = false; 
            }
            if (record == true && node != startingnode) {
                animate.push(node);
            }
            var mapnode = shortestpath.get(node.val); 
            var pathcost = mapnode[0];
            var thispath = mapnode[1];
            node.visited = true; 
            for (let i = 0; i < node.edges.length; i++) {
                let id = node.edges[i];
                var nextnode = nodes.get(id);
                var visitnode = shortestpath.get(nextnode.val);
                var visitpathcost = visitnode[0];
                var visitpath = visitnode[1];
                if (pathcost + nextnode.weight < visitpathcost) {
                    visitpath = thispath + "," + nextnode.val;
                    shortestpath.delete(nextnode.val);
                    shortestpath.set(nextnode.val, [pathcost + nextnode.weight, visitpath]);
                }
                queue.push(nextnode);
            }
        }
    }
}


async function animdfs() {
    for (let i = 0; i < animate.length; i++) {
        var node = animate[i];
        document.getElementById(node.val).style.boxShadow = "0px 0px 5px 1.5px #fc9 inset";
        await delay(14);
    }
    if (coloryellow == true) {
        for (let i = 0; i < animate.length; i++) {
            var node = animate[i];
            document.getElementById(node.val).style.bosShadow = "none";
            document.getElementById(node.val).style.backgroundColor = "gold";
            await delay(5);
        }
    }
    resetbutton();
}

async function animdijkstra() { 
    for (let i = 0; i < animate.length; i++) {
        var node = animate[i];
        document.getElementById(node.val).style.boxShadow = "0px 0px 5px 1.5px #fc9 inset";
        await delay(6);
    }
    var node = shortestpath.get(endingnode.val);
    var paths = node[1];
    var pathlist = paths.split(",");
    if (pathlist.length > 1) {
        for (let i = 0; i < pathlist.length; i++) {
            if (pathlist[i] != startingnode.val && pathlist[i] != endingnode.val) {
                document.getElementById(pathlist[i]).style.boxShadow = "none";
                document.getElementById(pathlist[i]).style.backgroundColor = "gold";   
            }
            await delay(5);
        }
    }
    resetbutton(); 
}

async function animbfs() {
    for (let i = 0; i < animate.length; i++) {
        var node = animate[i];
        document.getElementById(node.val).style.boxShadow = "0px 0px 5px 1.5px #fc9 inset";
        await delay(6);
    } 
    for (let i = 0; i < animate.length; i++) {
        var node = animate[i];
        document.getElementById(node.val).style.boxShadow = "none";
        document.getElementById(node.val).style.backgroundColor = "gold";
        await delay(3);
    } 
    resetbutton(); 
}

var astarmap = new Map();
var pathfound = false; 
function astar(startingnode) {
    var MinHeap = new Heap(); 
    if (generated == "small") {
        createchunksmall();
    } else {
        createchunkmed(); 
    }
    var startingchunk = astarmap.get(startingnode.val);
    startingchunk.path = startingnode.val; 
    startingchunk.f = startingchunk.heuristic;
    MinHeap.insert(startingchunk)
    while (MinHeap.heap.length >= 2) {
        var chunk = MinHeap.remove();
        var thisnode = chunk.node;
        console.log("The ID chosen is:" + thisnode.val);
        thisnode.visited = true; 
        animate.push(thisnode);
        if (thisnode == endingnode) {
            pathfound = true; 
            return;
        }
        for (let i = 0; i < thisnode.edges.length; i++) {
            let fringechunk = astarmap.get(thisnode.edges[i]);
            let fringenode = fringechunk.node; 
            if (fringenode.visited == false) {
                if (fringechunk.f > fringechunk.heuristic + fringenode.weight + chunk.sourced) {
                    animate.push(fringenode);
                    fringechunk.f = fringechunk.heuristic + fringenode.weight + chunk.sourced;
                    fringechunk.path = chunk.path + "," + fringenode.val; 
                    fringechunk.soured = fringenode.weight + chunk.sourced;
                    if (fringechunk.inserted == false) {
                        MinHeap.insert(fringechunk);
                        fringechunk.inserted = true; 
                    }
                } 
            }

        }
        if (MinHeap.heap.length === 1) {
            console.log("not found");
            return;
        }         
    
    }
    
}

async function animateastar() {
    for (let i = 0; i < animate.length; i++) {
        var node = animate[i];
        document.getElementById(node.val).style.boxShadow = "0px 0px 5px 1.5px #fc9 inset";
        await delay(20);
    }
    if (pathfound == true) {
        var thechunk = astarmap.get(endingnode.val);
        var thispath = thechunk.path;
        var pathlist = thispath.split(",");
        if (pathlist.length > 1) {
            for (let i = 0; i < pathlist.length; i++) {
                if (pathlist[i] != startingnode.val && pathlist[i] != endingnode.val) {
                    document.getElementById(pathlist[i]).style.boxShadow = "none";
                    document.getElementById(pathlist[i]).style.backgroundColor = "gold";   
                }
                await delay(5);
            }
        }
    }
    resetbutton(); 

}

function createchunksmall() {
    let targeti = parseInt(endingnode.val.split("-")[0], 10);
    let targetj = parseInt(endingnode.val.split("-")[1], 10);
    for (let j = 0; j < 30; j++) {
        for (let i = 0; i < 50; i++) {
            var node = nodes.get(i.toString() + "-" + j.toString());
            var subi = i - targeti;
            var subj = j - targetj;
            var heuristic = Math.hypot(subi, subj);
            astarmap.set(i.toString() + "-" + j.toString(), new Chunk(node.weight, heuristic, Number.MAX_SAFE_INTEGER, "", node));
        }
    }
    
}

function createchunkmed() {
    let targeti = parseInt(endingnode.val.split("-")[0], 10);
    let targetj = parseInt(endingnode.val.split("-")[1], 10);
    for (let j = 0; j < 60; j++) {
        for (let i = 0; i < 100; i++) {
            var node = nodes.get(i.toString() + "-" + j.toString());
            var subi = targeti - i;
            var subj = targetj - j;
            var heuristic = Math.hypot(subi, subj);
            astarmap.set(i.toString() + "-" + j.toString(), new Chunk(node.weight, heuristic, Number.MAX_SAFE_INTEGER, "", node));
        }
    }

}

async function delay(delayInms) {
    return new Promise(resolve  => {
      setTimeout(() => {
        resolve(2);
      }, delayInms);
    });
}

/* Class to detect cycles in graph using union find and path compression **/
class edges {
    constructor(src, dest, weight) {
        this.src = src; 
        this.dest = dest;
        this.f = weight; 

    }
}

/* Class to detect cycles in graph using union find and path compression **/
class subset {
    constructor(parent, rank) {
        this.parent = parent;
        this.rank = rank;

    }
}

/* Class to detect cycles in graph using union find and path compression **/
var totlist = []; 
class MSTgraph {
    constructor() {
        this.MSTheap = new Heap(); 
        if (generated == "medium") {
            for (let j = 0; j < 60; j++) {
                for (let i = 0; i < 100; i++) {
                    var node = nodes.get(i.toString() + "-" + j.toString());
                    var elist = []; 
                    if (node.visited == false) {
                        for (let k = 0; k < node.edges.length; k++) {
                            let dest = node.edges[k];
                            if (nodes.get(dest).visited == false && node.visited == false) {
                                let edge = new edges(i.toString() + "-" + j.toString(), dest, nodes.get(dest).weight + node.weight);
                                elist.push(edge);
                                totlist.push(edge);
                            }
                        }
                        node.edgenodes = elist; 
                    }
                }
            }
        } else if (generated == "small") {
            for (let j = 0; j < 30; j++) {
                for (let i = 0; i < 50; i++) {
                    var node = nodes.get(i.toString() + "-" + j.toString());
                    var elist = []; 
                        for (let k = 0; k < node.edges.length; k++) {
                        let dest = node.edges[k]; 
                        if (nodes.get(dest).visited == false && node.visited == false) {
                            let edge = new edges(i.toString() + "-" + j.toString(), dest, nodes.get(dest).weight + node.weight);
                            elist.push(edge);
                            totlist.push(edge);
                        }                        
                    }
                    node.edgenodes = elist; 

                }
            }
            console.log(totlist); 

        }
        for (let i = 0; i < totlist.length; i++) {
            if (totlist[i] != null && totlist[i].dest != null && totlist[i].src != null) {
                this.MSTheap.insert(totlist[i]);
            }
        }

    }
    find(subsets, i, indexes) { //problem
        if (subsets[indexes.get(i)].parent != i) {
            subsets[indexes.get(i)].parent = this.find(subsets, subsets[indexes.get(i)].parent, indexes);
        }
        return subsets[indexes.get(i)].parent;
    }
    union(subsets, x, y, indexes) {
        let xroot = this.find(subsets, x, indexes);
        let yroot = this.find(subsets, y, indexes);
        if (subsets[indexes.get(xroot)].rank < subsets[indexes.get(yroot)].rank) {
            subsets[indexes.get(xroot)].parent = yroot; 
        } else if (subsets[indexes.get(yroot)].rank < subsets[indexes.get(xroot)].rank) {
            subsets[indexes.get(yroot)].parent = xroot; 
        } else {
            subsets[indexes.get(xroot)].parent = yroot; 
            subsets[indexes.get(yroot)].rank++; 
        }
    }
    kruskalMST() {
        let e = 0; 
        var indexes = new Map(); 
        let nodelength = 0; 
        var subsets = new Array(); 
        if (generated == "small") {
            for (let j = 0; j < 30; j++) {
                for (let i = 0; i < 50; i++) {
                    var node = nodes.get(i.toString() + "-" + j.toString());
                    if (node.visited == false) {
                        var sub = new subset(i.toString() + "-" + j.toString(), 0);
                        subsets.push(sub);
                        indexes.set(i.toString() + "-" + j.toString(), nodelength);
                        nodelength++;
                    }
                }
            }
        } else {
            for (let j = 0; j < 60; j++) {
                for (let i = 0; i < 100; i++) {
                    var node = nodes.get(i.toString() + "-" + j.toString());
                    if (node.visited == false) {
                        var sub = new subset(i.toString() + "-" + j.toString(), 0);
                        subsets.push(sub);
                        indexes.set(i.toString() + "-" + j.toString(), nodelength);
                        nodelength++;
                    }
                }
            }

        }
        while (e < nodelength - 1) {
            var next_edge = this.MSTheap.remove(); 
            let x = this.find(subsets, next_edge.src, indexes);
            let y = this.find(subsets, next_edge.dest, indexes);
            if (x != y) {
                e++; 
                var temparray = []; 
                temparray.push(next_edge.src);
                temparray.push(next_edge.dest);
                animate.push(temparray);
                temparray = [];
                this.union(subsets, x, y, indexes);
            }

        }
    }

}

var kruskalanimate = async function() {
    for (let i = 0; i < animate.length; i++) {
        var nodey = animate[i];
        for (let i = 0; i < 2; i++) {
            var node = document.getElementById(nodey[i]);
            var checknode = nodes.get(nodey[i]);
            if (checknode == startingnode || checknode == endingnode) {
                continue; 
            }
            node.style.boxShadow = "0px 0px 5px 1.5px #fc9 inset";
            await delay(0.25);
        }
        await delay(80);
        for (let i = 0; i < 2; i++) {
            var node = document.getElementById(nodey[i]);
            var checknode = nodes.get(nodey[i]);
            if (checknode == startingnode || checknode == endingnode) {
                continue; 
            }
            node.style.boxShadow = "none";
            node.style.backgroundColor = "gold";  
        }
    }
    resetbutton(); 
}


/* Class Designed to store nodes, heuristic, and f value for A* Algorithm **/
class Chunk {
    constructor(sourced, heuristic, f, path, node) {
        this.sourced = sourced;
        this.heuristic = heuristic;
        this.f = f; 
        this.path = path; 
        this.node = node; 
        this.inserted = false; 
        //this.prevchunk = null;
    }
}

class Heap {
    constructor() {
        this.heap = [null];
    }
	
	insert(num) {
		this.heap.push(num);
		if (this.heap.length > 2) {
			let idx = this.heap.length - 1;
			while (this.heap[idx].f < this.heap[Math.floor(idx/2)].f) {
				if (idx >= 1) {
					[this.heap[Math.floor(idx/2)], this.heap[idx]] = [this.heap[idx], this.heap[Math.floor(idx/2)]];
					if (Math.floor(idx/2) > 1) {
						idx = Math.floor(idx/2);
					} else {
						break;
					};
				};
			};
		};
	};
	
	remove() {
		let smallest = this.heap[1];
		if (this.heap.length > 2) {
			this.heap[1] = this.heap[this.heap.length - 1];
			this.heap.splice(this.heap.length - 1);
			if (this.heap.length == 3) {
				if (this.heap[1].f > this.heap[2].f) {
					[this.heap[1], this.heap[2]] = [this.heap[2], this.heap[1]];
				};
				return smallest;
			};
			let i = 1;
			let left = 2 * i;
			let right = 2 * i + 1;
			while (this.heap[left] && this.heap[right] && (this.heap[i].f >= this.heap[left].f || this.heap[i].f >= this.heap[right].f)) {
				if (this.heap[left].f < this.heap[right].f) {
					[this.heap[i], this.heap[left]] = [this.heap[left], this.heap[i]];
					i = 2 * i
				} else {
					[this.heap[i], this.heap[right]] = [this.heap[right], this.heap[i]];
					i = 2 * i + 1;
				};
				left = 2 * i;
				right = 2 * i + 1;
				if (this.heap[left] == undefined || this.heap[right] == undefined) {
					break;
				};
			};
		} else if (this.heap.length == 2) {
			this.heap.splice(1, 1);
		} else {
			return null;
		};
		return smallest;
	};
  
	sort() {
		let result = new Array();
		while (this.heap.length > 1) {
			result.push(this.remove());
		};
		return result;
	};

};


/* A class representing the graphs data structure **/
class Graph {
    constructor(val, edges, weight) {
        this.val = val; 
        this.edges = edges; 
        this.visited = false; 
        this.weight = weight;
        this.edgenodes = null; 
    }

}

main(); 
