class UniverseGenerator{
    constructor(x,y,z, rootX, rootY, rootZ, particles) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.particles = particles;
        let universe = this.createUniverseWithCells(x, y, z);
        universe[rootX][rootY][rootZ].particles = particles;
        this.addNeighbours(universe);
        return this.getUniverseAsOneDimensionalArray(universe);
    }

    getUniverseAsOneDimensionalArray(universe){
        let a = [];
        for(let i = 0; i < this.x; i++){
            for(let j = 0; j < this.y; j++){
                for(let k = 0; k < this.z; k++){
                    a.push(universe[i][j][k]);
                }
            }
        }
        return a;
    }

    createUniverseWithCells(){
        let universe = [];
        for(let i = 0; i < this.x; i++){
            universe[i] = [];
            for(let j = 0; j < this.y; j++){
                universe[i][j] = [];
                for(let k = 0; k < this.z; k++){
                    universe[i][j][k] = new Cell(i,j,k);
                }
            }
        }
        return universe;
    }

    addNeighbours(universe){
        for(let i = 0; i < this.x; i++){
            for(let j = 0; j < this.y; j++){
                for(let k = 0; k < this.z; k++){
                    let neighbours = this.findNeighbours(i,j,k, universe);
                    universe[i][j][k].neighbours = neighbours;
                }
            }
        }
    }

    findNeighbours(x, y, z, universe){
        let neighbours = [];
        for(let i = -1; i <= 1; i++){
            for(let j = -1; j <=1; j++){
                for(let k = -1; k <=1; k++){
                  if((x+i) < this.x && (x+i) >= 0 && (y+j)<this.y && (y+j) >= 0 &&
                        (z+k) < this.z && (z+k) >= 0){
                        neighbours.push(universe[x + i][y + j][z + k]);
                    }
                }
            }
        }
        return neighbours;
    }
}